import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { base_url as base } from "./config.js";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: base, // Set the base URL for the application
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        // Ensure proper asset file names
        assetFileNames: (assetInfo) => {
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
