"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/utils/translation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Tag, Share2, ArrowRight } from "lucide-react"
import { useParams } from "next/navigation"

export default function BlogPost() {
  const { t } = useTranslation()
  const params = useParams()
  const id = Number.parseInt(params.id)

  // This would typically come from an API or database
  const post = {
    id: id,
    title: "The Future of Artificial Intelligence in Education",
    content: [
      "Artificial Intelligence (AI) is rapidly transforming various sectors, and education is no exception. As an associate professor specializing in AI and computer science, I've been researching and observing these changes closely. In this blog post, I'll share my insights on how AI is reshaping education and what the future might hold.",
      "## Current Applications of AI in Education",
      "AI is already making significant inroads in educational settings. Intelligent tutoring systems can provide personalized learning experiences by adapting to individual student needs. These systems analyze learning patterns, identify knowledge gaps, and adjust content difficulty accordingly. For instance, platforms like Carnegie Learning's MATHia use AI to provide step-by-step guidance in mathematics, offering help precisely when students need it.",
      "Natural language processing (NLP) technologies are powering chatbots and virtual assistants that can answer student questions instantly. These tools are particularly valuable in large classes or online learning environments where immediate instructor feedback isn't always possible. Georgia Tech famously implemented 'Jill Watson,' an AI teaching assistant that students couldn't distinguish from human TAs.",
      "Automated grading systems are reducing the administrative burden on educators, allowing them to focus more on teaching and less on evaluation. While these systems initially focused on multiple-choice assessments, advances in NLP have enabled AI to evaluate written responses with increasing accuracy.",
      "## Challenges and Ethical Considerations",
      "Despite these promising applications, the integration of AI in education faces several challenges. Data privacy concerns are paramount, as AI systems require substantial student data to function effectively. Educational institutions must implement robust data protection measures and ensure transparency in how student information is used.",
      "There's also the risk of algorithmic bias, where AI systems may inadvertently perpetuate existing inequalities in education. If training data contains biases, the AI will likely reproduce these biases in its recommendations and assessments. Researchers and developers must actively work to identify and mitigate such biases.",
      "The digital divide presents another significant challenge. As education becomes increasingly technology-dependent, students without access to necessary devices or reliable internet connections may be left behind. Educational policies must address these inequalities to ensure AI benefits all students equally.",
      "## The Future Landscape",
      "Looking ahead, I envision several transformative developments in AI-enhanced education. Immersive learning experiences using virtual and augmented reality, powered by AI, will enable students to explore complex concepts in interactive 3D environments. Imagine medical students performing virtual surgeries or history students walking through ancient civilizations.",
      "Predictive analytics will become more sophisticated, allowing early identification of students at risk of falling behind or dropping out. These systems will enable timely interventions before problems escalate, potentially increasing retention rates and academic success.",
      "AI will also facilitate more effective collaboration between students across geographical boundaries. Language translation tools will break down communication barriers, while collaborative platforms will use AI to form optimal student groups based on complementary skills and learning styles.",
      "## Conclusion",
      "AI has the potential to democratize education, making high-quality learning experiences accessible to more people worldwide. However, realizing this potential requires thoughtful implementation that prioritizes student well-being, addresses ethical concerns, and ensures equitable access.",
      "As educators and researchers, we must guide this transformation, ensuring that AI serves as a tool that enhances human teaching rather than replacing it. The most effective educational models will likely combine AI efficiency with human creativity, empathy, and critical thinking—qualities that remain distinctly human.",
      "The future of education isn't about choosing between human teachers and AI systems. It's about finding the optimal integration of both, leveraging technology to handle routine tasks while enabling educators to focus on what they do best: inspiring, mentoring, and nurturing the next generation of thinkers and innovators.",
    ].join("\n\n"),
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "ai",
    author: "Prof. John Smith",
    authorImage: "/placeholder.svg?height=100&width=100&query=professional headshot",
    image: "/futuristic-ai-classroom.png",
    relatedPosts: [2, 3, 5],
  }

  // Simple markdown-like parsing for the blog content
  const renderContent = () => {
    const paragraphs = post.content.split("\n\n")
    return paragraphs.map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
            {paragraph.substring(3)}
          </h2>
        )
      } else {
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {paragraph}
          </p>
        )
      }
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link href="/blog" className="flex items-center gap-2 text-blue-600 hover:underline">
          <ArrowLeft size={18} />
          {t("blog.back_to_blog")}
        </Link>
      </motion.div>

      <article>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
            </div>
            <div>
              <div className="font-medium">{post.author}</div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar size={14} className="mr-1" />
                <span className="mr-3">{post.date}</span>
                <Clock size={14} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
        >
          {renderContent()}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-between py-6 border-t border-b"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Tag size={18} />
            <span className="mr-2">{t("blog.categories")}:</span>
            <Link
              href={`/blog?category=${post.category}`}
              className="inline-block px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
            >
              {t(`blog.category_${post.category}`)}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span>{t("blog.share")}:</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
              <Share2 size={16} />
            </button>
          </div>
        </motion.div>
      </article>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold mb-6">{t("blog.related_posts")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: 2,
              title: "Ethics in Computer Science Research",
              excerpt:
                "Discussing the ethical considerations that should guide computer science research and development.",
              image: "/ethics-in-technology.png",
            },
            {
              id: 3,
              title: "Understanding Deep Learning Architectures",
              excerpt:
                "A beginner-friendly guide to understanding the fundamentals of deep learning neural network architectures.",
              image: "/placeholder.svg?height=300&width=400&query=neural network visualization",
            },
            {
              id: 5,
              title: "Quantum Computing: A Primer",
              excerpt:
                "An introduction to quantum computing concepts and their potential impact on computational problems.",
              image: "/placeholder.svg?height=300&width=400&query=quantum computer conceptual image",
            },
          ].map((relatedPost) => (
            <motion.div
              key={relatedPost.id}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-40">
                <Image
                  src={relatedPost.image || "/placeholder.svg"}
                  alt={relatedPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{relatedPost.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{relatedPost.excerpt}</p>
                <Link
                  href={`/blog/${relatedPost.id}`}
                  className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                >
                  {t("blog.read_more")}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
