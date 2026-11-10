import { Language } from '../types/portfolio';

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    education: string;
    skills: string;
    projects: string;
    interests: string;
    contact: string;
    cv: string;
    language: string;
    availableForWork: string;
  };
  hero: {
    greeting: string;
    name: string;
    subName?: string;
    title: string;
    animatedTitles: string[];
    roleBadges: string[];
    bio: string;
    viewProjects: string;
    viewCv: string;
    contactMe: string;
    location: string;
    locationWithFlag: string;
    openToOpportunities: string;
    universityBadge: string;
    statusBadge: string;
    scrollDown: string;
  };
  about: {
    sectionTag: string;
    title: string;
    subtitle: string;
    introParagraph1: string;
    introParagraph2: string;
    introParagraph3: string;
    infoCards: {
      locationLabel: string;
      locationVal: string;
      universityLabel: string;
      universityVal: string;
      majorLabel: string;
      majorVal: string;
      levelLabel: string;
      levelVal: string;
      languagesLabel: string;
      languagesVal: string;
      statusLabel: string;
      statusVal: string;
    };
    highlights: {
      title: string;
      items: { title: string; desc: string }[];
    };
  };
  education: {
    sectionTag: string;
    title: string;
    subtitle: string;
    degreeTitle: string;
    university: string;
    department: string;
    location: string;
    period: string;
    currentStanding: string;
    focusAreasTitle: string;
    coursework: string[];
    academicSummary: string;
    keyAchievementsTitle: string;
    achievements: string[];
  };
  skills: {
    sectionTag: string;
    title: string;
    subtitle: string;
    honestyNotice: string;
    categories: {
      programming: string;
      webMobile: string;
      aiData: string;
      embedded: string;
      tools: string;
    };
    levelBadges: {
      proficient: string;
      intermediate: string;
      foundational: string;
      embedded: string;
    };
    skillList: {
      name: string;
      category: string;
      level: string;
      desc: string;
    }[];
  };
  projects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    statusNotice: string;
    viewCode: string;
    liveDemo: string;
    demoUnavailable: string;
    modalDetails: string;
    closeModal: string;
    overviewTitle: string;
    techStackTitle: string;
    keyFeaturesTitle: string;
    items: {
      id: string;
      title: string;
      category: string;
      shortDesc: string;
      longDesc: string;
      status: string;
      features: string[];
      tech: string[];
      github: string;
      demo?: string;
    }[];
  };
  interests: {
    sectionTag: string;
    title: string;
    subtitle: string;
    introNotice: string;
    items: {
      id: string;
      title: string;
      tagline: string;
      description: string;
      focusAreas: string[];
      ambition: string;
    }[];
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    emailVal: string;
    copyEmail: string;
    copied: string;
    phoneLabel: string;
    phoneVal: string;
    phoneTelLink: string;
    callPhone: string;
    copyPhone: string;
    phoneCopied: string;
    locationLabel: string;
    locationVal: string;
    mapTitle: string;
    mapSubtitle: string;
    viewOnKakaoMap: string;
    kakaoMapBadge: string;
    neighborhoodNotice: string;
    universityLabel: string;
    universityVal: string;
    githubLabel: string;
    linkedinLabel: string;
    sendNoteTitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      sendButton: string;
      sending: string;
      successMessage: string;
      errorMessage: string;
    };
  };
  resumeModal: {
    title: string;
    downloadPrint: string;
    close: string;
    summaryTitle: string;
    educationTitle: string;
    skillsTitle: string;
    projectsTitle: string;
    interestsTitle: string;
    languagesTitle: string;
    disclaimer: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    social: string;
    copyright: string;
    builtWith: string;
    top: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      interests: 'Interests',
      contact: 'Contact',
      cv: 'View CV',
      language: 'Language',
      availableForWork: 'Available for Opportunities',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'CHOWDHURY MD REMON',
      subName: '',
      title: 'Software Developer & AI Student',
      animatedTitles: [
        'Software Developer',
        'Web Application Developer',
        'Flutter Developer',
        'AI & Computer Engineering Student',
        'Arduino & Embedded Systems Enthusiast',
      ],
      roleBadges: [
        'AI & Computer Engineering',
        'Software Development',
        'Mobile (Flutter)',
        'Arduino & Embedded Systems',
      ],
      bio: '3rd-year undergraduate at Tongmyong University in Busan, South Korea. Driven by a passion for solving real-world challenges through practical software engineering, intelligent systems, mobile applications, and embedded hardware prototyping.',
      viewProjects: 'Explore Projects',
      viewCv: 'Download / View CV',
      contactMe: 'Get In Touch',
      location: 'Busan, South Korea',
      locationWithFlag: 'Busan, South Korea',
      openToOpportunities: 'Open to Global Opportunities',
      universityBadge: 'Tongmyong University',
      statusBadge: '3rd Year Undergraduate',
      scrollDown: 'Scroll to explore',
    },
    about: {
      sectionTag: 'BACKGROUND & PROFILE',
      title: 'About Me',
      subtitle: 'Passionate student engineer connecting software, intelligence, and physical computing.',
      introParagraph1:
        'I am Chowdhury Md Remon, an undergraduate student currently enrolled in my 3rd year in the Department of AI and Computer Engineering at Tongmyong University, located in the coastal city of Busan, South Korea.',
      introParagraph2:
        'My academic journey has cultivated strong foundations across software engineering disciplines—from architecting interactive web and mobile applications with Flutter, to implementing data analysis workflows using Python, NumPy, and Pandas, to hands-on embedded computing using Arduino microcontrollers.',
      introParagraph3:
        'Living and studying in South Korea has provided me with a resilient, adaptable international mindset, collaborative communication skills, and a dedication to continuous technical growth. I thrive when tackling structured problems and transforming algorithmic ideas into functional code.',
      infoCards: {
        locationLabel: 'Location',
        locationVal: 'Busan, South Korea',
        universityLabel: 'University',
        universityVal: 'Tongmyong University',
        majorLabel: 'Department',
        majorVal: 'AI and Computer Engineering',
        levelLabel: 'Academic Standing',
        levelVal: '3rd Year Undergraduate Student',
        languagesLabel: 'Spoken Languages',
        languagesVal: 'English (Fluent), Bengali (Native), Korean (Conversational)',
        statusLabel: 'Current Focus',
        statusVal: 'Software Engineering & Embedded AI Prototyping',
      },
      highlights: {
        title: 'Core Driving Principles',
        items: [
          {
            title: 'Rigorous Academic Curiosity',
            desc: 'Approaching every coursework challenge and lab assignment with methodical inquiry, clean code practices, and genuine enthusiasm.',
          },
          {
            title: 'Hardware & Software Convergence',
            desc: 'Bridging the physical world and software through Arduino sensor telemetry and modern graphical user interfaces.',
          },
          {
            title: 'Cross-Cultural Adaptability',
            desc: 'Embracing cross-cultural collaboration in South Korea, fostering perseverance, teamwork, and active bilingual communication.',
          },
        ],
      },
    },
    education: {
      sectionTag: 'ACADEMIC PATHWAY',
      title: 'Education',
      subtitle: 'Building a rigorous foundation in computational theory and applied engineering.',
      degreeTitle: 'Bachelor of Science in AI and Computer Engineering',
      university: 'Tongmyong University (동명대학교)',
      department: 'Department of AI and Computer Engineering',
      location: 'Busan, South Korea',
      period: '2022 – Present (Expected 2026)',
      currentStanding: '3rd Year Undergraduate Student',
      academicSummary:
        'Tongmyong University provides an intensive, modern curriculum merging classic computer engineering with modern artificial intelligence, systems programming, and embedded technologies.',
      focusAreasTitle: 'Key Academic Coursework & Studies',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Python, Dart)',
        'Introduction to Artificial Intelligence & Machine Learning',
        'Microcontroller Systems & Arduino Interfacing',
        'Database Management Systems & SQL',
        'Computer Networks & Web Fundamentals',
        'Software Engineering Methodologies',
        'Data Analysis with NumPy & Pandas',
      ],
      keyAchievementsTitle: 'Academic & Campus Environment',
      achievements: [
        'Actively participating in computer engineering labs and hands-on microcontroller sensor projects.',
        'Developing practical multi-platform utility applications combining mobile interfaces with backend logic.',
        'Collaborating within a multicultural student body in Busan with English and Korean communication.',
      ],
    },
    skills: {
      sectionTag: 'TECHNICAL TOOLKIT',
      title: 'Technical Skills',
      subtitle: 'Balanced capabilities spanning programming, application development, data, and embedded hardware.',
      honestyNotice:
        'Note: Skills reflect authentic academic and project experience. All proficiencies are actively practiced and continually expanded without overstated expert claims.',
      categories: {
        programming: 'Programming Languages',
        webMobile: 'Web & Mobile Development',
        aiData: 'AI & Data Science',
        embedded: 'Hardware & Embedded Systems',
        tools: 'Developer Tools & Environments',
      },
      levelBadges: {
        proficient: 'Working Proficiency',
        intermediate: 'Intermediate Level',
        foundational: 'Foundational / Academic',
        embedded: 'Hardware Prototyping',
      },
      skillList: [
        {
          name: 'Python',
          category: 'programming',
          level: 'Intermediate Level',
          desc: 'Used for algorithms, data manipulation with NumPy/Pandas, backend scripts, and foundational AI/ML exercises.',
        },
        {
          name: 'Dart',
          category: 'programming',
          level: 'Intermediate Level',
          desc: 'Primary language for developing cross-platform mobile user interfaces and stateful application logic.',
        },
        {
          name: 'JavaScript',
          category: 'programming',
          level: 'Intermediate Level',
          desc: 'Core language for interactive web frontends, DOM manipulation, asynchronous fetching, and modern client features.',
        },
        {
          name: 'HTML5 & CSS3',
          category: 'webMobile',
          level: 'Working Proficiency',
          desc: 'Semantic markup, accessible layouts, responsive CSS grids, flexbox, and modern utility-first styling.',
        },
        {
          name: 'Flutter',
          category: 'webMobile',
          level: 'Intermediate Level',
          desc: 'Building responsive cross-platform mobile apps, reactive state management, customized widgets, and UI animation.',
        },
        {
          name: 'Arduino',
          category: 'embedded',
          level: 'Hardware Prototyping',
          desc: 'C/C++ based firmware programming, GPIO pins, ultrasonic and temperature sensor integration, actuators, and serial debugging.',
        },
        {
          name: 'NumPy',
          category: 'aiData',
          level: 'Foundational / Academic',
          desc: 'Multidimensional array operations, matrix mathematics, vectorized computations, and scientific data structuring.',
        },
        {
          name: 'Pandas',
          category: 'aiData',
          level: 'Foundational / Academic',
          desc: 'Data cleaning, tabular dataset transformation, CSV/JSON parsing, feature aggregation, and statistical exploration.',
        },
        {
          name: 'AI / ML Basics',
          category: 'aiData',
          level: 'Foundational / Academic',
          desc: 'Understanding core supervised/unsupervised machine learning concepts, classification, regression, and model evaluation metrics.',
        },
        {
          name: 'Git & GitHub',
          category: 'tools',
          level: 'Working Proficiency',
          desc: 'Version control workflows, commit management, branching, GitHub remote repository management, and collaboration.',
        },
        {
          name: 'VS Code & Arduino IDE',
          category: 'tools',
          level: 'Working Proficiency',
          desc: 'Daily development IDEs, debugging tools, extensions, and hardware firmware flashing utilities.',
        },
      ],
    },
    projects: {
      sectionTag: 'SELECTED WORK & LABS',
      title: 'Projects & Prototypes',
      subtitle: 'Hands-on practical applications demonstrating software architecture, hardware integration, and data processing.',
      filterAll: 'All Projects',
      statusNotice: 'Projects represent academic coursework, lab prototypes, and personal development explorations.',
      viewCode: 'View Code (GitHub)',
      liveDemo: 'Live Demo',
      demoUnavailable: 'Demo Not Hosted (Hardware/Local Project)',
      modalDetails: 'View Project Details',
      closeModal: 'Close',
      overviewTitle: 'Project Overview',
      techStackTitle: 'Technologies Used',
      keyFeaturesTitle: 'Key Architecture & Highlights',
      items: [
        {
          id: 'arduino-iot-monitor',
          title: 'Smart Environmental & Sensor Monitoring System',
          category: 'Hardware & IoT',
          shortDesc:
            'An Arduino-powered multi-sensor telemetry system measuring real-time ambient temperature, humidity, and obstacle proximity with serial diagnostics.',
          longDesc:
            'Designed and assembled as an embedded systems engineering project. Uses an Arduino microcontroller to poll physical DHT11 and HC-SR04 ultrasonic sensors. Implements debounced interrupt logic, formatted serial output, and an I2C LCD character display to deliver real-time environmental awareness.',
          status: 'Completed Academic Lab Project',
          features: [
            'Real-time ultrasonic distance calculation with threshold alerting buzzer',
            'I2C 16x2 LCD display integration for instant metric visualization without PC connection',
            'Structured C/C++ firmware with modular sensor read routines and serial telemetry logging',
            'Circuit breadboard prototyping with regulated power distribution and pull-up resistors',
          ],
          tech: ['Arduino', 'C/C++', 'Sensors (Ultrasonic & DHT)', 'I2C LCD', 'Serial Protocol'],
          github: 'https://github.com/remonchowdhury/arduino-environment-monitor',
        },
        {
          id: 'flutter-campus-helper',
          title: 'Campus Flow — Cross-Platform Student Utility App',
          category: 'Mobile Development',
          shortDesc:
            'A responsive Flutter and Dart mobile application prototype built to organize class schedules, track academic assignments, and manage daily student routines.',
          longDesc:
            'Created to address common student organization needs at university. Built with Flutter for smooth rendering across Android and iOS, featuring an intuitive modern dark UI, local storage persistence for timetables, deadline countdowns, and clean categorized task lists.',
          status: 'Academic & Personal Project',
          features: [
            'Clean material design UI with customized widgets and responsive layout hierarchy',
            'Interactive schedule timetable with day-by-day course viewing and lecture hall indicators',
            'Task manager with status toggling, priority labeling, and persistent local storage',
            'Built with clean Dart architecture separating model logic from UI presentation',
          ],
          tech: ['Flutter', 'Dart', 'Mobile UI', 'Local Storage', 'Stateful Widgets'],
          github: 'https://github.com/remonchowdhury/campus-flow-flutter-app',
        },
        {
          id: 'python-academic-analytics',
          title: 'Student Academic Data Analysis & Grade Insights',
          category: 'AI & Data Science',
          shortDesc:
            'A Python data analytics script utilizing NumPy and Pandas to clean, normalize, and uncover statistical trends from structured academic datasets.',
          longDesc:
            'Exploratory data analysis (EDA) pipeline built as part of AI and computer engineering coursework. Reads multi-variable student performance records, handles missing inputs, executes vectorized mathematical scoring transforms via NumPy, and computes correlation metrics across study hours and exam outcomes.',
          status: 'Coursework Project',
          features: [
            'Automated CSV dataset ingestion, null handling, and categorical data encoding with Pandas',
            'Vectorized matrix computations for GPA normalization and percentile ranking with NumPy',
            'Statistical summary generation including variance, standard deviation, and correlation matrices',
            'Exportable insight reports detailing key performance trends and predictive indicators',
          ],
          tech: ['Python', 'NumPy', 'Pandas', 'Data Analysis', 'Jupyter Notebook'],
          github: 'https://github.com/remonchowdhury/academic-data-analytics',
        },
        {
          id: 'modern-dev-portfolio',
          title: 'Personal Portfolio & Multilingual Engineering Portal',
          category: 'Web Development',
          shortDesc:
            'A high-performance modern web application featuring full trilingual localization (English, Bengali, Korean), responsive layout, and interactive modals.',
          longDesc:
            'Engineered as a comprehensive showcase of software engineering capabilities. Features an electric modern design system, seamless client-side state management for three native languages without external translation widgets, accessible keyboard navigation, and responsive typography tailored to Asian and Bengali scripts.',
          status: 'Active Personal Project',
          features: [
            'Complete instant tri-lingual dictionary engine (English, Bengali, Korean) with localStorage persistence',
            'Modern dark navy and electric blue design system built with React, TypeScript, and modern CSS',
            'Interactive printable resume modal, dynamic project filtering, and feedback contact triggers',
            '100% responsive architecture optimized for mobile smartphones, tablets, and wide monitors',
          ],
          tech: ['React', 'TypeScript', 'Tailwind CSS', 'i18n Localization', 'Lucide Icons'],
          github: 'https://github.com/remonchowdhury/remon-portfolio',
          demo: '#',
        },
        {
          id: 'ai-vision-prototype',
          title: 'Foundational Computer Vision & Object Tracking Pipeline',
          category: 'Artificial Intelligence',
          shortDesc:
            'An introductory computer vision Python prototype exploring image pre-processing, contour detection, and frame-by-frame object tracking.',
          longDesc:
            'Developed as an exploratory project bridging software engineering and AI principles. Processes live or recorded video streams to apply grayscale transforms, Gaussian blurring, color-space masking, and bounding box coordinate calculation for target tracking.',
          status: 'Ongoing Academic Exploration',
          features: [
            'Frame extraction and color-space conversion (RGB to HSV) for targeted color filtering',
            'Morphological operations to reduce sensor noise and extract clean object contours',
            'Bounding box coordinate telemetry calculated in real time with center-point trajectory history',
            'Structured Python codebase prepared for future integration with Arduino robotic pan-tilt hardware',
          ],
          tech: ['Python', 'OpenCV / Vision Basics', 'NumPy', 'Image Processing', 'Algorithms'],
          github: 'https://github.com/remonchowdhury/ai-vision-tracking-prototype',
        },
      ],
    },
    interests: {
      sectionTag: 'CAREER PASSIONS',
      title: 'Career Interests',
      subtitle: 'Domains where I strive to make a technical impact through focused study and engineering.',
      introNotice:
        'As a 3rd-year student in AI & Computer Engineering, my career trajectory centers on these five interconnected disciplines:',
      items: [
        {
          id: 'software-engineering',
          title: 'Software Engineering',
          tagline: 'Robust, maintainable, and scalable software systems.',
          description:
            'Passionate about mastering software design patterns, clean code methodologies, algorithmic efficiency, and building structured systems that solve real human challenges.',
          focusAreas: ['System Design', 'Clean Code Principles', 'Object-Oriented Architecture', 'Algorithms & Data Structures'],
          ambition: 'To contribute to production-grade software teams, write resilient modular code, and master modern DevOps and deployment pipelines.',
        },
        {
          id: 'web-development',
          title: 'Web Development',
          tagline: 'Fast, responsive, and visually compelling web applications.',
          description:
            'Building seamless user experiences with modern frontend technologies, reactive component hierarchies, accessible interfaces, and performant client-server data synchronization.',
          focusAreas: ['Modern React & TypeScript', 'Responsive Layouts', 'REST API Integration', 'State Management'],
          ambition: 'Creating intuitive digital products that load rapidly, look stunning across any device, and deliver delightful user journeys.',
        },
        {
          id: 'mobile-app-dev',
          title: 'Mobile App Development',
          tagline: 'Cross-platform mobile experiences with Flutter & Dart.',
          description:
            'Enthusiastic about cross-platform engineering, crafting fluid animations, touch-responsive interfaces, and practical mobile applications that help users in their daily routines.',
          focusAreas: ['Flutter & Dart', 'Cross-Platform Architecture', 'Mobile UI/UX', 'Local Caching & Device APIs'],
          ambition: 'Developing high-impact mobile solutions that feel native, perform smoothly, and solve mobility problems.',
        },
        {
          id: 'artificial-intelligence',
          title: 'Artificial Intelligence & Machine Learning',
          tagline: 'Data-driven insights, predictive models, and smart computing.',
          description:
            'Dedicated to understanding the core mathematical and algorithmic foundations of modern AI, data preprocessing with NumPy/Pandas, and applying ML models to practical engineering problems.',
          focusAreas: ['NumPy & Pandas', 'Supervised Learning', 'Computer Vision Foundations', 'Data Preprocessing'],
          ambition: 'To advance from foundational ML modeling to building end-to-end intelligent applications that process real-world sensory data.',
        },
        {
          id: 'arduino-embedded',
          title: 'Arduino & Embedded Systems',
          tagline: 'Physical computing, microcontrollers, and IoT sensor networks.',
          description:
            'Fascinated by the intersection of physical hardware and software logic. Writing C/C++ firmware to interface with sensors, control actuators, and construct responsive embedded prototypes.',
          focusAreas: ['Arduino Firmware (C/C++)', 'Sensor Integration', 'Serial Communication Protocols', 'Circuit Prototyping'],
          ambition: 'To integrate microcontroller edge devices with software dashboards and AI algorithms for intelligent IoT automation.',
        },
      ],
    },
    contact: {
      sectionTag: 'GET IN TOUCH',
      title: 'Contact',
      subtitle: 'Open for academic discussions, collaborative student projects, internships, and networking.',
      emailLabel: 'Direct Email',
      emailVal: 'remonchowdhury1999@gmail.com',
      copyEmail: 'Copy Email Address',
      copied: 'Email Copied to Clipboard!',
      phoneLabel: 'Direct Phone',
      phoneVal: '+82 10 9829 9331',
      phoneTelLink: 'tel:+821098293331',
      callPhone: 'Call Phone',
      copyPhone: 'Copy Number',
      phoneCopied: 'Phone Copied to Clipboard!',
      locationLabel: 'Current Location',
      locationVal: 'Busan, South Korea',
      mapTitle: 'Neighborhood Location (KakaoMap)',
      mapSubtitle: 'Busan, South Korea',
      viewOnKakaoMap: 'View on KakaoMap',
      kakaoMapBadge: '카카오맵 KakaoMap',
      neighborhoodNotice: 'General neighborhood overview in Busan. Specific residential address is kept private.',
      universityLabel: 'University',
      universityVal: 'Tongmyong University (AI & Computer Eng.)',
      githubLabel: 'GitHub Profile',
      linkedinLabel: 'LinkedIn Profile',
      sendNoteTitle: 'Send a Message',
      form: {
        name: 'Your Name',
        namePlaceholder: 'Enter your full name',
        email: 'Your Email Address',
        emailPlaceholder: 'e.g. yourname@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'Project inquiry / Opportunity / Hello',
        message: 'Message',
        messagePlaceholder: 'Write your message or inquiry here...',
        sendButton: 'Send Message',
        sending: 'Sending...',
        successMessage: 'Thank you! Your message has been received. I will respond to your email promptly.',
        errorMessage: 'Please fill out all fields before sending.',
      },
    },
    resumeModal: {
      title: 'Curriculum Vitae / Resume Preview',
      downloadPrint: 'Print / Save as PDF',
      close: 'Close Preview',
      summaryTitle: 'Professional Profile Summary',
      educationTitle: 'Education',
      skillsTitle: 'Technical Competencies',
      projectsTitle: 'Key Projects & Lab Experience',
      interestsTitle: 'Primary Engineering Interests',
      languagesTitle: 'Language Proficiencies',
      disclaimer: 'Official academic resume sheet of Chowdhury Md Remon — Tongmyong University, Busan, South Korea.',
    },
    footer: {
      tagline: 'Software Developer & AI Student at Tongmyong University, Busan, South Korea.',
      quickLinks: 'Navigation',
      social: 'Connect',
      copyright: 'All rights reserved.',
      builtWith: 'Engineered with React, TypeScript & Tailwind CSS.',
      top: 'Back to top',
    },
  },
  bn: {
    nav: {
      home: 'হোম',
      about: 'আমার সম্পর্কে',
      education: 'শিক্ষা',
      skills: 'দক্ষতা',
      projects: 'প্রজেক্ট',
      interests: 'ক্যারিয়ার আগ্রহ',
      contact: 'যোগাযোগ',
      cv: 'সিভি দেখুন',
      language: 'ভাষা',
      availableForWork: 'সুযোগ ও কাজের জন্য উন্মুক্ত',
    },
    hero: {
      greeting: 'স্বাগতম, আমি',
      name: 'CHOWDHURY MD REMON',
      subName: 'চৌধুরী মোঃ রেমন',
      title: 'সফটওয়্যার ডেভেলপার ও এআই শিক্ষার্থী',
      animatedTitles: [
        'সফটওয়্যার ডেভেলপার',
        'ওয়েব অ্যাপ্লিকেশন ডেভেলপার',
        'Flutter মোবাইল অ্যাপ ডেভেলপার',
        'এআই ও কম্পিউটার ইঞ্জিনিয়ারিং শিক্ষার্থী',
        'Arduino ও এমবেডেড সিস্টেম অনুরাগী',
      ],
      roleBadges: [
        'এআই ও কম্পিউটার ইঞ্জিনিয়ারিং',
        'সফটওয়্যার ডেভেলপমেন্ট',
        'মোবাইল অ্যাপ (Flutter)',
        'Arduino ও এমবেডেড সিস্টেম',
      ],
      bio: 'দক্ষিণ কোরিয়ার বুসান শহরে অবস্থিত তংমিয়ং বিশ্ববিদ্যালয়ের ৩য় বর্ষের স্নাতক শিক্ষার্থী। বাস্তব জীবনের সমস্যা সমাধানে ব্যবহারিক সফটওয়্যার ইঞ্জিনিয়ারিং, বুদ্ধিমান অ্যালগরিদম, মোবাইল অ্যাপ্লিকেশন ও এমবেডেড হার্ডওয়্যার তৈরিতে নিবেদিত।',
      viewProjects: 'প্রজেক্ট দেখুন',
      viewCv: 'সিভি ডাউনলোড / দেখুন',
      contactMe: 'যোগাযোগ করুন',
      location: 'বুসান, দক্ষিণ কোরিয়া',
      locationWithFlag: 'বুসান, দক্ষিণ কোরিয়া',
      openToOpportunities: 'গ্লোবাল সুযোগ ও কাজের জন্য উন্মুক্ত',
      universityBadge: 'তংমিয়ং বিশ্ববিদ্যালয় (Tongmyong Univ.)',
      statusBadge: '৩য় বর্ষের শিক্ষার্থী',
      scrollDown: 'নিচে স্ক্রোল করুন',
    },
    about: {
      sectionTag: 'পরিচিতি ও পটভূমি',
      title: 'আমার সম্পর্কে',
      subtitle: 'সফটওয়্যার, কৃত্রিম বুদ্ধিমত্তা এবং ফিজিক্যাল কম্পিউটিংয়ের মেলবন্ধনে আগ্রহী তরুণ প্রকৌশলী।',
      introParagraph1:
        'আমি চৌধুরী মোঃ রেমন। বর্তমানে দক্ষিণ কোরিয়ার অন্যতম প্রধান উপকূলীয় শহর বুসানের তংমিয়ং বিশ্ববিদ্যালয়ে এআই এবং কম্পিউটার ইঞ্জিনিয়ারিং বিভাগে ৩য় বর্ষের আন্ডারগ্র্যাজুয়েট শিক্ষার্থী হিসেবে অধ্যয়ন করছি।',
      introParagraph2:
        'আমার একাডেমিক যাত্রায় আমি সফটওয়্যার ইঞ্জিনিয়ারিংয়ের মৌলিক ভিত্তি গড়ে তুলেছি—Flutter দিয়ে ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন তৈরি, Python, NumPy ও Pandas ব্যবহার করে ডেটা বিশ্লেষণ এবং Arduino মাইক্রোকন্ট্রোলারের মাধ্যমে এমবেডেড সিস্টেম প্রোটোটাইপিংয়ে কাজ করছি।',
      introParagraph3:
        'দক্ষিণ কোরিয়ায় বসবাস ও উচ্চশিক্ষা আমাকে আন্তর্জাতিক মানসিকতা, অভিযোজনশীলতা এবং কার্যকর যোগাযোগের ক্ষেত্রে সমৃদ্ধ করেছে। যেকোনো জটিল সমস্যাকে যৌক্তিক ধাপে রূপান্তর করে কার্যকর কোডে বাস্তবায়ন করতে আমি পছন্দ করি।',
      infoCards: {
        locationLabel: 'বর্তমান অবস্থান',
        locationVal: 'বুসান, দক্ষিণ কোরিয়া',
        universityLabel: 'বিশ্ববিদ্যালয়',
        universityVal: 'তংমিয়ং বিশ্ববিদ্যালয় (Tongmyong University)',
        majorLabel: 'বিভাগ',
        majorVal: 'এআই ও কম্পিউটার ইঞ্জিনিয়ারিং (AI & Computer Eng.)',
        levelLabel: 'শিক্ষাবর্ষ',
        levelVal: 'স্নাতক ৩য় বর্ষের শিক্ষার্থী',
        languagesLabel: 'ভাষাগত দক্ষতা',
        languagesVal: 'ইংরেজি (সাবলীল), বাংলা (মাতৃভাষা), কোরিয়ান (দৈনন্দিন কথোপকথন)',
        statusLabel: 'বর্তমান মূল ফোকাস',
        statusVal: 'সফটওয়্যার ইঞ্জিনিয়ারিং ও এমবেডেড এআই প্রোটোটাইপিং',
      },
      highlights: {
        title: 'আমার মূল নীতি ও দৃষ্টিভঙ্গি',
        items: [
          {
            title: 'একাডেমিক জিজ্ঞাসা ও শেখার আগ্রহ',
            desc: 'প্রতিটি কোর্সওয়ার্ক এবং ল্যাব কার্যক্রমে নিয়মানুবর্তিতা, পরিচ্ছন্ন কোড ও শেখার গভীর আগ্রহ নিয়ে কাজ করা।',
          },
          {
            title: 'হার্ডওয়্যার ও সফটওয়্যারের সমন্বয়',
            desc: 'Arduino সেন্সর ও আধুনিক গ্রাফিক্যাল ইন্টারফেসের মাধ্যমে বাস্তবিক জগতের সাথে সফটওয়্যার সিস্টেমের সংযোগ তৈরি করা।',
          },
          {
            title: 'বহুভাষিক ও আন্তঃসাংস্কৃতিক অভিজ্ঞতা',
            desc: 'দক্ষিণ কোরিয়ায় আন্তর্জাতিক পরিবেশে অধ্যয়নের ফলে দলগত কাজের দক্ষতা এবং ধৈর্যশীল দৃষ্টিভঙ্গির বিকাশ।',
          },
        ],
      },
    },
    education: {
      sectionTag: 'শিক্ষাগত যোগ্যতা',
      title: 'শিক্ষা ও ডিগ্রি',
      subtitle: 'কম্পিউটেশনাল তত্ত্ব এবং প্রায়োগিক প্রকৌশলবিদ্যার মজবুত ভিত্তি।',
      degreeTitle: 'ব্যাচেলর অব সায়েন্স (B.Sc) - এআই ও কম্পিউটার ইঞ্জিনিয়ারিং',
      university: 'তংমিয়ং বিশ্ববিদ্যালয় (Tongmyong University / 동명대학교)',
      department: 'ডিপার্টমেন্ট অব এআই অ্যান্ড কম্পিউটার ইঞ্জিনিয়ারিং',
      location: 'বুসান, দক্ষিণ কোরিয়া',
      period: '২০২২ – বর্তমান (সম্ভাব্য ২০২৬)',
      currentStanding: 'স্নাতক ৩য় বর্ষের শিক্ষার্থী',
      academicSummary:
        'তংমিয়ং বিশ্ববিদ্যালয়ের আধুনিক পাঠ্যক্রমে প্রচলিত কম্পিউটার ইঞ্জিনিয়ারিংয়ের সাথে কৃত্রিম বুদ্ধিমত্তা, সিস্টেম প্রোগ্রামিং এবং এমবেডেড প্রযুক্তির সমন্বয় করা হয়েছে।',
      focusAreasTitle: 'প্রধান একাডেমিক কোর্সওয়ার্ক ও বিষয়সমূহ',
      coursework: [
        'Data Structures & Algorithms (ডেটা স্ট্রাকচার ও অ্যালগরিদম)',
        'Object-Oriented Programming (Python, Dart)',
        'Introduction to AI & Machine Learning (কৃত্রিম বুদ্ধিমত্তার মূল তত্ত্ব)',
        'Microcontroller Systems & Arduino Interfacing (মাইক্রোকন্ট্রোলার সিস্টেম)',
        'Database Management Systems & SQL (ডাটাবেস ম্যানেজমেন্ট)',
        'Computer Networks & Web Fundamentals (কম্পিউটার নেটওয়ার্ক ও ওয়েব)',
        'Software Engineering Principles (সফটওয়্যার ইঞ্জিনিয়ারিং নীতিমালা)',
        'Data Analysis with NumPy & Pandas (ডেটা বিশ্লেষণ)',
      ],
      keyAchievementsTitle: 'একাডেমিক কার্যক্রম ও পরিবেশ',
      achievements: [
        'বিশ্ববিদ্যালয়ের কম্পিউটার ইঞ্জিনিয়ারিং ল্যাবে নিয়মিত অংশগ্রহণ ও মাইক্রোকন্ট্রোলার সেন্সর প্রজেক্ট তৈরি।',
        'মোবাইল ইন্টারফেসের সাথে ব্যাকএন্ড লজিকের সমন্বয় ঘটিয়ে ব্যবহারিক স্টুডেন্ট ইউটিলিটি অ্যাপ্লিকেশন তৈরি।',
        'বহুজাতিক ছাত্রাবস্থায় ইংরেজি ও কোরিয়ান উভয় ভাষায় সক্রিয় যোগাযোগ ও উপস্থাপনা।',
      ],
    },
    skills: {
      sectionTag: 'প্রযুক্তিগত দক্ষতা',
      title: 'টেকনিক্যাল স্কিলস',
      subtitle: 'প্রোগ্রামিং, ওয়েব-মোবাইল অ্যাপ্লিকেশন, ডেটা এবং এমবেডেড হার্ডওয়্যারের সুষম দক্ষতা।',
      honestyNotice:
        'সতর্কতামূলক নোট: এখানে প্রদর্শিত প্রতিটি দক্ষতা আমার একাডেমিক ও বাস্তব প্রজেক্টের অভিজ্ঞতার ওপর ভিত্তি করে তালিকাভুক্ত। কোনো কৃত্রিম বা অতিরঞ্জিত দাবি পরিহার করা হয়েছে।',
      categories: {
        programming: 'প্রোগ্রামিং ল্যাঙ্গুয়েজ',
        webMobile: 'ওয়েব ও মোবাইল ডেভেলপমেন্ট',
        aiData: 'এআই ও ডেটা সায়েন্স',
        embedded: 'হার্ডওয়্যার ও এমবেডেড সিস্টেম',
        tools: 'ডেভেলপার টুলস ও এনভায়রনমেন্ট',
      },
      levelBadges: {
        proficient: 'কার্যকর দক্ষতা',
        intermediate: 'মধ্যবর্তী পর্যায় (Intermediate)',
        foundational: 'মৌলিক / একাডেমিক পর্যায়',
        embedded: 'হার্ডওয়্যার প্রোটোটাইপিং',
      },
      skillList: [
        {
          name: 'Python',
          category: 'programming',
          level: 'মধ্যবর্তী পর্যায় (Intermediate)',
          desc: 'অ্যালগরিদম অনুশীলন, NumPy ও Pandas দিয়ে ডেটা ম্যানিপুলেশন এবং মেশিন লার্নিংয়ের মৌলিক কাজের জন্য ব্যবহৃত।',
        },
        {
          name: 'Dart',
          category: 'programming',
          level: 'মধ্যবর্তী পর্যায় (Intermediate)',
          desc: 'ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপের ইউজার ইন্টারফেস এবং অ্যাপ লজিক লেখার প্রধান ভাষা।',
        },
        {
          name: 'JavaScript',
          category: 'programming',
          level: 'মধ্যবর্তী পর্যায় (Intermediate)',
          desc: 'ওয়েবের ইন্টারঅ্যাক্টিভ ফ্রন্টএন্ড, ডম ম্যানিপুলেশন, অ্যাসিঙ্ক্রোনাস ডেটা ফেচিং এবং আধুনিক ক্লায়েন্ট ফিচার তৈরিতে ব্যবহৃত।',
        },
        {
          name: 'HTML5 & CSS3',
          category: 'webMobile',
          level: 'কার্যকর দক্ষতা',
          desc: 'সিম্যান্টিক মার্কআপ, রেসপনসিভ গ্রিড, ফ্লেক্সবক্স এবং আধুনিক ইউটিলিটি-ফার্স্ট সিএসএস স্টাইলিং।',
        },
        {
          name: 'Flutter',
          category: 'webMobile',
          level: 'মধ্যবর্তী পর্যায় (Intermediate)',
          desc: 'Android এবং iOS-এর জন্য ক্রস-প্ল্যাটফর্ম রেসপনসিভ মোবাইল অ্যাপ, কাস্টম উইজেট এবং স্টেট ম্যানেজমেন্ট।',
        },
        {
          name: 'Arduino',
          category: 'embedded',
          level: 'হার্ডওয়্যার প্রোটোটাইপিং',
          desc: 'C/C++ ভিত্তিক ফার্মওয়্যার, আল্ট্রাসনিক এবং তাপমাত্রা সেন্সর ইন্টিগ্রেশন, অ্যাকচুয়েটর এবং সিরিয়াল কমিউনিকেশন।',
        },
        {
          name: 'NumPy',
          category: 'aiData',
          level: 'মৌলিক / একাডেমিক পর্যায়',
          desc: 'বহুমাত্রিক অ্যারে অপারেশন, ম্যাট্রিক্স ক্যালকুলেশন এবং গাণিতিক ডেটা প্রক্রিয়াকরণ।',
        },
        {
          name: 'Pandas',
          category: 'aiData',
          level: 'মৌলিক / একাডেমিক পর্যায়',
          desc: 'ডেটা ক্লিনিং, টেবুলার ডেটাসেট ট্রান্সফর্মেশন, CSV/JSON প্রসেসিং ও পরিসংখ্যানিক অনুসন্ধান।',
        },
        {
          name: 'AI / ML Basics',
          category: 'aiData',
          level: 'মৌলিক / একাডেমিক পর্যায়',
          desc: 'সুপারভাইজড ও আনসুপারভাইজড লার্নিংয়ের প্রাথমিক ধারণা, ক্লাসিফিকেশন, রিগ্রেশন ও মডেল মূল্যায়ন।',
        },
        {
          name: 'Git & GitHub',
          category: 'tools',
          level: 'কার্যকর দক্ষতা',
          desc: 'ভার্সন কন্ট্রোল, কমিট ট্র্যাকিং, ব্রাঞ্চিং এবং গিটহাব রিমোট রিপোজিটরি পরিচালনা।',
        },
        {
          name: 'VS Code & Arduino IDE',
          category: 'tools',
          level: 'কার্যকর দক্ষতা',
          desc: 'দৈনন্দিন কোডিং আইডিই, ডিবাগিং এক্সটেনশন এবং হার্ডওয়্যার ফার্মওয়্যার আপলোড টুল।',
        },
      ],
    },
    projects: {
      sectionTag: 'নির্বাচিত প্রজেক্ট ও ল্যাব কাজ',
      title: 'প্রজেক্ট ও প্রোটোটাইপ সমূহ',
      subtitle: 'সফটওয়্যার আর্কিটেকচার, হার্ডওয়্যার সংযুক্তি এবং ডেটা প্রসেসিংয়ের বাস্তব প্রয়োগ।',
      filterAll: 'সকল প্রজেক্ট',
      statusNotice: 'প্রজেক্টগুলি একাডেমিক ল্যাব ও ব্যক্তিগত গবেষণার বাস্তবায়ন হিসেবে উপস্থাপন করা হয়েছে।',
      viewCode: 'কোড দেখুন (GitHub)',
      liveDemo: 'লাইভ ডেমো',
      demoUnavailable: 'লোকাল/হার্ডওয়্যার প্রজেক্ট (ডেমো হোস্ট করা নেই)',
      modalDetails: 'বিস্তারিত দেখুন',
      closeModal: 'বন্ধ করুন',
      overviewTitle: 'প্রজেক্টের বিবরণ',
      techStackTitle: 'ব্যবহৃত প্রযুক্তি সমূহ',
      keyFeaturesTitle: 'প্রধান বৈশিষ্ট্য ও আর্কিটেকচার',
      items: [
        {
          id: 'arduino-iot-monitor',
          title: 'স্মার্ট পরিবেশ ও সেন্সর মনিটরিং সিস্টেম',
          category: 'হার্ডওয়্যার ও আইওটি (IoT)',
          shortDesc:
            'Arduino চালিত মাল্টি-সেন্সর সিস্টেম যা রিয়েল-টাইম তাপমাত্রা, আর্দ্রতা এবং অবজেক্ট দূরত্বের তথ্য সিরিয়াল ডায়াগনস্টিক্সে প্রদান করে।',
          longDesc:
            'এমবেডেড সিস্টেম ইঞ্জিনিয়ারিং ল্যাবের অংশ হিসেবে নির্মিত। একটি Arduino মাইক্রোকন্ট্রোলারের সাথে DHT11 এবং HC-SR04 আল্ট্রাসনিক সেন্সর সংযুক্ত করে তৈরি। এতে রয়েছে বাজারের সতর্কবার্তা এবং I2C LCD ডিসপ্লেতে লাইভ ডেটা প্রদর্শনের সুবিধা।',
          status: 'সম্পন্ন একাডেমিক ল্যাব প্রজেক্ট',
          features: [
            'আল্ট্রাসনিক সেন্সরের মাধ্যমে দূরত্ব পরিমাপ ও নির্ধারিত সীমার নিচে গেলে বাজার অ্যালার্ট',
            'I2C 16x2 LCD ডিসপ্লেতে পিসি ছাড়াই তাত্ক্ষণিক তথ্য পর্যবেক্ষণ সুবিধা',
            'C/C++ ভিত্তিক মডুলার ফার্মওয়্যার ও পরিষ্কার সিরিয়াল টেলিমিতি লগিং',
            'ব্রেডবোর্ড সার্কিট ডিজাইন ও সঠিক বিদ্যুৎ সরবরাহ সুরক্ষা ব্যবস্থা',
          ],
          tech: ['Arduino', 'C/C++', 'Sensors (Ultrasonic & DHT)', 'I2C LCD', 'Serial Protocol'],
          github: 'https://github.com/remonchowdhury/arduino-environment-monitor',
        },
        {
          id: 'flutter-campus-helper',
          title: 'ক্যাম্পাস ফ্লো — ক্রস-প্ল্যাটফর্ম স্টুডেন্ট ইউটিলিটি অ্যাপ',
          category: 'মোবাইল ডেভেলপমেন্ট',
          shortDesc:
            'বিশ্ববিদ্যালয়ের শিক্ষার্থীদের ক্লাসের রুটিন, অ্যাসাইনমেন্ট ট্র্যাকিং ও দৈনন্দিন শিডিউল ব্যবস্থাপনার জন্য নির্মিত Flutter ও Dart মোবাইল অ্যাপ।',
          longDesc:
            'শিক্ষার্থীদের দৈনন্দিন বিশ্ববিদ্যালয়ের জীবনকে সহজ করতে তৈরি। Flutter ফ্রেমওয়ার্ক ব্যবহার করায় এটি Android ও iOS উভয় প্ল্যাটফর্মেই মসৃণভাবে চলে। এতে রয়েছে ডার্ক মোড সাপোর্ট, লোকাল স্টোরেজ ও নোটিফিকেশন টাইমার।',
          status: 'একাডেমিক ও ব্যক্তিগত প্রজেক্ট',
          features: [
            'আধুনিক ম্যাটেরিয়াল ডিজাইন ইউআই ও কাস্টমাইজড প্রতিক্রিয়াশীল উইজেট লেআউট',
            'দিনভিত্তিক ক্লাসের সময়সূচি ও লেকচার রুমের দিকনির্দেশনা যুক্ত রুটিন',
            'অগ্রাধিকারভিত্তিক অ্যাসাইনমেন্ট ও টাস্ক ম্যানেজার উইথ লোকাল ডাটা পারসিস্টেন্স',
            'পরিচ্ছন্ন Dart কোড আর্কিটেকচার যা সহজে পরিবর্তনযোগ্য',
          ],
          tech: ['Flutter', 'Dart', 'Mobile UI', 'Local Storage', 'Stateful Widgets'],
          github: 'https://github.com/remonchowdhury/campus-flow-flutter-app',
        },
        {
          id: 'python-academic-analytics',
          title: 'শিক্ষার্থীদের একাডেমিক ডেটা বিশ্লেষণ ও ফলাফল পূর্বাভাস',
          category: 'এআই ও ডেটা সায়েন্স',
          shortDesc:
            'Python, NumPy ও Pandas ব্যবহার করে একাডেমিক ডেটাসেট পরিষ্কার, স্বাভাবিকীকরণ ও পরিসংখ্যানিক প্যাটার্ন বিশ্লেষণের প্রজেক্ট।',
          longDesc:
            'এআই ও কম্পিউটার ইঞ্জিনিয়ারিং কোর্সওয়ার্কের অংশ হিসেবে তৈরি এক্সপ্লোরেটরি ডেটা অ্যানালাইসিস (EDA) পাইপলাইন। এটি শিক্ষার্থীদের পড়াশোনার সময়, উপস্থিতির হার এবং পরীক্ষার ফলের মধ্যকার কোরিলেশন বিশ্লেষণ করে।',
          status: 'কোর্সওয়ার্ক প্রজেক্ট',
          features: [
            'Pandas ব্যবহার করে স্বয়ংক্রিয় CSV ডেটাসেট প্রক্রিয়াকরণ ও মিসিং ভ্যালু ফিল্টারিং',
            'NumPy ভেক্টরাইজড ম্যাট্রিক্স গণনার মাধ্যমে জিপিএ নরমালাইজেশন ও গ্রেড ক্যালকুলেশন',
            'পরিসংখ্যানিক সামারি ও ভ্যারিয়েন্স এবং কোরিলেশন ম্যাট্রিক্স বিশ্লেষণ',
            'ফলাফলের ভিজ্যুয়াল ইনসাইট ও এক্সপোর্টেবল রিপোর্ট জেনারেশন',
          ],
          tech: ['Python', 'NumPy', 'Pandas', 'Data Analysis', 'Jupyter Notebook'],
          github: 'https://github.com/remonchowdhury/academic-data-analytics',
        },
        {
          id: 'modern-dev-portfolio',
          title: 'ব্যক্তিগত পোর্টফোলিও ও বহুভাষিক ওয়েব পোর্টাল',
          category: 'ওয়েব ডেভেলপমেন্ট',
          shortDesc:
            'ইংরেজি, বাংলা এবং কোরিয়ান—তিন ভাষার তাৎক্ষণিক অনুবাদ সুবিধাযুক্ত আধুনিক ও উচ্চ গতির রেসপনসিভ পোর্টফোলিও ওয়েবসাইট।',
          longDesc:
            'সফটওয়্যার ইঞ্জিনিয়ারিং ও ফ্রন্টএন্ড সক্ষমতার নিদর্শন হিসেবে তৈরি। এতে রয়েছে ডার্ক নেভি ও ইলেকট্রিক ব্লু থিম, কোনো এক্সটার্নাল উইজেট ছাড়াই কাস্টম অভিধানভিত্তিক তাৎক্ষণিক ত্রিভাষিক রূপান্তর, ইন্টারেক্টিভ সিভি প্রিভিউ এবং সম্পূর্ণ মোবাইল রেসপনসিভ ডিজাইন।',
          status: 'চলমান সক্রিয় প্রজেক্ট',
          features: [
            'ইংরেজি, বাংলা ও কোরিয়ান ভাষার পূর্ণাঙ্গ তাৎক্ষণিক অভিধান ইঞ্জিন ও লোকালস্টোরেজ সেভ',
            'React, TypeScript ও আধুনিক সিএসএস দিয়ে নির্মিত প্রিমিয়াম ডার্ক ডিজাইন সিস্টেম',
            'ইন্টারেক্টিভ প্রিন্টেবল সিভি মোডাল, ডায়নামিক ফিল্টারিং ও রিয়েল-টাইম ফর্ম ফিডব্যাক',
            'মোবাইল, ট্যাবলেট এবং ডেস্কটপের জন্য সম্পূর্ণ প্রতিক্রিয়াশীল ও অপ্টিমাইজড আর্কিটেকচার',
          ],
          tech: ['React', 'TypeScript', 'Tailwind CSS', 'i18n Localization', 'Lucide Icons'],
          github: 'https://github.com/remonchowdhury/remon-portfolio',
          demo: '#',
        },
        {
          id: 'ai-vision-prototype',
          title: 'কম্পিউটার ভিশন ও অবজেক্ট ট্র্যাকিং প্রোটোটাইপ',
          category: 'কৃত্রিম বুদ্ধিমত্তা',
          shortDesc:
            'ইমেজ প্রি-প্রসেসিং, কনট্যুর ডিটেকশন ও ভিডিও ফ্রেমে অবজেক্ট ট্র্যাকিং অনুসন্ধানের জন্য তৈরি প্রাথমিক পাইথন ভিশন প্রোটোটাইপ।',
          longDesc:
            'সফটওয়্যার ইঞ্জিনিয়ারিং ও কম্পিউটার ভিশন নীতিমালার সমন্বয়ে তৈরি। লাইভ ক্যামেরা বা ভিডিও স্ট্রিম থেকে নির্দিষ্ট রঙের অবজেক্ট শনাক্ত করে তার কেন্দ্রবিন্দু ও গতিপথের স্থানাঙ্ক নির্ণয় করে।',
          status: 'চলমান একাডেমিক গবেষণা',
          features: [
            'ভিডিও ফ্রেম নিষ্কাশন এবং আরজিবি থেকে এইচএসভি (HSV) রঙ রূপান্তরের মাধ্যমে ফিল্টারিং',
            'সেন্সর নয়েজ কমানো এবং পরিচ্ছন্ন অবজেক্ট আউটলাইন তৈরির জন্য মরফোলজিক্যাল অপারেশন',
            'রিয়েল-টাইমে বাউন্ডিং বক্স ও সেন্টার-পয়েন্ট ট্র্যাজেক্টরি স্থানাঙ্ক গণনা',
            'ভবিষ্যতে Arduino রোবোটিক প্যান-টিল্ট মেকানিজমে যুক্ত করার উপযোগী মডুলার কোড কাঠামো',
          ],
          tech: ['Python', 'OpenCV / Vision Basics', 'NumPy', 'Image Processing', 'Algorithms'],
          github: 'https://github.com/remonchowdhury/ai-vision-tracking-prototype',
        },
      ],
    },
    interests: {
      sectionTag: 'ভবিষ্যতের পথচলা',
      title: 'ক্যারিয়ার আগ্রহ',
      subtitle: 'যেসব প্রযুক্তি ক্ষেত্রে আমি গভীর অধ্যয়ন ও প্রকৌশল চর্চার মাধ্যমে অবদান রাখতে আগ্রহী।',
      introNotice:
        'তংমিয়ং বিশ্ববিদ্যালয়ে এআই ও কম্পিউটার ইঞ্জিনিয়ারিংয়ের ৩য় বর্ষের শিক্ষার্থী হিসেবে আমার প্রধান আগ্রহের ক্ষেত্রগুলো নিম্নরূপ:',
      items: [
        {
          id: 'software-engineering',
          title: 'সফটওয়্যার ইঞ্জিনিয়ারিং (Software Engineering)',
          tagline: 'মজবুত, দীর্ঘস্থায়ী এবং পরিমাপযোগ্য সফটওয়্যার সিস্টেম নির্মাণ।',
          description:
            'সফটওয়্যার ডিজাইন প্যাটার্ন, ক্লিন কোড নীতিমালা, দক্ষ অ্যালগরিদম এবং বাস্তবিক সমস্যার সমাধান করতে পারে এমন কাঠামোগত সিস্টেম গঠনে আগ্রহী।',
          focusAreas: ['System Design', 'Clean Code Principles', 'Object-Oriented Architecture', 'Algorithms & Data Structures'],
          ambition: 'পেশাদার ইঞ্জিনিয়ারিং টিমে অবদান রাখা, মডুলার কোড লেখা এবং আধুনিক ডেভঅপ্টস ও ক্লাউড ডেপ্লয়মেন্ট আয়ত্ত করা।',
        },
        {
          id: 'web-development',
          title: 'ওয়েব ডেভেলপমেন্ট (Web Development)',
          tagline: 'দ্রুতগতির, প্রতিক্রিয়াশীল ও নান্দনিক ওয়েব অ্যাপ্লিকেশন।',
          description:
            'আধুনিক ফ্রন্টএন্ড ফ্রেমওয়ার্ক, রিয়্যাক্টিভ কম্পোনেন্ট এবং সুন্দর ব্যবহারকারী অভিজ্ঞতা (UX) সংবলিত ওয়েব প্ল্যাটফর্ম তৈরি করা।',
          focusAreas: ['Modern React & TypeScript', 'Responsive Layouts', 'REST API Integration', 'State Management'],
          ambition: 'যেকোনো ডিভাইসে বিদ্যুৎ গতিতে লোড হয় এবং ব্যবহারকারীদের সন্তুষ্ট করে এমন ডিজিটাল পণ্য তৈরি করা।',
        },
        {
          id: 'mobile-app-dev',
          title: 'মোবাইল অ্যাপ ডেভেলপমেন্ট (Mobile App Dev)',
          tagline: 'Flutter ও Dart দিয়ে ক্রস-প্ল্যাটফর্ম মোবাইল অভিজ্ঞতা।',
          description:
            'একক কোডবেস দিয়ে Android ও iOS-এর জন্য মসৃণ অ্যানিমেশন, আধুনিক স্পর্শানুভূতি ও ব্যবহারিক মোবাইল অ্যাপ্লিকেশন তৈরি করা।',
          focusAreas: ['Flutter & Dart', 'Cross-Platform Architecture', 'Mobile UI/UX', 'Local Caching & Device APIs'],
          ambition: 'দৈনন্দিন জীবনে প্রভাব ফেলতে পারে এমন উচ্চমানের ও নির্বিঘ্ন মোবাইল অ্যাপ্লিকেশন ডেভেলপ করা।',
        },
        {
          id: 'artificial-intelligence',
          title: 'কৃত্রিম বুদ্ধিমত্তা ও মেশিন লার্নিং (AI & ML)',
          tagline: 'ডেটা-চালিত অন্তর্দৃষ্টি, পূর্বাভাস মডেল এবং স্মার্ট কম্পিউটিং।',
          description:
            'মেশিন লার্নিংয়ের গাণিতিক ও অ্যালগরিদমিক ভিত্তি আয়ত্ত করা, NumPy/Pandas দিয়ে ডেটা প্রক্রিয়াকরণ এবং ফলপ্রসূ প্রয়োগ ঘটানো।',
          focusAreas: ['NumPy & Pandas', 'Supervised Learning', 'Computer Vision Foundations', 'Data Preprocessing'],
          ambition: 'মৌলিক মডেলিং থেকে শুরু করে বাস্তব সেন্সর ডেটা বিশ্লেষণকারী সমন্বিত এআই সিস্টেম গঠন করা।',
        },
        {
          id: 'arduino-embedded',
          title: 'Arduino ও এমবেডেড সিস্টেম (Embedded Systems)',
          tagline: 'ফিজিক্যাল কম্পিউটিং, মাইক্রোকন্ট্রোলার এবং আইওটি সেন্সর নেটওয়ার্ক।',
          description:
            'বাস্তব হার্ডওয়্যার ও সফটওয়্যারের মেলবন্ধনে মুগ্ধ। C/C++ ফার্মওয়্যারের মাধ্যমে সেন্সর ও অ্যাকচুয়েটরের সমন্বয় ঘটিয়ে কার্যকর ডিভাইস তৈরি।',
          focusAreas: ['Arduino Firmware (C/C++)', 'Sensor Integration', 'Serial Communication Protocols', 'Circuit Prototyping'],
          ambition: 'মাইক্রোকন্ট্রোলার এজ ডিভাইসকে সফটওয়্যার ড্যাশবোর্ড এবং এআই অ্যালগরিদমের সাথে যুক্ত করে স্মার্ট আইওটি রূপ দেওয়া।',
        },
      ],
    },
    contact: {
      sectionTag: 'যোগাযোগের মাধ্যম',
      title: 'যোগাযোগ করুন',
      subtitle: 'একাডেমিক আলোচনা, সহযোগী প্রজেক্ট, ইন্টার্নশিপ বা যেকোনো তথ্যের জন্য সরাসরি যোগাযোগ করুন।',
      emailLabel: 'সরাসরি ইমেইল',
      emailVal: 'remonchowdhury1999@gmail.com',
      copyEmail: 'ইমেইল ঠিকানা কপি করুন',
      copied: 'ইমেইল ক্লিপবোর্ডে কপি করা হয়েছে!',
      phoneLabel: 'সরাসরি ফোন নম্বর',
      phoneVal: '+82 10 9829 9331',
      phoneTelLink: 'tel:+821098293331',
      callPhone: 'কল করুন',
      copyPhone: 'নম্বর কপি করুন',
      phoneCopied: 'ফোন নম্বর কপি করা হয়েছে!',
      locationLabel: 'বর্তমান অবস্থান',
      locationVal: 'বুসান, দক্ষিণ কোরিয়া',
      mapTitle: 'এলাকার মানচিত্র (KakaoMap)',
      mapSubtitle: 'বুসান, দক্ষিণ কোরিয়া',
      viewOnKakaoMap: 'KakaoMap-এ দেখুন',
      kakaoMapBadge: 'কাকাওম্যাপ (KakaoMap)',
      neighborhoodNotice: 'সাধারণ এলাকাভিত্তিক অবস্থান। ব্যক্তিগত বাসার নির্দিষ্ট ঠিকানা গোপন রাখা হয়েছে।',
      universityLabel: 'বিশ্ববিদ্যালয়',
      universityVal: 'তংমিয়ং বিশ্ববিদ্যালয় (AI & Computer Eng.)',
      githubLabel: 'গিটহাব প্রোফাইল',
      linkedinLabel: 'লিংকডইন প্রোফাইল',
      sendNoteTitle: 'একটি বার্তা পাঠান',
      form: {
        name: 'আপনার নাম',
        namePlaceholder: 'আপনার পূর্ণ নাম লিখুন',
        email: 'আপনার ইমেইল ঠিকানা',
        emailPlaceholder: 'নাম@example.com',
        subject: 'বিষয়',
        subjectPlaceholder: 'প্রজেক্ট সংক্রান্ত / সুযোগ / বার্তা',
        message: 'বার্তা',
        messagePlaceholder: 'আপনার বার্তাটি এখানে লিখুন...',
        sendButton: 'বার্তা পাঠান',
        sending: 'পাঠানো হচ্ছে...',
        successMessage: 'ধন্যবাদ! আপনার বার্তাটি সফলভাবে গৃহীত হয়েছে। আমি দ্রুত আপনার সাথে যোগাযোগ করব।',
        errorMessage: 'অনুগ্রহ করে পাঠানোর পূর্বে সকল তথ্য পূরণ করুন।',
      },
    },
    resumeModal: {
      title: 'জীবনবৃত্তান্ত / সিভি প্রিভিউ',
      downloadPrint: 'প্রিন্ট করুন / PDF হিসেবে সংরক্ষণ করুন',
      close: 'প্রিভিউ বন্ধ করুন',
      summaryTitle: 'পেশাদার প্রোফাইল সারাংশ',
      educationTitle: 'শিক্ষাগত যোগ্যতা',
      skillsTitle: 'প্রযুক্তিগত দক্ষতা সমূহ',
      projectsTitle: 'প্রধান প্রজেক্ট ও ল্যাব অভিজ্ঞতা',
      interestsTitle: 'ক্যারিয়ার ও গবেষণার আগ্রহ',
      languagesTitle: 'ভাষাগত দক্ষতা',
      disclaimer: 'চৌধুরী মোঃ রেমন-এর অফিসিয়াল একাডেমিক জীবনবৃত্তান্ত — তংমিয়ং বিশ্ববিদ্যালয়, বুসান, দক্ষিণ কোরিয়া।',
    },
    footer: {
      tagline: 'সফটওয়্যার ডেভেলপার ও এআই শিক্ষার্থী, তংমিয়ং বিশ্ববিদ্যালয়, বুসান, দক্ষিণ কোরিয়া।',
      quickLinks: 'নেভিগেশন',
      social: 'সামাজিক মাধ্যম',
      copyright: 'সকল অধিকার সংরক্ষিত।',
      builtWith: 'React, TypeScript এবং Tailwind CSS দ্বারা নির্মিত।',
      top: 'উপরে ফিরে যান',
    },
  },
  ko: {
    nav: {
      home: '홈',
      about: '소개',
      education: '학력',
      skills: '기술 스택',
      projects: '프로젝트',
      interests: '관심 분야',
      contact: '문의하기',
      cv: '이력서 보기',
      language: '언어',
      availableForWork: '새로운 기회에 열려있습니다',
    },
    hero: {
      greeting: '안녕하세요, 저는',
      name: 'CHOWDHURY MD REMON',
      subName: '초우드리 모하메드 레몬',
      title: '소프트웨어 엔지니어 & AI 전공 학부생',
      animatedTitles: [
        '소프트웨어 엔지니어',
        '웹 애플리케이션 개발자',
        'Flutter 모바일 앱 개발자',
        'AI·컴퓨터공학과 학부생',
        '아두이노 & 임베디드 시스템 엔지니어',
      ],
      roleBadges: [
        'AI·컴퓨터공학과',
        '소프트웨어 개발',
        '모바일 앱 (Flutter)',
        'Arduino & 임베디드 시스템',
      ],
      bio: '대한민국 부산 동명대학교 AI·컴퓨터공학과 3학년 학부생입니다. 실용적인 소프트웨어 엔지니어링, 스마트한 지능형 시스템, Flutter 모바일 앱 및 아두이노 임베디드 하드웨어 프로토타이핑을 통해 현실 세계의 문제를 해결하는 데 열정을 쏟고 있습니다.',
      viewProjects: '프로젝트 둘러보기',
      viewCv: '이력서(CV) 보기 / 다운로드',
      contactMe: '문의하기',
      location: '대한민국 부산광역시',
      locationWithFlag: '대한민국 부산광역시',
      openToOpportunities: '글로벌 커리어 및 인턴십 기회 탐색 중',
      universityBadge: '동명대학교 (Tongmyong Univ.)',
      statusBadge: '학부 3학년 재학 중',
      scrollDown: '스크롤하여 탐색하기',
    },
    about: {
      sectionTag: '소개 및 배경',
      title: '소개 (About Me)',
      subtitle: '소프트웨어, 인공지능, 그리고 물리적 컴퓨팅을 융합하는 차세대 엔지니어입니다.',
      introParagraph1:
        '안녕하세요! 저는 대한민국 부산광역시에 위치한 동명대학교 AI·컴퓨터공학과 3학년에 재학 중인 초우드리 모하메드 레몬(Chowdhury Md Remon)입니다.',
      introParagraph2:
        '대학 학업을 통해 소프트웨어 공학의 견고한 기초를 다지고 있습니다. Flutter를 활용한 크로스 플랫폼 모바일 애플리케이션 개발부터, Python과 NumPy, Pandas를 활용한 정밀한 데이터 분석, 그리고 아두이노 마이크로컨트롤러를 이용한 임베디드 하드웨어 제어까지 폭넓게 탐구하고 있습니다.',
      introParagraph3:
        '한국에서의 유학 생활은 저에게 강인한 적응력, 열린 다문화 커뮤니케이션 능력, 그리고 끊임없이 성장하려는 개발자 정신을 길러주었습니다. 복잡한 문제를 논리적인 알고리즘으로 구조화하고 동작 가능한 코드로 구현할 때 가장 큰 성취감을 느낍니다.',
      infoCards: {
        locationLabel: '거주지',
        locationVal: '대한민국 부산광역시',
        universityLabel: '대학교',
        universityVal: '동명대학교 (Tongmyong University)',
        majorLabel: '학과',
        majorVal: 'AI·컴퓨터공학과 (AI and Computer Engineering)',
        levelLabel: '학적 상태',
        levelVal: '학부 3학년 재학 중',
        languagesLabel: '구사 언어',
        languagesVal: '영어 (유창함), 벵골어 (모국어), 한국어 (일상 회화 및 대학 생활 가능)',
        statusLabel: '현재 주요 집중 분야',
        statusVal: '소프트웨어 엔지니어링 & 임베디드 AI 프로토타이핑',
      },
      highlights: {
        title: '핵심 가치 및 개발 철학',
        items: [
          {
            title: '학문적 탐구열과 꼼꼼한 코드',
            desc: '모든 수업 과제와 연구 실습에 성실한 자세로 임하며, 가독성 높고 체계적인 코드 작성을 지향합니다.',
          },
          {
            title: '하드웨어와 소프트웨어의 유기적 융합',
            desc: '아두이노 센서 데이터와 직관적인 프론트엔드 인터페이스를 연결하여 현실과 상호작용하는 시스템을 만듭니다.',
          },
          {
            title: '글로벌 협업 및 유연한 소통',
            desc: '한국 내 다양한 국적의 동료들과 원활히 소통하며 팀워크와 끈기 있는 문제 해결 능력을 발휘합니다.',
          },
        ],
      },
    },
    education: {
      sectionTag: '학업 여정',
      title: '학력 및 전공',
      subtitle: '컴퓨터 공학 이론과 실무 엔지니어링의 탄탄한 토대를 구축하고 있습니다.',
      degreeTitle: '공학사 (B.S.) - AI·컴퓨터공학과',
      university: '동명대학교 (Tongmyong University)',
      department: 'AI·컴퓨터공학과 (Department of AI and Computer Engineering)',
      location: '대한민국 부산광역시 남구',
      period: '2022년 – 현재 (2026년 졸업 예정)',
      currentStanding: '학부 3학년 재학 중',
      academicSummary:
        '동명대학교의 실무 중심 커리큘럼을 통해 전통 컴퓨터 공학 이론과 함께 최신 인공지능 기초, 시스템 프로그래밍, 임베디드 제어 기술을 균형 있게 학습하고 있습니다.',
      focusAreasTitle: '주요 이수 교과목 및 연구 분야',
      coursework: [
        '자료구조 및 알고리즘 (Data Structures & Algorithms)',
        '객체지향 프로그래밍 (Python, Dart)',
        '인공지능 및 머신러닝 기초 (Intro to AI & ML)',
        '마이크로컨트롤러 시스템 및 아두이노 인터페이싱',
        '데이터베이스 관리 시스템 (DBMS & SQL)',
        '컴퓨터 네트워크 및 웹 기초',
        '소프트웨어 공학 개론 (Software Engineering)',
        'NumPy와 Pandas를 활용한 데이터 분석',
      ],
      keyAchievementsTitle: '학업 및 캠퍼스 활동',
      achievements: [
        '학과 실습실에서 다양한 센서 및 아두이노 하드웨어 실습 프로젝트 성공적 완수.',
        '학생들의 학사 일정 및 캠퍼스 편의를 돕는 Flutter 모바일 애플리케이션 프로토타입 구현.',
        '영어와 한국어를 병행하여 다문화 학우들과 원활한 스터디 및 프로젝트 협업 진행.',
      ],
    },
    skills: {
      sectionTag: '기술 역량',
      title: '기술 스택 (Technical Skills)',
      subtitle: '프로그래밍, 웹/모바일, 데이터 및 임베디드 하드웨어 분야의 실질적인 역량입니다.',
      honestyNotice:
        '※ 안내: 기재된 기술은 대학 전공 수업 및 프로젝트 실습 경험을 솔직하게 반영한 것이며, 과장된 숙련도 표기를 지양하고 성실한 실습 경험을 바탕으로 작성되었습니다.',
      categories: {
        programming: '프로그래밍 언어',
        webMobile: '웹 및 모바일 개발',
        aiData: '인공지능 및 데이터 사이언스',
        embedded: '하드웨어 및 임베디드 시스템',
        tools: '개발 도구 및 환경',
      },
      levelBadges: {
        proficient: '실무 활용 가능',
        intermediate: '중급 (Intermediate)',
        foundational: '기초 / 전공 이수',
        embedded: '하드웨어 프로토타이핑',
      },
      skillList: [
        {
          name: 'Python',
          category: 'programming',
          level: '중급 (Intermediate)',
          desc: '알고리즘 구현, NumPy/Pandas 기반 데이터 가공, 백엔드 로직 스크립팅 및 기초 머신러닝 실습에 능숙히 활용.',
        },
        {
          name: 'Dart',
          category: 'programming',
          level: '중급 (Intermediate)',
          desc: '크로스 플랫폼 모바일 사용자 인터페이스(UI) 및 반응형 상태 관리 로직을 구축하는 주력 언어.',
        },
        {
          name: 'JavaScript',
          category: 'programming',
          level: '중급 (Intermediate)',
          desc: '동적 웹 프론트엔드 조작, DOM 이벤트 제어, 비동기 데이터 통신(Fetch/API) 및 클라이언트 인터랙션 구현.',
        },
        {
          name: 'HTML5 & CSS3',
          category: 'webMobile',
          level: '실무 활용 가능',
          desc: '시맨틱 웹 마크업, 반응형 Flexbox/Grid 레이아웃, 모던 CSS 및 유틸리티 퍼스트 스타일링.',
        },
        {
          name: 'Flutter',
          category: 'webMobile',
          level: '중급 (Intermediate)',
          desc: 'Android 및 iOS 동시 지원 반응형 UI 구축, 맞춤형 위젯 설계 및 상태 관리 패턴 적용.',
        },
        {
          name: 'Arduino',
          category: 'embedded',
          level: '하드웨어 프로토타이핑',
          desc: 'C/C++ 기반 펌웨어 작성, 초음파 및 온습도 센서, 모터 제어, 회로 배선 및 시리얼 통신 디버깅.',
        },
        {
          name: 'NumPy',
          category: 'aiData',
          level: '기초 / 전공 이수',
          desc: '다차원 배열 연산, 행렬 수학 계산, 벡터화 연산 기법 및 공학 데이터 구조화.',
        },
        {
          name: 'Pandas',
          category: 'aiData',
          level: '기초 / 전공 이수',
          desc: '정형 데이터셋 결측치 정제, 필터링, CSV/JSON 파싱 및 기초 통계 분석 수행.',
        },
        {
          name: 'AI / ML Basics',
          category: 'aiData',
          level: '기초 / 전공 이수',
          desc: '지도학습/비지도학습 원리, 분류 및 회귀 모델의 기본 개념과 평가지표 이해.',
        },
        {
          name: 'Git & GitHub',
          category: 'tools',
          level: '실무 활용 가능',
          desc: '버전 관리 워크플로우, 커밋 히스토리 관리, 브랜치 전략 및 원격 저장소 협업.',
        },
        {
          name: 'VS Code & Arduino IDE',
          category: 'tools',
          level: '실무 활용 가능',
          desc: '일상적인 코딩 및 디버깅 도구, 하드웨어 펌웨어 빌드 및 업로드 환경.',
        },
      ],
    },
    projects: {
      sectionTag: '주요 프로젝트 & 실습',
      title: '프로젝트 쇼케이스',
      subtitle: '소프트웨어 설계, 하드웨어 제어 및 데이터 처리를 실증한 대표 작업물입니다.',
      filterAll: '전체 보기',
      statusNotice: '본 프로젝트들은 대학 전공 실습 및 개인 연구 목적으로 제작된 포트폴리오 작업물입니다.',
      viewCode: '코드 보기 (GitHub)',
      liveDemo: '데모 보기',
      demoUnavailable: '로컬/하드웨어 프로젝트 (웹 데모 미지원)',
      modalDetails: '상세 내용 보기',
      closeModal: '닫기',
      overviewTitle: '프로젝트 개요',
      techStackTitle: '사용 기술 스택',
      keyFeaturesTitle: '주요 설계 및 특징',
      items: [
        {
          id: 'arduino-iot-monitor',
          title: '스마트 환경 및 센서 모니터링 시스템',
          category: '하드웨어 & IoT',
          shortDesc:
            '아두이노 마이크로컨트롤러를 기반으로 실시간 온도, 습도 및 장애물 거리를 감지하고 시리얼로 전송하는 텔레메트리 시스템.',
          longDesc:
            '임베디드 시스템 공학 실습의 일환으로 설계 및 제작되었습니다. 아두이노 보드에 DHT11 온습도 센서와 HC-SR04 초음파 거리 센서를 연동하고, 임계치 접근 시 버저 경고음 및 I2C LCD 디스플레이에 상태를 직관적으로 출력합니다.',
          status: '학부 실습 완료 프로젝트',
          features: [
            '초음파 센서를 통한 실시간 장애물 거리 연산 및 위험 구간 버저 알림',
            'I2C 16x2 LCD 모듈 연동을 통해 PC 연결 없이도 현장 데이터 즉각 확인',
            'C/C++ 기반의 모듈화된 센서 제어 루틴 및 시리얼 데이터 로깅',
            '안정적인 전원 분배와 풀업 저항을 적용한 브레드보드 회로 배선',
          ],
          tech: ['Arduino', 'C/C++', 'Sensors (Ultrasonic & DHT)', 'I2C LCD', 'Serial Protocol'],
          github: 'https://github.com/remonchowdhury/arduino-environment-monitor',
        },
        {
          id: 'flutter-campus-helper',
          title: '캠퍼스 플로우 (Campus Flow) — 학생 편의 모바일 앱',
          category: '모바일 개발',
          shortDesc:
            'Flutter와 Dart를 활용해 제작한 대학생을 위한 강의 시간표 정리, 과제 마감일 알림 및 일상 일정 관리 유틸리티 앱.',
          longDesc:
            '대학생들의 학업 일정을 효율적으로 관리할 수 있도록 설계된 크로스 플랫폼 앱입니다. Flutter 프레임워크를 기반으로 안드로이드와 iOS에서 부드러운 UI 렌더링을 제공하며, 로컬 저장소를 활용해 오프라인에서도 일정 확인이 가능합니다.',
          status: '학부 개인 프로젝트',
          features: [
            '맞춤형 컴포넌트와 세련된 다크 테마를 적용한 반응형 UI 레이아웃',
            '요일별 강의 시간 및 강의실 위치를 한눈에 볼 수 있는 동적 시간표',
            '과제 우선순위 지정 및 완료 체크 기능이 포함된 로컬 저장소 연동 투두 매니저',
            '화면 UI와 데이터 로직을 분리한 깔끔한 Dart 코드 구조',
          ],
          tech: ['Flutter', 'Dart', 'Mobile UI', 'Local Storage', 'Stateful Widgets'],
          github: 'https://github.com/remonchowdhury/campus-flow-flutter-app',
        },
        {
          id: 'python-academic-analytics',
          title: '대학생 학업 성취도 데이터 분석 및 인사이트 도출',
          category: 'AI & 데이터 사이언스',
          shortDesc:
            'Python, NumPy, Pandas를 활용하여 정형 학사 데이터셋의 결측치를 정제하고 상관관계를 도출한 탐색적 데이터 분석(EDA) 프로젝트.',
          longDesc:
            'AI 및 컴퓨터공학 교과목에서 진행된 데이터 분석 프로젝트입니다. 다변량 학업 성취도 데이터를 파싱하여 학생들의 주당 학습 시간, 출석률, 과제 점수가 기말 시험 성적에 미치는 통계적 상관관계를 분석했습니다.',
          status: '교과목 실습 프로젝트',
          features: [
            'Pandas 라이브러리를 통한 결측치 처리 및 범주형 데이터 전처리 자동화',
            'NumPy의 벡터화 행렬 연산을 활용한 학점 정규화 및 백분위 순위 산출',
            '평균, 분산, 상관계수 행렬 등 다각도 통계 지표 분석',
            '주요 인사이트 요약 및 추후 머신러닝 회귀 모델 입력에 최적화된 데이터셋 추출',
          ],
          tech: ['Python', 'NumPy', 'Pandas', 'Data Analysis', 'Jupyter Notebook'],
          github: 'https://github.com/remonchowdhury/academic-data-analytics',
        },
        {
          id: 'modern-dev-portfolio',
          title: '엔지니어링 개인 포트폴리오 & 3개 국어 웹 포털',
          category: '웹 개발',
          shortDesc:
            '한국어, 영어, 벵골어의 3개 언어를 즉시 번역 지원하며 모던 다크 네이비 테마를 갖춘 반응형 포트폴리오 웹사이트.',
          longDesc:
            '소프트웨어 엔지니어링 역량을 집약한 포트폴리오입니다. 외부 위젯 없이 순수 React와 TypeScript로 구현된 즉시 번역 딕셔너리 엔진, 인쇄 가능한 이력서 모달, 유려한 애니메이션 및 모바일 최적화 레이아웃을 자랑합니다.',
          status: '현재 운영 중인 프로젝트',
          features: [
            '영어, 벵골어, 한국어 3개 언어 즉시 전환 및 localStorage 영구 유지 엔진',
            'React, TypeScript, Tailwind CSS 기반의 세련된 다크 네이비 & 일렉트릭 블루 디자인',
            '브라우저에서 바로 확인 및 인쇄 가능한 공식 이력서(CV) 뷰어 모달 탑재',
            '스마트폰, 태블릿, 데스크톱 모니터에 완벽 대응하는 100% 반응형 레이아웃',
          ],
          tech: ['React', 'TypeScript', 'Tailwind CSS', 'i18n Localization', 'Lucide Icons'],
          github: 'https://github.com/remonchowdhury/remon-portfolio',
          demo: '#',
        },
        {
          id: 'ai-vision-prototype',
          title: '기초 컴퓨터 비전 및 객체 추적 파이프라인 프로토타입',
          category: '인공지능',
          shortDesc:
            '영상 전처리, 윤곽선 검출 및 프레임별 객체 추적 원리를 학습하기 위해 제작된 기초 파이썬 컴퓨터 비전 실험 모델.',
          longDesc:
            '소프트웨어와 AI 원리를 접목한 탐색 프로젝트입니다. 비디오 스트림에서 프레임을 추출하여 색공간(HSV) 변환, 가우시안 블러, 모폴로지 연산을 거친 후 특정 표적 객체의 위치 좌표를 실시간으로 추적합니다.',
          status: '학부 연구 탐색 중',
          features: [
            '비디오 프레임 추출 및 실시간 HSV 색공간 마스킹을 통한 색상 필터링',
            '노이즈 제거를 위한 열림/닫힘 모폴로지 연산 및 윤곽선(Contour) 검출',
            '객체 경계 상자(Bounding Box) 및 중심점 좌표 실시간 계산 및 시각화',
            '향후 아두이노 팬-틸트 서보 모터와 결합 가능한 하드웨어 친화적 모듈 구조',
          ],
          tech: ['Python', 'OpenCV / Vision Basics', 'NumPy', 'Image Processing', 'Algorithms'],
          github: 'https://github.com/remonchowdhury/ai-vision-tracking-prototype',
        },
      ],
    },
    interests: {
      sectionTag: '진로 및 열정',
      title: '진로 및 관심 분야',
      subtitle: '지속적인 학습과 엔지니어링을 통해 기술적 가치를 창출하고자 하는 5가지 핵심 분야입니다.',
      introNotice:
        '동명대학교 AI·컴퓨터공학과 3학년으로서, 저는 아래의 5가지 유기적으로 연결된 기술 분야에 깊은 관심을 두고 있습니다:',
      items: [
        {
          id: 'software-engineering',
          title: '소프트웨어 엔지니어링 (Software Engineering)',
          tagline: '견고하고 유지보수가 용이하며 확장 가능한 시스템 구축.',
          description:
            '소프트웨어 디자인 패턴, 클린 코드 원칙, 효율적인 알고리즘 및 구조화된 설계를 통해 신뢰성 높은 소프트웨어를 만드는 데 열정을 쏟고 있습니다.',
          focusAreas: ['시스템 설계', '클린 코드 원칙', '객체지향 아키텍처', '자료구조 및 알고리즘'],
          ambition: '프로덕션 레벨의 엔지니어링 팀에 기여하며, 모듈화된 견고한 코드를 작성하고 최신 배포 파이프라인을 체득하는 것.',
        },
        {
          id: 'web-development',
          title: '웹 개발 (Web Development)',
          tagline: '빠르고 반응성이 뛰어난 인터랙티브 웹 애플리케이션.',
          description:
            '모던 프론트엔드 생태계를 기반으로 빠르고 직관적인 사용자 경험(UX), 접근성 높은 레이아웃, 안정적인 클라이언트-서버 통신을 구현합니다.',
          focusAreas: ['React & TypeScript', '반응형 레이아웃', 'REST API 연동', '상태 관리 최적화'],
          ambition: '어떤 기기에서도 매끄럽게 동작하고 아름다운 시각적 즐거움을 선사하는 웹 서비스를 제작하는 것.',
        },
        {
          id: 'mobile-app-dev',
          title: '모바일 앱 개발 (Mobile App Development)',
          tagline: 'Flutter & Dart 기반의 크로스 플랫폼 모바일 경험.',
          description:
            '단일 코드베이스로 안드로이드와 iOS 모두에서 네이티브 수준의 부드러운 애니메이션과 편리한 사용성을 제공하는 앱을 개발합니다.',
          focusAreas: ['Flutter & Dart', '크로스 플랫폼 아키텍처', '모바일 UI/UX', '로컬 캐싱 & 디바이스 API'],
          ambition: '사용자들의 일상생활 속 불편함을 실질적으로 해소해 줄 수 있는 완성도 높은 모바일 앱을 배포하는 것.',
        },
        {
          id: 'artificial-intelligence',
          title: '인공지능 및 머신러닝 (AI & Machine Learning)',
          tagline: '데이터 기반의 통찰력, 예측 모델 및 지능형 컴퓨팅.',
          description:
            '머신러닝의 수학적·알고리즘적 기초를 탄탄히 다지고, NumPy와 Pandas로 데이터를 분석 및 정제하여 실질적인 엔지니어링 문제에 적용합니다.',
          focusAreas: ['NumPy & Pandas', '지도학습 원리', '컴퓨터 비전 기초', '데이터 전처리 파이프라인'],
          ambition: '기초 알고리즘을 넘어 실제 현장의 센서 및 시각 데이터를 능동적으로 처리하는 지능형 시스템을 개발하는 것.',
        },
        {
          id: 'arduino-embedded',
          title: '아두이노 & 임베디드 시스템 (Arduino & Embedded Systems)',
          tagline: '물리적 컴퓨팅, 마이크로컨트롤러 및 IoT 센서 제어.',
          description:
            '하드웨어와 소프트웨어가 직접 맞닿는 지점에 매력을 느낍니다. C/C++ 펌웨어를 작성하여 다양한 센서와 액추에이터를 정밀 제어합니다.',
          focusAreas: ['아두이노 C/C++ 펌웨어', '센서 인터페이싱', '시리얼 통신 프로토콜', '회로 프로토타이핑'],
          ambition: '에지 디바이스 하드웨어를 웹 대시보드 및 인공지능 알고리즘과 결합하여 스마트 IoT 자동화 솔루션을 구축하는 것.',
        },
      ],
    },
    contact: {
      sectionTag: '문의 및 연락처',
      title: '연락하기 (Contact)',
      subtitle: '학업 논의, 스터디 및 프로젝트 협업, 인턴십 기회 등 언제든 환영합니다.',
      emailLabel: '이메일 주소',
      emailVal: 'remonchowdhury1999@gmail.com',
      copyEmail: '이메일 주소 복사',
      copied: '이메일 주소가 클립보드에 복사되었습니다!',
      phoneLabel: '연락처 (전화번호)',
      phoneVal: '+82 10 9829 9331',
      phoneTelLink: 'tel:+821098293331',
      callPhone: '전화 걸기',
      copyPhone: '번호 복사',
      phoneCopied: '전화번호가 복사되었습니다!',
      locationLabel: '현재 위치',
      locationVal: '대한민국 부산광역시',
      mapTitle: '위치 안내 (카카오맵)',
      mapSubtitle: '대한민국 부산광역시 (KakaoMap)',
      viewOnKakaoMap: '카카오맵에서 보기',
      kakaoMapBadge: '카카오맵 KakaoMap',
      neighborhoodNotice: '동네 단위의 안내이며, 개인 거주지 상세 호수는 안전을 위해 공개되지 않습니다.',
      universityLabel: '소속 대학교',
      universityVal: '동명대학교 AI·컴퓨터공학과',
      githubLabel: 'GitHub 프로필',
      linkedinLabel: 'LinkedIn 프로필',
      sendNoteTitle: '메시지 남기기',
      form: {
        name: '성함',
        namePlaceholder: '성함을 입력해 주세요',
        email: '이메일 주소',
        emailPlaceholder: 'example@domain.com',
        subject: '제목',
        subjectPlaceholder: '프로젝트 문의 / 인턴십 기회 / 인사말 등',
        message: '메시지 내용',
        messagePlaceholder: '남기실 메시지를 자유롭게 작성해 주세요...',
        sendButton: '메시지 보내기',
        sending: '전송 중...',
        successMessage: '감사합니다! 메시지가 성공적으로 접수되었습니다. 확인 후 남겨주신 이메일로 회신드리겠습니다.',
        errorMessage: '전송하기 전에 모든 필수 항목을 입력해 주세요.',
      },
    },
    resumeModal: {
      title: '이력서(CV) 미리보기',
      downloadPrint: '인쇄 / PDF로 저장하기',
      close: '미리보기 닫기',
      summaryTitle: '학업 및 프로필 요약',
      educationTitle: '학력 사항',
      skillsTitle: '기술 역량',
      projectsTitle: '주요 프로젝트 및 연구 실습',
      interestsTitle: '주요 진로 및 관심 분야',
      languagesTitle: '어학 역량',
      disclaimer: '초우드리 모하메드 레몬(Chowdhury Md Remon)의 공식 학업 이력서 요약본 — 동명대학교 AI·컴퓨터공학과.',
    },
    footer: {
      tagline: '대한민국 부산 동명대학교 AI·컴퓨터공학과 3학년 소프트웨어 개발자 초우드리 모하메드 레몬.',
      quickLinks: '바로가기',
      social: '네트워크',
      copyright: 'All rights reserved.',
      builtWith: 'React, TypeScript & Tailwind CSS로 정성스럽게 제작되었습니다.',
      top: '맨 위로 이동',
    },
  },
};
