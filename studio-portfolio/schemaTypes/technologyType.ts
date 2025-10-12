import { defineField, defineType } from 'sanity'

export const technologyType = defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload the technology icon/logo (SVG preferred)',
    }),
    defineField({
      name: 'color',
      title: 'Brand Color',
      type: 'string',
      description: 'Hex color code for the technology brand',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Database', value: 'database'},
          {title: 'Tool', value: 'tool'},
          {title: 'Language', value: 'language'},
          {title: 'Framework', value: 'framework'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'icon',
      subtitle: 'category',
    },
    prepare(selection) {
      const {title, media, subtitle} = selection
      return {
        title,
        media,
        subtitle: `${subtitle} • ${title}`,
      }
    },
  },
})