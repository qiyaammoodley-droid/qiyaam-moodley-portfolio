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
     01 — PROJECT MANAGEMENT DASHBOARD
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
     02 — A4AC REDESIGN
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
     03 — LUXURY BOAT DEALERSHIP
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
     04 — CAPSTONE PROJECT
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
     05 — CURRENCY CONVERTER
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
     06 — TODO LIST APP
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
     07 — MINI SPREADSHEET
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
     08 — HABIT TRACKER
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