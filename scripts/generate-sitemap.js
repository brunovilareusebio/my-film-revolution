// scripts/generate-sitemap.js
const fs = require("fs");
const path = require("path");
const { pages } = require("./pages-list");

// Garante que a pasta dist existe
const distPath = path.resolve(__dirname, "../dist");
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>https://brunovilareusebio.github.io/my-film-revolution${page.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `
    )
    .join("")
    .trim()}
</urlset>
`;

// Escreve o sitemap.xml
fs.writeFileSync(path.resolve(distPath, "sitemap.xml"), sitemap, "utf8");

console.log("✅ Sitemap gerado com sucesso em dist/sitemap.xml");
