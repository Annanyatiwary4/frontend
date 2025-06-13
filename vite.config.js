import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "motion";
            if (id.includes("@radix-ui")) return "radix";
            if (id.includes("lucide-react") || id.includes("@tabler")) return "icons";
            if (id.includes("react-hook-form") || id.includes("zod")) return "form";
            return "vendor";
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      "framer-motion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-tooltip",
      "lucide-react",
    ],
  },
});
