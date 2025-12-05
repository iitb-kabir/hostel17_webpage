# Hostel-17 — Static Website

This repository contains a static website for the Hostel-17 pages (Home, Council, Mess, Maint, Sports, Tech, Sysad, Cult, etc.). It is a collection of plain HTML, CSS and JavaScript files that can be served by any static web server.

## Project purpose

- Simple static site to present hostel-related pages and resources.
- No build step required — just static assets in the repo.

## Project structure

Top-level files (examples):

- `Home.html`, `Council.html`, `Mess.html`, `Maint.html`, `sports.html`, `Tech.html`, `Sysad.html`, `Cult.html`, `Rules.html` — page HTML files
- `*.css` and `*.js` files alongside their HTML pages
- `assets/` — images, fonts and other static assets

Open the folder in your editor to explore the files.

## Quick dev run (local)

You have several simple options to run this site locally. All examples below assume you use PowerShell and are in the project root folder (where the HTML files and `assets/` live).

1. VS Code + Live Server (recommended for quick editing)

- Install the Live Server extension in VS Code.
- Open the project folder in VS Code, open `Home.html`, and click "Go Live". Live Server will serve the folder and reload automatically when files change.

2. Python built-in HTTP server (no install if Python 3 is present)

Run in PowerShell from project root:

```powershell
# serve current directory on port 8000
python -m http.server 8000

# open http://localhost:8000/Home.html in your browser
```

3. Node `http-server` (if you prefer Node)

```powershell
# install once (requires npm)
npm install -g http-server

# then run
http-server -p 8000

# or using npx without global install
npx http-server -p 8000
```

Notes:

- If you don't have an `index.html`, open a specific page such as `http://localhost:8000/Home.html`.
- Use port numbers >1024 if you don't want to run with admin privileges.

## Deploy (static hosting) — recommended services

Because this is a static website, pick any static hosting provider. Below are easy, proven methods.

Option A — GitHub Pages (free, simple)

1. Create a GitHub repository and push this project.

```powershell
git init
git add .
git commit -m "Initial commit"
# replace <repo-url> with your GitHub repo url
git remote add origin <repo-url>
git branch -M main
git push -u origin main
```

2. On GitHub: Repository > Settings > Pages. Under "Source", choose branch `main` and folder `/(root)` then Save.

3. (Optional) If your repository does not contain an `index.html`, add a small `index.html` that redirects to `Home.html`:

```html
<!-- index.html: redirect to Home.html -->
<!DOCTYPE html>
<meta http-equiv="refresh" content="0; url=Home.html" />
<title>Hostel-17</title>
```

4. After a minute or two, your site will be available at `https://<your-username>.github.io/<repo-name>/`.

Option B — Netlify (drag & drop or connect repo)

- Quick: Compress the site or open Netlify Dashboard -> Sites -> Drag & Drop your project folder onto the dashboard.
- Better: Connect your GitHub repository and Netlify will auto-deploy on push. Since this is static with no build step, leave build command empty and set publish directory to `/` (or the folder containing index.html).

Option C — Vercel (import Git repo)

- Sign in, import the GitHub repository, and deploy. Vercel auto-detects static projects and will publish them.

Option D — Surge (CLI)

```powershell
npm install -g surge
surge .
```

This publishes the current directory as a static site. Follow the prompts to choose a domain or accept the generated one.

## Notes & tips

- Check asset paths (relative vs absolute). If pages reference `assets/...`, verify the `assets/` folder is at project root when deployed.
- If you want a nicer routing experience (single-page app), you may consider adding an `index.html` and small client-side router; currently pages are individual HTML files.
- For HTTPS and custom domains, use Netlify/Vercel or configure GitHub Pages custom domain settings.

## Troubleshooting

- 404 after deployment: ensure there's an `index.html` (or configure the hosting service to point to the correct file). For GitHub Pages, serving root without `index.html` will result in 404.
- Local CORS when testing XHR/Fetch: use a local server (Live Server / python -m http.server / http-server) rather than opening files directly with the `file://` protocol.

## License

Add a license file if you plan to publish this publicly. Example: `MIT`.

---

If you want, I can also:

- Add a small `index.html` redirect automatically.
- Add a GitHub Actions workflow to build & publish to GitHub Pages (if you'd like CI-driven publishing).

Tell me if you'd like one of those and I'll add it.

---

Hostel-17 — generated README
"# Hostel_17_webpage" 
"# hostel17_webpage" 
