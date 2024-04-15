import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageDropdown = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <select value={language} onChange={handleLanguageChange} className='rounded-full border-2 border-sky-800'>
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
};
