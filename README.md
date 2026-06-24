# AHA Engineering Landing Page

AHA Engineering is a global infrastructure leader specializing in industrial-grade components, heavy machinery, piping networks, and valve systems. This repository contains the designs, design system tokens, and development specifications for building the company's multi-page landing website.

## Tech Stack & Architecture (Optimized for SEO & Core Web Vitals)

To deliver the absolute best performance, loading speeds, and Search Engine Optimization (SEO), the landing page will be built using a **static first** architecture:

1. **Structure (HTML)**: Semantic, clean HTML5 structure. Every page must include unique title tags, descriptive meta descriptions, Open Graph (OG) tags for preview sharing, and a single H1 tag representing the page hierarchy.
2. **Styling (Vanilla CSS)**: Instead of the utility CDN used in the Stitch mockups (which causes flash of unstyled content and increases page size), the project will use **Vanilla CSS** with CSS custom properties (variables) compiled from the design system tokens. This ensures lightning-fast First Contentful Paint (FCP) and prevents layout shifts.
3. **Interactions (Vanilla JS)**: Minimal, clean, vanilla JavaScript for drawer toggles, parallax scrolling on the hero background, and contact form processing indicators.
4. **Performance & Media**:
   - **Local WebP Images**: All external images will be generated or converted, compressed as WebP files, and saved locally under `/assets/images/`.
   - **Explicit Dimensions**: All image tags will have explicit `width` and `height` attributes to avoid Cumulative Layout Shift (CLS).
   - **Typography**: External fonts (Hanken Grotesk, IBM Plex Sans, JetBrains Mono) will be preloaded or loaded via a single combined Google Fonts link with `font-display: swap` to prevent font rendering delays.

---

## Directory Structure

```
AhaEngineering/
├── README.md                 # Root specification and overview (This file)
├── designs/
│   ├── README.md             # Site-wide specifications & design system mapping
│   ├── design_system/
│   │   └── DESIGN.md         # Design system tokens (colors, fonts, corners)
│   ├── home/
│   │   ├── code.html         # Original home page mockup
│   │   ├── screen.png        # Original home page screenshot
│   │   └── README.md         # Home page detailed specifications
│   ├── about/
│   │   ├── code.html         # Original about page mockup
│   │   ├── screen.png        # Original about page screenshot
│   │   └── README.md         # About page detailed specifications
│   └── contact_us/
│       ├── code.html         # Original contact us page mockup
│       ├── screen.png        # Original contact us screenshot
│       └── README.md         # Contact Us page detailed specifications
```

---

## Specifications Directory

Refer to the detailed specifications below to begin implementation:
- **Global Specifications & Design System**: [designs/README.md](file:///Users/salmankazi/Documents/Projects/AhaEngineering/designs/README.md)
- **Home Page**: [designs/home/README.md](file:///Users/salmankazi/Documents/Projects/AhaEngineering/designs/home/README.md)
- **About Us Page**: [designs/about/README.md](file:///Users/salmankazi/Documents/Projects/AhaEngineering/designs/about/README.md)
- **Contact Us Page**: [designs/contact_us/README.md](file:///Users/salmankazi/Documents/Projects/AhaEngineering/designs/contact_us/README.md)
