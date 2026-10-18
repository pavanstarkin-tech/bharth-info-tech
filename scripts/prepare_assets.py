import os
import urllib.request
import io
from PIL import Image

def run():
    out_dir = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
    os.makedirs(out_dir, exist_ok=True)
    ref_dir = os.path.join(os.path.dirname(__file__), '..', 'reference-assets')

    print("--- 1. Processing Brand Logo & Emblem ---")
    wa_path = os.path.join(ref_dir, 'whatsapp-1.jpg')
    ref1_path = os.path.join(ref_dir, 'landing-reference-1.png')
    ref2_path = os.path.join(ref_dir, 'landing-reference-2.png')

    if os.path.exists(ref2_path):
        ref2 = Image.open(ref2_path).convert('RGBA')
        w, h = ref2.size
        # Header logo in ref2 is at (50, 2, 290, 42)
        logo_ref2 = ref2.crop((50, 2, 290, 42))
        lw, lh = logo_ref2.size
        pix = logo_ref2.load()
        for y in range(lh):
            for x in range(lw):
                r, g, b, a = pix[x, y]
                # background is light cream #f8f6f0 / #faf8f2
                if r > 235 and g > 235 and b > 230:
                    pix[x, y] = (255, 255, 255, 0)
        
        # Upscale 3x with LANCZOS for crystal clear high-DPI display
        logo_hi = logo_ref2.resize((lw * 3, lh * 3), Image.Resampling.LANCZOS)
        logo_hi.save(os.path.join(out_dir, 'brand-logo.png'), 'PNG')
        print(f"Saved brand-logo.png ({logo_hi.size})")

        # Create white variant for dark headers/footers
        white_logo = logo_hi.copy()
        wpix = white_logo.load()
        w_w, w_h = white_logo.size
        for y in range(w_h):
            for x in range(w_w):
                r, g, b, a = wpix[x, y]
                if a > 30:
                    # If it's the dark text (grey/dark blue)
                    if r < 100 and g < 100 and b < 100:
                        wpix[x, y] = (255, 255, 255, a)
                    # If it's the blue in the logo, keep vibrant or enhance
        white_logo.save(os.path.join(out_dir, 'brand-logo-white.png'), 'PNG')
        print("Saved brand-logo-white.png")

    if os.path.exists(wa_path):
        wa = Image.open(wa_path)
        # Emblem crop with cyan blocks and 3D B
        emblem = wa.crop((420, 240, 840, 725)).convert('RGBA')
        ew, eh = emblem.size
        epix = emblem.load()
        for y in range(eh):
            for x in range(ew):
                r, g, b, a = epix[x, y]
                mx = max(r, g, b)
                mn = min(r, g, b)
                sat = (mx - mn) / mx if mx > 0 else 0
                if y < 155:
                    if not (sat > 0.35 and b > 140 and g > 100 and r < 80):
                        epix[x, y] = (255, 255, 255, 0)
                else:
                    if (sat < 0.15 and r > 180 and g > 180 and b > 180) or (r > 230 and g > 230 and b > 220):
                        if x < 45 or y > 470 or (x < 120 and y < 160) or (x > 350 and y < 160 and not (sat > 0.35 and b > 140)):
                            epix[x, y] = (255, 255, 255, 0)
        emblem.save(os.path.join(out_dir, 'b-emblem.png'), 'PNG')
        print(f"Saved b-emblem.png ({emblem.size})")

        # Favicon from emblem
        fav = emblem.resize((64, 64), Image.Resampling.LANCZOS)
        fav.save(os.path.join(out_dir, '..', 'favicon.png'), 'PNG')
        print("Saved favicon.png")

    if os.path.exists(ref1_path):
        ref1 = Image.open(ref1_path)
        # Hero artwork (Amaravati bridge, Buddha, futuristic grid)
        hero_art = ref1.crop((380, 40, 836, 375))
        hero_art.save(os.path.join(out_dir, 'hero-art.webp'), 'WEBP', quality=95)
        print(f"Saved hero-art.webp ({hero_art.size})")

        # Full hero background
        full_hero = ref1.crop((0, 40, 836, 375))
        full_hero.save(os.path.join(out_dir, 'hero-bg-ref.webp'), 'WEBP', quality=95)
        print(f"Saved hero-bg-ref.webp ({full_hero.size})")

    print("\n--- 2. Downloading High-Resolution Photography ---")
    headers = {'User-Agent': 'Mozilla/5.0'}
    downloads = {
        'service-website.webp': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
        'service-mobile-app.webp': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85',
        'service-custom-software.webp': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
        'solution-ecommerce.webp': 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=85',
        'solution-enterprise.webp': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',
        'solution-startup.webp': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85',
        'solution-industry.webp': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
        'project-tourism.webp': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85',
        'project-ecommerce.webp': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85',
        'project-real-estate.webp': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85',
        'project-healthcare.webp': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
        'about-team.webp': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
        'amaravati-heritage.webp': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85',
        'testimonial-ravi.webp': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85',
        'testimonial-sneha.webp': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=85',
        'testimonial-mahesh.webp': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85',
    }

    for fname, url in downloads.items():
        target_path = os.path.join(out_dir, fname)
        if os.path.exists(target_path) and os.path.getsize(target_path) > 10000:
            print(f"Already exists: {fname}")
            continue
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=12) as resp:
                data = resp.read()
                img = Image.open(io.BytesIO(data))
                img.save(target_path, 'WEBP', quality=85)
                print(f"Downloaded {fname} ({img.size})")
        except Exception as e:
            print(f"Error for {fname}: {e}")

if __name__ == '__main__':
    run()
