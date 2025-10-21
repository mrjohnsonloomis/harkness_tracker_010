
# Harkness Toolkit (Static, GitHub Pages–ready)

This folder can be pushed directly to a GitHub repo and served with GitHub Pages.

## Structure
- `index.html` — landing page organized by **Learn**, **Prepare**, **Reflect**
- `learn.html`, `prepare.html`, `reflect.html` — student-facing pages
- `rubric.html` — rubric aligned to phases and roles; exportable JSON for equity mapping
- `dashboard.html` — upload your CSV/XLSX to visualize role frequency and trends
- `assets/styles.css`, `assets/app.js` — shared styles and rubric config
- `data/sample_harkness_data.xlsx` — optional sample (replace with your class data)

## Data format
- Minimum: a column that represents **Role** (values like `initiator`, `connector`, `questioner`, `evidence-finder`, `synthesizer`, `devils-advocate`, `bridge-builder`, `close-reader`).
- Optional: **Date** column for trends (any parseable date).

You can upload a local file from the dashboard **or** commit a file to `/data` and click "Load sample".

## Deploy
1. Create a repo on GitHub, e.g. `harkness-toolkit`.
2. Put these files at the root of the repo (keep folders).
3. Enable GitHub Pages: *Settings → Pages → Deploy from branch* (main) → `/root`.

## Customize
- Edit `assets/app.js` to tweak the rubric or role tags.
- Tweak `assets/styles.css` for colors and spacing.

## Notes
- Everything runs client side; no backend required.
- The dashboard uses Chart.js and SheetJS (CDN) to parse and chart your data.
