import React, { createContext, useState, useContext } from 'react';

export const LanguageContext = createContext({ language: 'es' });

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Default language

  const changeLanguage = (newLanguage) => setLanguage(newLanguage);
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);