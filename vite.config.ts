import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change build directory, to not conflict with electron builder
  build: {
    outDir: "dist-react",
  },
});
