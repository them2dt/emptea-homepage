'use client';

import { useState } from 'react';

/**
 * Color palette with vibrant, bright accent colors
 * Each color includes RGB values and a foreground color for text contrast
 */
const colorPalette = [
  { 
    name: 'Lime', 
    rgb: '221 255 0', 
    foreground: '0 0 0',
    hex: '#ddff00'
  },
  { 
    name: 'Electric Blue', 
    rgb: '0 191 255', 
    foreground: '0 0 0',
    hex: '#00bfff'
  },
  { 
    name: 'Hot Pink', 
    rgb: '255 20 147', 
    foreground: '255 255 255',
    hex: '#ff1493'
  },
  { 
    name: 'Orange', 
    rgb: '255 69 0', 
    foreground: '255 255 255',
    hex: '#ff4500'
  },
  { 
    name: 'Purple', 
    rgb: '138 43 226', 
    foreground: '255 255 255',
    hex: '#8a2be2'
  },
];

/**
 * AccentPicker Component
 * 
 * A fixed bottom-left color picker with a pill-shaped design that allows users 
 * to dynamically change the site's accent color by updating CSS custom properties.
 * 
 * Features:
 * - Fixed positioning at bottom-left
 * - Pill-shaped container with horizontal color options
 * - Circular color swatches with hover/focus states
 * - Keyboard accessible with proper ARIA labels
 * - Instant color updates via CSS variables
 * - Modern glass-morphism design
 * - No persistence - changes are session-only
 */
export default function AccentPicker() {
  const [selectedColor, setSelectedColor] = useState(colorPalette[0]);

  /**
   * Updates the root CSS variables to change the accent color
   * @param color - The color object containing RGB values
   */
  const updateAccentColor = (color: typeof colorPalette[0]) => {
    const root = document.documentElement;
    root.style.setProperty('--accent-color', color.rgb);
    root.style.setProperty('--accent-foreground', color.foreground);
    
    // Update grid color to match accent with 10% opacity
    const rgbValues = color.rgb.split(' ').map(Number);
    const gridColor = `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 0.1)`;
    root.style.setProperty('--grid-color', gridColor);
    
    setSelectedColor(color);
  };

  /**
   * Handles keyboard navigation for accessibility
   */
  const handleKeyDown = (e: React.KeyboardEvent, color: typeof colorPalette[0]) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      updateAccentColor(color);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 z-50">
      {/* Pill-shaped color picker container */}
      <div className="flex items-center gap-1 p-2 bg-obsidian/95 backdrop-blur-md rounded-full shadow-2xl border border-gray-700/50 shadow-black/30">
        {colorPalette.map((color) => (
          <button
            key={color.name}
            onClick={() => updateAccentColor(color)}
            onKeyDown={(e) => handleKeyDown(e, color)}
            className="relative w-12 h-12 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian group"
            style={{ backgroundColor: color.hex }}
            aria-label={`Set accent to ${color.name}`}
            title={color.name}
          >
            {/* Selected indicator */}
            {selectedColor.name === color.name && (
              <div className="absolute inset-0 rounded-full border-3 border-black shadow-lg" />
            )}
            
            {/* Inner circle for depth effect */}
            <div 
              className="absolute inset-1 rounded-full shadow-inner"
              style={{ backgroundColor: color.hex, filter: 'brightness(0.9)' }}
            />
            
            {/* Hover tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-obsidian text-white text-xs px-2 py-1 rounded border border-gray-700/50 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
              {color.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
