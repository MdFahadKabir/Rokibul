"use client";

import { useLanguage } from "@/context/language-context";

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
    "home.publication_2_title":
      "Neural Networks for Natural Language Processing",
    "home.publication_2_journal": "Computational Linguistics Journal (2022)",
    "home.publication_2_abstract":
      "An in-depth analysis of how neural networks can be applied to solve complex natural language processing tasks.",
    "home.publication_3_title":
      "Ethical Considerations in Artificial Intelligence",
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
    "research.description":
      "Explore my research papers, projects, and contributions to the field of Computer Science.",
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
    "research.papers": [
      {
        id: 1,
        title: "Machine Learning Applications in Healthcare",
        journal: "Journal of Medical Informatics",
        year: "2023",
        authors: "John Smith, Jane Doe, Robert Johnson",
        category: "machine-learning",
        abstract:
          "This paper explores the applications of machine learning algorithms in healthcare diagnostics and treatment planning.",
        doi: "10.1234/jmi.2023.12345",
        sections: [
          {
            title: "Introduction",
            content:
              "The integration of machine learning in healthcare has shown promising results in recent years. This paper aims to provide a comprehensive overview of the current state of machine learning applications in healthcare, with a focus on diagnostic tools and treatment planning systems. We also discuss the challenges and opportunities in this rapidly evolving field.",
          },
          {
            title: "Methodology",
            content:
              "We conducted a systematic review of peer-reviewed articles published between 2018 and 2023. The search was performed using major databases including PubMed, IEEE Xplore, and ACM Digital Library. We included studies that applied machine learning algorithms to healthcare problems and excluded theoretical papers without practical applications.",
          },
          {
            title: "Results",
            content:
              "Our analysis revealed that supervised learning algorithms, particularly deep neural networks, were the most commonly used approaches for diagnostic applications. Convolutional neural networks (CNNs) dominated in medical imaging analysis, while recurrent neural networks (RNNs) were prevalent in time-series medical data analysis.",
          },
          {
            title: "Discussion",
            content:
              "The findings suggest that machine learning has significant potential to transform healthcare delivery by improving diagnostic accuracy, personalizing treatment plans, and optimizing resource allocation. However, several challenges need to be addressed before widespread adoption can occur.",
          },
          {
            title: "Conclusion",
            content:
              "Machine learning applications in healthcare have shown remarkable progress and hold promise for improving patient outcomes and healthcare efficiency. As the field continues to evolve, collaboration between computer scientists, healthcare professionals, and policymakers will be crucial.",
          },
        ],
        references: [
          "Smith, J., & Johnson, R. (2022). Deep learning for medical image analysis. Journal of Medical Imaging, 45(3), 112-125.",
          "Doe, J., Wilson, M., & Brown, A. (2021). Predictive models for disease progression. Healthcare Informatics Research, 27(2), 78-92.",
          "Parker, S., & Lee, J. (2020). Ethical considerations in AI-based healthcare. AI Ethics Journal, 5(1), 34-49.",
          "Miller, D., & Clark, T. (2019). Reinforcement learning for treatment optimization. Computational Medicine, 12(4), 203-218.",
          "Johnson, R., & Smith, J. (2018). Natural language processing for clinical text analysis. Journal of Biomedical Informatics, 82, 115-130.",
        ],
      },
      {
        id: 2,
        title: "Neural Networks for Natural Language Processing",
        journal: "Computational Linguistics Journal",
        year: "2022",
        authors: "John Smith, Alice Brown",
        category: "neural-networks",
        abstract:
          "An in-depth analysis of how neural networks can be applied to solve complex natural language processing tasks.",
        doi: "10.1234/clj.2022.67890",
        sections: [
          {
            title: "Introduction",
            content:
              "Neural networks have revolutionized the field of natural language processing over the past decade. This paper provides an overview of the most significant advances and their practical applications in various NLP tasks.",
          },
          {
            title: "Neural Architectures for NLP",
            content:
              "We examine several key neural network architectures including recurrent neural networks (RNNs), long short-term memory networks (LSTMs), transformer models, and their variants. Each architecture is analyzed in terms of its strengths, weaknesses, and appropriate use cases.",
          },
          {
            title: "Empirical Evaluation",
            content:
              "We conducted comprehensive benchmarking of different neural architectures across standard NLP tasks including sentiment analysis, named entity recognition, machine translation, and question answering. Results indicate that transformer-based models consistently outperform other architectures.",
          },
          {
            title: "Real-world Applications",
            content:
              "This section explores practical applications of neural NLP models in industry settings, including customer service automation, content recommendation, and information extraction from documents. Case studies demonstrate significant improvements over traditional methods.",
          },
          {
            title: "Conclusion",
            content:
              "Neural network approaches have fundamentally changed the landscape of natural language processing. Future research directions include more efficient training methods, better integration of domain knowledge, and addressing ethical challenges related to bias and fairness.",
          },
        ],
        references: [
          "Brown, A., & Smith, J. (2021). Transformer models for contextual understanding. Computational Linguistics Review, 38(2), 78-96.",
          "Wilson, M., & Johnson, R. (2020). BERT and beyond: Pre-trained language models. NLP Journal, 15(4), 234-251.",
          "Clark, T., & Miller, D. (2019). Neural machine translation advances. Language Processing Trends, 8(3), 112-129.",
          "Lee, J., & Parker, S. (2018). Recurrent neural networks for sequence labeling. Computational Methods in Linguistics, 22(1), 45-67.",
          "Johnson, R., & Doe, J. (2017). Word embeddings and their applications. Journal of Computational Linguistics, 42(2), 189-205.",
        ],
      },
      {
        id: 3,
        title: "Ethical Considerations in Artificial Intelligence",
        journal: "AI Ethics Review",
        year: "2022",
        authors: "John Smith, Michael Wilson, Sarah Parker",
        category: "ethics",
        abstract:
          "This paper discusses the ethical implications of deploying AI systems in various domains and proposes a framework for ethical AI development.",
        doi: "10.1234/aier.2022.54321",
        sections: [
          {
            title: "Introduction",
            content:
              "As artificial intelligence systems become increasingly integrated into critical societal functions, the ethical implications of these technologies demand careful consideration. This paper examines the major ethical challenges in AI development and deployment.",
          },
          {
            title: "Ethical Frameworks",
            content:
              "We review existing ethical frameworks for AI, including utilitarian, deontological, and virtue ethics approaches. Each framework is evaluated for its applicability to different AI contexts, with a focus on practical implementation challenges.",
          },
          {
            title: "Key Ethical Challenges",
            content:
              "Our analysis identifies five critical ethical challenges: bias and fairness, transparency and explainability, privacy and data rights, accountability, and socioeconomic impact. Each challenge is examined through case studies of real-world AI systems.",
          },
          {
            title: "Proposed Framework",
            content:
              "Based on our analysis, we propose a comprehensive framework for ethical AI development that integrates technical solutions with organizational policies and external oversight. The framework includes specific metrics for evaluating ethical compliance throughout the AI lifecycle.",
          },
          {
            title: "Conclusion",
            content:
              "Ethical considerations must be integrated into AI development from the beginning rather than added as an afterthought. Our framework provides a starting point for researchers and developers to address ethical challenges systematically.",
          },
        ],
        references: [
          "Parker, S., & Wilson, M. (2021). Algorithmic bias detection and mitigation. AI Ethics Journal, 6(2), 45-62.",
          "Smith, J., & Clark, T. (2020). Explainable AI: Techniques and applications. Transparent Computing, 18(3), 134-152.",
          "Doe, J., & Lee, J. (2019). Privacy-preserving machine learning. Data Rights Review, 12(4), 88-107.",
          "Wilson, M., & Brown, A. (2018). Ethical guidelines for AI research. Journal of Technology Ethics, 25(1), 23-41.",
          "Miller, D., & Johnson, R. (2017). Socioeconomic impacts of automation. Social Technology Review, 14(3), 178-196.",
        ],
      },
      {
        id: 4,
        title: "Reinforcement Learning in Robotics",
        journal: "Robotics and Automation",
        year: "2021",
        authors: "John Smith, David Miller",
        category: "machine-learning",
        abstract:
          "A comprehensive study on how reinforcement learning techniques can be used to train robotic systems for complex tasks.",
        doi: "10.1234/ra.2021.78901",
        sections: [
          {
            title: "Introduction",
            content:
              "Reinforcement learning (RL) has emerged as a powerful approach for training autonomous robots to perform complex tasks. This paper explores recent advances in applying RL to robotics and addresses key challenges in the field.",
          },
          {
            title: "Reinforcement Learning Fundamentals",
            content:
              "We review the core principles of reinforcement learning, including Markov Decision Processes, value functions, policy optimization, and exploration strategies. Special attention is given to modifications necessary for robotics applications.",
          },
          {
            title: "Challenges in Robot RL",
            content:
              "Applying reinforcement learning to physical robots presents unique challenges including sample efficiency, safety constraints, sim-to-real transfer, and high-dimensional continuous action spaces. We analyze each challenge and review proposed solutions.",
          },
          {
            title: "Case Studies",
            content:
              "We present three case studies of reinforcement learning successfully applied to robotic tasks: dexterous manipulation, legged locomotion, and autonomous navigation. Each case study highlights different approaches and algorithms.",
          },
          {
            title: "Conclusion",
            content:
              "Reinforcement learning offers promising pathways for developing more capable and adaptable robotic systems. Future research directions include multi-task learning, hierarchical RL for complex behaviors, and combining RL with other learning paradigms.",
          },
        ],
        references: [
          "Miller, D., & Smith, J. (2021). Sample-efficient reinforcement learning for robotic manipulation. Robotics and Automation Letters, 6(2), 2121-2128.",
          "Johnson, R., & Lee, J. (2020). Sim-to-real transfer for legged robots. Robotics Science and Systems, 15, 334-343.",
          "Clark, T., & Wilson, M. (2019). Deep reinforcement learning for autonomous navigation. Intelligent Robots and Systems, 28(3), 178-189.",
          "Brown, A., & Parker, S. (2018). Policy optimization for continuous control in robotics. Machine Learning for Robotics, 12(4), 45-67.",
          "Doe, J., & Miller, D. (2017). Hierarchical reinforcement learning for complex tasks. Advances in Robotics, 22(1), 112-130.",
        ],
      },
      {
        id: 5,
        title: "Computer Vision Algorithms for Autonomous Vehicles",
        journal: "Transportation Technology Review",
        year: "2020",
        authors: "John Smith, Jennifer Lee, Thomas Clark",
        category: "computer-vision",
        abstract:
          "This research presents novel computer vision algorithms that improve object detection and tracking for autonomous vehicles.",
        doi: "10.1234/ttr.2020.36925",
        sections: [
          {
            title: "Introduction",
            content:
              "Computer vision is a cornerstone technology for autonomous vehicle perception systems. This paper introduces new algorithms that address the challenges of real-time object detection, classification, and tracking in diverse and dynamic traffic environments.",
          },
          {
            title: "Object Detection Framework",
            content:
              "We propose a multi-scale object detection framework that combines convolutional neural networks with attention mechanisms to efficiently identify vehicles, pedestrians, cyclists, and other relevant objects in the driving environment.",
          },
          {
            title: "Tracking Under Occlusion",
            content:
              "One of the key challenges in autonomous driving is maintaining consistent object tracking when occlusions occur. Our novel approach combines appearance and motion models with prediction mechanisms to maintain tracking through partial and full occlusions.",
          },
          {
            title: "Experimental Results",
            content:
              "We evaluate our algorithms on multiple public datasets as well as our proprietary real-world driving data. Results show significant improvements in detection accuracy, tracking persistence, and computational efficiency compared to state-of-the-art methods.",
          },
          {
            title: "Conclusion",
            content:
              "The computer vision algorithms presented in this paper provide robust perception capabilities for autonomous vehicles across diverse environments and weather conditions. Future work will focus on further improving performance in extreme conditions and rare event detection.",
          },
        ],
        references: [
          "Lee, J., Smith, J., & Clark, T. (2020). Attention-based detection for autonomous vehicles. Transportation AI, 8(3), 112-125.",
          "Clark, T., & Brown, A. (2019). Occlusion-aware tracking for urban environments. Computer Vision for Vehicles, 12(2), 78-92.",
          "Smith, J., & Wilson, M. (2018). Real-time object detection for autonomous driving. Transportation Technology, 5(1), 45-56.",
          "Johnson, R., & Lee, J. (2017). Multi-sensor fusion for vehicle perception. Intelligent Vehicles Symposium, 10, 223-235.",
          "Parker, S., & Miller, D. (2016). Benchmark datasets for autonomous driving perception. Computer Vision Conference, 3, 178-189.",
        ],
      },
      {
        id: 6,
        title: "Deep Learning Architectures: A Comparative Study",
        journal: "Journal of Artificial Intelligence Research",
        year: "2019",
        authors: "John Smith, Robert Johnson",
        category: "neural-networks",
        abstract:
          "A comparative analysis of various deep learning architectures and their performance on benchmark datasets.",
        doi: "10.1234/jair.2019.45678",
        sections: [
          {
            title: "Introduction",
            content:
              "The rapid evolution of deep learning architectures has led to an increasingly complex landscape of models. This paper provides a systematic comparison of major deep learning architectures across multiple domains and tasks.",
          },
          {
            title: "Architectural Overview",
            content:
              "We categorize and describe the fundamental building blocks and design principles of modern deep learning architectures, including convolutional networks, recurrent networks, transformers, graph neural networks, and generative models.",
          },
          {
            title: "Benchmark Methodology",
            content:
              "We establish a comprehensive benchmarking methodology that evaluates architectures on computational efficiency, sample efficiency, generalization capability, and interpretability across vision, language, speech, and multimodal tasks.",
          },
          {
            title: "Comparative Results",
            content:
              "Our analysis reveals domain-specific strengths of different architectures while also identifying cross-cutting principles that contribute to strong performance across domains. We provide detailed performance breakdowns and statistical significance testing.",
          },
          {
            title: "Conclusion",
            content:
              "This comparative study provides practitioners with evidence-based guidance for architecture selection based on application requirements. We also identify promising research directions for architecture development and highlight the growing importance of hybrid approaches.",
          },
        ],
        references: [
          "Smith, J., & Johnson, R. (2019). Benchmarking deep learning architectures. Journal of Artificial Intelligence Research, 45(2), 112-135.",
          "Johnson, R., & Wilson, M. (2018). Evolution of convolutional neural networks. Vision Computing Review, 22(3), 78-92.",
          "Brown, A., & Clark, T. (2018). Transformer models: Analysis and applications. Natural Language Engineering, 10(4), 334-356.",
          "Lee, J., & Doe, J. (2017). Recurrent network architectures compared. Neural Computation Advances, 15(2), 223-245.",
          "Miller, D., & Parker, S. (2016). Graph neural networks for structured data. Machine Learning Research, 8(1), 56-78.",
        ],
      },
    ],

    // Blog page
    "blog.title": "Blog",
    "blog.description":
      "Thoughts, insights, and discussions on Computer Science, AI, and academia.",
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
    "blog.posts": [
      {
        id: 1,
        title: "The Future of Artificial Intelligence in Education",
        excerpt:
          "Exploring how AI technologies are transforming educational experiences and what this means for students and educators.",
        date: "May 15, 2023",
        readTime: "8 min read",
        category: "ai",
        image: "/futuristic-ai-classroom.png",
        author: "Prof. John Smith",
        authorImage:
          "/placeholder.svg?height=100&width=100&query=professional headshot",
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
        ],
        relatedPosts: [2, 3, 5],
      },
      {
        id: 2,
        title: "Ethics in Computer Science Research",
        excerpt:
          "Discussing the ethical considerations that should guide computer science research and development.",
        date: "April 22, 2023",
        readTime: "6 min read",
        category: "ethics",
        image: "/ethics-in-technology.png",
        author: "Prof. John Smith",
        authorImage:
          "/placeholder.svg?height=100&width=100&query=professional headshot",
        content: [
          "Ethics in computer science research has become increasingly important as technologies like artificial intelligence, big data, and autonomous systems have greater impacts on society. In this blog post, I'll explore the key ethical considerations that should guide computer science research and development.",
          "## The Growing Importance of Ethics in Computer Science",
          "As computer systems become more integrated into critical aspects of human life, from healthcare diagnostics to judicial decision support, the ethical implications of these technologies grow increasingly significant. Computer scientists can no longer focus solely on technical capabilities; we must also consider the societal impact of our innovations.",
          "## Key Ethical Principles",
          "Several fundamental ethical principles should guide computer science research. First, beneficence: research should aim to benefit humanity and minimize harm. Second, autonomy: systems should respect human agency and decision-making capacity. Third, justice: the benefits and burdens of technology should be distributed fairly across society. Fourth, transparency: the operation of systems should be explainable to those affected by them.",
          "## Ethical Challenges in Current Research Areas",
          "Different research areas present unique ethical challenges. In artificial intelligence, issues of bias and fairness are paramount, as models trained on biased data can perpetuate and amplify societal inequalities. In data science, privacy concerns are central, as researchers must balance the utility of data with individuals' rights to control information about themselves.",
          "## Implementing Ethical Frameworks",
          "Implementing ethical principles in practice requires concrete frameworks and methodologies. Ethics review boards, similar to those used in medical research, are becoming more common in computer science departments and technology companies. Tools for algorithmic impact assessments and fairness audits are being developed to help researchers evaluate the ethical implications of their work.",
          "## Conclusion",
          "As computer scientists, we have a responsibility to consider the ethical implications of our research and development activities. By integrating ethical thinking into our work from the earliest stages, we can help ensure that technological advances benefit humanity while minimizing unintended negative consequences.",
        ],
        relatedPosts: [1, 3, 6],
      },
      {
        id: 3,
        title: "Understanding Deep Learning Architectures",
        excerpt:
          "A beginner-friendly guide to understanding the fundamentals of deep learning neural network architectures.",
        date: "March 10, 2023",
        readTime: "10 min read",
        category: "ai",
        image:
          "/placeholder.svg?height=400&width=600&query=neural network visualization",
        author: "Prof. John Smith",
        authorImage:
          "/placeholder.svg?height=100&width=100&query=professional headshot",
        content: [
          "Deep learning has revolutionized artificial intelligence in recent years, enabling breakthroughs in image recognition, natural language processing, and many other domains. In this blog post, I'll provide a beginner-friendly introduction to deep learning architectures.",
          "## What is Deep Learning?",
          "Deep learning is a subset of machine learning that uses neural networks with multiple layers (hence 'deep') to progressively extract higher-level features from raw input. For example, in image recognition, lower layers might identify edges, while higher layers might identify more complex concepts like faces or objects.",
          "## Fundamental Architectures",
          "Several key architectures form the foundation of modern deep learning. Feedforward neural networks, the simplest type, pass information in one direction from input to output. Convolutional Neural Networks (CNNs) excel at processing grid-like data such as images, using convolutional layers to detect spatial patterns. Recurrent Neural Networks (RNNs) are designed for sequential data, with connections that form cycles to maintain information about previous inputs.",
          "## Advanced Architectures",
          "Building on these foundations, researchers have developed more sophisticated architectures. Long Short-Term Memory networks (LSTMs) and Gated Recurrent Units (GRUs) address the vanishing gradient problem in RNNs. Transformer models, which rely entirely on attention mechanisms, have revolutionized natural language processing. Generative Adversarial Networks (GANs) consist of two competing networks: a generator that creates samples and a discriminator that evaluates them.",
          "## Choosing the Right Architecture",
          "Selecting the appropriate architecture depends on the specific problem you're trying to solve. For image-related tasks, CNNs are typically the best choice. For sequential data like text or time series, RNNs or Transformers usually perform better. For tabular data, standard feedforward networks often work well. Always consider the nature of your data and the specific requirements of your task.",
          "## Conclusion",
          "Understanding the strengths and weaknesses of different deep learning architectures is essential for applying these powerful tools effectively. As you delve deeper into the field, you'll develop intuition about which architectures are most appropriate for specific problems, and you may even contribute to the development of new architectural innovations.",
        ],
        relatedPosts: [1, 2, 6],
      },
      {
        id: 4,
        title: "The Importance of Diversity in Tech",
        excerpt:
          "Why diversity and inclusion are crucial for innovation and problem-solving in the technology sector.",
        date: "February 28, 2023",
        readTime: "7 min read",
        category: "society",
        image:
          "/placeholder.svg?height=400&width=600&query=diverse group of technology professionals",
        author: "Prof. John Smith",
        authorImage:
          "/placeholder.svg?height=100&width=100&query=professional headshot",
        content: [
          "Diversity in technology is not just a social issue; it's a matter of innovation, creativity, and effectiveness. In this blog post, I'll explore why diversity and inclusion are crucial for the technology sector and how they contribute to better outcomes.",
          "## Diversity Drives Innovation",
          "Research consistently shows that diverse teams produce more innovative solutions than homogeneous ones. When people from different backgrounds, experiences, and perspectives collaborate, they bring a wider range of ideas and approaches to problem-solving. This cognitive diversity leads to more creative solutions and helps teams avoid groupthink.",
          "## Real-World Impact of Homogeneity",
          "The consequences of homogeneous teams are evident in many technological failures. From facial recognition systems that struggle with darker skin tones to medical algorithms that demonstrate bias against certain demographic groups, these issues often stem from a lack of diverse perspectives during development. With more diverse teams, these problems might have been identified and addressed before products reached the market.",
          "## Beyond Representation",
          "True diversity goes beyond simply having representation from different demographic groups. It requires creating an inclusive environment where all team members feel valued and comfortable sharing their perspectives. This means addressing unconscious biases, creating equitable processes, and fostering a culture of respect and belonging.",
          "## Strategies for Improving Diversity",
          "Organizations can take concrete steps to improve diversity and inclusion. Expanding recruitment sources, implementing blind resume screening, using structured interviews, and creating mentorship programs can all help diversify the talent pipeline. Additionally, regular training on unconscious bias and creating affinity groups can foster a more inclusive workplace culture.",
          "## Conclusion",
          "In the rapidly evolving technology sector, diversity isn't just a nice-to-have—it's a competitive advantage. By bringing together individuals with different perspectives, experiences, and ways of thinking, tech companies and research institutions can develop more innovative, effective, and equitable solutions to complex problems.",
        ],
        relatedPosts: [2, 5, 6],
      },
      {
        id: 5,
        title: "Quantum Computing: A Primer",
        excerpt:
          "An introduction to quantum computing concepts and their potential impact on computational problems.",
        date: "January 15, 2023",
        readTime: "9 min read",
        category: "computing",
        image:
          "/placeholder.svg?height=400&width=600&query=quantum computer conceptual image",
        author: "Prof. John Smith",
        authorImage:
          "/placeholder.svg?height=100&width=100&query=professional headshot",
        content: [
          "Quantum computing represents a fundamental shift in how we approach computation, with the potential to solve certain problems exponentially faster than classical computers. In this blog post, I'll provide a beginner-friendly introduction to quantum computing concepts.",
          "## The Basics of Quantum Computing",
          "While classical computers use bits that are either 0 or 1, quantum computers use quantum bits or 'qubits' that can exist in a superposition of both states simultaneously. This property, along with quantum entanglement and interference, enables quantum computers to perform certain calculations much more efficiently than classical computers.",
          "## Quantum Algorithms",
          "Several quantum algorithms demonstrate the potential advantages of quantum computing. Shor's algorithm can factor large numbers exponentially faster than the best known classical algorithms, with significant implications for cryptography. Grover's algorithm provides a quadratic speedup for unstructured search problems. Quantum simulation algorithms can efficiently model quantum systems, with applications in chemistry and materials science.",
          "## Current State of Quantum Hardware",
          "Despite rapid progress, quantum computing hardware remains in its early stages. Current quantum computers have limited numbers of qubits and are susceptible to errors caused by decoherence and noise. Several approaches to quantum hardware are being pursued, including superconducting circuits, trapped ions, photonics, and topological qubits, each with its own advantages and challenges.",
          "## Practical Applications",
          "While large-scale, error-corrected quantum computers are still years away, researchers are already exploring potential applications. These include cryptography, optimization problems, drug discovery, materials science, and financial modeling. Some hybrid quantum-classical approaches are being developed to leverage current quantum capabilities alongside classical computing strengths.",
          "## Conclusion",
          "Quantum computing represents one of the most exciting frontiers in computer science. While significant technical challenges remain, the potential impact on computational capabilities is profound. As quantum hardware continues to improve and quantum algorithms become more sophisticated, we can expect quantum computing to transform various scientific and industrial domains.",
        ],
        relatedPosts: [3, 4, 6],
      },
      {
        id: 6,
        title: "Teaching Computer Science Effectively",
        excerpt:
          "Strategies and approaches for effective computer science education at university level.",
        date: "December 5, 2022",
        readTime: "5 min read",
        category: "education",
        image:
          "/placeholder.svg?height=400&width=600&query=computer science classroom",
        author: "Prof. John Smith",
        authorImage:
          "/placeholder.svg?height=100&width=100&query=professional headshot",
        content: [
          "Teaching computer science effectively requires balancing theoretical foundations with practical skills in a rapidly evolving field. In this blog post, I'll share strategies and approaches that have proven effective in my experience teaching computer science at the university level.",
          "## Active Learning Approaches",
          "Computer science education benefits greatly from active learning approaches. Rather than passively listening to lectures, students learn more effectively by solving problems, implementing algorithms, debugging code, and working on projects. Flipped classroom models, where students review lecture material before class and spend class time on interactive activities, can be particularly effective.",
          "## Project-Based Learning",
          "Real-world projects provide context and motivation for learning. By working on substantial projects, students develop not only technical skills but also project management, teamwork, and communication abilities. Projects should be challenging but achievable, with clear learning objectives and opportunities for creativity and personalization.",
          "## Inclusive Teaching Practices",
          "Creating an inclusive learning environment is essential for all students to succeed. This includes using diverse examples that appeal to different interests, providing multiple ways to demonstrate mastery, addressing implicit biases, and fostering a supportive classroom culture. Instructors should recognize and address the varied backgrounds and preparation levels of students.",
          "## Balancing Theory and Practice",
          "Computer science education should balance theoretical foundations with practical skills. Students need to understand fundamental concepts like algorithms, data structures, and computational complexity, but they also need hands-on experience with current tools and technologies. Finding this balance helps prepare students for both immediate employment and long-term career adaptability.",
          "## Conclusion",
          "Effective computer science education requires thoughtful pedagogy that engages students, provides relevant experiences, and builds both theoretical understanding and practical skills. By implementing these strategies, educators can help prepare the next generation of computer scientists to address complex problems in a rapidly changing technological landscape.",
        ],
        relatedPosts: [1, 2, 4],
      },
    ],

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
    "contact.message_sent":
      "Your message has been sent successfully. I'll get back to you as soon as possible.",
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
    "home.publication_1_title":
      "Applications de l'Apprentissage Automatique dans la Santé",
    "home.publication_1_journal": "Journal d'Informatique Médicale (2023)",
    "home.publication_1_abstract":
      "Cet article explore les applications des algorithmes d'apprentissage automatique dans le diagnostic et la planification des traitements de santé.",
    "home.publication_2_title":
      "Réseaux de Neurones pour le Traitement du Langage Naturel",
    "home.publication_2_journal":
      "Journal de Linguistique Computationnelle (2022)",
    "home.publication_2_abstract":
      "Une analyse approfondie de la façon dont les réseaux de neurones peuvent être appliqués pour résoudre des tâches complexes de traitement du langage naturel.",
    "home.publication_3_title":
      "Considérations Éthiques en Intelligence Artificielle",
    "home.publication_3_journal": "Revue d'Éthique de l'IA (2022)",
    "home.publication_3_abstract":
      "Cet article discute des implications éthiques du déploiement de systèmes d'IA dans divers domaines et propose un cadre pour le développement éthique de l'IA.",
    "home.read_more": "Lire plus",
    "home.view_all_publications": "Voir toutes les publications",

    // Other translations would follow the same pattern
    // For brevity, I'm not including all French translations
  },
  // Additional languages would be added here
};

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key) => {
    // Get the translations for the current language, fallback to English
    const langTranslations = translations[language] || translations.en;

    // Return the translation for the key, or the key itself if not found
    return langTranslations[key] || translations.en[key] || key;
  };

  return { t };
}
