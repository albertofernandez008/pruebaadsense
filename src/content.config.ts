import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: z.object({
    title: z.string(), description: z.string(),
    categoria: z.enum(['guias','precios','ayudas','baterias','equipos','donde']),
    fecha: z.coerce.date(), actualizado: z.coerce.date().optional(),
  }),
});
export const collections = { articulos };
