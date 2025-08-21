# SEO Setup Documentation

This document explains the comprehensive SEO configuration implemented in the Mappable project, covering everything from basic metadata to advanced social media optimization.

## Overview

The project uses Next.js 13+ App Router with a centralized metadata configuration in `src/app/layout.tsx`. This approach ensures consistent SEO across all pages while maintaining clean, maintainable code.

## Core Metadata Configuration

### Basic Information
- **Title**: "Mappable"
- **Description**: "Global data, simplified on a map."
- **Generator**: Next.js
- **Application Name**: Mappable
- **Category**: Technology

### Author & Publisher
- **Creator**: Maruthan
- **Publisher**: Maruthan
- **Author URL**: https://emptea.xyz

### Keywords
Optimized for search engines with relevant terms:
- Map
- Data Visualization
- Custom Maps
- Geography
- World Map

## Favicon Configuration

### Icon Types
The project uses a single `favicon.png` file for multiple icon purposes:

```typescript
icons: {
  icon: "/favicon.png",           // Standard favicon
  shortcut: "/favicon.png",       // Shortcut icon
  apple: "/favicon.png",          // Apple touch icon
  other: {
    rel: "apple-touch-icon-precomposed",
    url: "/favicon.png",
  },
}
```

### File Location
- **Path**: `/public/favicon.png`
- **Size**: 14KB
- **Format**: PNG

## Social Media Optimization

### Open Graph (Facebook, LinkedIn, etc.)
```typescript
openGraph: {
  title: "Mappable",
  description: "Global data, simplified on a map.",
  url: "https://mappable.emptea.xyz",
  siteName: "Mappable",
  images: [
    {
      url: "/social-image.png",
      width: 1200,
      height: 630,
      alt: "Mappable Social Image",
    },
  ],
  locale: "en_US",
  type: "website",
}
```

### Twitter Card
```typescript
twitter: {
  card: "summary_large_image",
  title: "Mappable",
  description: "Global data, simplified on a map.",
  creator: "@maruthan",
  images: ["/social-image.png"],
}
```

### Social Preview Image
- **File**: `/public/social-image.png`
- **Dimensions**: 1200x630px (optimal for social sharing)
- **Size**: 13KB
- **Alt Text**: "Mappable Social Image"

## PWA Manifest

### Web App Configuration
Located at `/public/manifest.json`:

```json
{
  "name": "Mappable",
  "short_name": "Mappable",
  "description": "Global data, simplified on a map.",
  "icons": [
    {
      "src": "/favicon.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "/favicon.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

### PWA Features
- **Display Mode**: Standalone (app-like experience)
- **Theme Color**: Black (#000000)
- **Background Color**: White (#ffffff)
- **Icon Sizes**: 48x48, 192x192, 512x512 (covers most device requirements)

## Search Engine Optimization

### Robots Configuration
File: `/public/robots.txt`

```txt
User-agent: *
Allow: /
Sitemap: https://mappable.emptea.xyz/sitemap.xml
```

### Sitemap
File: `/public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mappable.emptea.xyz/</loc>
    <lastmod>2024-07-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Google Bot Specific Settings
```typescript
robots: {
  index: true,
  follow: true,
  nocache: true,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
}
```

## Technical Implementation

### Metadata Base URL
```typescript
metadataBase: new URL("https://mappable.emptea.xyz/")
```

### Format Detection
```typescript
formatDetection: {
  email: false,
  address: false,
  telephone: false,
}
```

### Referrer Policy
```typescript
referrer: "origin-when-cross-origin"
```

## File Structure

```
public/
├── favicon.png          # Main favicon (48x48, 192x192, 512x512)
├── social-image.png     # Social media preview (1200x630)
├── manifest.json        # PWA manifest
├── robots.txt          # Search engine directives
└── sitemap.xml        # Site structure for search engines
```

## Best Practices Implemented

1. **Consistent Branding**: All metadata uses consistent title and description
2. **Social Media Ready**: Optimized images and metadata for all major platforms
3. **PWA Support**: Full progressive web app capabilities
4. **SEO Friendly**: Proper robots.txt, sitemap, and meta tags
5. **Accessibility**: Alt text for all images
6. **Performance**: Optimized image sizes and formats

## Maintenance Notes

- **Social Image**: Update `/public/social-image.png` when branding changes
- **Favicon**: Ensure `/public/favicon.png` maintains quality across all sizes
- **Metadata**: Update description and keywords as the project evolves
- **Sitemap**: Regenerate when new pages are added
- **Manifest**: Update theme colors and app information as needed

## Testing SEO

### Social Media Testing
- **Facebook**: Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **Twitter**: Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- **LinkedIn**: Use [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Technical SEO
- **Google**: Use [Google Search Console](https://search.google.com/search-console)
- **Mobile**: Test with [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- **Performance**: Use [PageSpeed Insights](https://pagespeed.web.dev/)

## Future Enhancements

1. **Dynamic Metadata**: Implement per-page metadata for better SEO
2. **Structured Data**: Add JSON-LD schema markup
3. **Image Optimization**: Implement next/image for better performance
4. **Analytics**: Add Google Analytics or similar tracking
5. **A/B Testing**: Implement metadata testing for optimization
