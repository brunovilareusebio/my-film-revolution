import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      mode: "production",
      devOptions: { enabled: false },
      workbox: {
        runtimeCaching: [
          { urlPattern: /.*\.js$/, handler: "StaleWhileRevalidate" },
          { urlPattern: /.*\.css$/, handler: "CacheFirst" },
          { urlPattern: /.*\.(png|jpg|jpeg|svg|ico)$/, handler: "CacheFirst" }
        ]
      },
      manifest: {
        name: "My Film Revolution",
        short_name: "FilmRev",
        description: "Aprenda a fazer cinema com smartphone",
        theme_color: "#D4A574",
        icons: [
          { src: "icons/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icons/icon-512.png", sizes: "512x512", type: "image/png" }
        ]
      }
    })
  ],
  base: "/my-film-revolution/", // 🔥 IMPORTANTE PARA DEPLOY NO GITHUB
  build: {
    outDir: "dist"
  }
});
