// This is an example schema for your Sanity Studio
// Create these schemas in your Sanity Studio project

export const projectSchema = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
    },
    {
      name: "achievements",
      title: "Key Achievements",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    },
    {
      name: "liveUrl",
      title: "Live Demo URL",
      type: "url",
    },
    {
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};

export const technologySchema = {
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "color",
      title: "Brand Color",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "icon",
    },
  },
};

export const skillSchema = {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "Data Analysis", value: "dataAnalysis" },
          { title: "Tools", value: "tools" },
        ],
      },
    },
    {
      name: "level",
      title: "Skill Level (1-100)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(100),
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Icon name from Lucide React or custom icon",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
  ],
};

export const aboutSchema = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 6,
    },
    {
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "resume",
      title: "Resume PDF",
      type: "file",
      options: {
        accept: ".pdf",
      },
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "GitHub", value: "github" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Twitter", value: "twitter" },
                  { title: "Email", value: "email" },
                  { title: "Website", value: "website" },
                ],
              },
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
            {
              name: "icon",
              title: "Icon",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "platform",
              subtitle: "url",
            },
          },
        },
      ],
    },
  ],
};
