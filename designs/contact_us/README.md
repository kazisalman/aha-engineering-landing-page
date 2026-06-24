# Contact Us Page Specification

This document details the layout structure, form variables, interactive simulator scripts, assets, and SEO configuration for the Contact Us page (`contact.html`).

---

## SEO & Heading Hierarchy

- **Title Tag**: `Contact Us | AHA Engineering`
- **Meta Description**: `Get in touch with AHA Engineering. Submit project requirements, view corporate office details in Hyderabad, or contact business divisions.`
- **Heading Hierarchy**:
  - `H1`: "AHA ENGINEERING" (Top App Bar logo, global context)
  - `H2`: "GET IN TOUCH" (Hero Section main header)
  - `H3`: "Project Inquiry" (Form Section title)
  - `H3`: "Headquarters" (Office Location Section title)
  - `H3`: "Career Opportunities" (Careers CTA Section title)

---

## Custom Styles (CSS)

- **Industrial Scrollbar**:
  - Scrollbar track background: `var(--color-background)`.
  - Scrollbar thumb background: `var(--color-primary)` with no border radius.
- **Brutalist Shadow Accent**:
  - Forms or headers can use a solid shadow shift: `box-shadow: 4px 4px 0px 0px var(--color-primary)`.

---

## Page Layout & Sections

### 1. Hero Section
- **Height**: `256px`.
- **Background**:
  - Background image (`assets/images/hero-contact.webp`) scaled to cover. Grayscale filter applied at 20% to keep a serious tone.
  - Linear gradient overlay fading to primary blue at the bottom edge: `linear-gradient(to top, var(--color-primary) 0%, transparent 100%)`.
- **Content Block (Bottom-aligned, left margin 32px)**:
  - Badge: "Contact" (Font `label-technical`, color `var(--color-primary-fixed-dim)`, block, uppercase).
  - Title: "GET IN TOUCH" (Font `headline-xl`, color white, uppercase, bold).

### 2. Project Inquiry Form Section
- **Header**: Left-bordered with solid primary line, Title "Project Inquiry" (H3, color primary), subtitle "Submit your technical specifications or project requirements below."
- **Form Inputs**:
  - Container wraps each input. Labels are styled with `label-technical` (color outline, uppercase).
  - Inputs are border-bottom only (`border-bottom: 2px solid var(--color-outline-variant)`), background `var(--color-surface-container)`.
  - Focus Interaction: Input border thickness becomes 2px and changes to primary blue (`var(--color-primary-container)`) with outline disabled.
  - **Inputs List**:
    1. **Full Name** (`input type="text"`, placeholder "Enter name", required).
    2. **Corporate Email** (`input type="email"`, placeholder "email@company.com", required).
    3. **Industry Segment** (`select` box: Infrastructure, Energy & Utilities, Hydrocarbons, Industrial Manufacturing).
    4. **Project Brief** (`textarea`, rows 4, placeholder "Outline your project scope...", required).
- **Submit Button**:
  - Text "SEND INQUIRY" (Material Symbols icon `send` at the right, uppercase, bold).
  - Styling: background `var(--color-primary)`, text white, padding 16px. Active scale shift `scale(0.98)`.

### 3. Headquarters & Map Section
- **Header**: Left-bordered with solid primary line, Title "Headquarters" (H3, color primary).
- **Contacts Card**:
  - Styling: Background `var(--color-surface-container-high)`, border `2px` solid `var(--color-outline-variant)`.
  - Details:
    - **Office Location**: Icon `location_on` (primary color). H4 "Hyderabad Office" (technical uppercase, bold). Address: "MEIL, S-2, Technocrat Ind. Estate, Balanagar, Hyderabad, India."
    - **Direct Line**: Icon `call`. H4 "Direct Line". Link `tel:+914012345678` with content `+91 40 1234 5678`. Hover changes text color to primary.
    - **Official Correspondence**: Icon `mail`. H4 "Official Correspondence". Link `mailto:info@ahaengineering.com` with content `info@ahaengineering.com`. Hover changes text color to primary.
- **Grayscale Hover Map**:
  - Container has `aspect-ratio: 16/9`, border 2px solid `var(--color-outline-variant)`.
  - Image: map overview (`assets/images/map-hyderabad.webp`).
  - Grayscale Interaction: Default grayscale `filter: grayscale(100%)`. On hover, transitions to full color `filter: grayscale(0)`.
  - Overlay: An absolute-centered card: Icon `location_on` (primary color, filled state) + "View Location" text label with a brutalist outline border.

### 4. Career Opportunities Section
- **Styling**: Background color `var(--color-primary)`, text color white, padding 32px.
- **Visual Accent**: Floating icon `engineering` (Material Symbols, scale 1.5, opacity 10%) absolute positioned in the top-right corner.
- **Content**: H3 Title "Career Opportunities" + paragraph "We are always looking for technical excellence. Join our team of world-class engineers." + uppercase Link "EXPLORE CAREERS" with right arrow icon (`arrow_forward`), arrow shifts right on hover.

---

## JavaScript Behaviors

### 1. Form Interaction Simulator
A script to simulate form sending validation:
- On submit event:
  1. Call `preventDefault()`.
  2. Locate the submit button. Store the original HTML.
  3. Update button HTML to `'PROCESSING...'`, set opacity to `50%`, set `disabled = true`.
  4. After a `1500ms` timeout:
     - Update button HTML to `'SUCCESSFULLY SENT'`.
     - Remove background color class `bg-primary`, add background color class `bg-green-600` (success status).
     - After another `3000ms` timeout:
       - Restore original button HTML and classes.
       - Set `disabled = false`.
       - Call form `reset()` to clear all input fields.

---

## Localized Assets & Dims

- **Hero Background**:
  - Local path: `assets/images/hero-contact.webp`
  - Dimensions: `1200px` width by `400px` height
- **HQ Map Visual**:
  - Local path: `assets/images/map-hyderabad.webp`
  - Dimensions: `800px` width by `450px` height
