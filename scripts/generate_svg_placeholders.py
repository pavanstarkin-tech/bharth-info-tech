import os

out_dir = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'placeholders')
os.makedirs(out_dir, exist_ok=True)
public_dir = os.path.join(os.path.dirname(__file__), '..', 'public')

def make_svg(width, height, title, label, icon_type='generic', bg_style='light'):
    # Colors
    navy = "#082B59"
    royal = "#0868B2"
    techblue = "#078BCB"
    cyan = "#26B5D8"
    gold = "#DDA43A"
    ivory = "#FAF8F2"
    lightblue = "#EDF6FC"
    border_color = "rgba(8, 43, 89, 0.15)"
    text_color = "#26364B"
    muted_color = "#65748A"

    if bg_style == 'dark':
        bg_fill = f"""
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#051B38"/>
            <stop offset="50%" stop-color="#082B59"/>
            <stop offset="100%" stop-color="#0B3975"/>
        </linearGradient>
        <rect width="{width}" height="{height}" fill="url(#bgGrad)"/>
        """
        grid_stroke = "rgba(38, 181, 216, 0.08)"
        badge_bg = "rgba(7, 139, 203, 0.2)"
        badge_border = "rgba(38, 181, 216, 0.4)"
        badge_text = "#26B5D8"
        main_text = "#FAF8F2"
        sub_text = "#EDF6FC"
        icon_stroke = "#26B5D8"
        icon_accent = "#DDA43A"
    else:
        bg_fill = f"""
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#EDF6FC"/>
            <stop offset="50%" stop-color="#FAF8F2"/>
            <stop offset="100%" stop-color="#E2EEF8"/>
        </linearGradient>
        <rect width="{width}" height="{height}" fill="url(#bgGrad)"/>
        """
        grid_stroke = "rgba(8, 43, 89, 0.05)"
        badge_bg = "rgba(8, 104, 178, 0.08)"
        badge_border = "rgba(8, 104, 178, 0.25)"
        badge_text = "#0868B2"
        main_text = "#082B59"
        sub_text = "#65748A"
        icon_stroke = "#0868B2"
        icon_accent = "#DDA43A"

    # SVG grid pattern
    grid_pattern = f"""
    <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="40" y2="0" stroke="{grid_stroke}" stroke-width="1"/>
            <line x1="0" y1="0" x2="0" y2="40" stroke="{grid_stroke}" stroke-width="1"/>
        </pattern>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#DDA43A"/>
            <stop offset="100%" stop-color="#F59E0B"/>
        </linearGradient>
    </defs>
    <rect width="{width}" height="{height}" fill="url(#grid)"/>
    """

    # Center icon
    cx = width // 2
    cy = (height // 2) - 25

    icon_svg = ""
    if icon_type == 'hero':
        icon_svg = f"""
        <!-- Amaravati River & Stupa Arch Skyline -->
        <g transform="translate({cx - 140}, {cy - 80})">
            <!-- Stupa outline & dome -->
            <path d="M 140 10 C 80 10 30 70 30 130 L 250 130 C 250 70 200 10 140 10 Z" fill="none" stroke="{icon_stroke}" stroke-width="3" stroke-dasharray="6,4"/>
            <circle cx="140" cy="8" r="8" fill="{icon_accent}"/>
            <line x1="140" y1="0" x2="140" y2="25" stroke="{icon_accent}" stroke-width="3"/>
            <!-- Krishna river wave -->
            <path d="M 0 140 Q 70 120 140 140 T 280 140" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <path d="M 10 155 Q 80 135 150 155 T 290 155" fill="none" stroke="{icon_accent}" stroke-width="2" opacity="0.7"/>
            <!-- Tech rays -->
            <line x1="60" y1="40" x2="40" y2="20" stroke="{icon_stroke}" stroke-width="2" opacity="0.6"/>
            <line x1="220" y1="40" x2="240" y2="20" stroke="{icon_stroke}" stroke-width="2" opacity="0.6"/>
            <line x1="140" y1="50" x2="140" y2="120" stroke="{icon_stroke}" stroke-width="1.5" stroke-dasharray="3,3"/>
        </g>
        """
    elif icon_type == 'website':
        icon_svg = f"""
        <g transform="translate({cx - 60}, {cy - 50})">
            <rect x="0" y="0" width="120" height="85" rx="8" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <line x1="0" y1="22" x2="120" y2="22" stroke="{icon_stroke}" stroke-width="2"/>
            <circle cx="12" cy="11" r="3" fill="{icon_accent}"/>
            <circle cx="22" cy="11" r="3" fill="{icon_stroke}"/>
            <circle cx="32" cy="11" r="3" fill="{icon_stroke}"/>
            <!-- wireframe blocks -->
            <rect x="15" y="34" width="40" height="35" rx="4" fill="none" stroke="{icon_stroke}" stroke-width="2"/>
            <line x1="65" y1="38" x2="105" y2="38" stroke="{icon_stroke}" stroke-width="3" stroke-linecap="round"/>
            <line x1="65" y1="48" x2="95" y2="48" stroke="{icon_stroke}" stroke-width="2" stroke-linecap="round"/>
            <line x1="65" y1="58" x2="100" y2="58" stroke="{icon_stroke}" stroke-width="2" stroke-linecap="round"/>
            <rect x="65" y="68" width="30" height="8" rx="2" fill="{icon_accent}"/>
        </g>
        """
    elif icon_type == 'mobile':
        icon_svg = f"""
        <g transform="translate({cx - 35}, {cy - 55})">
            <rect x="0" y="0" width="70" height="110" rx="12" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <circle cx="35" cy="12" r="3" fill="{icon_stroke}"/>
            <line x1="25" y1="98" x2="45" y2="98" stroke="{icon_stroke}" stroke-width="3" stroke-linecap="round"/>
            <rect x="10" y="22" width="50" height="66" rx="4" fill="none" stroke="{icon_accent}" stroke-width="2" stroke-dasharray="4,3"/>
            <!-- App UI cards -->
            <rect x="15" y="28" width="40" height="18" rx="3" fill="none" stroke="{icon_stroke}" stroke-width="1.5"/>
            <rect x="15" y="52" width="18" height="28" rx="3" fill="none" stroke="{icon_stroke}" stroke-width="1.5"/>
            <rect x="37" y="52" width="18" height="28" rx="3" fill="{icon_accent}" opacity="0.3"/>
        </g>
        """
    elif icon_type == 'software':
        icon_svg = f"""
        <g transform="translate({cx - 55}, {cy - 50})">
            <!-- Server / Cloud nodes -->
            <rect x="10" y="0" width="90" height="25" rx="5" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <circle cx="25" cy="12" r="3" fill="{icon_accent}"/>
            <circle cx="35" cy="12" r="3" fill="{icon_stroke}"/>
            <line x1="75" y1="12" x2="85" y2="12" stroke="{icon_stroke}" stroke-width="2"/>
            
            <rect x="10" y="38" width="90" height="25" rx="5" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <circle cx="25" cy="50" r="3" fill="{icon_accent}"/>
            <circle cx="35" cy="50" r="3" fill="{icon_stroke}"/>
            <line x1="75" y1="50" x2="85" y2="50" stroke="{icon_stroke}" stroke-width="2"/>

            <rect x="10" y="76" width="90" height="25" rx="5" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <circle cx="25" cy="88" r="3" fill="{icon_accent}"/>
            <circle cx="35" cy="88" r="3" fill="{icon_stroke}"/>
            <line x1="75" y1="88" x2="85" y2="88" stroke="{icon_stroke}" stroke-width="2"/>
            <!-- Connecting lines -->
            <line x1="55" y1="25" x2="55" y2="38" stroke="{icon_accent}" stroke-width="2" stroke-dasharray="2,2"/>
            <line x1="55" y1="63" x2="55" y2="76" stroke="{icon_accent}" stroke-width="2" stroke-dasharray="2,2"/>
        </g>
        """
    elif icon_type == 'portrait':
        icon_svg = f"""
        <g transform="translate({cx - 45}, {cy - 50})">
            <circle cx="45" cy="35" r="28" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <path d="M 10 95 C 10 65 30 55 45 55 C 60 55 80 65 80 95" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <circle cx="45" cy="35" r="14" fill="{icon_accent}" opacity="0.25"/>
        </g>
        """
    elif icon_type == 'ecommerce':
        icon_svg = f"""
        <g transform="translate({cx - 50}, {cy - 45})">
            <path d="M 10 15 L 25 15 L 45 65 L 85 65 L 95 30 L 30 30" fill="none" stroke="{icon_stroke}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="45" cy="78" r="7" fill="{icon_accent}"/>
            <circle cx="82" cy="78" r="7" fill="{icon_accent}"/>
            <rect x="50" y="40" width="22" height="15" rx="2" fill="none" stroke="{icon_stroke}" stroke-width="2"/>
        </g>
        """
    elif icon_type == 'enterprise':
        icon_svg = f"""
        <g transform="translate({cx - 50}, {cy - 50})">
            <rect x="10" y="20" width="80" height="70" rx="6" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <line x1="10" y1="40" x2="90" y2="40" stroke="{icon_stroke}" stroke-width="2"/>
            <!-- Chart bars -->
            <rect x="22" y="60" width="10" height="22" rx="2" fill="{icon_stroke}"/>
            <rect x="38" y="50" width="10" height="32" rx="2" fill="{icon_accent}"/>
            <rect x="54" y="45" width="10" height="37" rx="2" fill="{icon_stroke}"/>
            <rect x="70" y="55" width="10" height="27" rx="2" fill="{icon_stroke}" opacity="0.6"/>
            <!-- Shield top -->
            <path d="M 50 5 L 65 15 L 65 25 C 65 33 50 38 50 38 C 50 38 35 33 35 25 L 35 15 Z" fill="{icon_accent}" opacity="0.9"/>
        </g>
        """
    elif icon_type == 'startup':
        icon_svg = f"""
        <g transform="translate({cx - 40}, {cy - 50})">
            <!-- Rocket -->
            <path d="M 40 10 C 25 35 25 65 25 75 L 55 75 C 55 65 55 35 40 10 Z" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <circle cx="40" cy="40" r="7" fill="{icon_accent}"/>
            <!-- Wings -->
            <path d="M 25 55 L 10 70 L 25 72 Z" fill="{icon_stroke}"/>
            <path d="M 55 55 L 70 70 L 55 72 Z" fill="{icon_stroke}"/>
            <!-- Flame -->
            <path d="M 33 75 Q 40 95 40 95 Q 47 75 47 75 Z" fill="{icon_accent}"/>
        </g>
        """
    elif icon_type == 'industry':
        icon_svg = f"""
        <g transform="translate({cx - 50}, {cy - 45})">
            <!-- Factory / Gear -->
            <rect x="15" y="40" width="70" height="45" rx="4" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <!-- Roof sawtooth -->
            <polygon points="15,40 32,25 32,40 50,25 50,40 68,25 68,40 85,40" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <rect x="30" y="55" width="15" height="30" fill="{icon_accent}" opacity="0.4"/>
            <rect x="55" y="55" width="15" height="15" fill="none" stroke="{icon_stroke}" stroke-width="2"/>
        </g>
        """
    elif icon_type == 'tourism':
        icon_svg = f"""
        <g transform="translate({cx - 50}, {cy - 50})">
            <!-- Compass / Landmark pin -->
            <circle cx="50" cy="50" r="38" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <polygon points="50,18 60,45 50,40 40,45" fill="{icon_accent}"/>
            <polygon points="50,82 60,55 50,60 40,55" fill="{icon_stroke}"/>
            <circle cx="50" cy="50" r="4" fill="{navy}"/>
        </g>
        """
    elif icon_type == 'realestate':
        icon_svg = f"""
        <g transform="translate({cx - 50}, {cy - 50})">
            <!-- Building / Villa silhouette -->
            <polygon points="50,15 15,45 25,45 25,85 75,85 75,45 85,45" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <rect x="42" y="55" width="16" height="30" fill="{icon_accent}"/>
            <rect x="32" y="48" width="12" height="12" fill="none" stroke="{icon_stroke}" stroke-width="1.5"/>
            <rect x="56" y="48" width="12" height="12" fill="none" stroke="{icon_stroke}" stroke-width="1.5"/>
        </g>
        """
    elif icon_type == 'healthcare':
        icon_svg = f"""
        <g transform="translate({cx - 50}, {cy - 50})">
            <rect x="15" y="15" width="70" height="70" rx="16" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <!-- Medical Cross -->
            <rect x="42" y="28" width="16" height="44" rx="3" fill="{icon_accent}"/>
            <rect x="28" y="42" width="44" height="16" rx="3" fill="{icon_accent}"/>
            <!-- Pulse line overlay -->
            <path d="M 20 72 L 35 72 L 42 60 L 50 80 L 58 68 L 80 68" fill="none" stroke="{icon_stroke}" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        """
    elif icon_type == 'team':
        icon_svg = f"""
        <g transform="translate({cx - 70}, {cy - 45})">
            <!-- Three Team Member Silhouettes -->
            <circle cx="40" cy="25" r="14" fill="none" stroke="{icon_stroke}" stroke-width="2.5"/>
            <path d="M 22 65 C 22 45 32 42 40 42 C 48 42 58 45 58 65" fill="none" stroke="{icon_stroke}" stroke-width="2.5"/>
            
            <circle cx="70" cy="20" r="16" fill="none" stroke="{icon_accent}" stroke-width="3"/>
            <path d="M 50 65 C 50 40 60 38 70 38 C 80 38 90 40 90 65" fill="none" stroke="{icon_accent}" stroke-width="3"/>
            
            <circle cx="100" cy="25" r="14" fill="none" stroke="{icon_stroke}" stroke-width="2.5"/>
            <path d="M 82 65 C 82 45 92 42 100 42 C 108 42 118 45 118 65" fill="none" stroke="{icon_stroke}" stroke-width="2.5"/>
        </g>
        """
    else:
        # Generic geometric icon
        icon_svg = f"""
        <g transform="translate({cx - 40}, {cy - 40})">
            <rect x="0" y="0" width="80" height="80" rx="12" fill="none" stroke="{icon_stroke}" stroke-width="3"/>
            <circle cx="40" cy="40" r="20" fill="none" stroke="{icon_accent}" stroke-width="2.5"/>
            <line x1="10" y1="10" x2="70" y2="70" stroke="{icon_stroke}" stroke-width="1.5" stroke-dasharray="4,4"/>
        </g>
        """

    # Label badge & text
    badge_y = cy + 65
    title_y = badge_y + 36
    sub_y = title_y + 22

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="100%" height="100%">
    {bg_fill}
    {grid_pattern}
    <!-- Outer delicate border -->
    <rect x="6" y="6" width="{width - 12}" height="{height - 12}" rx="10" fill="none" stroke="{border_color}" stroke-width="1.5" stroke-dasharray="8,6"/>
    
    {icon_svg}

    <!-- Placeholder Badge -->
    <g transform="translate({cx}, {badge_y})">
        <rect x="-140" y="-14" width="280" height="28" rx="14" fill="{badge_bg}" stroke="{badge_border}" stroke-width="1.5"/>
        <text x="0" y="5" text-anchor="middle" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="1.2" fill="{badge_text}">
            ASSET PLACEHOLDER • {width}x{height}
        </text>
    </g>

    <!-- Specific Target Label -->
    <text x="{cx}" y="{title_y}" text-anchor="middle" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="16" font-weight="700" fill="{main_text}" letter-spacing="0.5">
        {label}
    </text>

    <!-- Secondary Explanation -->
    <text x="{cx}" y="{sub_y}" text-anchor="middle" font-family="'Inter', system-ui, sans-serif" font-size="12" font-weight="500" fill="{sub_text}">
        {title}
    </text>
</svg>"""
    return svg

# 1. Logo Placeholder SVG (Header & Footer)
def make_logo_svg():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 70" width="340" height="70">
    <defs>
        <linearGradient id="logoBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#082B59"/>
            <stop offset="50%" stop-color="#0868B2"/>
            <stop offset="100%" stop-color="#26B5D8"/>
        </linearGradient>
        <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#DDA43A"/>
            <stop offset="100%" stop-color="#F59E0B"/>
        </linearGradient>
    </defs>
    <!-- Geometric Tech Emblem / 3D "B" + Amaravati Arch -->
    <g transform="translate(10, 8)">
        <!-- 3D Layered Isometric Tech Hexagon / B -->
        <rect x="4" y="4" width="46" height="46" rx="10" fill="url(#logoBlue)"/>
        <!-- Amaravati Arch Motif -->
        <path d="M 16 40 C 16 22 38 22 38 40" fill="none" stroke="#FAF8F2" stroke-width="3" stroke-linecap="round"/>
        <!-- Tech Dot in Gold -->
        <circle cx="27" cy="20" r="4.5" fill="url(#logoGold)"/>
        <line x1="27" y1="20" x2="27" y2="30" stroke="#FAF8F2" stroke-width="2"/>
        <!-- Accent corner blocks -->
        <rect x="36" y="8" width="6" height="6" rx="1.5" fill="#26B5D8"/>
    </g>

    <!-- Typography -->
    <text x="72" y="32" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="17" font-weight="800" fill="#082B59" letter-spacing="0.3">
        BHARAT INTELLI TECH
    </text>
    <text x="72" y="48" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="600" fill="#0868B2" letter-spacing="2">
        SYSTEMS
    </text>
    <text x="145" y="48" font-family="'Inter', system-ui, sans-serif" font-size="9" font-weight="500" fill="#DDA43A" letter-spacing="1">
        • AMARAVATI
    </text>
</svg>"""

# Write Logo
with open(os.path.join(out_dir, 'logo-placeholder.svg'), 'w', encoding='utf-8') as f:
    f.write(make_logo_svg())

# Write Favicon SVG
def make_favicon_svg():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
    <defs>
        <linearGradient id="favGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#082B59"/>
            <stop offset="60%" stop-color="#0868B2"/>
            <stop offset="100%" stop-color="#26B5D8"/>
        </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#favGrad)"/>
    <path d="M 20 48 C 20 28 44 28 44 48" fill="none" stroke="#FAF8F2" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="32" cy="24" r="5.5" fill="#DDA43A"/>
    <line x1="32" y1="24" x2="32" y2="36" stroke="#FAF8F2" stroke-width="2.5"/>
</svg>"""

with open(os.path.join(public_dir, 'favicon.svg'), 'w', encoding='utf-8') as f:
    f.write(make_favicon_svg())

# Placeholders definitions
manifest = [
    # Hero & Heritage
    ('amaravati-hero-placeholder.svg', 1600, 1000, 'Future Capital of Andhra Pradesh • Krishna River Tech City', 'AMARAVATI HERO IMAGE — REPLACE LATER', 'hero', 'dark'),
    ('amaravati-heritage-placeholder.svg', 1200, 800, 'Architectural Heritage & Futuristic Digital Stupa', 'AMARAVATI HERITAGE IMAGE — REPLACE LATER', 'hero', 'light'),

    # Services
    ('service-website-placeholder.svg', 800, 550, 'Responsive Corporate Web Platforms & SEO Foundations', 'Website Development Image', 'website', 'light'),
    ('service-mobile-app-placeholder.svg', 800, 550, 'iOS, Android & Cross-Platform Mobile Applications', 'Mobile App Development Image', 'mobile', 'light'),
    ('service-custom-software-placeholder.svg', 800, 550, 'Cloud Infrastructure, CRM Integrations & Automation', 'Custom Software Image', 'software', 'light'),

    # Solutions
    ('solution-ecommerce-placeholder.svg', 800, 500, 'Secure Online Storefronts, Cart & Payment Gateways', 'E-commerce Solution Image', 'ecommerce', 'light'),
    ('solution-enterprise-placeholder.svg', 800, 500, 'Enterprise Dashboards, Role-Based Access & Data', 'Enterprise Solution Image', 'enterprise', 'light'),
    ('solution-startup-placeholder.svg', 800, 500, 'MVP Development, Rapid Prototyping & Scalable Arch', 'Startup Solution Image', 'startup', 'light'),
    ('solution-industry-placeholder.svg', 800, 500, 'Specialized Workflows, Scheduling & Process Automation', 'Industry Solution Image', 'industry', 'light'),

    # Projects
    ('project-tourism-placeholder.svg', 900, 600, 'Destination Showcase & Booking Concept (Illustrative Sample)', 'Tourism Project Preview', 'tourism', 'light'),
    ('project-ecommerce-placeholder.svg', 900, 600, 'Modern Retail & Catalog Experience (Illustrative Sample)', 'E-commerce Project Preview', 'ecommerce', 'light'),
    ('project-real-estate-placeholder.svg', 900, 600, 'Property Discovery & Virtual Inquiries (Illustrative Sample)', 'Real Estate Project Preview', 'realestate', 'light'),
    ('project-healthcare-placeholder.svg', 900, 600, 'Clinic Booking & Patient Portal Workflows (Illustrative Sample)', 'Healthcare Project Preview', 'healthcare', 'light'),

    # About & Contact
    ('about-team-placeholder.svg', 1200, 800, 'Engineering Team & Collaborative Culture in Amaravati', 'COMPANY / TEAM IMAGE — REPLACE LATER', 'team', 'light'),
    ('amaravati-contact-placeholder.svg', 1600, 900, 'Amaravati Skyline & Krishna River Regional Connectivity', 'AMARAVATI CONTACT BACKGROUND — REPLACE LATER', 'hero', 'dark'),

    # Testimonials
    ('client-portrait-1.svg', 400, 400, 'Executive Silhouette (Approved Review To Be Added)', 'DEMO PORTRAIT 1 — REPLACE BEFORE LAUNCH', 'portrait', 'light'),
    ('client-portrait-2.svg', 400, 400, 'Executive Silhouette (Approved Review To Be Added)', 'DEMO PORTRAIT 2 — REPLACE BEFORE LAUNCH', 'portrait', 'light'),
    ('client-portrait-3.svg', 400, 400, 'Executive Silhouette (Approved Review To Be Added)', 'DEMO PORTRAIT 3 — REPLACE BEFORE LAUNCH', 'portrait', 'light'),

    # Social Preview
    ('social-preview-placeholder.svg', 1200, 630, 'Open Graph Social Sharing Banner for Bharat Intelli Tech Systems', 'SOCIAL PREVIEW IMAGE — REPLACE LATER', 'hero', 'dark'),
]

for filename, w, h, title, label, icon, bg in manifest:
    filepath = os.path.join(out_dir, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(make_svg(w, h, title, label, icon, bg))
    print(f"Created placeholder: {filename}")

# Create robots.txt
robots_txt = """User-agent: *
Allow: /

Sitemap: https://bharatintellitech.com/sitemap.xml
"""
with open(os.path.join(public_dir, 'robots.txt'), 'w', encoding='utf-8') as f:
    f.write(robots_txt)
print("Created robots.txt")

# Create sitemap.xml
sitemap_xml = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bharatintellitech.com/</loc>
    <lastmod>2026-10-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
"""
with open(os.path.join(public_dir, 'sitemap.xml'), 'w', encoding='utf-8') as f:
    f.write(sitemap_xml)
print("Created sitemap.xml")
print("All placeholder SVGs generated successfully!")
