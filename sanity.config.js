import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {defineField, defineType} from 'sanity'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'ct3qn7cy',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: [
      defineType({
        name: 'event',
        title: 'Event',
        type: 'document',
        fields: [
          defineField({
            name: 'name',
            type: 'string',
          }),
        ],
      })
    ],
  },
})
