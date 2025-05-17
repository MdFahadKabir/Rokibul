"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/utils/translation"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function Blog() {
  const { t } = useTranslation()
  const [category, setCategory] = useState("all")

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in Education",
      excerpt:
        "Exploring how AI technologies are transforming educational experiences and what this means for students and educators.",
      date: "May 15, 2023",
      readTime: "8 min read",
      category: "ai",
      image: "/futuristic-ai-classroom.png",
    },
    {
      id: 2,
      title: "Ethics in Computer Science Research",
      excerpt: "Discussing the ethical considerations that should guide computer science research and development.",
      date: "April 22, 2023",
      readTime: "6 min read",
      category: "ethics",
      image: "/ethics-in-technology.png",
    },
    {
      id: 3,
      title: "Understanding Deep Learning Architectures",
      excerpt:
        "A beginner-friendly guide to understanding the fundamentals of deep learning neural network architectures.",
      date: "March 10, 2023",
      readTime: "10 min read",
      category: "ai",
      image: "/placeholder.svg?height=400&width=600&query=neural network visualization",
    },
    {
      id: 4,
      title: "The Importance of Diversity in Tech",
      excerpt: "Why diversity and inclusion are crucial for innovation and problem-solving in the technology sector.",
      date: "February 28, 2023",
      readTime: "7 min read",
      category: "society",
      image: "/placeholder.svg?height=400&width=600&query=diverse group of technology professionals",
    },
    {
      id: 5,
      title: "Quantum Computing: A Primer",
      excerpt: "An introduction to quantum computing concepts and their potential impact on computational problems.",
      date: "January 15, 2023",
      readTime: "9 min read",
      category: "computing",
      image: "/placeholder.svg?height=400&width=600&query=quantum computer conceptual image",
    },
    {
      id: 6,
      title: "Teaching Computer Science Effectively",
      excerpt: "Strategies and approaches for effective computer science education at university level.",
      date: "December 5, 2022",
      readTime: "5 min read",
      category: "education",
      image: "/placeholder.svg?height=400&width=600&query=computer science classroom",
    },
  ]

  const filteredPosts = category === "all" ? blogPosts : blogPosts.filter((post) => post.category === category)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">{t("blog.title")}</h1>
        <p className="max-w-2xl mx-auto text-lg">{t("blog.description")}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mb-8"
      >
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("all")}
            className={`px-4 py-2 rounded-full text-sm ${
              category === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {t("blog.all_categories")}
          </button>
          {["ai", "ethics", "society", "computing", "education"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              {t(`blog.category_${cat}`)}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative h-48">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                  {t(`blog.category_${post.category}`)}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center mr-4">
                  <Calendar size={16} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline flex items-center gap-1">
                {t("blog.read_more")}
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredPosts.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-xl">{t("blog.no_posts")}</p>
        </motion.div>
      )}
    </div>
  )
}
