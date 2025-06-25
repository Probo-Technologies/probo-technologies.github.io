import React, { useState, useEffect } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'default' | 'light'>('light');

  const applyTheme = (newTheme: 'light' | 'default') => {
    const body = document.body;
    
    // Remove existing theme classes
    body.classList.remove('theme-light');
    
    // Apply new theme class
    if (newTheme !== 'default') {
      body.classList.add(`theme-${newTheme}`);
    }
  };

  const cycleTheme = () => {
    const themes: ('default' | 'light')[] = ['light', 'default'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun />;
      default:
        return <Palette />;
    }
  };

  const getTitle = () => {
    switch (theme) {
      case 'light':
        return 'Switch to light Theme';
      default:
        return 'Switch to Default Theme';
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="theme-toggle"
      title={getTitle()}
      aria-label={getTitle()}
    >
      {getIcon()}
    </button>
  );
};

export default ThemeToggle;