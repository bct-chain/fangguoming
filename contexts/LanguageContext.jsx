'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('portfolio-language');
    const initialLanguage = savedLanguage || 'en';
    setLanguage(initialLanguage);
    // Update HTML lang attribute on mount
    if (typeof document !== 'undefined') {
      document.documentElement.lang = initialLanguage;
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

