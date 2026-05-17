import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// Sanity Studio resolves this dependency within the nested studio workspace.
// fallow-ignore-next-line unresolved-import
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: '2wmvbh5j',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
