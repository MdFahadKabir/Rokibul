"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/utils/translation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
  ArrowRight,
} from "lucide-react";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const { t } = useTranslation();
  const params = useParams();
  const id = Number.parseInt(params.id);

  // Get blog posts data from translation
  const blogPosts = t("blog.posts");
  const post = blogPosts.find((post) => post.id === id);

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.map((relatedId) =>
        blogPosts.find((p) => p.id === relatedId)
      )
    : [];

  // Simple markdown-like parsing for the blog content
  const renderContent = () => {
    const paragraphs = post.content;
    return paragraphs.map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
            {paragraph.substring(3)}
          </h2>
        );
      } else {
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {paragraph}
          </p>
        );
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8 bg-white inline-block rounded-full px-2 py-1"
      >
        <Link
          href="/blog"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
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
              <Image
                src={post.authorImage || "/placeholder.svg"}
                alt={post.author}
                fill
                className="object-cover"
              />
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
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
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

      {relatedPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6">{t("blog.related_posts")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
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
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {relatedPost.excerpt}
                  </p>
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
      )}
    </div>
  );
}
