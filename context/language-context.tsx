"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "nl" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string, translations: Record<string, string>) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("nl")

  // Load language preference from localStorage on initial render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("preferredLanguage") as Language
      if (savedLanguage && (savedLanguage === "nl" || savedLanguage === "en")) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  // Translation helper function
  const t = (key: string, translations: Record<string, string>) => {
    const translationKey = `${key}_${language}`
    return translations[translationKey] || translations[`${key}_nl`] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
} 