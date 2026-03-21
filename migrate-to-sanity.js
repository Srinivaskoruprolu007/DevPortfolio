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
    { name: "React 19", level: 95 },
    { name: "NextJS", level: 90 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "SCSS", level: 80 },
    { name: "shadcn/ui", level: 85 },
    { name: "AG Grid", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "TypeScript", level: 90 },
    { name: "REST APIs", level: 90 },
    { name: "NextJS API Routes", level: 85 },
  ],
  databases: [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "NeonDB", level: 80 },
    { name: "Redis", level: 75 },
  ],
  devops: [
    { name: "GitHub Actions", level: 80 },
    { name: "Vercel", level: 85 },
    { name: "Netlify", level: 80 },
    { name: "Docker", level: 70 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Linux/Bash", level: 75 },
  ],
}

const projects = [
  {
    title: "Gatherly - AI Knowledge Library",
    slug: "gatherly-ai-knowledge-library",
    description: "A modern knowledge management platform with AI-powered content processing, real-time bookmarking, and streaming bulk URL processing.",
    achievements: [
      "Achieved 95+ Lighthouse performance score with React 19 patterns",
      "Handles 1000+ bookmarks with sub-second queries using Prisma and NeonDB",
      "Integrated OpenRouter AI for automated summarization and tagging",
      "Implemented PWA setup with comprehensive SEO/OG meta tags",
    ],
    technologies: ["React 19", "TanStack Start", "Prisma", "NeonDB", "OpenRouter AI", "Redis"],
    githubUrl: "https://github.com/Srinivaskoruprolu007/gatherly",
    liveUrl: "https://gatherly-bice.vercel.app/",
    featured: true,
    order: 1
  },
  {
    title: "Product Store PERN",
    slug: "product-store-pern",
    description: "A complete e-commerce platform demonstrating strong backend architecture with React frontend and comprehensive API design.",
    achievements: [
      "Built 10-15 RESTful API endpoints with 100-200ms response times",
      "Implemented PostgreSQL with migrations and complex relations",
      "Created comprehensive Express middleware stack (CORS, validation, auth)",
      "Configured environment-based deployment with production security",
    ],
    technologies: ["React", "Express.js", "PostgreSQL", "Node.js"],
    githubUrl: "https://github.com/Srinivaskoruprolu007/product_store_PERN",
    liveUrl: "",
    featured: true,
    order: 2
  },
  {
    title: "CVAI - Resume Analysis Platform",
    slug: "cvai-resume-analysis-platform",
    description: "An AI-powered resume analysis platform with minimalist design and seamless API integration for document processing.",
    achievements: [
      "Scored 90+ on Lighthouse performance with minimal CSS overhead",
      "Integrated Puter.js APIs for AI-powered document analysis",
      "Achieved responsive mobile-first design with clean codebase",
      "Demonstrated rapid shipping of production applications",
    ],
    technologies: ["React Router", "Puter.js APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/Srinivaskoruprolu007/CVAI",
    liveUrl: "https://cvai-phi.vercel.app/",
    featured: true,
    order: 3
  },
  {
    title: "TAMM Government Portal",
    slug: "tamm-government-portal",
    description: "A national government services platform serving 50+ services with multilingual support and enterprise-grade reliability.",
    achievements: [
      "Architected multilingual UI/API supporting Arabic & English",
      "Reduced runtime errors by 35% through TypeScript implementation",
      "Implemented real-time monitoring with Dynatrace and Kibana",
      "Managed CI/CD pipelines with GitHub Actions and Payload CMS",
    ],
    technologies: ["NextJS", "TypeScript", "Payload CMS", "PostgreSQL", "Dynatrace"],
    githubUrl: "",
    liveUrl: "https://www.tamm.abudhabi/",
    featured: true,
    order: 4
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
