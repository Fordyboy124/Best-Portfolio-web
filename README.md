# Antonny Ochieng — Portfolio Website

A premium, fully responsive personal portfolio built with plain **HTML, CSS, and JavaScript** — no build step, no framework, no database. It runs on virtually any shared hosting plan (cPanel, Hostinger, Namecheap, GoDaddy, etc.) or free static hosts (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## What's inside

```
index.html                          Home
about/index.html                    About (My Story, Experience, Resume)     → /about/
projects/index.html                 Projects (Portfolio, Case Studies)       → /projects/
insights/index.html                 Insights (Articles & Resources)          → /insights/
contact/index.html                  Contact (form + details)                 → /contact/
css/style.css                       All styling, colors, type, animations
js/main.js                          Nav menu, scroll reveals, counters, skill bars, back-to-top
assets/img/                         Placeholder portrait & thumbnail graphics (SVG)
assets/Antonny-Ochieng-Resume.pdf   Placeholder résumé
```

### Clean URLs — no `.html` in any link

Each inner page lives in its own folder as `index.html` (e.g. `about/index.html`), and every internal link/asset path in the site uses a root-relative address like `/about/` or `/css/style.css`. This is the standard "pretty URL" pattern and works out of the box — with **no server configuration required** — on:

- Apache shared hosting (cPanel, Hostinger, etc.) — serves `index.html` inside a folder automatically
- Nginx
- Netlify, Vercel, GitHub Pages, Cloudflare Pages

So visitors see `yourdomain.com/about/` instead of `yourdomain.com/about.html`. Just make sure the whole folder structure above (including the `about`, `projects`, `insights`, `contact` folders) is uploaded exactly as-is, with `index.html` staying at the root.

**Important:** because paths are root-relative (start with `/`), the site must be deployed at your domain's root (`public_html` itself, not a subfolder like `public_html/mysite`). If you do need it in a subfolder, let me know and I'll switch the paths to match.


## 1. Deploying to shared hosting

1. Log in to your hosting control panel (e.g. cPanel) and open **File Manager**, or connect via **FTP/SFTP** (FileZilla).
2. Go to your domain's web root — usually `public_html` (or a subfolder if it's an add-on domain).
3. Upload **everything inside this folder** (not the folder itself) so `index.html` sits directly in `public_html`.
4. Visit your domain — the site is live. That's it; no server setup, database, or PHP required.

The same zip can also be dragged-and-dropped onto Netlify, or pushed to a GitHub repo and enabled with GitHub Pages.

## 2. Replace the placeholder photos

The hero portrait and About-page portrait are currently elegant gold-and-navy placeholders — not real photos — so the site is safe to preview before you have final images.

Replace these files with real photos, **keeping the exact same filenames**:

- `assets/img/portrait-hero.jpg` → save your Home page portrait here, then update the `src` in `index.html`'s hero (`<img src="assets/img/portrait-hero.svg">`) to point to your `.jpg`/`.png`.
- `assets/img/portrait-about.jpg` → same for `about.html`.

Recommended: portrait orientation, at least 1200×1500px, good lighting, simple background.

## 3. Replace the résumé PDF

Swap `assets/Antonny-Ochieng-Resume.pdf` with the real résumé, using the exact same filename — the "Download Resume" buttons on Home and About will then serve the correct file automatically.

## 4. Connect the contact form

The contact form on `contact.html` is fully styled but needs an endpoint to actually deliver messages, since static hosting has no server-side code. Two easy, free options:

**Option A — Formspree (fastest, no coding):**
1. Create a free account at formspree.io and create a new form.
2. Copy the endpoint URL it gives you (looks like `https://formspree.io/f/xxxxxxx`).
3. In `contact.html`, find `action="REPLACE_WITH_YOUR_FORM_ENDPOINT"` and paste your URL in its place.

**Option B — PHP mail handler (if your shared host supports PHP, most do):**
Ask for a small `send-mail.php` script, point the form's `action` to `send-mail.php`, and it will email submissions to your inbox.

## 5. Editing content

All text lives directly in the HTML files — open any page in a text editor and edit the copy, project names, testimonials, or article summaries directly. No CMS or database involved.

## 6. Colors, fonts, and design system

Everything is controlled from `css/style.css` via CSS variables at the top of the file (`:root { ... }`):

- **Midnight Navy** `#0A0F1E` — primary background
- **Classic Gold** `#CBA135` — the only accent color (buttons, links, highlights)
- **Pure White** `#FFFFFF` — primary text / light-section backgrounds
- **Light Gray** `#F1F3F7` — secondary backgrounds and cards

Fonts (loaded from Google Fonts, no license fees):
- **Space Grotesk** — headings/display
- **Inter** — body text
- **IBM Plex Mono** — small labels, stats, and data (a deliberate "ledger" feel that nods to Antonny's finance background)

## 7. Notes

- No emoji are used anywhere — all icons are hand-set inline SVG line icons.
- Scroll animations (fade/slide reveals, animated counters, animated skill bars) are built with plain JavaScript `IntersectionObserver` — lightweight and fast, no external animation library.
- The design respects `prefers-reduced-motion` for visitors who've asked their OS to limit animation.
- Fully responsive from large desktop down to small mobile, with a slide-out mobile menu.
