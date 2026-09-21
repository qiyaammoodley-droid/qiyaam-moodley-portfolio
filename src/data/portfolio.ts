import type { Experience, Project } from "../types/portfolio";

export const profile = {
  name: "Qiyaam Moodley",
  title: "Aspiring Full-Stack Developer",
  location: "Johannesburg, South Africa",
  email: "qiyaam.moodley@gmail.com",
  phone: "(+27) 065 989 8154",

  linkedin:
    "https://www.linkedin.com/in/qiyaam-moodley",

  github:
    "https://github.com/qiyaammoodley-droid",
};


/* =========================================================
   SKILLS
========================================================= */

export const skills = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
    "React Router",
  ],

  StateAndLogic: [
    "Redux Toolkit",
    "Context API",
    "Custom Hooks",
    "Forms",
    "Data Fetching",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Middleware",
    "Authentication",
    "Authorization",
  ],

  QualityAndTools: [
    "Git",
    "GitHub",
    "Postman",
    "Jest",
    "Responsive Design",
    "API Testing",
  ],
};


/* =========================================================
   PROJECTS
========================================================= */

export const projects: Project[] = [

  /* ---------------------------------------------------------
     01 — RIVERSIDE COMMUNITY HUB
  --------------------------------------------------------- */

  {
    slug: "riverside-community-hub",

    title: "Riverside Community Hub",

    category: "Full-Stack",

    description:
      "A full-stack community platform for managing memberships, facility bookings and donations through a central web application.",

    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
    ],

    github:
      "https://github.com/qiyaammoodley-droid/riverside-community-hub",

    live:
      "https://riverside-community-hub.netlify.app/",

    featured: true,

    year: "2026",

    status: "Completed",

    longDescription:
      "A full-stack TypeScript platform developed for a fictional nonprofit community centre. The application brings together membership management, facility bookings, donations, authentication, role-based access, Supabase database functionality, Row-Level Security, reporting and booking conflict protection.",

    accent: "violet",
  },


  /* ---------------------------------------------------------
     02 — MELSOFT OTP SECURITY SYSTEM
  --------------------------------------------------------- */

  {
    slug: "melsoft-otp-security-system",

    title: "Melsoft OTP Security System",

    category: "Backend",

    description:
      "An OTP authentication system built with Node.js and Express, featuring OTP expiry, resend limits, rate limiting and secure verification rules.",

    tech: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "Nodemailer",
      "Jest",
    ],

    github:
      "https://github.com/qiyaammoodley-droid/melsoft-otp-security-system",

    live:
      "https://melsoft-otp-security-system.netlify.app/",

    featured: true,

    year: "2026",

    status: "Completed",

    longDescription:
      "A backend-focused security project implementing a complete OTP verification flow. The system generates six-digit OTPs, handles expiry, limits requests and resends, prevents OTP reuse and provides API endpoints for sending, resending and verifying OTPs.",

    accent: "orange",
  },


  /* ---------------------------------------------------------
     03 — PULSE WORLD SNAPSHOT
  --------------------------------------------------------- */

  {
    slug: "pulse-world-snapshot",

    title: "Pulse World Snapshot",

    category: "Full-Stack",

    description:
      "A live world snapshot application that combines earthquake and weather data from external APIs and stores the information in Supabase.",

    tech: [
      "JavaScript",
      "Supabase",
      "REST APIs",
      "USGS API",
      "Open-Meteo API",
    ],

    github:
      "https://github.com/qiyaammoodley-droid/pulse-world-snapshot",

    live:
      "https://pulse-world-snapshot.netlify.app/",

    featured: true,

    year: "2026",

    status: "Completed",

    longDescription:
      "A data-driven web application that retrieves live earthquake information from the USGS Earthquake API and weather information from the Open-Meteo API before storing the data in Supabase. The project also includes database design and filtering for earthquakes with a magnitude of 4.0 or higher.",

    accent: "aqua",
  },


  /* ---------------------------------------------------------
     04 — PROJECT MANAGEMENT DASHBOARD
  --------------------------------------------------------- */

  {
    slug: "project-management-dashboard",

    title: "Project Management Dashboard",

    category: "Full-Stack",

    description:
      "A project management dashboard designed to organise projects, tasks and workflow information through a structured web interface.",

    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "APIs",
    ],

    github:
      "https://github.com/qiyaammoodley-droid/project-management-dashboard",

    live:
      "https://donezoprojectmanagementdashbaord.netlify.app/",

    featured: true,

    year: "2026",

    status: "Completed",

    longDescription:
      "A practical dashboard project focused on bringing together frontend interfaces, application logic and API-driven workflows into a single project management experience.",

    accent: "orange",
  },


  /* ---------------------------------------------------------
     05 — A4AC REDESIGN
  --------------------------------------------------------- */

  {
    slug: "a4ac-redesign",

    title: "A4AC Redesign",

    category: "Frontend",

    description:
      "A redesigned web experience focused on creating a cleaner, more modern and responsive interface while applying practical frontend development skills.",

    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    github:
      "https://github.com/qiyaammoodley-droid/a4ac-redesign",

    live:
      "https://a4ac-redesign.netlify.app/",

    featured: true,

    year: "2026",

    status: "Completed",

    longDescription:
      "A frontend redesign project focused on improving visual hierarchy, responsiveness, reusable components and the overall user experience.",

    accent: "violet",
  },


  /* ---------------------------------------------------------
     06 — LUXURY BOAT DEALERSHIP
  --------------------------------------------------------- */

  {
    slug: "luxury-boat-dealership",

    title: "Luxury Boat Dealership",

    category: "Frontend",

    description:
      "A luxury boat dealership website built around presenting premium products through an immersive and polished web interface.",

    tech: [
      "React",
      "TypeScript",
      "CSS",
    ],

    github:
      "https://github.com/qiyaammoodley-droid/luxury-boat-dealership",

    live: "",

    featured: true,

    year: "2026",

    status: "Completed",

    longDescription:
      "A visually focused dealership website created to practise presenting products through a premium interface while developing responsive frontend skills.",

    accent: "aqua",
  },


  /* ---------------------------------------------------------
     07 — CAPSTONE PROJECT
  --------------------------------------------------------- */

  {
    slug: "capstone-project",

    title: "Capstone Project",

    category: "Full-Stack",

    description:
      "A larger capstone application bringing together the development concepts and practical skills developed throughout the Melsoft learning journey.",

    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
    ],

    github:
      "https://github.com/qiyaammoodley-droid/Capstone-project",

    live:
      "https://capstonets.netlify.app/",

    featured: true,

    year: "2026",

    status: "Completed",

    longDescription:
      "The capstone project represents a larger application built by combining concepts developed throughout the Melsoft programme, including frontend development, backend concepts, APIs and application architecture.",

    accent: "orange",
  },


  /* ---------------------------------------------------------
     08 — CURRENCY CONVERTER
  --------------------------------------------------------- */

  {
    slug: "currency-converter",

    title: "Currency Converter",

    category: "JavaScript",

    description:
      "A currency conversion application focused on working with user input, application logic and external data.",

    tech: [
      "JavaScript",
      "API",
    ],

    github:
      "https://github.com/qiyaammoodley-droid/currency-converter",

    live: "",

    featured: false,

    year: "2026",

    status: "Completed",

    longDescription:
      "A practical JavaScript project focused on handling user input, performing conversion logic and working with external API data.",

    accent: "aqua",
  },


  /* ---------------------------------------------------------
     09 — TODO LIST APP
  --------------------------------------------------------- */

  {
    slug: "todo-list-app",

    title: "Todo List App",

    category: "JavaScript",

    description:
      "A task management application built to practise application state, user interaction and creating a useful interface around everyday tasks.",

    tech: [
      "JavaScript",
      "HTML",
      "CSS",
    ],

    github:
      "https://github.com/qiyaammoodley-droid/todo-list-app",

    live: "",

    featured: false,

    year: "2026",

    status: "Completed",

    longDescription:
      "A foundational application built around adding, managing and interacting with tasks while practising JavaScript logic and DOM interaction.",

    accent: "violet",
  },


  /* ---------------------------------------------------------
     10 — MINI SPREADSHEET
  --------------------------------------------------------- */

  {
    slug: "mini-spreadsheet",

    title: "Mini Spreadsheet",

    category: "Frontend",

    description:
      "A spreadsheet-style frontend challenge focused on creating an interactive interface and working with structured user data.",

    tech: [
      "JavaScript",
      "HTML",
      "CSS",
    ],

    github:
      "https://github.com/qiyaammoodley-droid/mini-spreadsheet-frontend-challenge",

    live:
      "https://mini-spreadsheet-frontend-challenge.netlify.app/",

    featured: true,

    year: "2026",

    status: "Completed",

    longDescription:
      "An interactive spreadsheet-style interface created as a frontend challenge, focusing on structured data, user interaction and interface behaviour.",

    accent: "orange",
  },


  /* ---------------------------------------------------------
     11 — HABIT TRACKER
  --------------------------------------------------------- */

  {
    slug: "habit-tracker",

    title: "Habit Tracker",

    category: "React",

    description:
      "A habit tracking application built to practise React concepts while creating a practical interface for tracking personal progress.",

    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    github:
      "https://github.com/qiyaammoodley-droid/habit-tracker",

    live: "",

    featured: true,

    year: "2026",

    status: "Completed",

    longDescription:
      "A practical React application focused on component-based development, state management and creating an interface around tracking personal habits.",

    accent: "violet",
  },
];


/* =========================================================
   EXPERIENCE
========================================================= */

export const experience: Experience[] = [

  {
    company: "Melsoft Academy",

    role: "Web Development Programme",

    dates: "2026 — Present",

    description:
      "Developing practical frontend and backend skills through structured lessons, projects and real development workflows.",
  },

  {
    company: "Tshwane Cash and Carry",

    role: "Checker / Stock Receiver / Customer Support",

    dates: "Dec 2025 — Apr 2026",

    description:
      "Checked and received wholesale stock, supported accurate deliveries and assisted customers with queries and issues.",
  },

  {
    company: "Sims Gas",

    role: "Logistics & Customer Support",

    dates: "Jan 2025 — Jun 2025",

    description:
      "Supported delivery and pickup logistics, received customer orders, organised dispatch and assisted customers.",
  },

  {
    company: "Kholo Academy",

    role: "Data Capturing Assistant",

    dates: "Jan 2024 — Dec 2024",

    description:
      "Captured student information and supporting documents into structured Excel records with attention to accuracy.",
  },
];


/* =========================================================
   MILESTONES
========================================================= */

export const milestones = [

  [
    "2024",
    "Data & administration",
    "Built accuracy, organisation and record-management experience.",
  ],

  [
    "2025",
    "Operations & customer support",
    "Developed logistics, communication and responsibility through real-world work.",
  ],

  [
    "2026",
    "Software development",
    "Moved deeply into React, TypeScript, Node.js, Express, APIs, testing and Git.",
  ],

  [
    "NEXT",
    "Build & ship",
    "Turn every new lesson and achievement into another piece of the portfolio.",
  ],

];