import HappyHappenings from "../Assets/HappyHappenings.png";

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
    title: "Customer Segmentation Tool",
    description:
      "Developed a machine learning model for customer segmentation using Python and scikit-learn, with a React frontend for visualization.",
    tags: ["Python", "React", "Machine Learning", "SQL"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    github: "https://github.com/yourusername/customer-segmentation",
    demo: "https://customer-segmentation-demo.netlify.app",
  },
  {
    title: "Sales Prediction Platform",
    description:
      "Created a full-stack application for sales forecasting using time series analysis and machine learning algorithms.",
    tags: ["Python", "React", "TypeScript", "AWS"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/yourusername/sales-prediction",
    demo: "https://sales-prediction-demo.netlify.app",
  },
];
