"use client"

import { useLanguage } from "@/context/language-context"

// Translation data
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.cv": "CV",
    "nav.research": "Research",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    // Theme
    "theme.title": "Theme",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.blue": "Blue",
    "theme.green": "Green",
    "theme.purple": "Purple",

    // Language
    "language.title": "Language",
    "language.en": "English",
    "language.fr": "French",
    "language.es": "Spanish",
    "language.de": "German",
    "language.zh": "Chinese",

    // Home page
    "home.title": "Prof. John Smith",
    "home.subtitle": "Associate Professor of Computer Science",
    "home.introduction":
      "Welcome to my academic website. I am an Associate Professor specializing in Artificial Intelligence and Machine Learning. My research focuses on developing novel algorithms and applications in healthcare, natural language processing, and computer vision.",
    "home.profile_alt": "Professor John Smith",
    "home.research_button": "View Research",
    "home.cv_button": "View CV",
    "home.research_interests": "Research Interests",
    "home.interest_1_title": "Machine Learning",
    "home.interest_1_description":
      "Developing novel machine learning algorithms with applications in healthcare and natural language processing.",
    "home.interest_2_title": "Computer Vision",
    "home.interest_2_description":
      "Research on object detection, image segmentation, and visual understanding for autonomous systems.",
    "home.interest_3_title": "AI Ethics",
    "home.interest_3_description":
      "Exploring ethical implications of AI deployment and developing frameworks for responsible AI.",
    "home.latest_publications": "Latest Publications",
    "home.publication_1_title": "Machine Learning Applications in Healthcare",
    "home.publication_1_journal": "Journal of Medical Informatics (2023)",
    "home.publication_1_abstract":
      "This paper explores the applications of machine learning algorithms in healthcare diagnostics and treatment planning.",
    "home.publication_2_title": "Neural Networks for Natural Language Processing",
    "home.publication_2_journal": "Computational Linguistics Journal (2022)",
    "home.publication_2_abstract":
      "An in-depth analysis of how neural networks can be applied to solve complex natural language processing tasks.",
    "home.publication_3_title": "Ethical Considerations in Artificial Intelligence",
    "home.publication_3_journal": "AI Ethics Review (2022)",
    "home.publication_3_abstract":
      "This paper discusses the ethical implications of deploying AI systems in various domains and proposes a framework for ethical AI development.",
    "home.read_more": "Read more",
    "home.view_all_publications": "View all publications",

    // CV page
    "cv.title": "Curriculum Vitae",
    "cv.download": "Download CV",
    "cv.contact_info": "Contact Information",
    "cv.social_profiles": "Social Profiles",
    "cv.skills": "Skills",
    "cv.education": "Education",
    "cv.experience": "Experience",
    "cv.awards": "Awards & Honors",

    // Research page
    "research.title": "Research",
    "research.description": "Explore my research papers, projects, and contributions to the field of Computer Science.",
    "research.search_placeholder": "Search papers by title or content...",
    "research.filter_all": "All Categories",
    "research.filter_ml": "Machine Learning",
    "research.filter_nn": "Neural Networks",
    "research.filter_ethics": "Ethics",
    "research.filter_cv": "Computer Vision",
    "research.read_more": "Read paper",
    "research.no_results": "No papers found matching your search criteria.",
    "research.back_to_research": "Back to Research",
    "research.download_pdf": "Download PDF",
    "research.share": "Share",
    "research.abstract": "Abstract",
    "research.references": "References",

    // Blog page
    "blog.title": "Blog",
    "blog.description": "Thoughts, insights, and discussions on Computer Science, AI, and academia.",
    "blog.all_categories": "All",
    "blog.category_ai": "AI",
    "blog.category_ethics": "Ethics",
    "blog.category_society": "Society",
    "blog.category_computing": "Computing",
    "blog.category_education": "Education",
    "blog.read_more": "Read more",
    "blog.no_posts": "No blog posts found in this category.",
    "blog.back_to_blog": "Back to Blog",
    "blog.categories": "Categories",
    "blog.related_posts": "Related Posts",

    // Contact page
    "contact.title": "Contact",
    "contact.description":
      "Get in touch with me for research collaborations, speaking engagements, or other inquiries.",
    "contact.get_in_touch": "Get in Touch",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.office": "Office",
    "contact.office_hours": "Office Hours",
    "contact.monday": "Monday",
    "contact.wednesday": "Wednesday",
    "contact.friday": "Friday",
    "contact.send_message": "Send a Message",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.thank_you": "Thank You!",
    "contact.message_sent": "Your message has been sent successfully. I'll get back to you as soon as possible.",
    "contact.send_another": "Send Another Message",

    // Footer
    "footer.description":
      "Associate Professor of Computer Science specializing in Artificial Intelligence and Machine Learning.",
    "footer.quick_links": "Quick Links",
    "footer.research_areas": "Research Areas",
    "footer.contact_info": "Contact Info",
    "footer.rights": "All rights reserved.",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.cv": "CV",
    "nav.research": "Recherche",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    // Theme
    "theme.title": "Thème",
    "theme.light": "Clair",
    "theme.dark": "Sombre",
    "theme.blue": "Bleu",
    "theme.green": "Vert",
    "theme.purple": "Violet",

    // Language
    "language.title": "Langue",
    "language.en": "Anglais",
    "language.fr": "Français",
    "language.es": "Espagnol",
    "language.de": "Allemand",
    "language.zh": "Chinois",

    // Home page
    "home.title": "Prof. John Smith",
    "home.subtitle": "Professeur Associé en Informatique",
    "home.introduction":
      "Bienvenue sur mon site académique. Je suis Professeur Associé spécialisé en Intelligence Artificielle et Apprentissage Automatique. Mes recherches se concentrent sur le développement de nouveaux algorithmes et applications dans les domaines de la santé, du traitement du langage naturel et de la vision par ordinateur.",
    "home.profile_alt": "Professeur John Smith",
    "home.research_button": "Voir la Recherche",
    "home.cv_button": "Voir le CV",
    "home.research_interests": "Intérêts de Recherche",
    "home.interest_1_title": "Apprentissage Automatique",
    "home.interest_1_description":
      "Développement de nouveaux algorithmes d'apprentissage automatique avec des applications dans la santé et le traitement du langage naturel.",
    "home.interest_2_title": "Vision par Ordinateur",
    "home.interest_2_description":
      "Recherche sur la détection d'objets, la segmentation d'images et la compréhension visuelle pour les systèmes autonomes.",
    "home.interest_3_title": "Éthique de l'IA",
    "home.interest_3_description":
      "Explorer les implications éthiques du déploiement de l'IA et développer des cadres pour une IA responsable.",
    "home.latest_publications": "Dernières Publications",
    "home.publication_1_title": "Applications de l'Apprentissage Automatique dans la Santé",
    "home.publication_1_journal": "Journal d'Informatique Médicale (2023)",
    "home.publication_1_abstract":
      "Cet article explore les applications des algorithmes d'apprentissage automatique dans le diagnostic et la planification des traitements de santé.",
    "home.publication_2_title": "Réseaux de Neurones pour le Traitement du Langage Naturel",
    "home.publication_2_journal": "Journal de Linguistique Computationnelle (2022)",
    "home.publication_2_abstract":
      "Une analyse approfondie de la façon dont les réseaux de neurones peuvent être appliqués pour résoudre des tâches complexes de traitement du langage naturel.",
    "home.publication_3_title": "Considérations Éthiques en Intelligence Artificielle",
    "home.publication_3_journal": "Revue d'Éthique de l'IA (2022)",
    "home.publication_3_abstract":
      "Cet article discute des implications éthiques du déploiement de systèmes d'IA dans divers domaines et propose un cadre pour le développement éthique de l'IA.",
    "home.read_more": "Lire plus",
    "home.view_all_publications": "Voir toutes les publications",

    // Other translations would follow the same pattern
    // For brevity, I'm not including all French translations
  },
  // Additional languages would be added here
}

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key) => {
    // Get the translations for the current language, fallback to English
    const langTranslations = translations[language] || translations.en

    // Return the translation for the key, or the key itself if not found
    return langTranslations[key] || translations.en[key] || key
  }

  return { t }
}
