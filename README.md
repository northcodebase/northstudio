# NorthStudio

An independent software studio website and developer portfolio built with a focus on minimalist design, high-performance static pages, and clean code.

## 🔗 Project Links
- **Repository:** [github.com/northcodebase/northstudio](https://github.com/northcodebase/northstudio)
- **Support Email:** northcodebase@gmail.com

---

## ✨ Features

- **Multi-page Architecture:** Split into focused, static pages for maintainability:
  - `index.html`: Studio overview, core ethos, and featured catalog entry.
  - `about.html`: Philosophy, principles, development workflows, stack, FAQ, and timeline.
  - `projects.html`: Interactive catalog listing genuine active developments (NorthTracks, NorthPass, Northline Icons) with status badges and metadata grids.
  - `now.html`: Focused monthly status update page (/now movement).
  - `cv.html`: Simplified developer CV with specialized print layouts.
  - `404.html`: Custom branded page error handler.
- **Monochrome Theme System:** Toggle between dark and light themes. State persists across pages using `localStorage`.
- **Keyboard & Reader Accessible:** Fluid font sizing using `clamp()`, distinct focus rings (`:focus-visible`), ARIA descriptors, and header "Skip to Content" paths.
- **Responsive Mobile Navigation:** Vertically expanding stacked menu list for mobile devices.
- **Audio Control System:** Dynamic sound triggers for clicks, hovers, and ambient loops, with a browser autoplay guard and silent fallback.
- **GitHub Pages Ready:** Zero compilation or build configurations. All asset and layout paths are relative (`./assets/...`), allowing out-of-the-box hosting on GitHub Pages subfolder routes.

---

## 📂 Repository Structure

```text
├── index.html            # Main studio hub page
├── about.html            # Studio values, FAQ, and timeline
├── projects.html         # Development repository catalog
├── now.html              # Status updates page
├── cv.html               # Developer Curriculum Vitae page (with Print support)
├── 404.html              # Custom branded 404 error page
├── .nojekyll             # Tells GitHub Pages not to run Jekyll process
└── assets/
    ├── css/
    │   └── styles.css    # Core stylesheets (Light & Dark theme variables)
    ├── js/
    │   └── app.js        # Theme manager, filters, mobile menu, and audio scripts
    ├── audio/            # Click, hover, and ambient mp3 assets
    ├── fonts/            # Custom web fonts
    ├── images/           # Images and avatar graphics
    └── icons/            # SVG vector sets
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
