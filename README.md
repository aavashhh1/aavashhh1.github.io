# aavash portfolio — GitHub Pages

```
index.html                  # page content
asset/css/style.css         # design tokens + styles
asset/js/main.js            # nav, scroll progress, reveal, contact form
asset/img/profile.jpg       # hero portrait
asset/files/                # resume PDF / Word docs
```

## Local preview
python3 -m http.server 8000  →  http://localhost:8000

## Deploy
Push to the `main` branch of `<username>.github.io`. Add a `.nojekyll` file (included) so GitHub Pages serves the asset folder as-is.
