/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SANITY_PROJECT_ID: string;
  readonly VITE_SANITY_DATASET: string;
  // add more if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
