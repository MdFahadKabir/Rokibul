"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/utils/translation"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const { t } = useTranslation()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">{t("contact.title")}</h1>
        <p className="max-w-2xl mx-auto text-lg">{t("contact.description")}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg h-full">
            <h2 className="text-2xl font-semibold mb-6">{t("contact.get_in_touch")}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="font-medium">{t("contact.email")}</h3>
                  <p className="text-gray-600 dark:text-gray-300">professor@university.edu</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="font-medium">{t("contact.phone")}</h3>
                  <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="font-medium">{t("contact.office")}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Room 302, Computer Science Building
                    <br />
                    University Campus
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-4">{t("contact.office_hours")}</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>{t("contact.monday")}</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>{t("contact.wednesday")}</span>
                  <span>1:00 PM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>{t("contact.friday")}</span>
                  <span>9:00 AM - 12:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-semibold mb-6">{t("contact.send_message")}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      {t("contact.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                      {t("contact.subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {t("contact.sending")}
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        {t("contact.send")}
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h2 className="text-2xl font-semibold mb-2">{t("contact.thank_you")}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{t("contact.message_sent")}</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t("contact.send_another")}
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
