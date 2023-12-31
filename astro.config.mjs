import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    imageService: true,
  }),
});