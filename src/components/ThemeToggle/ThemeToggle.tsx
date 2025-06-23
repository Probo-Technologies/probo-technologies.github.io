import React, { useState, useEffect } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'default' | 'light' | 'dark'>('dark');

  useEffect(() => {
    // Get saved theme from localStorage or default to 'default'
    const savedTheme = localStorage.getItem('theme') as 'default' | 'light' | 'dark' || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'default' | 'light' | 'dark') => {
    const body = document.body;
    
    // Remove existing theme classes
    body.classList.remove('theme-light', 'theme-dark');
    
    // Apply new theme class
    if (newTheme !== 'default') {
      body.classList.add(`theme-${newTheme}`);
    }
  };

  const cycleTheme = () => {
    const themes: ('default' | 'light' | 'dark')[] = ['default', 'light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun />;
      case 'dark':
        return <Moon />;
      default:
        return <Palette />;
    }
  };

  const getTitle = () => {
    switch (theme) {
      case 'light':
        return 'Switch to Dark Theme';
      case 'dark':
        return 'Switch to Default Theme';
      default:
        return 'Switch to Light Theme';
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