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
  project: "Projeto Final: Crie algo com o que aprendeu.",
  tools: ["smartphone", "app-rec", "editor-video"],
  films: ["tangerine-2015", "nightcrawling-2014"]
};
`;

fs.writeFileSync(path.join(moduleDir, "module.config.js"), config);

const index = `
import React from "react";
import moduleConfig from "./module.config";
import Aula1 from "./Aula1";
import Aula2 from "./Aula2";
import Aula3 from "./Aula3";
import Aula4 from "./Aula4";

const ModulePage = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-amber-500 mb-6">{moduleConfig.title}</h1>
      <p className="mb-6">Duração: {moduleConfig.durationWeeks} semanas ({moduleConfig.hours})</p>
      <div className="space-y-10">
        <Aula1 />
        <Aula2 />
        <Aula3 />
        <Aula4 />
      </div>
    </div>
  );
};

export default ModulePage;
