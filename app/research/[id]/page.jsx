"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/utils/translation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Users,
  BookOpen,
  Download,
  Share2,
} from "lucide-react";
import { useParams } from "next/navigation";

export default function ResearchPaper() {
  const { t } = useTranslation();
  const params = useParams();
  const id = Number(params.id);

  // Get papers from research.papers array and find the one with matching id
  const papers = t("research.papers");
  const paper = papers.find((p) => p.id === id);
  console.log("paper test", paper);

  // Handle case when paper is not found
  if (!paper) {
    return (
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/research"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <ArrowLeft size={18} />
            {t("research.back_to_research")}
          </Link>
        </motion.div>

        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Paper Not Found</h1>
          <p>
            The research paper you're looking for doesn't exist or hasn't been
            added yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8 bg-white inline-block rounded-full px-2 py-1"
      >
        <Link
          href="/research"
          className="flex items-center gap-2 text-blue-600 hover:underline "
        >
          <ArrowLeft size={18} />
          {t("research.back_to_research")}
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{paper.title}</h1>
          <div className="flex flex-wrap gap-y-3 gap-x-6 mb-6 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <BookOpen size={18} />
              <span>{paper.journal}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={18} />
              <span>{paper.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={18} />
              <span>{paper.authors}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            <button className="flex items-center gap-2 border-0 border-current rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <Share2 size={18} />
              {t("research.share")}
            </button>
          </div>
          <div className="border-t border-b py-4 mb-6">
            <h2 className="font-semibold mb-2">{t("research.abstract")}</h2>
            <p>{paper.abstract}</p>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          {paper.sections &&
            paper.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
                <p className="leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
        </div>

        {paper.references && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-3">
              {t("research.references")}
            </h2>
            <ul className="space-y-2 list-decimal pl-5">
              {paper.references.map((reference, index) => (
                <li key={index}>{reference}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
