import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

import { globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-plugin-prettier";
export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { prettier, js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  tseslint.configs.recommended,
]);
