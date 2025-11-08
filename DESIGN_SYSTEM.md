# Design System - Premium Portfolio

This portfolio follows a sophisticated, minimal design inspired by leading AI companies like Anthropic.

## Design Philosophy

**Premium & Sophisticated** - Not flashy, but refined and professional  
**Generous Spacing** - 2-3x more white space than typical portfolios  
**Bold Typography** - Large, impactful headlines with clear hierarchy  
**Muted Colors** - Refined palette that feels timeless  
**Subtle Interactions** - Barely-there animations that add polish without distraction

## Color Palette

### Background (Near-Black Tones)
```css
--background: #0A0A0A        /* Main background */
--background-elevated: #1A1A1A  /* Slightly elevated surfaces */
--background-card: #252525      /* Card backgrounds */
```

### Foreground (Whites & Grays)
```css
--foreground: #FFFFFF          /* Headlines, important text */
--foreground-secondary: #A3A3A3  /* Body text, descriptions */
--foreground-tertiary: #737373   /* Captions, subtle text */
```

### Accent (Muted Purple)
```css
--accent: #7C5AFF        /* Primary accent color */
--accent-hover: #9575FF   /* Hover states */
```

### Borders (Subtle)
```css
--border: #2A2A2A        /* Default borders */
--border-hover: #404040   /* Hover state borders */
```

## Typography Scale

### Headlines
- **Hero**: 96px (desktop), 48px (mobile) - Line height: 1.1
- **Section Titles**: 56px - Line height: 1.2
- **Subsections**: 32px - Line height: 1.3

### Body Text
- **Large Body**: 20px - Line height: 1.7
- **Regular Body**: 18px - Line height: 1.7

### Font Stack
System fonts for instant loading and native feel:
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 
             'Segoe UI', Roboto, sans-serif
```

## Spacing System

### Vertical Section Spacing
- Desktop: 120px (30rem / py-30)
- Mobile: 96px (24rem / py-24)

### Component Spacing
- Card padding: 48px (12rem / p-12)
- Between elements: 64px (16rem / mb-16)
- Grid gaps: 40px (10rem / gap-10)

### Custom Spacing Scale
```css
--spacing-18: 4.5rem  /* 72px */
--spacing-22: 5.5rem  /* 88px */
--spacing-26: 6.5rem  /* 104px */
--spacing-30: 7.5rem  /* 120px */
--spacing-34: 8.5rem  /* 136px */
```

## Components

### Cards (Minimal Style)
```css
.minimal-card {
  background: #252525;
  border: 1px solid #2A2A2A;
  border-radius: 12px;
  transition: all 300ms;
}

.minimal-card-hover:hover {
  border-color: #404040;
  transform: scale(1.02);  /* Subtle scale */
}
```

### Buttons
**Primary (Accent)**
- Background: `#7C5AFF`
- Hover: `#9575FF`
- Padding: `px-10 py-5` (40px x 20px)
- Border radius: 12px
- Font size: 18px

**Secondary (Outlined)**
- Border: `1px solid #2A2A2A`
- Hover border: `#404040`
- Same padding and sizing as primary

### Project Cards
- **2-column grid** on desktop (not 3)
- Image height: 256px (h-64)
- Card padding: 48px (p-12)
- Title: 24px (text-3xl)
- Description: 18px (text-body)
- Technology tags: Outlined style

### Contact Cards
- Horizontal layout with icon + text
- Icon container: 56px (w-14 h-14)
- Icon background: `accent/10` (10% opacity)
- Padding: 32px (p-8)

## Animation Guidelines

### Timing
All animations use **300-400ms** duration for smoothness without sluggishness.

### Types
1. **Fade In**: Simple opacity 0 → 1
2. **Slide Up**: Subtle 10px upward movement + fade
3. **Scale**: Max 1.02x on hover (barely noticeable)
4. **Color Transitions**: All color changes are smooth

### Easing
- Use `ease-out` for entering animations
- Use `ease-in-out` for hover states

## Layout Rules

### Container Widths
- Hero: `max-w-5xl` (1024px)
- About: `max-w-4xl` (896px)
- Projects: `max-w-7xl` (1280px)
- Contact: `max-w-4xl` (896px)

### Responsive Breakpoints
```css
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large screens */
```

### Grid Patterns
- **Projects**: 1 column (mobile) → 2 columns (lg+)
- **Statistics**: 2 columns (mobile) → 4 columns (md+)
- **Contact**: 1 column (mobile) → 2 columns (md+)

## Key Differences from "Typical" Portfolios

### What We DON'T Do:
❌ Bright, saturated colors  
❌ Multiple gradient colors  
❌ Heavy drop shadows  
❌ Glassmorphism effects  
❌ 3-column project grids (too cramped)  
❌ Aggressive animations  
❌ Tight spacing  

### What We DO:
✅ Muted, refined color palette  
✅ Single accent color (purple)  
✅ Subtle borders instead of shadows  
✅ Minimal, clean aesthetic  
✅ 2-column grid for breathing room  
✅ Barely-there animations  
✅ Generous white space (2-3x typical)  

## Inspiration Sources

This design draws inspiration from:
- **Anthropic** ([anthropic.com](https://anthropic.com)) - Typography scale, spacing, minimal aesthetic
- **Stripe** - Clean, professional feel
- **Linear** - Refined interactions
- **Vercel** - Sophisticated simplicity

## Design Principles

1. **Restraint** - Less is more. Every element earns its place.
2. **Clarity** - Clear hierarchy, easy to scan
3. **Confidence** - Bold typography, not relying on effects
4. **Professionalism** - Enterprise/research aesthetic
5. **Timelessness** - Won't look dated in 2-3 years

## Usage Examples

### Section Header
```tsx
<h2 className="text-section font-bold mb-16 text-center">
  Projects
</h2>
```

### Body Text
```tsx
<p className="text-body-lg text-foreground-secondary leading-relaxed">
  Your content here
</p>
```

### Primary Button
```tsx
<a className="px-10 py-5 bg-accent hover:bg-accent-hover 
              text-white font-medium rounded-xl 
              transition-all duration-200 text-lg">
  View Projects
</a>
```

### Card
```tsx
<div className="minimal-card minimal-card-hover">
  {/* Card content */}
</div>
```

---

**Result**: A portfolio that looks premium, sophisticated, and professional - suitable for enterprise companies or research labs, not just startups.

