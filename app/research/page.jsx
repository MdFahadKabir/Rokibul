"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/utils/translation"
import Link from "next/link"
import { useState } from "react"
import { Search, ArrowRight, Calendar, Users, BookOpen } from "lucide-react"

export default function Research() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all")
  const papers = t("research.papers")
  console.log(papers)
  
  const filteredPapers = papers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filter === "all" || paper.category === filter
    return matchesSearch && matchesFilter
  })

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
        <h1 className="text-4xl font-bold mb-4">{t("research.title")}</h1>
        <p className="max-w-2xl mx-auto text-lg">{t("research.description")}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={t("research.search_placeholder")}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">{t("research.filter_all")}</option>
            <option value="machine-learning">{t("research.filter_ml")}</option>
            <option value="neural-networks">{t("research.filter_nn")}</option>
            <option value="ethics">{t("research.filter_ethics")}</option>
            <option value="computer-vision">{t("research.filter_cv")}</option>
          </select>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredPapers.map((paper) => (
          <motion.div
            key={paper.id}
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{paper.title}</h2>
            <div className="flex flex-wrap gap-y-2 gap-x-4 mb-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-1">
                <BookOpen size={16} />
                <span>{paper.journal}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{paper.year}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>{paper.authors}</span>
              </div>
            </div>
            <p className="mb-4">{paper.abstract}</p>
            <Link
              href={`/research/${paper.id}`}
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              {t("research.read_more")}
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {filteredPapers.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-xl">{t("research.no_results")}</p>
        </motion.div>
      )}
    </div>
  )
}
