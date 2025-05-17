"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useTranslation } from "@/utils/translation"
import { Home, FileText, BookOpen, PenTool, Mail } from "lucide-react"

export default function MobileNav() {
  const pathname = usePathname()
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Hide navigation when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: t("nav.home"), path: "/", icon: Home },
    { name: t("nav.cv"), path: "/cv", icon: FileText },
    { name: t("nav.research"), path: "/research", icon: BookOpen },
    { name: t("nav.blog"), path: "/blog", icon: PenTool },
    { name: t("nav.contact"), path: "/contact", icon: Mail },
  ]

  return (
    <motion.nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.path

          return (
            <Link key={item.path} href={item.path} className="w-full">
              <div className="flex flex-col items-center py-2">
                <div className="relative">
                  <Icon className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-600 dark:text-gray-400"}`} />
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 w-5 h-1 bg-blue-600 rounded-full"
                      initial={{ x: "-50%" }}
                      animate={{ x: "-50%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
                <span
                  className={`text-xs mt-1 ${
                    isActive ? "font-medium text-blue-600" : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}
