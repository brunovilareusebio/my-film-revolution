const fs = require("fs");
const path = require("path");

const langs = ["pt-BR", "en-US", "es-419];
const dir = path.join(__dirname, "..", "src", "i18n");

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

langs.forEach((lang) => {
  const content = `{
    "home.title": "Bem-vindo ao My Film Revolution",
    "header.menu.modules": "Módulos",
    "header.menu.library": "Biblioteca",
    "footer.about": "Sobre",
    "footer.contact": "Contato"
  }`;

  fs.writeFileSync(path.join(dir, `${lang}.json`), content, "utf8");
  console.log(`✅ Arquivo de tradução gerado: ${lang}`);
});
console.log("✅ Traduções geradas");
