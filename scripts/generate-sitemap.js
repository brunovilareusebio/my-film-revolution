const fs = require("fs");
const path = require("path");

const routes = [
  "",
  "modulos",
  "modulos/despertar-olhar-cinematografico",
  "modulos/luz-como-linguagem-emocional",
  "modulos/design-grafico-para-audiovisual",
  "biblioteca",
  "comunidade",
  "cultura",
  "sobre",
  "recursos",
  "projeto",
  "manifesto"
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `<url><loc> https://seu-usuario.github.io/my-film-revolution/ ${route}</loc><lastmod>${new Date().toISOString()}</lastmod></url>`).join("\n")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "..", "dist", "sitemap.xml"), sitemap, "utf8");
console.log("✅ Sitemap gerado");
