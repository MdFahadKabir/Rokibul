"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  useEffect(() => {
    const handleLinkHover = () => setCursorVariant("link")
    const handleLinkLeave = () => setCursorVariant("default")
    const handleButtonHover = () => setCursorVariant("button")
    const handleButtonLeave = () => setCursorVariant("default")

    const links = document.querySelectorAll("a, button")

    links.forEach((link) => {
      if (link.tagName === "A") {
        link.addEventListener("mouseenter", handleLinkHover)
        link.addEventListener("mouseleave", handleLinkLeave)
      } else {
        link.addEventListener("mouseenter", handleButtonHover)
        link.addEventListener("mouseleave", handleButtonLeave)
      }
    })

    return () => {
      links.forEach((link) => {
        if (link.tagName === "A") {
          link.removeEventListener("mouseenter", handleLinkHover)
          link.removeEventListener("mouseleave", handleLinkLeave)
        } else {
          link.removeEventListener("mouseenter", handleButtonHover)
          link.removeEventListener("mouseleave", handleButtonLeave)
        }
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
      backgroundColor: "var(--cursor-color, rgb(var(--foreground-rgb)))",
      mixBlendMode: "difference",
    },
    link: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: "rgba(var(--foreground-rgb), 0.2)",
      border: "2px solid rgb(var(--foreground-rgb))",
      mixBlendMode: "difference",
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(var(--foreground-rgb), 0.1)",
      border: "2px solid rgb(var(--foreground-rgb))",
      mixBlendMode: "difference",
    },
  }

  // Only show custom cursor on desktop
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  if (isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}
