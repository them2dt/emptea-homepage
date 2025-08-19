# Current Tailwind CSS v4 Setup

This document outlines the current Tailwind CSS v4 configuration implemented in this project. The setup uses the modern CSS-based configuration approach introduced in Tailwind CSS v4.

## Overview

This project currently uses **Tailwind CSS v4**, which represents a significant evolution from v3. The new version introduces a CSS-based configuration system that replaces the traditional JavaScript configuration approach, offering better performance and easier maintenance.

## Dependencies

### Core Packages
```json
{
  "devDependencies": {
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4"
  }
}
```

**Current Versions**: These are the exact versions currently installed in this project.

### Key Changes from v3
- **Tailwind CSS v4**: Latest major version with CSS-based configuration
- **@tailwindcss/postcss**: New PostCSS plugin for v4
- **No @tailwindcss/forms or @tailwindcss/typography**: These are now built-in

## Configuration Files

### 1. PostCSS Configuration (`postcss.config.mjs`)

```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

**Purpose**: Configures PostCSS to process Tailwind CSS directives
**Note**: Uses the new `@tailwindcss/postcss` plugin instead of the old `tailwindcss` plugin

### 2. Tailwind Config (`tailwind.config.js`)

```javascript
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-clash-grotesk)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
```

**Key Features**:
- **Content Paths**: Scans all relevant directories for class usage
- **Font Family Extension**: Integrates custom fonts with Tailwind's default system
- **Minimal Configuration**: Most styling is now handled in CSS

## CSS-Based Configuration

### 3. Main Stylesheet (`app/style/globals.css`)

The heart of Tailwind CSS v4 configuration is in the CSS file using the new `@theme` directive. This is the current implementation in this project.

#### Tailwind Imports
```css
/* Import Tailwind CSS base, components, and utilities */
@import "tailwindcss";
@tailwind utilities;
```

**Note**: 
- No `@tailwind base` or `@tailwind components` needed in v4
- `@import "tailwindcss"` provides the core framework
- `@tailwind utilities` generates utility classes

#### Theme Configuration (`@theme` directive)
```css
@theme {
  /* Typography */
  --font-sans: 'ClashGrotesk', ui-sans-serif, system-ui, sans-serif;
  --font-clash: 'ClashGrotesk', sans-serif;
  --font-mono: ui-monospace, 'SFMono-Regular', 'Menlo', 'Monaco', monospace;

  /* Color System */
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-500: #0ea5e9;
  --color-primary-900: #0c4a6e;
  
  /* Spacing Extensions */
  --spacing-18: 4.5rem;
  --spacing-88: 22rem;
  --spacing-128: 32rem;
  
  /* Border Radius */
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-3xl: 2rem;
  
  /* Shadows */
  --shadow-soft: 0 2px 15px -3px rgb(0 0 0 / 0.07), 0 10px 20px -2px rgb(0 0 0 / 0.04);
  --shadow-medium: 0 4px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04);
  --shadow-strong: 0 10px 40px -10px rgb(0 0 0 / 0.15), 0 2px 10px -2px rgb(0 0 0 / 0.05);
  
  /* Animation Timing */
  --animate-fast: 0.15s;
  --animate-normal: 0.3s;
  --animate-slow: 0.5s;
  
  /* Custom Animations */
  --animate-fade-in: fade-in 0.5s ease-in-out;
  --animate-slide-up: slide-up 0.3s ease-out;
  --animate-slide-down: slide-down 0.3s ease-out;
  --animate-scale-in: scale-in 0.2s ease-out;
  
  /* Responsive Breakpoints */
  --breakpoint-xs: 475px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

## Current Design System Implementation

### Color System
This project currently implements a comprehensive color system with semantic naming:

#### Primary Colors (Blue Theme)
- **50-100**: Light backgrounds and subtle elements
- **200-300**: Disabled states and secondary elements  
- **400-500**: Hover states and main brand colors
- **600-700**: Active states and emphasis
- **800-900**: High contrast text and maximum emphasis

#### Secondary Colors (Neutral Grays)
- **50-200**: Backgrounds, borders, and dividers
- **300-500**: Text hierarchy (disabled, placeholder, secondary)
- **600-800**: Body text and headings
- **900**: Maximum contrast

#### Accent Colors
- **Success**: Green (#10b981) for confirmations
- **Warning**: Orange (#f59e0b) for cautions
- **Error**: Red (#ef4444) for destructive actions
- **Info**: Blue (#3b82f6) for informational messages

### Spacing System
This project currently extends Tailwind's default spacing with these custom values:
- **18**: 4.5rem (72px) - Medium-large spacing
- **88**: 22rem (352px) - Extra large spacing
- **128**: 32rem (512px) - Maximum spacing for layouts

### Animation System
This project currently includes these pre-configured animation combinations:
- **fade-in**: Smooth opacity transitions
- **slide-up/down**: Directional movements with fade
- **scale-in**: Gentle emphasis effects

## Current Dark Mode Implementation

### Automatic Dark Mode
```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;  /* Dark background */
    --foreground: #ededed;  /* Light foreground */
  }
}
```

**Current Features**:
- **System Preference**: Automatically follows user's OS setting
- **CSS Variables**: Only base colors need overrides
- **Seamless Switching**: All other colors remain consistent

## Current Custom Animations

### Keyframe Definitions
These are the exact keyframes currently implemented in this project:

```css
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slide-up {
  0% { 
    transform: translateY(10px);
    opacity: 0;
  }
  100% { 
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-down {
  0% { 
    transform: translateY(-10px);
    opacity: 0;
  }
  100% { 
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes scale-in {
  0% { 
    transform: scale(0.95);
    opacity: 0;
  }
  100% { 
    transform: scale(1);
    opacity: 1;
  }
}
```

## Current Custom Utilities

### Custom Utilities
This project currently includes these custom utility classes:

```css
.text-balance {
  text-wrap: balance;
}

.text-pretty {
  text-wrap: pretty;
}
```

**Current Modern CSS Features**:
- **Text Balance**: Improves line length balance in headings
- **Text Pretty**: Optimizes text wrapping to avoid awkward breaks

## Migration from Tailwind v3

### What Changed
1. **Configuration**: From `tailwind.config.js` to CSS `@theme` directive
2. **PostCSS Plugin**: From `tailwindcss` to `@tailwindcss/postcss`
3. **Built-in Features**: Forms and typography plugins are now included
4. **Performance**: Better tree-shaking and CSS generation

### What Stayed the Same
1. **Utility Classes**: All familiar utility classes work the same way
2. **Responsive Design**: Same breakpoint system
3. **Component Patterns**: Same approach to building UI components

## Best Practices

### 1. CSS Organization
- Keep all theme configuration in the `@theme` block
- Use semantic naming for custom properties
- Group related properties together with clear comments

### 2. Color Management
- Use CSS custom properties for dynamic theming
- Maintain consistent color scales (50-900)
- Reference base colors in theme colors for consistency

### 3. Animation Design
- Keep animations subtle and purposeful
- Use consistent timing values
- Combine transforms with opacity for smooth effects

### 4. Responsive Design
- Leverage custom breakpoints when needed
- Use Tailwind's built-in responsive prefixes
- Test across all defined breakpoints

## Troubleshooting

### Common Issues

#### PostCSS Plugin Not Found
```bash
npm install @tailwindcss/postcss
```

#### CSS Variables Not Working
- Ensure variables are defined within `@theme` block
- Check that CSS file is imported in your main layout
- Verify PostCSS is processing the file correctly

#### Utility Classes Missing
- Check content paths in `tailwind.config.js`
- Ensure CSS file is being processed
- Verify `@import "tailwindcss"` is present

## Performance Considerations

### Benefits of v4
1. **Better Tree-shaking**: Only generates used utilities
2. **CSS-based Configuration**: Faster build times
3. **Built-in Features**: No additional plugin overhead
4. **Modern CSS**: Leverages latest browser features

### Optimization Tips
1. **Content Scanning**: Keep content paths specific to your project
2. **CSS Variables**: Use for dynamic values that change frequently
3. **Animation Performance**: Prefer `transform` and `opacity` over layout properties

## Future Considerations

### Potential Enhancements
- **CSS Container Queries**: For component-based responsive design
- **CSS Nesting**: For more complex component styles
- **CSS Custom Properties**: For dynamic theme switching
- **Performance Monitoring**: Track CSS bundle sizes and loading times

### Maintenance
- **Regular Updates**: Keep Tailwind CSS updated for latest features
- **Browser Support**: Monitor CSS feature support in target browsers
- **Performance Audits**: Regular checks of CSS bundle size and loading
- **Documentation**: Keep this guide updated with project-specific changes
