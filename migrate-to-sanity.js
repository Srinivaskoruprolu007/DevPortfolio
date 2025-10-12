// Migration script to populate Sanity with local portfolio data
// Run this after setting up your Sanity Studio

import { createClient } from '@sanity/client'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Initialize Sanity client
const client = createClient({
  projectId: '2wmvbh5j',
  dataset: 'production',
  apiVersion: '2024-10-12',
  token: 'YOUR_SANITY_WRITE_TOKEN', // You'll need to add this
  useCdn: false
})

// Your local data
const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML", level: 80 },
  ],
  backend: [
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
}

const projects = [
  {
    title: "HappyHappenings",
    slug: "happy-happenings",
    description: "A Music Concert Management Application with minimal styling and having Feature to host music concerts anf featured videos.",
    achievements: [
      "Built responsive React application with modern UI/UX design",
      "Implemented concert booking and management system",
      "Integrated video streaming functionality for live performances",
      "Deployed on Vercel with optimized performance",
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
      "Created interactive Jupyter notebook with data visualizations",
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
      "Generated actionable insights leading to 15% revenue improvement recommendations",
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
      "Created responsive design supporting multiple document formats (PDF, DOCX)",
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
      "Added 5-day weather forecast with hourly breakdowns",
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
      "Deployed scalable authentication service with 99.9% uptime",
    ],
    technologies: ["Next.js", "TailwindCSS", "HTML", "JavaScript", "API"],
    githubUrl: "https://github.com/Srinivaskoruprolu007/fullauthnext",
    liveUrl: "https://fullauthnext-rho.vercel.app/",
    featured: false,
    order: 6
  },
]

async function createTechnologies() {
  console.log('Creating technologies...')

  // Get all unique technologies from projects
  const allTechs = new Set()
  projects.forEach(project => {
    project.technologies.forEach(tech => allTechs.add(tech))
  })

  const technologies = Array.from(allTechs).map(name => ({
    _type: 'technology',
    name,
    slug: {
      _type: 'slug',
      current: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    },
    category: getTechCategory(name)
  }))

  const createdTechs = await client.createOrReplace(technologies)
  console.log(`Created ${createdTechs.length} technologies`)
  return createdTechs
}

function getTechCategory(techName) {
  const frontend = ['React', 'JavaScript', 'HTML', 'TailwindCSS', 'TypeScript']
  const backend = ['.Net', 'Flask', 'Next.js', 'API']
  const database = ['SQL', 'Google BigQuery']
  const tools = ['Git', 'VS Code', 'Jupyter', 'Visual Studio', 'Google Docs', 'Puter.js']
  const languages = ['Python', 'JavaScript', 'TypeScript']

  if (frontend.some(f => techName.includes(f))) return 'frontend'
  if (backend.some(b => techName.includes(b))) return 'backend'
  if (database.some(d => techName.includes(d))) return 'database'
  if (tools.some(t => techName.includes(t))) return 'tool'
  if (languages.some(l => techName.includes(l))) return 'language'
  return 'framework'
}

async function createSkills() {
  console.log('Creating skills...')

  const skillDocs = []
  let order = 1

  Object.entries(skills).forEach(([category, skillList]) => {
    skillList.forEach(skill => {
      skillDocs.push({
        _type: 'skill',
        name: skill.name,
        category: category === 'Backend' ? 'backend' : category, // Fix capitalization
        level: skill.level,
        order: order++
      })
    })
  })

  const createdSkills = await Promise.all(
    skillDocs.map(skill => client.createOrReplace(skill))
  )
  console.log(`Created ${createdSkills.length} skills`)
  return createdSkills
}

async function createProjects() {
  console.log('Creating projects...')

  // First get all technologies to reference them
  const techs = await client.fetch(`*[_type == "technology"]{_id, name}`)

  const projectDocs = await Promise.all(projects.map(async (project) => {
    // Find technology references
    const techRefs = project.technologies.map(techName => {
      const tech = techs.find(t => t.name === techName)
      return tech ? { _type: 'reference', _ref: tech._id } : null
    }).filter(Boolean)

    return {
      _type: 'project',
      title: project.title,
      slug: {
        _type: 'slug',
        current: project.slug
      },
      description: project.description,
      achievements: project.achievements,
      technologies: techRefs,
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
      featured: project.featured,
      order: project.order
    }
  }))

  const createdProjects = await Promise.all(
    projectDocs.map(project => client.createOrReplace(project))
  )
  console.log(`Created ${createdProjects.length} projects`)
  return createdProjects
}

async function createAbout() {
  console.log('Creating about document...')

  const aboutDoc = {
    _type: 'about',
    title: 'Srinivas Koruprolu',
    subtitle: 'Full Stack Developer & Data Analyst',
    bio: `Passionate full-stack developer and data analyst with expertise in React, TypeScript, Python, and machine learning.

I specialize in building modern web applications with excellent user experiences and analyzing complex data to derive actionable insights. With a strong foundation in both frontend and backend technologies, I enjoy creating end-to-end solutions that solve real-world problems.

Currently pursuing Data Science and Machine Learning certification from Scaler while working on various projects that combine my love for coding and data analysis.`,
    socialLinks: [
      {
        platform: 'github',
        url: 'https://github.com/Srinivaskoruprolu007',
        icon: 'Github'
      },
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/srinivas-koruprolu',
        icon: 'Linkedin'
      },
      {
        platform: 'email',
        url: 'mailto:srinivaskoruprolu5@gmail.com',
        icon: 'Mail'
      }
    ]
  }

  const createdAbout = await client.createOrReplace(aboutDoc)
  console.log('Created about document')
  return createdAbout
}

async function migrate() {
  try {
    console.log('Starting migration to Sanity...')

    await createTechnologies()
    await createSkills()
    await createProjects()
    await createAbout()

    console.log('✅ Migration completed successfully!')
    console.log('Your portfolio data is now available in Sanity Studio')

  } catch (error) {
    console.error('❌ Migration failed:', error)
  }
}

// Run migration
migrate()