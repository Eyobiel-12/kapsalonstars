import { useState, useEffect } from "react"

interface LanguageSwitcherProps {
  language: "nl" | "en"
  setLanguage: (language: "nl" | "en") => void
  className?: string
}

export default function LanguageSwitcher({ language, setLanguage, className = "" }: LanguageSwitcherProps) {
  // Store language preference in localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", language)
    }
  }, [language])

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={() => setLanguage("nl")}
        className={`px-3 py-1 rounded transition-all ${
          language === "nl" 
            ? "bg-black text-white" 
            : "bg-gray-200 hover:bg-gray-300"
        }`}
        aria-label="Switch to Dutch"
      >
        NL
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded transition-all ${
          language === "en" 
            ? "bg-black text-white" 
            : "bg-gray-200 hover:bg-gray-300"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
} 