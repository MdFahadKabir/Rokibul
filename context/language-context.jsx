"use client"

import { createContext, useContext, useEffect, useState } from "react"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    // Check if language is stored in localStorage
    const storedLanguage = localStorage.getItem("language")
    if (storedLanguage) {
      setLanguage(storedLanguage)
    } else {
      // If no stored language, check browser language
      const browserLang = navigator.language.split("-")[0]
      if (["en", "fr", "es", "de", "zh"].includes(browserLang)) {
        setLanguage(browserLang)
      }
    }
  }, [])

  useEffect(() => {
    // Store language preference in localStorage
    localStorage.setItem("language", language)

    // Set lang attribute on html element
    document.documentElement.setAttribute("lang", language)
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
