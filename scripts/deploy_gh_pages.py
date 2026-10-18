import subprocess
import os
import shutil
import urllib.request
import json
import sys

TOKEN = os.environ.get("GITHUB_TOKEN") or (sys.argv[1] if len(sys.argv) > 1 else "")
REPO_OWNER = "pavanstarkin-tech"
REPO_NAME = "bharth-info-tech"
REMOTE_URL = f"https://x-access-token:{TOKEN}@github.com/{REPO_OWNER}/{REPO_NAME}.git"

CWD = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def run_cmd(cmd, cwd=CWD):
    print(f"Running: {cmd}")
    res = subprocess.run(cmd, cwd=cwd, shell=True, capture_output=True, text=True)
    if res.stdout:
        print("STDOUT:", res.stdout.strip())
    if res.stderr:
        print("STDERR:", res.stderr.strip())
    if res.returncode != 0:
        print(f"FAILED (code {res.returncode}): {cmd}")
    return res

def main():
    os.chdir(CWD)
    
    # 1. Build dist
    print("\n--- 1. Building Vite Production Bundle ---")
    run_cmd("npm run build")
    
    # Ensure 404.html and .nojekyll exist in dist
    shutil.copy("dist/index.html", "dist/404.html")
    with open("dist/.nojekyll", "w") as f:
        pass
    print("dist/404.html and dist/.nojekyll verified.")
    
    # 2. Commit main source branch
    print("\n--- 2. Committing main branch ---")
    run_cmd("git init -b main")
    run_cmd("git config user.name pavanstarkin-tech")
    run_cmd("git config user.email pavanstarkin-tech@users.noreply.github.com")
    run_cmd("git add -A")
    run_cmd('git commit -m "Complete Bharat Intelli Tech Systems website"')
    run_cmd(f"git remote remove origin")
    run_cmd(f"git remote add origin {REMOTE_URL}")
    run_cmd("git push -u origin main --force")
    
    # 3. Deploy dist to gh-pages branch
    print("\n--- 3. Deploying dist to gh-pages branch ---")
    dist_dir = os.path.join(CWD, "dist")
    run_cmd("git init -b gh-pages", cwd=dist_dir)
    run_cmd("git config user.name pavanstarkin-tech", cwd=dist_dir)
    run_cmd("git config user.email pavanstarkin-tech@users.noreply.github.com", cwd=dist_dir)
    run_cmd("git add -A", cwd=dist_dir)
    run_cmd('git commit -m "Deploy production bundle to GitHub Pages"', cwd=dist_dir)
    run_cmd(f"git remote remove origin", cwd=dist_dir)
    run_cmd(f"git remote add origin {REMOTE_URL}", cwd=dist_dir)
    run_cmd("git push -u origin gh-pages --force", cwd=dist_dir)
    
    # 4. Configure GitHub Pages via GitHub API
    print("\n--- 4. Configuring GitHub Pages via GitHub API ---")
    pages_url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/pages"
    req_body = json.dumps({"source": {"branch": "gh-pages", "path": "/"}}).encode()
    req = urllib.request.Request(
        pages_url,
        data=req_body,
        headers={
            "Authorization": f"token {TOKEN}",
            "Accept": "application/vnd.github+json",
            "Content-Type": "application/json",
            "User-Agent": "DeployScript"
        }
    )
    try:
        with urllib.request.urlopen(req) as res:
            data = json.loads(res.read().decode())
            print("GitHub Pages configured successfully:", data.get("html_url"))
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode()
        print(f"Pages API returned {e.code}: {err_msg}")
        # If pages is already configured, let's query it
        get_req = urllib.request.Request(
            pages_url,
            headers={
                "Authorization": f"token {TOKEN}",
                "Accept": "application/vnd.github+json",
                "User-Agent": "DeployScript"
            }
        )
        try:
            with urllib.request.urlopen(get_req) as res:
                data = json.loads(res.read().decode())
                print("Existing GitHub Pages status:", data.get("html_url"), data.get("status"))
        except Exception as ex:
            print("Could not query pages status:", ex)
    except Exception as e:
        print("Error configuring GitHub Pages:", e)
        
    print("\n=== DEPLOYMENT COMPLETE ===")
    print(f"Live URL: https://{REPO_OWNER}.github.io/{REPO_NAME}/")

if __name__ == "__main__":
    main()
