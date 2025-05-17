"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/context/theme-context"
import { useTranslation } from "@/utils/translation"
import { Palette } from "lucide-react"

export default function FloatingThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const changeTheme = (newTheme) => {
    setTheme(newTheme)
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg"
        aria-label="Change theme"
      >
        <Palette className="w-5 h-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: -10 }}
            exit={{ opacity: 0, scale: 0.8, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 w-48"
          >
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium mb-1 px-2">{t("theme.title")}</p>
              {["light", "dark", "blue", "green", "purple"].map((themeOption) => (
                <motion.button
                  key={themeOption}
                  whileHover={{ x: 5 }}
                  onClick={() => changeTheme(themeOption)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-left ${
                    theme === themeOption
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full ${
                      themeOption === "light"
                        ? "bg-gray-100 border border-gray-300"
                        : themeOption === "dark"
                          ? "bg-gray-800 border border-gray-600"
                          : themeOption === "blue"
                            ? "bg-blue-600"
                            : themeOption === "green"
                              ? "bg-green-600"
                              : "bg-purple-600"
                    }`}
                  ></div>
                  <span className="text-sm">{t(`theme.${themeOption}`)}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
