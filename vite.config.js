import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Clever Quotes: Random quotes to spice your day... Everyday!",
        short_name: "Clever Quotes",
        start_url: "/",
        display: "standalone",
        background_color: "#8EC5FC",
        lang: "de",
        scope: "/",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#3367D6",
      },
    }),
  ],
});
