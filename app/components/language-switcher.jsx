'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { IoLanguage } from 'react-icons/io5';

function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    changeLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#1a1443] hover:bg-[#25213b] transition-colors duration-300 text-white"
        aria-label="Change language"
      >
        <IoLanguage size={20} />
        <span className="text-sm font-medium">{language === 'en' ? 'EN' : '中文'}</span>
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-32 bg-[#1a1443] rounded-md shadow-lg z-20 border border-[#25213b]">
            <button
              onClick={toggleLanguage}
              className="w-full text-left px-4 py-2 text-sm text-white hover:bg-[#25213b] transition-colors duration-200 rounded-md"
            >
              {language === 'en' ? '中文' : 'English'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default LanguageSwitcher;

