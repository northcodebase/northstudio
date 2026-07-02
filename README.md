# NorthStudio

An independent software studio website and developer portfolio built with a focus on minimalist black-and-white digital design, responsive structures, and clean code.

## 🔗 Project Links
- **Repository:** [github.com/northcodebase/northstudio](https://github.com/northcodebase/northstudio)
- **Support Email:** northcodebase@gmail.com

---

## ✨ Features

- **Monochrome Design System:** A clean, black-and-white theme built around curated typefaces (`Playfair Display`, `Manrope`, and `Geist Mono`).
- **Curriculum Vitae (CV) Page:** A dedicated developer CV page featuring:
  - An structured experience timeline and education background.
  - Custom project listings with quick-reference technology tags.
  - A clean, styled profile image placeholder box for portrait upload.
- **PDF/Print Optimized Layout:** Special print styles (`@media print`) configured in the stylesheet to format the CV cleanly onto paper or standard PDF export without web navigation or footer elements.
- **Expandable Platforms Grid:** A custom contact directory showing the top 6 profiles by default, with a smooth sliding accordion `[view more platforms]` toggle to reveal the remaining 10 profile links.
- **Live Local System Clock:** A real-time clock situated in the site navigation bar showing the local time along with its GMT offset.

---

## 📂 Repository Structure

```text
├── index.html            # Main portfolio landing page
├── cv.html               # Developer Curriculum Vitae page (with Print support)
├── 404.html              # Custom branded 404 error page
├── .nojekyll             # Tells GitHub Pages not to run Jekyll process
├── assets/
│   ├── css/
│   │   └── styles.css    # Core stylesheets & layout definitions
│   └── js/
│       └── app.js        # Clock, navigation, and expand/collapse scripts
└── README.md             # Project documentation (this file)
```

---

## 🚀 Local Setup & Hosting

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/northcodebase/northstudio.git
   cd northstudio
   ```

2. **Open in Browser:**
   Simply double-click `index.html` or run a local static server to browse:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   ```

3. **Deployment:**
   This project is ready to be hosted as-is on any static server provider, such as **GitHub Pages**, **Vercel**, or **Netlify**. The `.nojekyll` file is included to ensure assets are served correctly on GitHub Pages.
