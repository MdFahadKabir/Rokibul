"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/utils/translation"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, BookOpen, Download, Share2 } from "lucide-react"
import { useParams } from "next/navigation"

export default function ResearchPaper() {
  const { t } = useTranslation()
  const params = useParams()
  const id = params.id.replace("paper-", "")

  // This would typically come from an API or database
  const paper = {
    id: id,
    title: "Machine Learning Applications in Healthcare",
    journal: "Journal of Medical Informatics",
    year: "2023",
    authors: "John Smith, Jane Doe, Robert Johnson",
    doi: "10.1234/jmi.2023.12345",
    abstract:
      "This paper explores the applications of machine learning algorithms in healthcare diagnostics and treatment planning. We present a comprehensive review of current methodologies and propose novel approaches to improve diagnostic accuracy.",
    sections: [
      {
        title: "Introduction",
        content:
          "The integration of machine learning in healthcare has shown promising results in recent years. This paper aims to provide a comprehensive overview of the current state of machine learning applications in healthcare, with a focus on diagnostic tools and treatment planning systems. We also discuss the challenges and opportunities in this rapidly evolving field.",
      },
      {
        title: "Methodology",
        content:
          "We conducted a systematic review of peer-reviewed articles published between 2018 and 2023. The search was performed using major databases including PubMed, IEEE Xplore, and ACM Digital Library. We included studies that applied machine learning algorithms to healthcare problems and excluded theoretical papers without practical applications. The selected papers were categorized based on the type of machine learning algorithm used and the healthcare domain of application.",
      },
      {
        title: "Results",
        content:
          "Our analysis revealed that supervised learning algorithms, particularly deep neural networks, were the most commonly used approaches for diagnostic applications. Convolutional neural networks (CNNs) dominated in medical imaging analysis, while recurrent neural networks (RNNs) were prevalent in time-series medical data analysis. We found that the accuracy of machine learning models in diagnosing certain conditions has reached or exceeded that of human experts in controlled settings. However, real-world implementation faces challenges related to data quality, model interpretability, and integration with existing healthcare systems.",
      },
      {
        title: "Discussion",
        content:
          "The findings suggest that machine learning has significant potential to transform healthcare delivery by improving diagnostic accuracy, personalizing treatment plans, and optimizing resource allocation. However, several challenges need to be addressed before widespread adoption can occur. These include ensuring data privacy and security, developing interpretable models that can gain the trust of healthcare professionals, and creating robust validation frameworks for clinical deployment. Future research should focus on developing hybrid models that combine the strengths of different algorithms and incorporating domain knowledge into model design.",
      },
      {
        title: "Conclusion",
        content:
          "Machine learning applications in healthcare have shown remarkable progress and hold promise for improving patient outcomes and healthcare efficiency. As the field continues to evolve, collaboration between computer scientists, healthcare professionals, and policymakers will be crucial to address the technical, ethical, and regulatory challenges. With appropriate development and implementation, machine learning technologies can significantly contribute to the advancement of precision medicine and patient-centered care.",
      },
    ],
    references: [
      "Smith, J., & Johnson, R. (2022). Deep learning for medical image analysis. Journal of Medical Imaging, 45(3), 112-125.",
      "Doe, J., Wilson, M., & Brown, A. (2021). Predictive models for disease progression. Healthcare Informatics Research, 27(2), 78-92.",
      "Parker, S., & Lee, J. (2020). Ethical considerations in AI-based healthcare. AI Ethics Journal, 5(1), 34-49.",
      "Miller, D., & Clark, T. (2019). Reinforcement learning for treatment optimization. Computational Medicine, 12(4), 203-218.",
      "Johnson, R., & Smith, J. (2018). Natural language processing for clinical text analysis. Journal of Biomedical Informatics, 82, 115-130.",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link href="/research" className="flex items-center gap-2 text-blue-600 hover:underline">
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
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download size={18} />
              {t("research.download_pdf")}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-current rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
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
          {paper.sections.map((section, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-3">{t("research.references")}</h2>
          <ul className="space-y-2 list-decimal pl-5">
            {paper.references.map((reference, index) => (
              <li key={index}>{reference}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  )
}
