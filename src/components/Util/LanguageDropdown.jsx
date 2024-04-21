import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageDropdown = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <select value={language} onChange={handleLanguageChange} className="block p-2 rounded-full text-sm border-2 border-[var(--color-icon)] focus:outline-none focus:ring-0">
        <option value="es">ES</option>
        <option value="en">EN</option>
    </select>
  );
};
