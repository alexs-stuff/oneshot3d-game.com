// @ts-check
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone"
  }),
  
  vite: {
    plugins: [
      tailwindcss()],
  },
  output: "server"
});