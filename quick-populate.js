// Quick populate script - Run this in your browser console on the Sanity Studio page
// This will help you create the basic structure faster

// Copy and paste this in your browser console while on Sanity Studio

const technologiesData = [
  { name: "React", category: "frontend" },
  { name: "JavaScript", category: "language" },
  { name: "TailwindCSS", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "TypeScript", category: "language" },
  { name: ".Net", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "Next.js", category: "framework" },
  { name: "Python", category: "language" },
  { name: "SQL", category: "database" },
  { name: "Machine Learning", category: "framework" },
  { name: "Google BigQuery", category: "database" },
  { name: "Google Docs", category: "tool" },
  { name: "ER Diagrams", category: "tool" },
  { name: "Puter.js", category: "framework" },
  { name: "React Router v7", category: "framework" },
  { name: "API", category: "backend" }
];

const skillsData = [
  // Frontend
  { name: "React", category: "frontend", level: 90, order: 1 },
  { name: "JavaScript", category: "frontend", level: 85, order: 2 },
  { name: "Tailwind CSS", category: "frontend", level: 90, order: 3 },
  { name: "HTML", category: "frontend", level: 80, order: 4 },

  // Backend
  { name: ".Net", category: "backend", level: 70, order: 5 },
  { name: "Flask", category: "backend", level: 50, order: 6 },
  { name: "Next.js", category: "backend", level: 75, order: 7 },

  // Data Analysis
  { name: "Python", category: "dataAnalysis", level: 85, order: 8 },
  { name: "SQL", category: "dataAnalysis", level: 90, order: 9 },
  { name: "Pandas", category: "dataAnalysis", level: 85, order: 10 },
  { name: "Tableau", category: "dataAnalysis", level: 80, order: 11 },
  { name: "Statistics", category: "dataAnalysis", level: 90, order: 12 },
  { name: "PowerBI", category: "dataAnalysis", level: 70, order: 13 },

  // Tools
  { name: "Git", category: "tools", level: 85, order: 14 },
  { name: "VS Code", category: "tools", level: 90, order: 15 },
  { name: "Jupyter", category: "tools", level: 85, order: 16 },
  { name: "Visual Studio", category: "tools", level: 75, order: 17 }
];

const projectsData = [
  {
    title: "HappyHappenings",
    slug: "happy-happenings",
    description: "A Music Concert Management Application with minimal styling and having Feature to host music concerts anf featured videos.",
    achievements: [
      "Built responsive React application with modern UI/UX design",
      "Implemented concert booking and management system",
      "Integrated video streaming functionality for live performances",
      "Deployed on Vercel with optimized performance"
    ],
    technologies: ["React", "TailwindCSS", "HTML", "JavaScript"],
    githubUrl: "https://github.com/Srinivaskoruprolu007/HappyHappenings",
    liveUrl: "https://happy-happenings-xom2.vercel.app/",
    featured: true,
    order: 1
  },
  {
    title: "House Price Prediction Model",
    slug: "house-price-prediction",
    description: "This project predicts Bengaluru house prices using a Linear Regression model. The dataset includes features like location, size, bedrooms, bathrooms, and square footage to estimate prices accurately.",
    achievements: [
      "Achieved 85% accuracy in house price predictions using Linear Regression",
      "Analyzed 13,000+ real estate records from Bengaluru market",
      "Implemented feature engineering for location-based pricing",
      "Created interactive Jupyter notebook with data visualizations"
    ],
    technologies: ["Python", "Machine Learning", "SQL"],
    githubUrl: "https://github.com/Srinivaskoruprolu007/House-Price-Prediction-Model",
    liveUrl: "https://github.com/Srinivaskoruprolu007/House-Price-Prediction-Model/blob/master/Code/ML-Model.ipynb",
    featured: true,
    order: 2
  },
  {
    title: "Target Sales Analysis",
    slug: "target-sales-analysis",
    description: "This Case study is about predicting the sales of a retail store chain. The dataset includes features like store size, location, and historical sales data to get sales insights and recommendations.",
    achievements: [
      "Analyzed $2M+ in retail sales data across multiple store locations",
      "Created comprehensive SQL queries for business intelligence",
      "Designed ER diagrams for optimized database structure",
      "Generated actionable insights leading to 15% revenue improvement recommendations"
    ],
    technologies: ["SQL", "Google BigQuery", "Google Docs", "ER Diagrams"],
    githubUrl: "https://github.com/Srinivaskoruprolu007/Target-SQL-Case-Study",
    liveUrl: "https://github.com/Srinivaskoruprolu007/Target-SQL-Case-Study/blob/main/Case_Study.pdf",
    featured: true,
    order: 3
  },
  {
    title: "CVAI",
    slug: "cvai",
    description: "CVAI is a modern, full-stack web application that leverages AI to analyze resumes and provide actionable feedback for job seekers. Built with React Router, Tailwind CSS, and Puter.js APIs, it offers a seamless experience for uploading, analyzing, and tracking resume submissions.",
    achievements: [
      "Integrated AI-powered resume analysis using Puter.js APIs",
      "Built full-stack application with React Router v7 for SPA navigation",
      "Implemented secure file upload with drag-and-drop functionality",
      "Created responsive design supporting multiple document formats (PDF, DOCX)"
    ],
    technologies: ["React", "TailwindCSS", "HTML", "TypeScript", "Puter.js", "React Router v7"],
    githubUrl: "https://github.com/Srinivaskoruprolu007/CVAI",
    liveUrl: "https://cvai-phi.vercel.app/",
    featured: true,
    order: 4
  },
  {
    title: "Weatherly",
    slug: "weatherly",
    description: "Weatherly is a weather app that provides real-time weather information and forecasts for a specific location.",
    achievements: [
      "Integrated OpenWeatherMap API for real-time weather data",
      "Built responsive design supporting both mobile and desktop views",
      "Implemented geolocation-based weather detection",
      "Added 5-day weather forecast with hourly breakdowns"
    ],
    technologies: ["React", "TailwindCSS", "HTML", "JavaScript", "API"],
    githubUrl: "https://github.com/Srinivaskoruprolu007/Weatherly",
    liveUrl: "https://weatherly-pearl-tau.vercel.app/",
    featured: false,
    order: 5
  },
  {
    title: "Full Authentication Using NextJS",
    slug: "nextjs-authentication",
    description: "This project is a full authentication system using NextJS, which includes features like login, signup, and protected routes and email verification.",
    achievements: [
      "Implemented secure JWT-based authentication system",
      "Built email verification workflow with automated sending",
      "Created protected routes with role-based access control",
      "Deployed scalable authentication service with 99.9% uptime"
    ],
    technologies: ["Next.js", "TailwindCSS", "HTML", "JavaScript", "API"],
    githubUrl: "https://github.com/Srinivaskoruprolu007/fullauthnext",
    liveUrl: "https://fullauthnext-rho.vercel.app/",
    featured: false,
    order: 6
  }
];

console.log('=== SANITY DATA MIGRATION HELPER ===');
console.log('Copy the data below to easily fill your Sanity Studio:');
console.log('\n1. TECHNOLOGIES:', technologiesData);
console.log('\n2. SKILLS:', skillsData);
console.log('\n3. PROJECTS:', projectsData);
console.log('\n=== END DATA ===');
console.log('\nUse this data to quickly fill your Sanity Studio forms!');