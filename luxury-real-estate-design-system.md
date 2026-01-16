# Luxury Real Estate Website - Design System

## Overview
This design system is for a high-end real estate brokerage website with a minimalist, elegant aesthetic featuring warm neutral tones and sophisticated typography.

---

## Color Palette

### Primary Colors
- **Background Cream**: `#F5F1EB` (main background)
- **Dark Text**: `#1A1A1A` (headings and primary text)
- **Warm Beige**: `#E8DDD0` (section backgrounds, cards)
- **Accent Gold**: `#D4AF7A` (subtle accents, borders)

### Secondary Colors
- **Medium Gray**: `#6B6B6B` (body text, descriptions)
- **Light Gray**: `#A8A8A8` (secondary text)
- **Warm Overlay**: `rgba(245, 241, 235, 0.9)` (image overlays)
- **White**: `#FFFFFF` (cards, pure sections)

### Interactive States
- **Button Primary**: `#1A1A1A` (dark buttons)
- **Button Hover**: `#333333`
- **Link Hover**: `#D4AF7A` (gold accent)

---

## Typography

### Font Families
```css
--font-heading: 'Playfair Display', serif;
--font-subheading: 'Cormorant Garamond', serif;
--font-body: 'Montserrat', sans-serif;
--font-accent: 'Lora', serif; /* for italic emphasis */
```

### Type Scale

#### Hero Section
- **Main Headline**: 
  - Font: Playfair Display
  - Size: 72px / 4.5rem
  - Weight: 400 (Regular)
  - Line Height: 1.1
  - Letter Spacing: -0.02em
  
- **Hero Italic Text** ("Real Estate"):
  - Font: Lora Italic or Playfair Display Italic
  - Size: 72px / 4.5rem
  - Weight: 400
  - Style: Italic
  - Color: #8B7355 (slightly muted brown)

#### Section Headings
- **H2** (Section Titles like "Our Philosophy"):
  - Font: Playfair Display
  - Size: 48px / 3rem
  - Weight: 400
  - Line Height: 1.2
  - Color: #1A1A1A

- **H3** (Subsection Titles like "Strategic Investment Advisory"):
  - Font: Playfair Display
  - Size: 28px / 1.75rem
  - Weight: 500
  - Line Height: 1.3
  - Color: #1A1A1A

#### Body Text
- **Primary Body**:
  - Font: Montserrat
  - Size: 16px / 1rem
  - Weight: 400
  - Line Height: 1.7
  - Color: #6B6B6B

- **Small Text** (captions, metadata):
  - Font: Montserrat
  - Size: 14px / 0.875rem
  - Weight: 400
  - Line Height: 1.6
  - Color: #A8A8A8

#### Property Cards
- **Property Name**:
  - Font: Playfair Display
  - Size: 24px / 1.5rem
  - Weight: 500
  - Color: #1A1A1A

- **Property Price**:
  - Font: Montserrat
  - Size: 20px / 1.25rem
  - Weight: 300
  - Color: #D4AF7A

- **Property Location**:
  - Font: Montserrat
  - Size: 14px / 0.875rem
  - Weight: 400
  - Color: #6B6B6B

---

## Layout Structure

### Grid System
- **Container Max Width**: 1400px
- **Padding**: 80px horizontal on desktop, 24px on mobile
- **Grid Columns**: 12-column grid
- **Gap**: 32px between major sections

### Section Spacing
- **Top/Bottom Padding**: 120px on desktop, 60px on mobile
- **Between Elements**: 48px (large), 32px (medium), 16px (small)

### Breakpoints
```css
--mobile: 320px
--tablet: 768px
--desktop: 1024px
--wide: 1440px
```

---

## Components

### 1. Hero Section
**Layout:**
- Full viewport height (min-height: 100vh)
- Two-column layout: 50% text / 50% image
- Text left-aligned, image right with rounded corners

**Elements:**
- Logo (top left, small, minimal)
- Navigation (top right, minimal text links)
- Headline (large, multi-line with mixed fonts)
- Subheadline (smaller, description text)
- Scroll indicator (optional bottom center)

**Image Treatment:**
- Border radius: 32px
- Aspect ratio: 4:5 (portrait)
- Object fit: cover
- Subtle shadow: `0 20px 60px rgba(0,0,0,0.1)`

---

### 2. Philosophy/Feature Sections
**Layout:**
- Alternating two-column layouts (text-image / image-text)
- 40% image / 60% text or vice versa
- Generous white space

**Image Style:**
- Circular images (border-radius: 50%) for close-ups
- Rectangular with rounded corners (border-radius: 24px) for cityscapes
- Aspect ratio varies: 1:1 for circles, 16:10 for rectangles

**Text Block:**
- Title + description format
- Icon or small graphic accent (optional)
- Max width: 600px for readability

---

### 3. Property Cards
**Layout:**
- Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
- Equal height cards
- Gap: 24px

**Card Structure:**
```
┌─────────────────────┐
│                     │
│   Property Image    │  (aspect ratio 3:4)
│   (rounded corners) │
│                     │
├─────────────────────┤
│ Property Name       │
│ Location            │
│ Price (right-align) │
└─────────────────────┘
```

**Card Styling:**
- Background: #FFFFFF
- Border radius: 16px
- Padding: 0 (image full bleed), 24px on text area
- Shadow: `0 4px 20px rgba(0,0,0,0.08)`
- Hover: Lift effect with increased shadow

**Badge/Status:**
- Position: Absolute top-right on image
- Background: White/translucent
- Border radius: 20px
- Padding: 8px 16px
- Font: Montserrat, 12px, uppercase

---

### 4. Quote Section
**Layout:**
- Full-width background image
- Centered text overlay
- Dark overlay: `rgba(0,0,0,0.4)`

**Text Style:**
- Quote: 48px, Playfair Display, white, centered
- Attribution: 16px, Montserrat, white, centered, italic

---

### 5. Services Grid
**Layout:**
- 3-column grid on desktop
- Cards with icons + text
- Background: Warm beige (#E8DDD0)

**Icon Style:**
- Simple line icons
- Color: #D4AF7A (gold)
- Size: 48px

**Card:**
- No visible borders
- Title + short description
- Centered or left-aligned text

---

### 6. CTA Section
**Layout:**
- Centered content
- Max width: 800px
- Large heading + description + button

**Button Style:**
- Background: #1A1A1A
- Color: #FFFFFF
- Padding: 16px 48px
- Border radius: 32px (pill shape)
- Font: Montserrat, 14px, uppercase, letter-spacing: 0.05em
- Hover: Background #333333, slight scale transform

---

### 7. Navigation
**Style:**
- Fixed or sticky top
- Minimal, text-only links
- Font: Montserrat, 14px, uppercase
- Spacing: 40px between links
- Hover: Gold underline animation

**Logo:**
- Text-based or minimal icon
- Size: 120px wide max
- Always visible in header

---

### 8. Footer
**Layout:**
- 4-column grid
- Sections: Company Info, Quick Links, Contact, Other Hours/Links

**Style:**
- Background: #F5F1EB or #E8DDD0
- Text: Small (14px), Montserrat
- Links: No underline, hover with gold color
- Spacing: Generous padding (80px top/bottom)

---

## Design Patterns

### Image Treatments
1. **Rounded Corners**: 16px-32px depending on size
2. **Aspect Ratios**: 
   - Hero: 4:5 (portrait)
   - Property cards: 3:4
   - Feature sections: 16:10 or 1:1 (circles)
3. **Overlays**: Subtle warm or dark overlays for text readability
4. **Object Fit**: Always `cover` for consistency

### Spacing System
```css
--space-xs: 8px
--space-sm: 16px
--space-md: 24px
--space-lg: 32px
--space-xl: 48px
--space-2xl: 64px
--space-3xl: 80px
--space-4xl: 120px
```

### Shadows
```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
--shadow-md: 0 4px 20px rgba(0,0,0,0.08);
--shadow-lg: 0 20px 60px rgba(0,0,0,0.1);
--shadow-xl: 0 30px 80px rgba(0,0,0,0.15);
```

### Transitions
```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 400ms ease-in-out;
```

---

## Accessibility

### Contrast Ratios
- Maintain WCAG AA standard (4.5:1 for normal text)
- Dark text (#1A1A1A) on cream (#F5F1EB): ✓ Pass
- Gray text (#6B6B6B) on cream: ✓ Pass
- Ensure all interactive elements have visible focus states

### Focus States
- Outline: 2px solid #D4AF7A
- Offset: 2px
- Border radius: 4px

---

## Animation Guidelines

### Hover Effects
- **Cards**: 
  - Transform: `translateY(-8px)`
  - Shadow: Increase to `--shadow-lg`
  - Transition: 250ms ease-in-out

- **Buttons**:
  - Background: Lighten/darken by 10%
  - Transform: `scale(1.02)`
  - Transition: 150ms ease-in-out

### Scroll Animations
- **Fade In**: Opacity 0 → 1, translateY(30px) → 0
- **Stagger**: 100ms delay between elements
- **Duration**: 600ms ease-out

### Page Transitions
- Smooth scroll: `scroll-behavior: smooth`
- Page load: Fade in from top

---

## Responsive Behavior

### Desktop (1024px+)
- Multi-column layouts (2-3 columns)
- Large typography
- Generous spacing
- Full-width hero images

### Tablet (768px - 1023px)
- 2-column layouts reduce to 1-2
- Slightly reduced typography
- Maintain image quality
- Adjust padding to 48px

### Mobile (< 768px)
- Single column layouts
- Stack all content vertically
- Hero: Image above text
- Typography scales down (60px hero → 40px)
- Padding: 24px
- Touch-friendly buttons (min 44px height)

---

## Content Guidelines

### Tone of Voice
- Sophisticated but approachable
- Professional yet warm
- Descriptive without being flowery
- Trust-building language

### Image Style
- High-quality architectural photography
- Warm, natural lighting
- Golden hour preferred
- Mix of interiors, exteriors, and lifestyle shots
- Minimal editing, authentic feel

### Copy Length
- Headlines: 3-8 words
- Subheadlines: 10-15 words
- Body paragraphs: 50-100 words
- Property descriptions: 20-40 words

---

## Technical Implementation Notes

### Performance
- Lazy load images below the fold
- Use WebP format with fallbacks
- Optimize images (max 200KB for full-width)
- Critical CSS for above-the-fold content

### SEO
- Semantic HTML5 structure
- Proper heading hierarchy (h1 → h6)
- Alt text for all images
- Meta descriptions for all pages

### Libraries Recommended
- **Animations**: Framer Motion or GSAP
- **Image Gallery**: Lightbox or custom modal
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React or Heroicons

---

## Component Checklist

When implementing this design in Cursor/Next.js:

- [ ] Set up color variables in CSS/Tailwind config
- [ ] Import and configure Google Fonts
- [ ] Create reusable Button component
- [ ] Create PropertyCard component
- [ ] Create FeatureSection component (alternating layout)
- [ ] Create QuoteSection component
- [ ] Implement responsive navigation with mobile menu
- [ ] Add hover states and transitions
- [ ] Implement lazy loading for images
- [ ] Add scroll reveal animations
- [ ] Test responsive breakpoints
- [ ] Ensure accessibility compliance
- [ ] Add loading states
- [ ] Implement error boundaries

---

## File Structure Recommendation

```
/components
  /ui
    - Button.tsx
    - Card.tsx
    - Container.tsx
    - Section.tsx
  /home
    - Hero.tsx
    - Philosophy.tsx
    - PropertyGrid.tsx
    - QuoteSection.tsx
    - Services.tsx
    - CTA.tsx
  /layout
    - Header.tsx
    - Footer.tsx
    - Navigation.tsx
/styles
  - globals.css
  - variables.css
/public
  /images
    /properties
    /hero
    /sections
```

---

## Quick Reference: Key Measurements

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Container Width | 1400px | 100% | 100% |
| Padding | 80px | 48px | 24px |
| Hero H1 | 72px | 56px | 40px |
| Section H2 | 48px | 40px | 32px |
| Body Text | 16px | 16px | 15px |
| Button Height | 56px | 52px | 48px |
| Card Border Radius | 16px | 16px | 12px |
| Section Spacing | 120px | 80px | 60px |

