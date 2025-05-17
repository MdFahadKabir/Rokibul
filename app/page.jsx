"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/utils/translation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/context/theme-context";

export default function Home() {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

  console.log(theme);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {isLoaded && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={item} className="order-2 md:order-1">
            <motion.h1
              className={`text-4xl md:text-6xl font-bold mb-4 ${
                theme === "light"
                  ? "text-black"
                  : theme === "dark"
                  ? "text-white"
                  : theme === "blue"
                  ? "text-blue-500"
                  : theme === "green"
                  ? "text-green-500"
                  : "text-purple-500"
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t("home.title")}
            </motion.h1>
            <motion.h2
              className={`text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-300 ${
                theme === "light"
                  ? "text-gray-600"
                  : theme === "dark"
                  ? "text-gray-300"
                  : theme === "blue"
                  ? "text-blue-500 dark:text-blue-400"
                  : theme === "green"
                  ? "text-green-500 dark:text-green-400"
                  : "text-purple-500 dark:text-purple-400"
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("home.subtitle")}
            </motion.h2>
            <motion.p
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t("home.introduction")}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/research"
                className={`px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors ${
                  theme === "light"
                    ? "bg-blue-600"
                    : theme === "dark"
                    ? "bg-blue-600"
                    : theme === "blue"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : theme === "green"
                    ? "bg-green-600 hover:bg-green-700"
                    : theme === "purple"
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {t("home.research_button")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/cv"
                className={`px-6 py-3 border border-current rounded-full flex items-center gap-2 hover:bg-gray-100  transition-colors ${
                  theme === "light"
                    ? "bg-gray-100"
                    : theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : theme === "blue"
                    ? "bg-transparent hover:bg-blue-500"
                    : theme === "green"
                    ? "bg-transparent hover:bg-green-500"
                    : theme === "purple"
                    ? "bg-transparent hover:bg-purple-500"
                    : "bg-gray-100"
                }`}
              >
                {t("home.cv_button")}
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={item}
            className="order-1 md:order-2 flex justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 ${
                theme === "light"
                  ? "border-blue-600"
                  : theme === "dark"
                  ? "border-blue-600"
                  : theme === "blue"
                  ? "border-blue-600 hover:border-blue-700"
                  : theme === "green"
                  ? "border-green-600 hover:border-green-700"
                  : theme === "purple"
                  ? "border-purple-600 hover:border-purple-700"
                  : "border-blue-600 hover:border-blue-700"
                }`}
            >
              <Image
                src="/university-professor-portrait.png"
                alt={t("home.profile_alt")}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-24"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("home.research_interests")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg ${
                theme === "light"
                  ? "bg-white"
                  : theme === "dark"
                  ? "bg-gray-800"
                  : theme === "blue"
                  ? "bg-blue-500"
                  : theme === "green"
                  ? "bg-green-500"
                  : "bg-purple-500"
              }
            
            `}
            >
              <h3 className="text-xl font-semibold mb-3">
                {t(`home.interest_${i}_title`)}
              </h3>
              <p>{t(`home.interest_${i}_description`)}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-24"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("home.latest_publications")}
        </h2>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg ${
                theme === "light"
                  ? "bg-white"
                  : theme === "dark"
                  ? "bg-gray-800"
                  : theme === "blue"
                  ? "bg-blue-500"
                  : theme === "green"
                  ? "bg-green-500"
                  : "bg-purple-500"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">
                {t(`home.publication_${i}_title`)}
              </h3>
              <p className={`text-sm text-gray-500 dark:text-gray-400 mb-3 ${
                theme === "light"
                  ? "text-gray-500"
                  : theme === "dark"
                  ? "text-gray-400"
                  : theme === "blue"
                  ? "text-white"
                  : theme === "green"
                  ? "text-white"
                  : "text-white"
              }`}>
                {t(`home.publication_${i}_journal`)}
              </p>
              <p className="mb-3">{t(`home.publication_${i}_abstract`)}</p>
              <Link
                href={`/research/paper-${i}`}
                className={`text-blue-600 hover:underline flex items-center gap-1 ${
                  theme === "light"
                    ? "text-blue-600"
                    : theme === "dark"
                    ? "text-blue-600"
                    : theme === "blue"
                    ? "text-white"
                    : theme === "green"
                    ? "text-white"
                    : "text-white"
                }`}
              >
                {t("home.read_more")}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/research"
            className={`inline-flex items-center gap-2 px-6 py-3 border border-current rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
              theme === "light"
                ? "text-gray-500"
                : theme === "dark"
                ? "text-gray-400"
                : theme === "blue"
                ? "text-white bg-blue-500"
                : theme === "green"
                ? "text-white bg-green-500"
                : "text-white bg-purple-500"
            }`}
          >
            {t("home.view_all_publications")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
