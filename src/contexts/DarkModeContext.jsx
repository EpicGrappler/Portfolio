import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

// Helper function to safely access browser APIs
const getInitialDarkMode = () => {
  if (typeof window === 'undefined') return false; // SSR safe
  
  try {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    return false; // Fallback if localStorage is blocked
  }
};

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize after component mounts (client-side only)
  useEffect(() => {
    const initialDarkMode = getInitialDarkMode();
    setIsDark(initialDarkMode);
    setMounted(true);
    
    // Apply class immediately to prevent flash
    document.documentElement.classList.toggle('dark', initialDarkMode);
  }, []);

  // Update localStorage and DOM class when dark mode changes
  useEffect(() => {
    if (!mounted) return; // Don't run on server or before mount
    
    try {
      localStorage.setItem('darkMode', JSON.stringify(isDark));
      document.documentElement.classList.toggle('dark', isDark);
    } catch (error) {
      console.warn('Failed to save dark mode preference:', error);
    }
  }, [isDark, mounted]);

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  // Prevent flash of wrong theme by not rendering until mounted
  if (!mounted) {
    return (
      <DarkModeContext.Provider value={{ isDark: false, toggleDarkMode: () => {}, isLoading: true }}>
        {children}
      </DarkModeContext.Provider>
    );
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode, isLoading: false }}>
      {children}
    </DarkModeContext.Provider>
  );
};