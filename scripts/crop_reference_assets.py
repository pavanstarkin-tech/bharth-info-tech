import os
from PIL import Image

ref_path = "Amaravati Tech Solutions Landing Page.png"
img = Image.open(ref_path)
w, h = img.size
out_dir = os.path.join("public", "images")
os.makedirs(out_dir, exist_ok=True)

# 1. Header Logo
# Logo is located at top left: approx x: 50 to 290, y: 0 to 44
logo = img.crop((45, 0, 290, 44))
logo.save(os.path.join(out_dir, "header-logo.png"), "PNG")
print("Saved header-logo.png", logo.size)

# 2. Hero Background / Art
# Hero spans y: 44 to 365.
# Right art: x: 380 to 836, y: 44 to 365
hero_art = img.crop((370, 44, 836, 365))
hero_art.save(os.path.join(out_dir, "hero-art-ref.webp"), "WEBP", quality=95)
# Full hero backdrop:
hero_full = img.crop((0, 44, 836, 365))
hero_full.save(os.path.join(out_dir, "hero-bg-full.webp"), "WEBP", quality=95)
print("Saved hero art and full bg", hero_art.size)

# 3. Services (y: approx 420 to 595)
# 3 cards across x: approx 28 to 808
# Card 1: x: 28 to 275, y: 420 to 595
# Card 2: x: 290 to 546, y: 420 to 595
# Card 3: x: 560 to 808, y: 420 to 595
s1 = img.crop((28, 422, 275, 595))
s2 = img.crop((294, 422, 546, 595))
s3 = img.crop((560, 422, 808, 595))
s1.save(os.path.join(out_dir, "service-1-full.webp"), "WEBP", quality=95)
s2.save(os.path.join(out_dir, "service-2-full.webp"), "WEBP", quality=95)
s3.save(os.path.join(out_dir, "service-3-full.webp"), "WEBP", quality=95)
print("Saved 3 service cards", s1.size, s2.size, s3.size)

# Also crop just the image part of service cards if needed
# The image itself is the entire card in the reference with dark gradient at bottom!

# 4. Solutions (y: approx 650 to 810)
# 4 cards:
# sol 1: x: 28 to 216
# sol 2: x: 228 to 416
# sol 3: x: 428 to 616
# sol 4: x: 628 to 808
# Image height is y: 650 to 735
sol1_img = img.crop((32, 652, 218, 735))
sol2_img = img.crop((230, 652, 416, 735))
sol3_img = img.crop((428, 652, 614, 735))
sol4_img = img.crop((626, 652, 808, 735))
sol1_img.save(os.path.join(out_dir, "sol-ecommerce.webp"), "WEBP", quality=95)
sol2_img.save(os.path.join(out_dir, "sol-enterprise.webp"), "WEBP", quality=95)
sol3_img.save(os.path.join(out_dir, "sol-startup.webp"), "WEBP", quality=95)
sol4_img.save(os.path.join(out_dir, "sol-industry.webp"), "WEBP", quality=95)
print("Saved 4 solution images")

# 5. Our Work (y: approx 860 to 1025)
# 4 mockups:
# w1: x: 66 to 240
# w2: x: 248 to 422
# w3: x: 430 to 604
# w4: x: 612 to 786
w1 = img.crop((66, 860, 242, 970))
w2 = img.crop((248, 860, 424, 970))
w3 = img.crop((430, 860, 606, 970))
w4 = img.crop((612, 860, 786, 970))
w1.save(os.path.join(out_dir, "work-tourism.webp"), "WEBP", quality=95)
w2.save(os.path.join(out_dir, "work-ecommerce.webp"), "WEBP", quality=95)
w3.save(os.path.join(out_dir, "work-realestate.webp"), "WEBP", quality=95)
w4.save(os.path.join(out_dir, "work-healthcare.webp"), "WEBP", quality=95)
print("Saved 4 project mockups")

# 6. About Us (y: approx 1045 to 1245)
# Left building image: x: 0 to 300, y: 1045 to 1245
about_bldg = img.crop((0, 1045, 305, 1245))
about_bldg.save(os.path.join(out_dir, "about-building.webp"), "WEBP", quality=95)
# 4 value icons on the right (x: approx 600 to 630):
v1 = img.crop((600, 1052, 634, 1086))
v2 = img.crop((600, 1098, 634, 1132))
v3 = img.crop((600, 1144, 634, 1178))
v4 = img.crop((600, 1190, 634, 1224))
v1.save(os.path.join(out_dir, "val-innovation.webp"), "WEBP", quality=95)
v2.save(os.path.join(out_dir, "val-client.webp"), "WEBP", quality=95)
v3.save(os.path.join(out_dir, "val-quality.webp"), "WEBP", quality=95)
v4.save(os.path.join(out_dir, "val-amaravati.webp"), "WEBP", quality=95)
print("Saved about building and 4 value icons")

# 7. Why Businesses Choose Us (y: approx 1250 to 1380)
why_bg = img.crop((0, 1250, 836, 1380))
why_bg.save(os.path.join(out_dir, "why-choose-bg.webp"), "WEBP", quality=95)
print("Saved why choose us background")

# 8. Testimonials Portraits (y: approx 1395 to 1555)
# 3 portraits:
# t1: center around x: 104, y: 1475, radius ~ 22 -> crop (75, 1448, 127, 1500)
# t2: center around x: 412, y: 1475 -> crop (383, 1448, 435, 1500)
# t3: center around x: 712, y: 1475 -> crop (683, 1448, 735, 1500)
t1 = img.crop((72, 1446, 130, 1504))
t2 = img.crop((380, 1446, 438, 1504))
t3 = img.crop((680, 1446, 738, 1504))
t1.save(os.path.join(out_dir, "testi-ravi.webp"), "WEBP", quality=95)
t2.save(os.path.join(out_dir, "testi-sneha.webp"), "WEBP", quality=95)
t3.save(os.path.join(out_dir, "testi-mahesh.webp"), "WEBP", quality=95)
print("Saved 3 testimonial portraits")

# 9. Contact Us Section (y: approx 1560 to 1805)
contact_bg = img.crop((0, 1560, 836, 1805))
contact_bg.save(os.path.join(out_dir, "contact-bg.webp"), "WEBP", quality=95)
print("Saved contact section background")

# 10. Footer Heritage Sketch (y: approx 1845 to 1881)
footer_sketch = img.crop((650, 1845, 836, 1881))
footer_sketch.save(os.path.join(out_dir, "footer-heritage-sketch.png"), "PNG")
print("Saved footer heritage sketch")
