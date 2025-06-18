import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const changeLanguage = (newLang) => setLang(newLang);

  const resetLanguage = () => {
    setLang("en");
    localStorage.removeItem("lang");
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, resetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
