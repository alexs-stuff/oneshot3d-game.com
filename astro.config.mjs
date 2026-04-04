// @ts-check
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

import { defineConfig } from "astro/config";
//import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),
  build: {
    assets: "oneshot3d-game.com",
    assetsPrefix: "https://cdn.alex427.com/static/",
  },
  image: {
    remotePatterns: [{ hostname: "cdn.alex427.com" }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
 // integrations: [astroI18next()],
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

    "/privacy": "/legal/privacy",
  },
  output: "server",
});
