"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { useTranslation } from "@/utils/translation"
import { Globe, GraduationCap } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen)
  }

  const changeLanguage = (newLang) => {
    setLanguage(newLang)
    setIsLangMenuOpen(false)
  }

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.cv"), path: "/cv" },
    { name: t("nav.research"), path: "/research" },
    { name: t("nav.blog"), path: "/blog" },
    { name: t("nav.contact"), path: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl">Prof. Smith</span>
          </Link>

          {/* Desktop Navigation - Only visible on md screens and up */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-md transition-colors ${
                  pathname === item.path ? "font-medium text-blue-600" : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Change language"
              >
                <Globe className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1">
                      {["en", "fr", "es", "de", "zh"].map((langOption) => (
                        <button
                          key={langOption}
                          onClick={() => changeLanguage(langOption)}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            language === langOption
                              ? "bg-gray-100 dark:bg-gray-700 text-blue-600"
                              : "hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                        >
                          {t(`language.${langOption}`)}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
