// @packages
import { defineConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from "@vitejs/plugin-react-swc";
import path from "path";

const viteConfig = defineConfig({
  plugins: [react()],
  /* Absolute path*/
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@i18n": path.resolve(__dirname, "./src/i18n")
    }
  }
})

const vitestConfig = defineVitestConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setup.js"
  }
});

export default mergeConfig(viteConfig, vitestConfig);
