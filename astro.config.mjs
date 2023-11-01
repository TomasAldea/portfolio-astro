import { defineConfig,passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://tomasaldea.github.io',
    base: '/portfolio-astro',
    image: {
        service: passthroughImageService(),
    },
});
