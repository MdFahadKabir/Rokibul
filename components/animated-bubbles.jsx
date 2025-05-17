"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/context/theme-context"

export default function AnimatedBubbles() {
  const { theme } = useTheme()
  const [bubbles, setBubbles] = useState([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Generate random bubbles based on screen size
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Initial call
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Generate bubbles when dimensions change
  useEffect(() => {
    if (dimensions.width === 0) return

    const bubbleCount = Math.floor((dimensions.width * dimensions.height) / 25000) // Adjust density here
    const newBubbles = []

    for (let i = 0; i < bubbleCount; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height * 3, // Extend beyond screen height for continuous effect
        size: Math.random() * 80 + 20, // Size between 20-100px
        duration: Math.random() * 20 + 10, // Animation duration between 10-30s
        delay: Math.random() * -30, // Random start time
        opacity: Math.random() * 0.4 + 0.2, // Increased opacity range between 0.2-0.6
        blur: Math.random() > 0.5, // Some bubbles are blurred for depth effect
      })
    }

    setBubbles(newBubbles)
  }, [dimensions])

  // Get bubble color based on current theme with improved visibility
  const getBubbleColor = (opacity = 0.5) => {
    // Increased base opacity
    switch (theme) {
      case "light":
        return `rgba(100, 150, 255, ${opacity})` // More saturated blue for light theme
      case "dark":
        return `rgba(80, 100, 255, ${opacity})` // Brighter blue for dark theme
      case "blue":
        return `rgba(200, 220, 255, ${opacity})` // Light blue for blue theme
      case "green":
        return `rgba(150, 255, 180, ${opacity})` // Bright green for green theme
      case "purple":
        return `rgba(220, 180, 255, ${opacity})` // Bright purple for purple theme
      default:
        return `rgba(100, 150, 255, ${opacity})`
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle at 30% 30%, ${getBubbleColor(bubble.opacity + 0.2)}, ${getBubbleColor(bubble.opacity)})`, // Add gradient
            boxShadow: bubble.blur
              ? `0 0 ${bubble.size / 3}px ${getBubbleColor(bubble.opacity)}`
              : `0 0 ${bubble.size / 6}px ${getBubbleColor(bubble.opacity / 1.5)}`, // Enhanced glow
            filter: bubble.blur ? "blur(8px)" : "none",
          }}
          initial={{ y: bubble.y }}
          animate={{
            y: -bubble.size * 2,
            x: bubble.x + (Math.random() * 100 - 50),
            rotate: Math.random() * 360,
            scale: [1, 1.1, 0.9, 1.2, 1],
          }}
          transition={{
            y: {
              duration: bubble.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: bubble.delay,
              ease: "linear",
            },
            x: {
              duration: bubble.duration * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: bubble.delay,
              ease: "easeInOut",
              repeatType: "reverse",
            },
            rotate: {
              duration: bubble.duration * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: bubble.delay,
              ease: "linear",
            },
            scale: {
              duration: bubble.duration * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: bubble.delay,
              ease: "easeInOut",
              repeatType: "reverse",
            },
          }}
        />
      ))}
    </div>
  )
}
