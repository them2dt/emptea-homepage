# Font Implementation Guide

This document outlines how fonts are implemented and configured in web applications using Next.js 13+ and Tailwind CSS v4. The examples shown use **ClashGrotesk** as a reference font, but the same patterns can be applied to any font family.

## Font Files

### Location
- **Path**: `app/style/fonts/ClashGrotesk-Variable.ttf`
- **Size**: 106KB
- **Format**: Variable TrueType Font (TTF) - recommended for modern browsers

### Font Characteristics
- **Type**: Variable font with weight range 200-700
- **Style**: Modern, geometric sans-serif
- **Display**: Optimized with `font-display: swap` for performance

## Implementation Layers

### 1. Next.js Font Loading (`app/layout.tsx`)

```typescript
import localFont from "next/font/local";

// Current implementation with ClashGrotesk
const clashGrotesk = localFont({
  src: "./style/fonts/ClashGrotesk-Variable.ttf",
  variable: "--font-clash-grotesk",
  display: "swap",
});
```

**Key Features:**
- Uses Next.js `localFont` for optimal performance
- CSS variable `--font-clash-grotesk` for global access
- `display: swap` ensures text visibility during font load

### 2. CSS Font Face Declaration (`app/style/globals.css`)

```css
@font-face {
  font-family: 'ClashGrotesk';
  src: url('./fonts/ClashGrotesk-Variable.ttf') format('truetype');
  font-weight: 200 700; /* Variable weight range */
  font-style: normal;
  font-display: swap; /* Improve loading performance */
}
```

**Benefits:**
- Fallback declaration for broader browser support
- Variable weight support (200-700)
- Performance optimization with `font-display: swap`

### 3. Tailwind CSS Integration

#### Theme Configuration (`app/style/globals.css`)
```css
@theme {
  /* Primary sans-serif font stack with ClashGrotesk as the main font */
  --font-sans: 'ClashGrotesk', ui-sans-serif, system-ui, sans-serif;
  
  /* Direct access to ClashGrotesk font */
  --font-clash: 'ClashGrotesk', sans-serif;
  
  /* Monospace font stack for code and technical content */
  --font-mono: ui-monospace, 'SFMono-Regular', 'Menlo', 'Monaco', monospace;
}
```

#### Tailwind Config (`tailwind.config.js`)
```javascript
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  // ... other config
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-clash-grotesk)", ...fontFamily.sans],
      },
    },
  },
};
```

## Usage Patterns

### In Layout Component
```typescript
<body className={`${clashGrotesk.variable} font-sans antialiased flex flex-col min-h-screen`}>
```

**How it works**: The `clashGrotesk.variable` applies the CSS variable `--font-clash-grotesk` to the body element, making it available throughout the application.

### In CSS Classes
- `font-sans` - Primary font stack (ClashGrotesk + fallbacks)
- `font-clash` - Direct ClashGrotesk access
- `font-mono` - Monospace fallback

### Font Weight Classes
Available weights through the variable font:
- `font-light` (200)
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)

## Performance Optimizations

1. **Variable Font**: Single file contains all weights
2. **Font Display Swap**: Text remains visible during loading
3. **Local Font Loading**: No external network requests
4. **CSS Variables**: Efficient font family switching

## Browser Support

- **Modern Browsers**: Full variable font support
- **Legacy Browsers**: Fallback to system fonts
- **Progressive Enhancement**: Graceful degradation

## Best Practices

1. **Always use Tailwind classes** (`font-sans`, `font-clash`) instead of hardcoded font-family
2. **Leverage variable weights** for consistent typography hierarchy
3. **Use semantic class names** that reflect design intent
4. **Maintain fallback fonts** for accessibility and compatibility

## Current Implementation Summary

This project currently uses:
- **Single Font**: ClashGrotesk Variable Font (TTF)
- **Font Loading**: Next.js `localFont` with CSS variable `--font-clash-grotesk`
- **Integration**: Tailwind CSS v4 with `@theme` directive
- **Fallbacks**: System fonts (ui-sans-serif, system-ui, sans-serif)
- **Performance**: Font display swap and local loading optimization

## Maintenance

- Font files are stored in `app/style/fonts/`
- CSS variables are defined in `app/style/globals.css`
- Next.js configuration is in `app/layout.tsx`
- Tailwind integration is in `tailwind.config.js`

## Future Considerations

- Consider adding additional font weights if needed
- Monitor font loading performance metrics
- Evaluate web font optimization tools for production builds
- Consider adding font subsetting for specific character sets
