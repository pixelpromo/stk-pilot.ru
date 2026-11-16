// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: https://pixelpromo.github.io/stk-pilot.ru/
// Для собственного домена (stk-pilot.ru): поменяйте site на 'https://stk-pilot.ru'
// и base на '/', затем добавьте файл CNAME с доменом.
const site = process.env.SITE || 'https://pixelpromo.github.io';
const base = process.env.BASE || '/stk-pilot.ru/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  trailingSlash: 'always',
  compressHTML: true,
});
