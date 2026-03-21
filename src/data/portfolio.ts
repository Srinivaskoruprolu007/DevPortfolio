import CVAI from "../Assets/CVAI.png";

export const profile = {
  name: "Srinivas Koruprolu",
  role: "Full-Stack Developer",
  location: "Bengaluru, India",
  availability: "Open to full-time roles and contract builds",
  summary:
    "I build responsive TypeScript products with a focus on clarity, performance, and maintainable code.",
  about:
    "With 3+ years in enterprise delivery, I have worked across React interfaces, Node.js services, PostgreSQL-backed systems, and release workflows. I enjoy turning product requirements into clean, reliable implementations.",
  githubUrl: "https://github.com/Srinivaskoruprolu007",
  linkedinUrl: "https://www.linkedin.com/in/srinivas-koruprolu/",
  resumeViewUrl:
    "https://drive.google.com/file/d/1kEaf8n7ritBl3SIr2CvRlgkgBSwFr4Ya/view?usp=sharing",
  resumeDownloadUrl:
    "https://drive.google.com/uc?export=download&id=1kEaf8n7ritBl3SIr2CvRlgkgBSwFr4Ya",
};

export const heroStats = [
  { value: "3+", label: "Years shipping production software" },
  { value: "50+", label: "Enterprise and citizen-facing services supported" },
  { value: "95+", label: "Lighthouse scores on recent launches" },
];

export const focusAreas = [
  "React and Next.js user interfaces",
  "TypeScript APIs, data flows, and platform integrations",
  "Performance, accessibility, and developer experience",
];

export const aboutHighlights = [
  {
    title: "Enterprise delivery",
    description:
      "Built and maintained production features for large-scale government and enterprise platforms with reliability requirements.",
  },
  {
    title: "Full-stack ownership",
    description:
      "Comfortable moving from interaction design and component architecture to backend APIs, data modeling, and release workflows.",
  },
  {
    title: "Performance mindset",
    description:
      "Prioritize clean code, measurable outcomes, and UX details that keep products fast, stable, and easy to evolve.",
  },
];

export const contactHighlights = [
  {
    title: "Best fit",
    description:
      "Product teams that need strong execution across frontend systems, APIs, and delivery quality.",
  },
  {
    title: "Response time",
    description: "I usually reply within one business day.",
  },
  {
    title: "Collaboration",
    description:
      "Comfortable working with distributed teams across product, design, and engineering.",
  },
];

export const skills = {
  frontend: [
    { name: "React 19", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 92 },
    { name: "Tailwind CSS", level: 90 },
    { name: "shadcn/ui", level: 85 },
    { name: "AG Grid", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 92 },
    { name: "Prisma", level: 80 },
    { name: "Next.js API Routes", level: 84 },
  ],
  databases: [
    { name: "PostgreSQL", level: 86 },
    { name: "MongoDB", level: 80 },
    { name: "Neon", level: 80 },
    { name: "Redis", level: 75 },
  ],
  devops: [
    { name: "GitHub Actions", level: 82 },
    { name: "Vercel", level: 88 },
    { name: "Netlify", level: 80 },
    { name: "Docker", level: 72 },
    { name: "Dynatrace", level: 74 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "VS Code", level: 90 },
    { name: "Postman", level: 85 },
    { name: "Linux", level: 78 },
  ],
};

export const education = [
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    school: "Avanti Institute of Engineering and Technology",
    year: "2019-2022",
    description:
      "Built a strong foundation in systems thinking, problem solving, and technical communication.",
  },
  {
    degree: "Contentstack Certified Professional",
    school: "Contentstack",
    year: "2025",
    description:
      "Validated hands-on experience with enterprise CMS implementation and content operations.",
  },
  {
    degree: "Git for Professionals",
    school: "Udemy",
    year: "2024",
    description:
      "Focused on collaborative Git workflows, history hygiene, and release-safe branching strategies.",
  },
];

export const projects = [
  {
    title: "Gatherly",
    eyebrow: "Personal product",
    impact: "AI-assisted research and bookmarking workflow for content-heavy teams",
    description:
      "A knowledge library for saving, organizing, and processing links with AI summaries and tags.",
    achievements: [
      "Reached 95+ Lighthouse scores while keeping the interface fast on desktop and mobile.",
      "Handled 1,000+ bookmarks with sub-second reads using Prisma, Neon, and Redis-backed patterns.",
      "Integrated AI summarization and tagging to reduce manual organization work.",
      "Shipped with SEO, Open Graph, and PWA essentials for production readiness.",
    ],
    tags: [
      "React 19",
      "TanStack Start",
      "Prisma",
      "Neon",
      "OpenRouter",
      "Redis",
    ],
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2024&auto=format&fit=crop",
    imageAlt:
      "Knowledge management dashboard with saved resources and AI-generated summaries",
    github: "https://github.com/Srinivaskoruprolu007/gatherly",
    demo: "https://gatherly-bice.vercel.app/",
    demoLabel: "Live app",
  },
  {
    title: "Product Store PERN",
    eyebrow: "Full-stack build",
    impact: "CRUD commerce app focused on backend structure and API quality",
    description:
      "A product management storefront focused on REST APIs, relational data, and clean frontend-backend integration.",
    achievements: [
      "Built RESTful endpoints with fast response times and predictable validation behavior.",
      "Used PostgreSQL migrations and relational modeling to support product operations cleanly.",
      "Added middleware for validation, CORS, and environment-aware production safeguards.",
      "Structured the app for straightforward local development and deployment.",
    ],
    tags: ["React", "Express.js", "PostgreSQL", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2024&auto=format&fit=crop",
    imageAlt: "Product dashboard with inventory cards and commerce controls",
    github: "https://github.com/Srinivaskoruprolu007/product_store_PERN",
    demoLabel: "Source code",
  },
  {
    title: "CVAI",
    eyebrow: "AI workflow",
    impact: "Resume analysis experience with a simple, conversion-focused interface",
    description:
      "A lightweight resume analysis product with clean UX and fast AI-powered document feedback.",
    achievements: [
      "Scored 90+ on Lighthouse with a focused UI and minimal styling overhead.",
      "Integrated Puter.js APIs to process resumes and return useful analysis quickly.",
      "Delivered a mobile-first layout that stays clear and usable on smaller screens.",
      "Kept the codebase lean enough to ship quickly without sacrificing polish.",
    ],
    tags: ["React Router", "Puter.js", "Tailwind CSS"],
    image: CVAI,
    imageAlt: "Resume analysis application with upload flow and AI feedback",
    github: "https://github.com/Srinivaskoruprolu007/CVAI",
    demo: "https://cvai-phi.vercel.app/",
    demoLabel: "Live app",
  },
  {
    title: "TAMM Government Portal",
    eyebrow: "Enterprise project",
    impact: "Large-scale multilingual service platform used for public digital journeys",
    description:
      "A government services platform where I contributed to multilingual experiences and platform reliability.",
    achievements: [
      "Supported multilingual UI and API experiences across Arabic and English journeys.",
      "Reduced runtime issues by driving stronger TypeScript adoption in the codebase.",
      "Worked with monitoring and observability tools such as Dynatrace and Kibana.",
      "Contributed to CI/CD workflows and CMS-backed delivery for fast-moving releases.",
    ],
    tags: ["Next.js", "TypeScript", "Payload CMS", "PostgreSQL", "Dynatrace"],
    image:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=2024&auto=format&fit=crop",
    imageAlt: "Government services portal with structured navigation and service entry points",
    demo: "https://www.tamm.abudhabi/",
    demoLabel: "Public site",
  },
];
