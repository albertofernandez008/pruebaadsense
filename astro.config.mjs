import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Cambia por tu dominio real
export default defineConfig({ site: 'https://autoconsumosolarhoy.es', integrations: [sitemap()], trailingSlash: 'always' });
