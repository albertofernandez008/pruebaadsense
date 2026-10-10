# Autoconsumo Solar Hoy (Astro + GitHub Pages)
1. `npm install && npm run dev` para verlo en local.
2. Cambia `site` en `astro.config.mjs`, el dominio en `public/robots.txt` y los datos entre corchetes en las páginas legales.
3. Sube a un repositorio de GitHub (rama `main`) y en Settings > Pages elige **GitHub Actions**.
4. Dominio propio: añádelo en Settings > Pages, crea `public/CNAME` con él y configura los DNS que indique GitHub.
5. Artículos: crea un `.md` en `src/content/articulos/` con `title`, `description`, `categoria` (guias, precios, ayudas, baterias, equipos, donde) y `fecha`.
6. AdSense: tras la aprobación, crea la variable de repositorio `PUBLIC_ADSENSE_ID` (ca-pub-...), edita `public/ads.txt` y añade los identificadores de unidad `PUBLIC_AD_SLOT_HOME/TOP/BOTTOM` como variables en el workflow. Instala antes un banner de consentimiento de cookies.
