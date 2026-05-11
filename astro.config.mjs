import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://neverjoskiy.github.io',
  base: '/eleganto-site',
  output: 'static',
});
