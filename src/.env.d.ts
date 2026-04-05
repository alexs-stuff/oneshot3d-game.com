interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "astro-i18next" {
  export * from "astro-i18next/dist/types/index";
}
