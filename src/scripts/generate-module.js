const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Uso: node generate-module.js <slug> <título>");
  process.exit(1);
}

const slug = args[0];
const title = args[1];
const moduleDir = path.join(__dirname, "..", "src", "modules", slug);
const assetsDir = path.join(moduleDir, "assets");

if (!fs.existsSync(moduleDir)) fs.mkdirSync(moduleDir);
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir);

const config = `
export default {
  slug: "${slug}",
  title: "${title}",
  durationWeeks: 5,
  hours: "8h",
  lessons: ["Introdução", "Teoria", "Prática", "Projeto Final"],
  project: "Projeto Final: Crie algo com o que aprendeu",
  tools: ["smartphone", "app-rec", "editor-video"],
  films: ["tangerine-2015", "nightcrawling-2014"]
};
`;

fs.writeFileSync(path.join(moduleDir, "module.config.js"), config);
console.log(`✅ Módulo criado: ${title}`);
