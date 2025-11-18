import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  //base: "/portfolio/",  // COMENTE OU APAGUE ESTA LINHA (essencial para Vercel)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});