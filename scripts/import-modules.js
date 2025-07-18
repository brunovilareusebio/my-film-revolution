const fs = require("fs");
const path = require("path");

const importModules = () => {
  const moduleDir = path.join(__dirname, "..", "src", "modules/");
  const dirs = fs.readdirSync(moduleDir).filter(f => fs.statSync(path.join(moduleDir, f)).isDirectory());

  dirs.forEach((dir) => {
    const modulePath = path.join(moduleDir, dir, "module.config.js");
    const module = require(modulePath).default;
    const markdownPath = path.join(moduleDir, dir, "module.md");

    fs.writeFileSync(markdownPath, `
# ${module.title}

## Duração
${module.durationWeeks} semanas (${module.hours})

## Teoria
${module.theory}

## Prática
${module.practice}

## Ferramentas
- ${module.tools.join("\n- ")}
`, "utf8");

    console.log(`✅ Módulo importado: ${module.title}`);
  });
};

importModules();
