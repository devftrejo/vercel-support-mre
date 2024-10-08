import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ["*.pdf", "*.ico"],
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
      },
    },
  },
  server: {
    port: 8080,
  },
});
