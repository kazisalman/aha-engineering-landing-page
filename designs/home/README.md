# Home Page Specification

This document details the layout structure, typography, interactions, assets, and SEO configuration for the Home page (`index.html`).

---

## SEO & Heading Hierarchy

- **Title Tag**: `AHA Engineering | Global Infrastructure Leader`
- **Meta Description**: `AHA Engineering is a leading global contractor specializing in high-pressure industrial valves, strategic piping networks, and custom heavy machinery.`
- **Heading Hierarchy**:
  - `H1`: "AHA ENGINEERING" (Top App Bar logo, global context)
  - `H2`: "Engineering the Future of Global Infrastructure" (Hero Section main hook)
  - `H3`: "Core Competencies" (Competencies Section title)
  - `H3`: "Unrivaled Global Reach" (Reach/Network Section title)
  - `H3`: "Landmark Work" (Projects Section title)
  - `H3`: "Partner With Global Experts" (Footer CTA Section title)

---

## Page Layout & Sections

### 1. Hero Section
The hero introduces the brand with a powerful, industrial-themed visual.
- **Height**: `85vh`.
- **Background**:
  - Parallax container with a high-contrast background image (`assets/images/hero-home.webp`) centered and scaling to cover.
  - A bottom-heavy black linear gradient overlay to ensure legibility of white text on top: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)`.
- **Content Overlay (Bottom-aligned, left margin 32px)**:
  - Badge: "Global Infrastructure Leader" (Font `label-technical`, background `var(--color-primary)`, text `var(--color-on-primary)`, uppercase). Uses a diagonal clip-path (`clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)`).
  - Heading: "Engineering the Future of Global Infrastructure" (Font `headline-xl` or mobile equivalent, color white, uppercase, maximum width 384px / `max-w-sm`).
  - Button: "Explore Our Solutions" (Solid primary background, white text, right-facing arrow icon `arrow_forward` using Material Symbols). Active scale shift `scale(0.95)` with transition.

### 2. Core Competencies Section
A grid showcasing key industrial product lines.
- **Intro Header**:
  - Badge: "Specialized Solutions" (Font `label-technical`, color `var(--color-primary)`).
  - Title: "Core Competencies" (H3, Font `headline-lg-mobile`, left-bordered with a `4px` solid line of `var(--color-primary)`).
- **Competency Cards Grid (1-column on mobile, 3-column on desktop)**:
  - Each card is an interactive block with a 1px border (`var(--color-outline)`).
  - Hover / Interactive State:
    - Smooth background change from `var(--color-surface)` to `var(--color-primary)`.
    - Text and icon colors transition from default slate/black to white.
    - Bottom accent line (width 48px, height 4px) transitions from `var(--color-primary)` to white.
  - **Card 1: High-Pressure Valve Systems**
    - Icon: `settings_input_component` (Material Symbols).
    - Description: "Precision-engineered flow control solutions for hydrocarbon and hydraulic infrastructure."
  - **Card 2: Strategic Industrial Piping**
    - Icon: `polyline` (Material Symbols).
    - Description: "Custom-fabricated piping networks designed for extreme durability in harsh industrial environments."
  - **Card 3: Custom Machineries**
    - Icon: `engineering` (Material Symbols).
    - Description: "Advanced mechanical units and heavy-duty fabrication for large-scale energy and hydro projects."

### 3. Global Network Reach Section
Highlights the global scale and logistics capability.
- **Styling**: Background color `var(--color-primary)`, text color white.
- **Left Column**:
  - Badge: "Network Expansion" (Font `label-technical`, color `var(--color-primary-fixed-dim)`).
  - Title: "Unrivaled Global Reach" (Font `headline-xl`, uppercase).
  - Description: "Our logistics and transportation network ensures technical precision is delivered to the most remote infrastructure sites worldwide."
- **Right Column (Network Visual Box)**:
  - An aspect-ratio square container with a custom grid dot background (`radial-gradient(#b3c5ff 1px, transparent 1px)` with size `20px 20px` at 20% opacity).
  - Center Globe Icon (`public`, size 72px) in light blue (`var(--color-primary-fixed-dim)`).
  - Floating city badges: "HYDERABAD", "DUBAI", "SINGAPORE", "LONDON" styled with a brutalist border and semi-transparent dark background (`rgba(0, 0, 0, 0.6)`).

### 4. Landmark Projects Section
Displays portfolio items with case studies.
- **Header**:
  - Badge: "Project Portfolio" (Font `label-technical`, color `var(--color-primary)`).
  - Title: "Landmark Work" (Font `headline-xl`, uppercase).
- **Projects Grid (1-column on mobile, 2-column on desktop)**:
  - **Project 1: Polavaram Irrigation Complex**
    - Image: `assets/images/project-polavaram.webp`. Height 256px, object-fit cover. Hover scale transition `scale(1.1)` over 700ms.
    - Badge: "In Progress" (Background `var(--color-primary)`, text white).
    - Description: "A massive spillway engineering marvel designed to regulate seasonal water flow and energy generation."
    - Link: "View Case Study" (Font `label-technical`, color `var(--color-primary)`, flex-aligned with external icon `open_in_new`). Hover shifts the icon to the right.
  - **Project 2: Kaleshwaram Strategic Hub**
    - Image: `assets/images/project-kaleshwaram.webp`. Height 256px, object-fit cover. Hover scale transition `scale(1.1)`.
    - Badge: "Completed" (Background `var(--color-primary-container)`, border outline, text white).
    - Description: "World-class lift irrigation infrastructure showcasing AHA's capability in heavy machinery installation."
    - Link: "View Case Study" (Font `label-technical`, color `var(--color-primary)`, flex-aligned with external icon `open_in_new`).

### 5. Call to Action (CTA) Section
- **Styling**: Background color `var(--color-surface-container-high)`, top border `4px` solid `var(--color-primary)`.
- **Text**: Title "Partner With Global Experts" (uppercase, Font `headline-xl`), Description "We bring technical excellence and structural integrity to every project, regardless of scale."
- **Buttons**:
  - Primary button: "Explore Our Solutions". Solid primary color, white text, uppercase.
  - Secondary button: "Contact Divisions". White background, primary text color, 1px outline border.

---

## JavaScript Behaviors

### 1. Parallax Scroll Effect
A scroll event listener is attached to shifts the hero image background slightly upwards as the user scrolls, preventing a static feel:
```javascript
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-parallax-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});
```

---

## Localized Assets & Dims

- **Hero Background**:
  - Local path: `assets/images/hero-home.webp`
  - Dimensions: `1920px` width by `1080px` height
- **Project 1 Image**:
  - Local path: `assets/images/project-polavaram.webp`
  - Dimensions: `800px` width by `600px` height
- **Project 2 Image**:
  - Local path: `assets/images/project-kaleshwaram.webp`
  - Dimensions: `800px` width by `600px` height
