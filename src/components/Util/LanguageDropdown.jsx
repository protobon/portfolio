import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageDropdown = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <select value={language} onChange={handleLanguageChange} className='p-1 my-3 text-sm rounded-full border-2 border-[var(--color-icon)]'>
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
};
