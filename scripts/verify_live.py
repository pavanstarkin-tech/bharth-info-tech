import urllib.request
import re

base_url = "https://pavanstarkin-tech.github.io/bharth-info-tech/"
req = urllib.request.Request(base_url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req) as res:
    html = res.read().decode("utf-8", errors="ignore")

assets = re.findall(r'(?:src|href)="(/bharth-info-tech/[^"]+)"', html)
print(f"Found {len(assets)} subroot assets in index.html:")

all_ok = True
for a in assets:
    full_url = "https://pavanstarkin-tech.github.io" + a
    try:
        r = urllib.request.urlopen(urllib.request.Request(full_url, headers={"User-Agent": "Mozilla/5.0"}))
        print(f"  [OK {r.status}] {a}")
    except Exception as e:
        print(f"  [FAIL] {a} -> {e}")
        all_ok = False

# Also test critical images under subroot
images_to_test = [
    "/bharth-info-tech/images/bharat-intelli-tech-logo.png",
    "/bharth-info-tech/images/hero-golden-waterfront.webp",
    "/bharth-info-tech/images/about-riverside-campus.webp",
    "/bharth-info-tech/images/service-website.webp",
    "/bharth-info-tech/images/ourwork-1.webp"
]
print("\nTesting critical images under subroot:")
for img in images_to_test:
    u = "https://pavanstarkin-tech.github.io" + img
    try:
        r = urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"}))
        print(f"  [OK {r.status}] {img}")
    except Exception as e:
        print(f"  [FAIL] {img} -> {e}")
        all_ok = False

print("\nALL VERIFICATIONS PASSED!" if all_ok else "\nSOME CHECKS FAILED!")
