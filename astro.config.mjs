import { defineConfig, passthroughImageService } from "astro/config";
import sanityIntegration from "@sanity/astro";
import react from "@astrojs/react";

//https://www.sanity.io/plugins/sanity-astro
// https://astro.build/config
export default defineConfig({
  site: "https://tomasaldea.github.io",
  //base: "/portfolio-astro",
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    sanityIntegration({
      projectId: "ct3qn7cy",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: true,
      studioBasePath: "/admin",
    }),
    react(),
  ],
  
});
