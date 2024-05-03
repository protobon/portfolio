import React, { createContext, useState, useContext } from 'react';

export const LanguageContext = createContext({ language: 'es' });

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Default language

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);