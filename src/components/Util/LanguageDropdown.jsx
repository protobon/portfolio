import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageDropdown = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">EN</option>
      <option value="es">ES</option>
      {/* Add more language options as needed */}
    </select>
  );
};
