# About Us Page Specification

This document details the layout structure, typography, animations, assets, and SEO configuration for the About Us page (`about.html`).

---

## SEO & Heading Hierarchy

- **Title Tag**: `About Us | AHA Engineering`
- **Meta Description**: `Discover AHA Engineering's legacy, values, and strategic leadership. Serving global communities with heavy turnkey infrastructure and manufacturing projects.`
- **Heading Hierarchy**:
  - `H1`: "AHA ENGINEERING" (Top App Bar logo, global context)
  - `H1`: "Engineering the Future" (Hero Section main title)
  - `H2`: "Touching Lives Through Engineering" (Vision Section title)
  - `H2`: "Strategic Leadership" (Leadership Section title)
  - `H2`: "Engineering Across Borders" (Global Footprint Stats Section title)
  - `H2`: "Core Values" (Values Section title)
  - `H2`: "Partner With Excellence" (Footer CTA title)

---

## Page Layout & Sections

### 1. Hero Section
Features a structured grid visual backdrop representing structural design.
- **Height**: Minimum `60vh`.
- **Background**:
  - Parallax container with a high-contrast background image (`assets/images/hero-about.webp`).
  - Overlay 1: A grid pattern overlay using CSS `radial-gradient` dots representing blueprints: `radial-gradient(circle, #4A4A4A 1px, transparent 1px)` with size `24px 24px` at 5% opacity.
  - Overlay 2: Semi-transparent blue/primary tint: `rgba(0, 50, 138, 0.2)`.
- **Content Card (Bottom-left aligned, maximum width 384px)**:
  - Container: White/Surface background, border-left: `4px` solid `var(--color-primary)`.
  - Badge: "Company Profile" (Font `label-technical`, color `var(--color-primary)`, block, uppercase).
  - Title: "Engineering the Future" (Font `headline-lg-mobile`, color `var(--color-primary)`, uppercase, bold).
  - Copy: "Defining excellence in infrastructure through precision, scale, and unwavering commitment to industrial progress." (Font `body-md`, color `var(--color-on-surface-variant)`).

### 2. Vision & History Section
- **Styling**: Background color `var(--color-surface-container-low)`.
- **Vision Box**:
  - Badge: "Our Vision" (Font `label-technical`, color `var(--color-primary)`, uppercase).
  - Title: "Touching Lives Through Engineering" (Font `headline-lg`, color `var(--color-primary)`).
  - Accent line: `64px` wide, `4px` tall solid primary line.
  - Copy: "To be a global powerhouse in heavy infrastructure, transforming landscapes and empowering communities through engineering solutions that stand the test of time and nature."
- **History Card**:
  - Styling: Card background `var(--color-surface)`, border `1px` solid `var(--color-outline-variant)`.
  - Content: History icon `history` (Material Symbols, color primary, 36px size) + H3 title "Our History" + paragraph: "Founded on the principles of technical mastery, AHA Engineering has evolved from a local consultant to a global infrastructure titan, delivering over 500+ landmark projects across four decades."

### 3. Leadership Section
Presents strategic executives.
- **Header**: Badge: "Executive Board", Title: "Strategic Leadership" (H2, color primary).
- **Lead Profile Card (Managing Director)**:
  - Styling: White background, border `1px` solid `var(--color-outline-variant)`.
  - Image: Portrait of Managing Director (`assets/images/leader-krishnaiah.webp`). Aspect-square, hover zoom transition scale `105%` over 500ms.
  - Content Block: Border top `1px` solid `var(--color-outline-variant)`.
    - Role Badge: "MANAGING DIRECTOR" positioned absolute, overlapping top border (background `var(--color-primary)`, text white, font `label-technical`).
    - Name: "Mr. P. Krishnaiah" (Font `headline-lg`, color primary).
    - Description: "Visionary leader with 35+ years in civil infrastructure. Pioneering some of the world's most complex hydraulic and transportation systems."
- **Additional Roles Grid**:
  - Split row showing roles:
    - **Card 1: Project Director** (Industrial Systems). Styled in `var(--color-surface-container-low)` with thin outline.
    - **Card 2: Technical Head** (Civil & Structural). Styled in `var(--color-surface-container-low)` with thin outline.

### 4. Global Footprint Stats Section
High-impact metric dashboard.
- **Styling**: Background color `var(--color-primary)`, text color white, overlay structural dot grid at 10% opacity.
- **Title Block**: Badge: "Global Footprint" (color `var(--color-on-primary-container)`), Title: "Engineering Across Borders" (color white).
- **Stats Bento Grid (2x2)**:
  - **Metric 1**: "12+" (Font `display-hero`, 36px font-size, color `var(--color-on-primary-container)`) + label "Countries" (uppercase, 80% opacity).
  - **Metric 2**: "25k" + label "Employees" (uppercase, 80% opacity).
  - **Metric 3**: "500+" + label "Mega Projects" (uppercase, 80% opacity).
  - **Metric 4**: "$4B+" + label "Order Book" (uppercase, 80% opacity).
- **Operations Highlight Card**:
  - Container with thin border `var(--color-on-primary-container)`.
  - Row: Icon `public` (color `var(--color-on-primary-container)`) + label "International Operations" (uppercase font `label-technical`).
  - Copy: "Executing complex turnkey projects in the Middle East, South-East Asia, and East Africa, adhering to stringent international standards."

### 5. Commitment & Values Section
- **Header**: Badge "Our Commitment", Title "Core Values" (color primary).
- **Values Stack (3 cards)**:
  - **Card 1: Safety First**: Icon `health_and_safety` (Material Symbols). Text: "Zero-incident culture. Our safety protocols exceed global OSHA standards on every site."
  - **Card 2: Uncompromising Quality**: Icon `verified`. Text: "Six Sigma methodologies applied to structural engineering and project management."
  - **Card 3: Accountability**: Icon `handshake`. Text: "Taking full ownership from blueprint to commissioning, ensuring deadlines are absolute."
  - *Interaction*: Card borders transition to primary blue on hover.

### 6. CTA Section
- **Styling**: Background `var(--color-surface-container-high)`, border-t-4 solid `var(--color-primary)`.
- **Text**: Title "Partner With Excellence" (color primary), Copy: "Connect with our industrial experts to discuss your next large-scale engineering challenge."
- **Button**: "GET IN TOUCH". Solid primary color, white text, uppercase letter-spacing, rounded-lg.

---

## JavaScript Behaviors

### 1. Scroll-Triggered Fade-In Animations
Every section should slide up and fade in smoothly once it enters the browser viewport:
- Initial state: Class `.opacity-0` and `.translate-y-4` (or style `opacity: 0; transform: translateY(16px); transition: all 700ms ease-out;`).
- Intersection Observer triggers: Adds `.opacity-100` and `.translate-y-0` classes once `isIntersecting` is true.

---

## Localized Assets & Dims

- **Hero Background**:
  - Local path: `assets/images/hero-about.webp`
  - Dimensions: `1200px` width by `800px` height
- **Managing Director Profile**:
  - Local path: `assets/images/leader-krishnaiah.webp`
  - Dimensions: `600px` width by `600px` height
