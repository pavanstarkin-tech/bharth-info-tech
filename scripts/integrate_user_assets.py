import os
import shutil
from PIL import Image

downloads_dir = r"C:\Users\shese\Downloads"
out_dir = os.path.join("public", "images")
os.makedirs(out_dir, exist_ok=True)

# 1. Logo
logo_src = os.path.join(downloads_dir, "Bharat Intelli Tech Corporate Logo.png")
logo_dest = os.path.join(out_dir, "bharat-intelli-tech-logo.png")
shutil.copyfile(logo_src, logo_dest)
print("Copied logo to", logo_dest)

# Create white logo variant for dark backgrounds
logo_img = Image.open(logo_dest).convert("RGBA")
white_logo = logo_img.copy()
wpix = white_logo.load()
w, h = white_logo.size
for y in range(h):
    for x in range(w):
        r, g, b, a = wpix[x, y]
        if a > 20:
            # If it's dark text (grey/dark navy), lighten to white
            if r < 120 and g < 120 and b < 140:
                wpix[x, y] = (255, 255, 255, a)
white_logo.save(os.path.join(out_dir, "bharat-intelli-tech-logo-white.png"), "PNG")
print("Saved white logo variant")

# 2. Hero Background: Amaravati_ Golden Waterfront Vision.png
hero_src = os.path.join(downloads_dir, "Amaravati_ Golden Waterfront Vision.png")
hero_img = Image.open(hero_src)
# Save as WebP with high quality
hero_webp = os.path.join(out_dir, "hero-golden-waterfront.webp")
hero_img.save(hero_webp, "WEBP", quality=95)
shutil.copyfile(hero_src, os.path.join(out_dir, "hero-golden-waterfront.png"))
print("Saved hero background:", hero_img.size)

# 3. Services:
# services-web.png -> Website Development
web_src = os.path.join(downloads_dir, "services-web.png")
web_img = Image.open(web_src)
web_img.save(os.path.join(out_dir, "service-website.webp"), "WEBP", quality=95)
shutil.copyfile(web_src, os.path.join(out_dir, "service-website.png"))

# serv-app.png -> Mobile App Development
app_src = os.path.join(downloads_dir, "serv-app.png")
app_img = Image.open(app_src)
app_img.save(os.path.join(out_dir, "service-mobile-app.webp"), "WEBP", quality=95)
shutil.copyfile(app_src, os.path.join(out_dir, "service-mobile-app.png"))

# serv-custom.png -> Custom Business Solutions
custom_src = os.path.join(downloads_dir, "serv-custom.png")
custom_img = Image.open(custom_src)
custom_img.save(os.path.join(out_dir, "service-custom-software.webp"), "WEBP", quality=95)
shutil.copyfile(custom_src, os.path.join(out_dir, "service-custom-software.png"))
print("Saved 3 service images")

# 4. Our Work:
for i in range(1, 5):
    work_src = os.path.join(downloads_dir, f"ourwork ({i}).png")
    work_img = Image.open(work_src)
    work_img.save(os.path.join(out_dir, f"ourwork-{i}.webp"), "WEBP", quality=95)
    shutil.copyfile(work_src, os.path.join(out_dir, f"ourwork-{i}.png"))
print("Saved 4 ourwork mockups")

# 5. About Us: Bharat Intelli Tech Riverside Campus.png
about_src = os.path.join(downloads_dir, "Bharat Intelli Tech Riverside Campus.png")
about_img = Image.open(about_src)
about_img.save(os.path.join(out_dir, "about-riverside-campus.webp"), "WEBP", quality=95)
shutil.copyfile(about_src, os.path.join(out_dir, "about-riverside-campus.png"))
print("Saved about campus:", about_img.size)

# 6. Contact Us: Twilight Riverfront Skyline with Illuminated Bridge.png
contact_src = os.path.join(downloads_dir, "Twilight Riverfront Skyline with Illuminated Bridge.png")
contact_img = Image.open(contact_src)
contact_img.save(os.path.join(out_dir, "contact-twilight-skyline.webp"), "WEBP", quality=95)
shutil.copyfile(contact_src, os.path.join(out_dir, "contact-twilight-skyline.png"))
print("Saved contact skyline:", contact_img.size)

print("All user assets integrated successfully!")
