'use client';

import { useState } from 'react';

/**
 * AccentDemo Component
 * 
 * Demonstrates various UI elements that use the dynamic accent color
 * to showcase how the color picker affects different parts of the interface.
 * 
 * Includes:
 * - Primary buttons with accent backgrounds
 * - Outline buttons with accent borders
 * - Input fields with accent focus rings
 * - Links with accent hover states
 * - Icons and indicators using accent colors
 */
export default function AccentDemo() {
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">
          Accent Color Demo
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Use the color picker in the bottom-left corner to see how the accent color 
          changes across different UI elements instantly.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white">Buttons</h3>
        <div className="flex flex-wrap gap-4">
          {/* Primary Button */}
          <button className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian transition-all duration-150">
            Primary Button
          </button>

          {/* Outline Button */}
          <button className="px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian transition-all duration-150">
            Outline Button
          </button>

          {/* Ghost Button */}
          <button className="px-6 py-3 text-accent font-semibold rounded-lg hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian transition-all duration-150">
            Ghost Button
          </button>
        </div>
      </div>

      {/* Form Elements Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white">Form Elements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Text Input */}
          <div className="space-y-2">
            <label htmlFor="demo-input" className="block text-sm font-medium text-gray-300">
              Text Input
            </label>
            <input
              id="demo-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Focus me to see accent ring"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-150"
            />
          </div>

          {/* Checkbox */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Checkbox
            </label>
            <div className="flex items-center space-x-3">
              <label htmlFor="demo-checkbox" className="flex items-center cursor-pointer">
                <input
                  id="demo-checkbox"
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="w-5 h-5 text-accent bg-gray-800 border-gray-600 rounded focus:ring-accent focus:ring-2 focus:ring-offset-0"
                />
                <span className="ml-2 text-gray-300">
                  {isChecked ? 'Checked with accent color' : 'Click to check'}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Links and Text Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white">Links & Text</h3>
        <div className="space-y-4">
          <p className="text-gray-300">
            This paragraph contains a{' '}
            <a 
              href="#" 
              className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian rounded"
              onClick={(e) => e.preventDefault()}
            >
              highlighted link
            </a>{' '}
            that uses the accent color.
          </p>
          
          <div className="flex space-x-6">
            <button className="text-accent hover:text-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian rounded transition-colors duration-150">
              Text Button
            </button>
            <button className="text-gray-300 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian rounded transition-colors duration-150">
              Hover to Accent
            </button>
          </div>
        </div>
      </div>

      {/* Status Indicators Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white">Indicators & Badges</h3>
        <div className="flex flex-wrap gap-4">
          {/* Badge */}
          <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
            New Feature
          </span>

          {/* Dot Indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span className="text-gray-300">Active Status</span>
          </div>

          {/* Progress Bar */}
          <div className="w-48 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Progress</span>
              <span className="text-accent font-medium">70%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-accent h-2 rounded-full transition-all duration-300" 
                style={{ width: '70%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-white">Cards & Borders</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Accent Border Card */}
          <div className="p-6 bg-gray-800 border-l-4 border-accent rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-2">
              Accent Border Card
            </h4>
            <p className="text-gray-300">
              This card has an accent-colored left border that changes with the color picker.
            </p>
          </div>

          {/* Accent Background Card */}
          <div className="p-6 bg-accent text-accent-foreground rounded-lg">
            <h4 className="text-lg font-semibold mb-2">
              Accent Background Card
            </h4>
            <p className="opacity-90">
              This card uses the accent color as its background with appropriate foreground text.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
