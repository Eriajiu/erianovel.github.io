---
name: Lorebook Design System
colors:
  surface: '#f6fbf2'
  surface-dim: '#d7dbd3'
  surface-bright: '#f6fbf2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f5ed'
  surface-container: '#ebefe7'
  surface-container-high: '#e5eae1'
  surface-container-highest: '#dfe4dc'
  on-surface: '#181d18'
  on-surface-variant: '#434840'
  inverse-surface: '#2d322c'
  inverse-on-surface: '#eef2ea'
  outline: '#737970'
  outline-variant: '#c3c8be'
  surface-tint: '#496645'
  primary: '#496645'
  on-primary: '#ffffff'
  primary-container: '#b7d8b0'
  on-primary-container: '#425f3f'
  inverse-primary: '#afcfa8'
  secondary: '#615e56'
  on-secondary: '#ffffff'
  secondary-container: '#e8e2d7'
  on-secondary-container: '#67645c'
  tertiary: '#536351'
  on-tertiary: '#ffffff'
  tertiary-container: '#c2d4be'
  on-tertiary-container: '#4c5c4b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#caecc3'
  primary-fixed-dim: '#afcfa8'
  on-primary-fixed: '#062107'
  on-primary-fixed-variant: '#314d2f'
  secondary-fixed: '#e8e2d7'
  secondary-fixed-dim: '#cbc6bc'
  on-secondary-fixed: '#1d1c15'
  on-secondary-fixed-variant: '#49473f'
  tertiary-fixed: '#d6e8d1'
  tertiary-fixed-dim: '#bacbb6'
  on-tertiary-fixed: '#111f11'
  on-tertiary-fixed-variant: '#3b4b3a'
  background: '#f6fbf2'
  on-background: '#181d18'
  surface-variant: '#dfe4dc'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-reading:
    fontFamily: Be Vietnam Pro
    fontSize: 19px
    fontWeight: '400'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.05em
  caption:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin-mobile: 20px
  container-margin-desktop: 120px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 64px
---

## Brand & Style

This design system is engineered for a "Healing Tech" aesthetic, specifically tailored for a premium reading experience. The brand personality is quiet, nurturing, and sophisticated—moving away from the frantic energy of traditional social media toward a "digital sanctuary" for Vietnamese readers.

The style merges **Minimalism** with **Soft Tactility**. It prioritizes extreme legibility and a "cozy" atmosphere through the use of organic shapes, generous negative space, and a breathable layout. The visual language evokes the feeling of high-quality paper and natural light, ensuring the interface recedes to let the literature take center stage. The emotional goal is to lower the user's heart rate upon opening the application.

## Colors

The palette is rooted in botanical tones and warm paper stocks. 

- **Primary & Secondary Greens:** Used for primary actions, progress indicators, and "healing" moments. These should never feel neon; they are muted and organic.
- **Surface Strategy:** The primary background is `Soft Beige (#F5EFE4)`, mimicking a premium book leaf. `Pure White (#FFFFFF)` is reserved for elevated cards or floating elements to create a subtle sense of depth.
- **Typography Neutrals:** Avoid pure black. Use a deep, desaturated forest green-grey for text to maintain a soft contrast that reduces eye strain during long reading sessions.
- **Accent Sage:** Used for secondary interactive elements, tags, and subtle borders.

## Typography

Typography is the core of this design system. We utilize **Plus Jakarta Sans** for UI elements and headings to provide a modern, friendly, and geometric structure. For the primary reading experience and long-form body text, we use **Be Vietnam Pro** due to its exceptional Vietnamese diacritic handling and approachable humanist tone.

**Key Rules:**
- **Reading Comfort:** The `body-reading` token uses a 1.8x line-height. This is non-negotiable for long-form content to ensure the eye doesn't lose its place.
- **Vietnamese Diacritics:** Ensure vertical spacing between lines accounts for stacked diacritics (e.g., "ỗ", "ặ"). Never collapse line heights below 1.4 for body text.
- **Hierarchy:** Use weight rather than color to differentiate headlines.

## Layout & Spacing

This design system employs a **Fluid-Fixed Hybrid** grid. 
- **Mobile:** 4-column grid with 20px margins.
- **Desktop:** 12-column grid with a max-width of 1200px, centered.

The spacing philosophy follows a **"Breathable Luxury"** model. Components should never feel cramped. Use `section-gap` between major content blocks to emphasize the minimalist aesthetic. Margins within reading cards should be wider than standard SaaS layouts to simulate the margins of a physical book.

## Elevation & Depth

To maintain the "cozy" and "fresh" feeling, we avoid heavy, dark shadows.

- **Soft Depth:** Use extremely diffused shadows with a hint of the primary color: `box-shadow: 0 10px 30px rgba(183, 216, 176, 0.15)`.
- **Tonal Layering:** Depth is primarily created by placing `Pure White` elements on top of the `Soft Beige` background.
- **Glassmorphism:** For navigation bars and floating overlays, use a backdrop blur of `20px` with a `90%` white opacity. This creates a "frosted morning" effect that keeps the UI feeling light.
- **Interactive States:** When a user interacts with a card, the elevation should subtly increase (lift) rather than darken.

## Shapes

The shape language is defined by **High-Radius Geometry**. There are no sharp corners in this design system.

- **Standard Elements:** Buttons, input fields, and small cards use `0.5rem` (rounded-md).
- **Featured Content:** Book covers and featured hero cards use `1.5rem` (rounded-xl) to emphasize a soft, friendly character.
- **Interactive Feedback:** Focus states should follow the container's radius with a 4px offset.

## Components

### Buttons
- **Primary:** Background `#B7D8B0`, text `#4A4F49`. Bold weight. Pill-shaped or heavily rounded.
- **Ghost:** Border `1px solid #B7D8B0`, no background. Used for secondary actions.

### Cards (The "Book" Container)
- Background `#FFFFFF`.
- Soft shadow (color-tinted).
- Radius `24px`.
- Padding `24px` to `32px`.

### Inputs
- Background `#FFFFFF` or a very light tint of the secondary green.
- Border is invisible until focused, then a `1px` Sage Green border appears.
- Placeholder text in a soft olive-grey.

### Lists
- Remove dividers where possible. Use vertical spacing (`stack-md`) to separate items.
- If dividers are necessary, use `#DDEFD8` at 0.5px thickness.

### Reading Progress
- Custom thin progress bars using `#B7D8B0` on a `#F5EFE4` track.
- Use soft, line-based icons (2pt stroke width) for navigation (Library, Home, Settings).

### Additional Components: "The Bookmark"
- A unique UI element for "Lorebook" that acts as a persistent floating action button or page marker, using the `Accent Sage` color and a subtle vertical ribbon shape.