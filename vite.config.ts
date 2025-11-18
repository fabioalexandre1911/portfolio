import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
 // base: "/portfolio/", // ← SEM "f" extra, exatamente como o repositório
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});