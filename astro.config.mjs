import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";

export default defineConfig({
  integrations: [
    react(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("ion-"),
        },
      },
      jsx: true,
    }),
  ],
});
