# Site-Wide & Design System Specifications

This document outlines the global component layout, design system token mappings to CSS Custom Properties, and the navigation/routing structure for the AHA Engineering website.

---

## Global Components

### 1. Top App Bar (Header)
The Header acts as a persistent, fixed navigation element at the top of every page.
- **Position**: `fixed`, top 0, left 0, right 0.
- **Height**: `72px`.
- **Z-Index**: `50` (to ensure it sits above content but below the sidebar drawer).
- **Styling**:
  - Background color: `var(--color-surface)` at `90%` opacity (e.g., `rgba(249, 249, 255, 0.9)`).
  - Backdrop Blur: `backdrop-filter: blur(12px)`.
  - Border: `1px solid var(--color-outline-variant)` at the bottom edge.
- **Layout & Items**:
  - Flex container with space-between alignment and centered vertical alignment.
  - Left Section: Menu Toggle Button (hamburger icon using Google Material Symbols Outlined, color `var(--color-primary)`) + H1 Text Title: "AHA ENGINEERING" (Font: `headline-lg-mobile`, color `var(--color-primary)`, uppercase, bold).
  - Right Section: "REQUEST QUOTE" Button. Solid background `var(--color-primary)`, text `var(--color-on-primary)`, font `label-technical`, rectangular shape (border radius 8px), hover/active opacity states.

### 2. Sidebar Navigation Drawer
A collapsible left-hand navigation panel providing persistent links.
- **Position**: `fixed`, top 0, bottom 0, left 0.
- **Width**: `280px` (`var(--spacing-sidebar-width)`).
- **Z-Index**: `60` (drawer) and overlay at `59`.
- **States**:
  - *Collapsed State*: `transform: translateX(-100%)`.
  - *Open State*: `transform: translateX(0)`. Smooth CSS transition `transform 300ms ease-in-out`.
  - *Overlay Scrim*: When open, a full-screen semi-transparent backdrop (`background-color: rgba(0, 0, 0, 0.4)`) with `backdrop-filter: blur(2px)` is shown. Clicking the scrim closes the sidebar.
- **Layout & Items**:
  - H2 Text Logo: "AHA ENGINEERING" or "Navigation" at the top with a close button (Material Symbols close icon).
  - Navigation links: Home, About Us, Verticals, Projects, Careers, Contact Us.
    - Active Link styling: Background color `var(--color-surface-container-high)` or `var(--color-primary-container)`, text color changes, with an active vertical bar indicator or bold weighting.
    - Hover Link styling: Background color changes to `var(--color-surface-container)` with smooth transition.
  - Bottom section: "Global Support" label (Font `label-technical`, uppercase, color `var(--color-outline)`) and Direct Line telephone number: `+91 40 2307 6501`.

### 3. Global Footer
A structural footer terminating every page content.
- **Styling**:
  - Background color: `var(--color-surface-container-highest)` (`#dde2f3`).
  - Top border: `1px solid var(--color-outline-variant)`.
- **Layout & Sections**:
  - Logo/Header: "AHA Engineering" text (bold, uppercase, color `var(--color-primary)`).
  - Navigation Grid (2-column layout on mobile, 4-column on desktop):
    - **Divisions**: Infrastructure, Energy, Hydrocarbons, Manufacturing.
    - **Company**: About Us, Projects, Careers, Contact.
  - Copyright Row: Text "© 2024 AHA Engineering. Hyderabad Office: MEIL, S-2, Technocrat Ind. Estate, Balanagar." (Font: `body-sm`, color `var(--color-on-surface-variant)`).

---

## Navigation & Routing

The landing site operates as a multi-page static website:
- **Home Link**: navigates to `index.html` (Home Page)
- **About Us Link**: navigates to `about.html` (About Page)
- **Contact Link / Request Quote Button**: navigates to `contact.html` (Contact Us Page)
- **Verticals / Projects / Careers Links**: scroll dynamically to page sections on `index.html` or navigate back to the home page with an anchor hash (e.g. `index.html#competencies` or `index.html#projects`).

---

## Design System CSS Variables Mapping

These styles must be written in the global CSS sheet (e.g. `index.css`) to map the tokens from [DESIGN.md](file:///Users/salmankazi/Documents/Projects/AhaEngineering/designs/design_system/DESIGN.md) to the page implementation.

```css
:root {
  /* Colors */
  --color-surface: #f9f9ff;
  --color-surface-dim: #d4daea;
  --color-surface-bright: #f9f9ff;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f1f3ff;
  --color-surface-container: #e8eeff;
  --color-surface-container-high: #e3e8f9;
  --color-surface-container-highest: #dde2f3;
  --color-on-surface: #161c27;
  --color-on-surface-variant: #434653;
  --color-inverse-surface: #2a303d;
  --color-inverse-on-surface: #ecf0ff;
  --color-outline: #737685;
  --color-outline-variant: #c3c6d6;
  --color-surface-tint: #2156ca;
  --color-primary: #00328a;
  --color-on-primary: #ffffff;
  --color-primary-container: #0047bb;
  --color-on-primary-container: #afc1ff;
  --color-inverse-primary: #b3c5ff;
  --color-secondary: #545f72;
  --color-on-secondary: #ffffff;
  --color-secondary-container: #d5e0f7;
  --color-on-secondary-container: #586377;
  --color-tertiary: #6c1f00;
  --color-on-tertiary: #ffffff;
  --color-tertiary-container: #932d00;
  --color-on-tertiary-container: #ffb096;
  --color-error: #ba1a1a;
  --color-on-error: #ffffff;
  --color-error-container: #ffdad6;
  --color-on-error-container: #93000a;
  --color-background: #f9f9ff;
  --color-on-background: #161c27;

  /* Fonts */
  --font-headline: "Hanken Grotesk", sans-serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --font-technical: "JetBrains Mono", monospace;

  /* Shapes (Border Radii) */
  --rounded-sm: 0.125rem;       /* 2px */
  --rounded-default: 0.25rem;   /* 4px */
  --rounded-md: 0.375rem;        /* 6px */
  --rounded-lg: 0.5rem;          /* 8px */
  --rounded-xl: 0.75rem;         /* 12px */
  --rounded-full: 9999px;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-gutter: 24px;
  --spacing-margin-edge: 32px;
  --spacing-sidebar-width: 280px;
}
```
