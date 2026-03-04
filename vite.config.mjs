import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Конфигурация Vite подключает React-плагин и позволяет обрабатывать JSX в файлах .js.
export default defineConfig({
  base: "./",
  plugins: [
    react({
      include: /\.[jt]sx?$/,
    }),
  ],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
