// @ts-check
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone"
  }),
   build: {
    assets: "",
    assetsPrefix: 'https://cdn.alex427.com/static/oneshot3d-game.com',
  },
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
  redirects: {
    "/play/game": "/game",
    "/game/play": "/game",
    "/play": "/game",

    "/donations": "/donate",
    "/donation": "/donate",

    "/docs": "https://docs.oneshot3d-game.com",

    "/terms": "/legal/terms",
    "/tos": "/legal/terms",
    "/legal/tos": "/legal/terms",

    "/privacy": "/legal/privacy"
    
  },
  output: "server"
});