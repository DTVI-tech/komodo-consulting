import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en } from "./translations/en";
import { pt } from "./translations/pt";

export type Language = "en" | "pt";

type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectDefaultLanguage(): Language {
  // 1. Check localStorage for previous selection
  const stored = localStorage.getItem("komodo-lang");
  if (stored === "en" || stored === "pt") return stored;

  // 2. Check browser language
  const browserLang = navigator.language || (navigator as any).userLanguage || "";
  if (browserLang.toLowerCase().startsWith("pt")) return "pt";

  // 3. Default to English
  return "en";
}

const translations: Record<Language, Translations> = { en, pt };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(detectDefaultLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("komodo-lang", lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
