// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  experimental: {
      fonts: [{
          provider: fontProviders.google(),
          name: "DM Sans",
          cssVariable: "--font-dm-sans",
          weights: [ 200, 500, 'bold' ]
      }]
  },

  adapter: cloudflare()
});