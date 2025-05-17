"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/utils/translation"
import Link from "next/link"
import { Download, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"
import { useTheme } from "@/context/theme-context"

export default function CV() {
  const { t } = useTranslation()  
  const { theme } = useTheme()

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
        className="flex justify-between items-center mb-8"
      >
        <h1 className={`text-4xl font-bold ${
          theme === "light"
            ? "text-black"
            : theme === "dark"
            ? "text-white"
            : theme === "blue"
            ? "text-blue-600"
            : theme === "green"
            ? "text-green-600"
            : theme === "purple"
            ? "text-purple-600"
            : "text-black"
        }`}>{t("cv.title")}</h1>
        {/* <Link
          href="/cv.pdf"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download size={18} />
          {t("cv.download")}
        </Link> */}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <div className={`rounded-xl p-6 shadow-lg mb-6 ${
            theme === "light"
              ? "bg-white"
              : theme === "dark"
              ? "bg-gray-800"
              : theme === "blue"
              ? "bg-blue-500"
              : theme === "green"
              ? "bg-green-500"
              : theme === "purple"
              ? "bg-purple-500"
              : "bg-white"
          }`}>
            <h2 className="text-2xl font-semibold mb-4">{t("cv.contact_info")}</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600" />
                <span>professor@university.edu</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-600" />
                <span>Department of Science, University Name</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">{t("cv.social_profiles")}</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://linkedin.com"
                  className="flex items-center gap-3 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  className="flex items-center gap-3 hover:text-blue-600 transition-colors"
                >
                  <Twitter size={18} />
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com"
                  className="flex items-center gap-3 hover:text-blue-600 transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{t("cv.skills")}</h2>
            <motion.div variants={container} initial="hidden" animate="show">
              {[
                "Research Methodology",
                "Data Analysis",
                "Scientific Writing",
                "Project Management",
                "Public Speaking",
                "Grant Writing",
              ].map((skill, index) => (
                <motion.div key={index} variants={item} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span>{skill}</span>
                    <span>{90 - index * 5}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${90 - index * 5}%` }}></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">{t("cv.education")}</h2>
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
              {[
                {
                  degree: "Ph.D. in Computer Science",
                  university: "Stanford University",
                  years: "2010 - 2014",
                  description: "Thesis: Advanced Algorithms for Machine Learning Applications",
                },
                {
                  degree: "M.S. in Computer Science",
                  university: "MIT",
                  years: "2008 - 2010",
                  description: "Focus on Artificial Intelligence and Data Structures",
                },
                {
                  degree: "B.S. in Computer Engineering",
                  university: "University of California, Berkeley",
                  years: "2004 - 2008",
                  description: "Graduated with Honors, Minor in Mathematics",
                },
              ].map((edu, index) => (
                <motion.div key={index} variants={item} className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.university}, {edu.years}
                  </p>
                  <p className="mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">{t("cv.experience")}</h2>
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
              {[
                {
                  position: "Associate Professor",
                  institution: "University Name",
                  years: "2018 - Present",
                  description:
                    "Teaching advanced courses in Computer Science, supervising graduate students, and conducting research in machine learning and artificial intelligence.",
                },
                {
                  position: "Assistant Professor",
                  institution: "University Name",
                  years: "2014 - 2018",
                  description:
                    "Taught undergraduate and graduate courses, established research lab, secured external funding for research projects.",
                },
                {
                  position: "Research Intern",
                  institution: "Tech Company",
                  years: "Summer 2013",
                  description:
                    "Worked on developing new algorithms for recommendation systems, resulting in a patent application.",
                },
              ].map((exp, index) => (
                <motion.div key={index} variants={item} className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.institution}, {exp.years}
                  </p>
                  <p className="mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{t("cv.awards")}</h2>
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
              {[
                {
                  award: "Excellence in Teaching Award",
                  year: "2020",
                  description: "Recognized for outstanding teaching and mentorship of students.",
                },
                {
                  award: "Best Paper Award",
                  year: "2019",
                  description:
                    "International Conference on Machine Learning for the paper 'Novel Approaches to Neural Networks'.",
                },
                {
                  award: "Research Grant",
                  year: "2017",
                  description: "Awarded $500,000 for research on artificial intelligence applications in healthcare.",
                },
              ].map((award, index) => (
                <motion.div key={index} variants={item} className="flex">
                  <div className="mr-4 text-blue-600 font-bold">{award.year}</div>
                  <div>
                    <h3 className="font-semibold">{award.award}</h3>
                    <p>{award.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
