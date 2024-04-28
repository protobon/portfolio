import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageDropdown = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };
  return (
    <select value={language} onChange={handleLanguageChange} className="absolute top-5 right-4 p-1 z-10 rounded-full text-sm border-2 border-[var(--color-icon)] focus:outline-none focus:ring-0">
        <option value="es">ES</option>
        <option value="en">EN</option>
    </select>
  );
};
