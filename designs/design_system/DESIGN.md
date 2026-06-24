---
name: Industrial Vitality
colors:
  surface: '#f9f9ff'
  surface-dim: '#d4daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e8eeff'
  surface-container-high: '#e3e8f9'
  surface-container-highest: '#dde2f3'
  on-surface: '#161c27'
  on-surface-variant: '#434653'
  inverse-surface: '#2a303d'
  inverse-on-surface: '#ecf0ff'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#2156ca'
  primary: '#00328a'
  on-primary: '#ffffff'
  primary-container: '#0047bb'
  on-primary-container: '#afc1ff'
  inverse-primary: '#b3c5ff'
  secondary: '#545f72'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f7'
  on-secondary-container: '#586377'
  tertiary: '#6c1f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#932d00'
  on-tertiary-container: '#ffb096'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#003ea6'
  secondary-fixed: '#d8e3fa'
  secondary-fixed-dim: '#bcc7dd'
  on-secondary-fixed: '#111c2c'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59c'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832700'
  background: '#f9f9ff'
  on-background: '#161c27'
  surface-variant: '#dde2f3'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  sidebar-nav:
    fontFamily: IBM Plex Sans
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-edge: 32px
  sidebar-width: 280px
---

## Brand & Style
The design system reflects a high-performance industrial environment, prioritizing precision, efficiency, and clarity. It moves away from high-energy warmth toward a focused, enterprise-grade atmosphere of stability and technical mastery.

The visual style is **Corporate Modern with a Technical Edge**. It utilizes structured layouts, high-contrast interfaces, and a refined color palette to evoke an emotional response of reliability and focus. The aesthetic is clean and systematic, designed for operators and engineers who require an unobtrusive yet authoritative workspace.

## Colors
The palette is anchored by a deep professional blue, symbolizing authority and technical precision. All previous orange accents have been purged to eliminate distraction and establish a more serious, focused environment.

- **Primary**: A high-contrast, deep industrial blue used for primary actions and brand presence.
- **Surface**: Light grays and pure whites provide a sterile, organized backdrop for complex data.
- **Neutral**: Dark slate and charcoal tones are used for text and structural borders to ensure high legibility and a grounded feel.
- **Status**: Feedback remains strictly functional—Red for errors, Green for success—integrated subtly within the industrial blue framework.

## Typography
The typography system uses a tiered approach to differentiate between brand presence and functional utility.

- **Headlines**: Hanken Grotesk provides a sharp, contemporary edge for page titles and major sections.
- **Interface & Sidebar**: IBM Plex Sans is the workhorse of the system, chosen for its technical pedigree and exceptional legibility in dense navigation menus.
- **Data & Metadata**: JetBrains Mono is used for status codes, serial numbers, and technical readings to emphasize the industrial nature of the platform.

## Layout & Spacing
This design system utilizes a **Fixed Grid** philosophy for desktop dashboards to ensure data columns remain predictable and scannable.

- **Grid**: A 12-column grid with 24px gutters.
- **Sidebar**: A fixed 280px sidebar provides a persistent anchor for navigation.
- **Rhythm**: A strict 4px baseline grid governs all internal padding and margins, ensuring alignment between text-heavy tables and control inputs.
- **Responsive**: On mobile, the grid shifts to a single column with 16px margins, while the sidebar collapses into a high-contrast modal drawer.

## Elevation & Depth
Depth is communicated through **Tonal Layering** rather than heavy shadows, maintaining a clean, systematic appearance.

- **Level 0**: The main application canvas uses a subtle light gray (`#F1F5F9`).
- **Level 1**: Primary content cards and containers are white with a fine 1px border in a slightly darker gray.
- **Interactive**: Hover states use a subtle tint of the primary blue or a light gray shift to indicate clickability.
- **Shadows**: Only used for floating elements like dropdowns or tooltips—these are sharp, low-opacity, and neutral to avoid a "soft" consumer feel.

## Shapes
The shape language is conservative and structural. Elements use **Soft** roundedness (4px) to maintain a modern feel without losing the "rigid" professional look of industrial software.

- **Standard Elements**: Buttons, input fields, and cards use 4px corners.
- **Large Containers**: Modals and major sections use 8px corners.
- **Status Pills**: Use a 2px radius or full pill-shape depending on the density of the data table they reside in.

## Components
- **Buttons**: Primary buttons are solid Professional Blue with white text. Secondary buttons use a ghost style with a 1px slate border.
- **Sidebar**: Dark-themed or high-contrast light gray sidebar using IBM Plex Sans. Active states are indicated by a 4px primary blue vertical bar on the left edge.
- **Data Tables**: High-density rows with light horizontal dividers. Header rows are slightly tinted gray with uppercase monospaced labels.
- **Inputs**: Rectangular with a 1px neutral-300 border. On focus, the border thickens and changes to primary blue with a subtle glow.
- **Cards**: White background, 1px border, no shadow. Used to group related metrics or control groups.
- **Chips/Status**: Defined by high-contrast text on very light background tints (e.g., light blue background with dark blue text).