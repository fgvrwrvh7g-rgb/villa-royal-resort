import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // Resolves the "@/*" path alias from tsconfig.json in every environment.
    tsconfigPaths(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart({
      server: {
        entry: "server",
      },
    }),
    react(),
  ],
});

