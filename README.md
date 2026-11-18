# Imad Portfolio (Astro + Tailwind)

## Run locally
    npm install
    npm run dev        # http://localhost:4321
    npm run build      # outputs to dist/

## Edit content
All text, links and contact details live in `src/data/content.ts`.
Replace the placeholder `github` / `linkedin` values there (and the per-project GitHub links in `src/components/Projects.astro`) with your real URLs.

## Deploy to Vercel
1. Create a GitHub repo and push this folder (`git init`, `git add .`, `git commit -m "Portfolio"`, `git remote add origin <repo-url>`, `git push -u origin main`).
2. On vercel.com choose Add New > Project, import the repo. Framework preset: Astro (auto-detected). Build command `npm run build`, output `dist`.
3. Optional: add an environment variable `SITE_URL` (e.g. `https://yourname.vercel.app`) so social previews and canonical tags use full URLs.
4. Deploy. Every push to `main` redeploys automatically.
