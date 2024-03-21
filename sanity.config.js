import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import author from "./src/schemaTypes/author";
import blockContent from "./src/schemaTypes/blockContent";
import category from "./src/schemaTypes/category";
import post from "./src/schemaTypes/post";

// https://www.sanity.io/guides/sanity-astro-blog
// https://www.sanity.io/plugins/sanity-astro

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'ct3qn7cy',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: [
      author,
      blockContent,
      category,
      post
    ],
  },
})