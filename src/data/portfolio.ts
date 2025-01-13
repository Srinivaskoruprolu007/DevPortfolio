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
    tags: ["React", "Tailwindcss", "HTML", "JavaScript"],
    image: HappyHappenings,
    github: "https://github.com/Srinivaskoruprolu007/HappyHappenings",
    demo: "https://happy-happenings-xom2.vercel.app/",
  },
  {
    title: "House Price Prediction Model",
    description:
      "This project predicts Bengaluru house prices using a Linear Regression model. The dataset includes features like location, size, bedrooms, bathrooms, and square footage to estimate prices accurately.",
    tags: ["Python", "Machine Learning", "SQL"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    github:
      "https://github.com/Srinivaskoruprolu007/House-Price-Prediction-Model",
    demo: "https://github.com/Srinivaskoruprolu007/House-Price-Prediction-Model/blob/master/Code/ML-Model.ipynb",
  },
  {
    title: "Target Sales Analysis",
    description:
      "This Case study is about predicting the sales of a retail store chain. The dataset includes features like store size, location, and historical sales data to get sales insights and recommendations.",
    tags: ["SQL", "Google big Query", "Google Docs", "ER Diagrams"],
    image: TargetSales,
    github: "https://github.com/Srinivaskoruprolu007/Target-SQL-Case-Study",
    demo: "https://github.com/Srinivaskoruprolu007/Target-SQL-Case-Study/blob/main/Case_Study.pdf",
  },
  {
    title: "Weatherly",
    description:
      "Weatherly is a weather app that provides real-time weather information and forecasts for a specific location.",
    tags: ["React", "Tailwindcss", "HTML", "JavaScript", "API"],
    image: Weatherly,
    github: "https://github.com/Srinivaskoruprolu007/Weatherly",
    demo: "https://weatherly-pearl-tau.vercel.app/",
  },
];
