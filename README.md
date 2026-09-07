# Your portfolio site

A static site — no build step, no server, no login system. You edit files directly and re-upload.

## 1. Put it on GitHub Pages

1. Create a GitHub account if you don't have one, then create a new repository
   (e.g. `my-portfolio`). Public repos get free GitHub Pages hosting.
2. Upload all the files in this folder to that repo (drag-and-drop works
   directly on github.com — click **"Add file" → "Upload files"** on the
   repo page — or use `git push` if you're comfortable with Git).
   Make sure `index.html` ends up at the **root** of the repo, not inside
   an extra subfolder.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   pick the `main` branch and the `/ (root)` folder, then **Save**.
5. GitHub gives you a live URL after a minute or two, usually:
   `https://your-username.github.io/my-portfolio/`
   (If your repo is literally named `your-username.github.io`, the site
   is served at the root instead: `https://your-username.github.io/`.)

**To make future edits:** upload the changed files again the same way
(or `git push` if using Git) — GitHub Pages redeploys automatically.

The `.nojekyll` file in this folder is included on purpose — it tells
GitHub Pages to serve the files exactly as they are, without running them
through Jekyll (its default processing step, which can behave oddly with
folders like `data/`). Don't delete it.

**One thing to watch:** GitHub Pages is case-sensitive about filenames.
If you save an image as `Cover.JPG` but write `cover.jpg` in `projects.js`,
it won't load. Keep filenames lowercase and consistent.

## 2. Add your name and details

Search for `[Your Name]`, `[Your City]`, `[Client]`, `[your background]` and
`[X years]` across the HTML files and replace them with your real details.
They appear in: `index.html`, `work.html`, `project.html`, `about.html`,
`services.html`, `contact.html`, `success.html`.

## 3. Add your artwork

1. Put image files in `images/projects/` (JPG or PNG, ideally under ~500KB
   each so the site loads fast — most photo editors or tinypng.com can
   compress them).
2. Put your headshot/self-portrait at `images/portrait.jpg` for the About page.
3. Open `data/projects.js` and add or edit project entries — see the
   comments at the top of that file for the exact steps. This one file
   controls the homepage grid, the Work page, the filters, and every
   individual project page. You never need to touch the HTML to add new work.
4. Re-upload the changed files to GitHub.

Until you add a real image, any project shows a placeholder block with its
title instead of a broken image icon, so the site never looks broken while
you're filling it in.

## 4. Contact form

GitHub Pages can't run a server, so there's no built-in form handler like
Netlify has. The form on `contact.html` instead posts to **FormSubmit.co**,
a free service with no signup:

1. Open `contact.html` and replace `youremail@example.com` in the form's
   `action` with your real email address.
2. Once the site is live, submit the form yourself once — FormSubmit
   emails you a one-time confirmation link. Click it to activate the form.
3. Every submission after that is emailed straight to you.

If the "thanks for reaching out" redirect to `success.html` doesn't work
after activation, open FormSubmit's docs and set the `_next` hidden field
to the **full URL** of your success page instead (e.g.
`https://your-username.github.io/my-portfolio/success.html`) rather than
the relative path currently in the form.

## File map

```
index.html          Homepage
work.html            Full portfolio grid with category filters
project.html         Single template used for every project (reads ?id=... from the URL)
about.html           About page
services.html        Services / how to work with you
contact.html         Project enquiry form
success.html         Shown after a form submission
styles.css           All styling — colors and fonts are set as variables at the top
script.js            Renders the galleries and project pages from data/projects.js
data/projects.js     <-- the file you actually edit day-to-day
images/              Your artwork goes here
.nojekyll            Tells GitHub Pages not to run Jekyll processing — keep this
```
