import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sixtebansito.github.io',
  base: '/estebanportfolio', 
  vite: {
    plugins: [tailwindcss()]
  }
});
