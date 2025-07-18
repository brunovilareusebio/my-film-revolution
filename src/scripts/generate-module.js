const fs = require("fs");
const path = require("path");

// Captura argumentos
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Uso: node scripts/generate-module.js <slug> <Título>");
  process.exit(1);
}

const slug = args[0];
const title = args.slice(1).join(" "); // Permite títulos com espaços

// Caminhos
const moduleDir = path.join(__dirname, "..", "src", "modules", slug);
const assetsDir = path.join(moduleDir, "assets");

// Cria pastas
if (!fs.existsSync(moduleDir)) fs.mkdirSync(moduleDir, { recursive: true });
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir);

// Conteúdo do module.config.js
const configContent = `
export default {
  slug: "${slug}",
  title: "${title}",
  subtitle: "Introdução ao universo cinematográfico com seu smartphone.",
  durationWeeks: 4,
  hours: "6h",
  concept: "Aprenda a gravar com qualidade profissional usando apenas seu celular.",
  theory: "Exploração de luz natural, enquadramento, estabilidade e áudio básico.",
  practice: "Crie um curta-metragem de 2 minutos aplicando os conceitos.",
  lessons: ["Introdução", "Teoria", "Prática", "Projeto Final"],
  project: "Projeto Final: Crie um curta autoral com tudo o que aprendeu.",
  tools: ["FilmoraGo", "CapCut", "DaVinci Resolve"],
  films: ["tangerine-2015", "nightcrawling-2014"]
};
`;

// Conteúdo do index.jsx (módulo principal)
const indexContent = `
import React from "react";

const Module = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">${title}</h2>
    <p>Bem-vindo ao módulo <strong>${title}</strong>! Aplique sua criatividade e siga as aulas para criar algo incrível.</p>
  </div>
);

export default Module;
`;

// Arquivos iniciais
fs.writeFileSync(path.join(moduleDir, "module.config.js"), configContent.trim());
fs.writeFileSync(path.join(moduleDir, "index.jsx"), indexContent.trim());
for (let i = 1; i <= 4; i++) {
  fs.writeFileSync(path.join(moduleDir, `Aula${i}.jsx`), `export default function Aula${i}() { return <div>Aula ${i}</div>; }`);
}

console.log(`✅ Módulo criado com sucesso: ${title} (${slug})`);
