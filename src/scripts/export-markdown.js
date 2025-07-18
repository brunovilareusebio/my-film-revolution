const fs = require("fs");
const path = require("path");

const exportModuleToMarkdown = (module) => {
  const content = `
# ${module.title}

## Duração
${module.durationWeeks} semanas (${module.hours})

## Teoria
${module.theory}

## Prática
${module.practice}

## Ferramentas
- ${module.tools.join("\n- ")}

## Filmes Recomendados
- ${module.films.join("\n- ")}
`;

  fs.writeFileSync(path.join(__dirname, "..", "src", "modules", module.slug, "module.md"), content, "utf8");
  console.log(`✅ Módulo exportado: ${module.title}`);
};

export default exportModuleToMarkdown;
