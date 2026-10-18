import shutil
import os
import subprocess
import sys

TOKEN = sys.argv[1] if len(sys.argv) > 1 else ""
REMOTE_URL = f"https://x-access-token:{TOKEN}@github.com/pavanstarkin-tech/bharth-info-tech.git"

if os.path.exists(".git"):
    # On Windows, readonly files inside .git need special handling
    def on_rm_error(func, path, exc_info):
        import stat
        os.chmod(path, stat.S_IWRITE)
        func(path)
    shutil.rmtree(".git", onerror=on_rm_error)

subprocess.run("git init -b main", shell=True)
subprocess.run("git config user.name pavanstarkin-tech", shell=True)
subprocess.run("git config user.email pavanstarkin-tech@users.noreply.github.com", shell=True)
subprocess.run("git add -A", shell=True)
subprocess.run("git commit -m \"Initial commit - Bharat Intelli Tech Systems source code\"", shell=True)
res = subprocess.run(f"git push -u {REMOTE_URL} main --force", shell=True, capture_output=True, text=True)
print("MAIN PUSH CODE:", res.returncode)
print("MAIN PUSH STDOUT:", res.stdout)
print("MAIN PUSH STDERR:", res.stderr)
