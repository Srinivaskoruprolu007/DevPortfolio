import AuthApp from "../Assets/AuthApp.png";
import CVAI from "../Assets/CVAI.png";
import HappyHappenings from "../Assets/HappyHappenings.png";
import TargetSales from "../Assets/TargetSales.jpg";
import Weatherly from "../Assets/Weatherly.png";

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML", level: 80 },
  ],
  Backend: [
    { name: ".Net", level: 70 },
    { name: "Flask", level: 50 },
    { name: "Next.js", level: 75 },
  ],
  dataAnalysis: [
    { name: "Python", level: 85 },
    { name: "SQL", level: 90 },
    { name: "Pandas", level: 85 },
    { name: "Tableau", level: 80 },
    { name: "Statistics", level: 90 },
    { name: "PowerBI", level: 70 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Jupyter", level: 85 },
    { name: "Visual Studio", level: 75 },
  ],
};

export const education = [
  {
    degree: "Certification in Data Science and Machine Learning",
    school: "Scaler",
    year: "2023-2025",
    description: "Focused on machine learning and statistical analysis",
  },
  {
    degree: "Bachelor in Technology",
    school: "Avanti Institute of Engineering and Technology",
    year: "2019-2022",
    description: "Specialized in Electronics and Communication Engineering",
  },
];

export const projects = [
  {
    title: "HappyHappenings",
    description:
      "A Music Concert Management Application with minimal styling and having Feature to host music concerts anf featured videos.",
    achievements: [
      "Built responsive React application with modern UI/UX design",
      "Implemented concert booking and management system",
      "Integrated video streaming functionality for live performances",
      "Deployed on Vercel with optimized performance",
    ],
    tags: ["React", "Tailwindcss", "HTML", "JavaScript"],
    image: HappyHappenings,
    imageAlt:
      "HappyHappenings music concert management application homepage with featured events",
    github: "https://github.com/Srinivaskoruprolu007/HappyHappenings",
    demo: "https://happy-happenings-xom2.vercel.app/",
  },
  {
    title: "House Price Prediction Model",
    description:
      "This project predicts Bengaluru house prices using a Linear Regression model. The dataset includes features like location, size, bedrooms, bathrooms, and square footage to estimate prices accurately.",
    achievements: [
      "Achieved 85% accuracy in house price predictions using Linear Regression",
      "Analyzed 13,000+ real estate records from Bengaluru market",
      "Implemented feature engineering for location-based pricing",
      "Created interactive Jupyter notebook with data visualizations",
    ],
    tags: ["Python", "Machine Learning", "SQL"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    imageAlt:
      "Modern house with architectural design representing real estate price prediction analytics",
    github:
      "https://github.com/Srinivaskoruprolu007/House-Price-Prediction-Model",
    demo: "https://github.com/Srinivaskoruprolu007/House-Price-Prediction-Model/blob/master/Code/ML-Model.ipynb",
  },
  {
    title: "Target Sales Analysis",
    description:
      "This Case study is about predicting the sales of a retail store chain. The dataset includes features like store size, location, and historical sales data to get sales insights and recommendations.",
    achievements: [
      "Analyzed $2M+ in retail sales data across multiple store locations",
      "Created comprehensive SQL queries for business intelligence",
      "Designed ER diagrams for optimized database structure",
      "Generated actionable insights leading to 15% revenue improvement recommendations",
    ],
    tags: ["SQL", "Google big Query", "Google Docs", "ER Diagrams"],
    image: TargetSales,
    imageAlt:
      "Target retail sales analysis dashboard showing business intelligence insights",
    github: "https://github.com/Srinivaskoruprolu007/Target-SQL-Case-Study",
    demo: "https://github.com/Srinivaskoruprolu007/Target-SQL-Case-Study/blob/main/Case_Study.pdf",
  },
  {
    title: "CVAI",
    description:
      "CVAI is a modern, full-stack web application that leverages AI to analyze resumes and provide actionable feedback for job seekers. Built with React Router, Tailwind CSS, and Puter.js APIs, it offers a seamless experience for uploading, analyzing, and tracking resume submissions.",
    achievements: [
      "Integrated AI-powered resume analysis using Puter.js APIs",
      "Built full-stack application with React Router v7 for SPA navigation",
      "Implemented secure file upload with drag-and-drop functionality",
      "Created responsive design supporting multiple document formats (PDF, DOCX)",
    ],
    tags: [
      "React",
      "Tailwindcss",
      "HTML",
      "Typescript",
      "Puter.js",
      "React-Router-v7",
    ],
    image: CVAI,
    imageAlt:
      "CVAI resume analysis application interface with AI-powered feedback system",
    github: "https://github.com/Srinivaskoruprolu007/CVAI",
    demo: "https://cvai-phi.vercel.app/",
  },
  {
    title: "Weatherly",
    description:
      "Weatherly is a weather app that provides real-time weather information and forecasts for a specific location.",
    achievements: [
      "Integrated OpenWeatherMap API for real-time weather data",
      "Built responsive design supporting both mobile and desktop views",
      "Implemented geolocation-based weather detection",
      "Added 5-day weather forecast with hourly breakdowns",
    ],
    tags: ["React", "Tailwindcss", "HTML", "JavaScript", "API"],
    image: Weatherly,
    imageAlt:
      "Weatherly weather app showing current conditions and 5-day forecast interface",
    github: "https://github.com/Srinivaskoruprolu007/Weatherly",
    demo: "https://weatherly-pearl-tau.vercel.app/",
  },
  {
    title: "Full Authentication Using NextJS",
    description:
      "This project is a full authentication system using NextJS, which includes features like login, signup, and protected routes and email verification.",
    achievements: [
      "Implemented secure JWT-based authentication system",
      "Built email verification workflow with automated sending",
      "Created protected routes with role-based access control",
      "Deployed scalable authentication service with 99.9% uptime",
    ],
    tags: ["NextJS", "Tailwindcss", "HTML", "JavaScript", "API"],
    image: AuthApp,
    imageAlt:
      "NextJS authentication system with secure login, signup, and email verification features",
    github: "https://github.com/Srinivaskoruprolu007/fullauthnext",
    demo: "https://fullauthnext-rho.vercel.app/",
  },
];
