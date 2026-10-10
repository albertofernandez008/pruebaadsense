import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Cambia por tu dominio real
export default defineConfig({ site: 'https://albertofernandez008/pruebaadsense.com', integrations: [sitemap()], trailingSlash: 'always' });
