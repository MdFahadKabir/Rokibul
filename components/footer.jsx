"use client"

import Link from "next/link"
import { useTranslation } from "@/utils/translation"
import { GraduationCap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"
import { useTheme } from "@/context/theme-context"

export default function Footer() {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`bg-gray-100 dark:bg-gray-900 py-12 hidden md:block ${
      theme === "light" || theme === "dark"     
        ? "bg-gray-100"
        : theme === "light"
        ? "bg-gray-900"
        : theme === "blue"
        ? "bg-blue-900"
        : theme === "green"
        ? "bg-green-900"
        : theme === "purple"
        ? "bg-purple-900"
        : "bg-gray-100"
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className={`w-8 h-8 text-blue-600 ${
                theme === "light"
                  ? "text-blue-600"
                  : theme === "dark"
                  ? "text-blue-600"
                  : theme === "blue"
                  ? "text-blue-600"
                  : theme === "green"
                  ? "text-green-600"
                  : theme === "purple"
                  ? "text-purple-600"
                  : "text-blue-600"
              }`} />
                <span className={`font-bold text-xl ${
                theme === "light"
                  ? "text-blue-600"
                  : theme === "dark"
                  ? "text-blue-600"
                  : theme === "blue"
                  ? "text-blue-600"
                  : theme === "green"
                  ? "text-green-600"
                  : theme === "purple"
                  ? "text-purple-600"
                  : "text-blue-600"
              }`}>Prof. Smith</span>
            </Link>
            <p className={` mb-4 ${
              theme === "light"
                ? "text-gray-600"
                : theme === "dark"
                ? "text-gray-300"
                : theme === "blue"
                ? "text-blue-600"
                : theme === "green"
                ? "text-green-600"
                : theme === "purple"
                ? "text-purple-600"
                : "text-gray-600"
            }`}>{t("footer.description")}</p>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  theme === "light"
                    ? "text-gray-600"
                    : theme === "dark"
                    ? "text-gray-300"
                    : theme === "blue"
                    ? "text-blue-600 hover:text-blue-700"
                    : theme === "green"
                    ? "text-green-600 hover:text-green-700"
                    : theme === "purple"
                    ? "text-purple-600 hover:text-purple-700"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://github.com"
                aria-label="GitHub"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.quick_links")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/cv"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {t("nav.cv")}
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {t("nav.research")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {t("nav.blog")}
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.research_areas")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/research?filter=machine-learning"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {t("research.filter_ml")}
                </Link>
              </li>
              <li>
                <Link
                  href="/research?filter=neural-networks"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {t("research.filter_nn")}
                </Link>
              </li>
              <li>
                <Link
                  href="/research?filter=ethics"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {t("research.filter_ethics")}
                </Link>
              </li>
              <li>
                <Link
                  href="/research?filter=computer-vision"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {t("research.filter_cv")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("footer.contact_info")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600" />
                <span className="text-gray-600 dark:text-gray-300">professor@university.edu</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600" />
                <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-600 mt-1" />
                <span className="text-gray-600 dark:text-gray-300">
                  Room 302, Computer Science Building
                  <br />
                  University Campus
                  <br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
          <p>
            © {currentYear} Prof. John Smith. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
