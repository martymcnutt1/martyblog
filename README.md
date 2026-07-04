# Martyは宇宙を学ぶ — static website starter

A lightweight, no-build blog homepage for GitHub Pages or Cloudflare Pages.

## What is included
- `index.html` — home page
- `posts/first-post.html` — a first article template
- `styles.css` — all styling
- `script.js` — tiny optional motion effect
- `assets/marty-pixel-avatar.png` — the pixel avatar
- `assets/favicon.png` — publication/social icon

## Publish with Cloudflare Pages (recommended)
1. Create a new GitHub repository, for example `marty-space-study`.
2. Upload all files from this folder to the repository root.
3. In Cloudflare, go to Workers & Pages → Create application → Pages → Import an existing Git repository.
4. Select the GitHub repository.
5. For a plain HTML site, use:
   - Build command: leave blank
   - Build output directory: `/`
6. Deploy. Every later GitHub push will publish the changes.

## Publish with GitHub Pages
1. Create a GitHub repository.
2. Upload this folder's contents to the repository root.
3. In GitHub: Settings → Pages.
4. Under Build and deployment, choose Deploy from a branch.
5. Select `main` and `/ (root)`, then Save.

## Add a new post
1. Copy `posts/first-post.html`, rename it, and replace the title/body.
2. Add a card on `index.html` inside the `post-grid` section with a link to the new file.
3. Commit/push. The site redeploys automatically.

## Important
This is intentionally a simple static starter. It is visually finished enough to launch, but you should not spend weeks perfecting it before publishing your first real note.
