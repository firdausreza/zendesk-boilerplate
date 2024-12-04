import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "../assets", // Zendesk-compatible assets folder
    assetsDir: "", // Avoid subfolders for assets
    rollupOptions: {
      input: "./src/main.js",
    },
  },
});
