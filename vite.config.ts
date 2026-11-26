import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { devContactApiPlugin } from "./vite-plugin-contact-api";
import { devHtmlRouteMetaPlugin } from "./vite-plugin-route-meta";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    devContactApiPlugin(),
    devHtmlRouteMetaPlugin(),
  ],
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-query",
      "lucide-react",
      "clsx",
      "tailwind-merge",
    ],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("lucide-react")) {
              return "icons";
            }
            if (id.includes("react-dom") || id.includes("react/") || id.includes("scheduler")) {
              return "vendor-react";
            }
            if (id.includes("@tanstack")) {
              return "vendor-tanstack";
            }
            if (id.includes("@radix-ui")) {
              return "vendor-radix";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
