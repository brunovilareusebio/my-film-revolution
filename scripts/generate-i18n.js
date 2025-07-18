const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "src", "i18n");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const translations = {
  "pt-BR": {
    navigation: {
      modules: "Módulos",
      library: "Biblioteca",
      community: "Comunidade",
      culture: "Cultura",
      about: "Sobre",
      resources: "Recursos",
      manifesto: "Manifesto"
    },
    hero: {
      title: "My Film Revolution",
      subtitle: "Transforme sua realidade em arte. Cada frame conta uma história.",
      cta: "Comece sua jornada agora"
    },
    footer: {
      rights: "© 2025 My Film Revolution. Todos os direitos reservados."
    }
  },
  "en-US": {
    navigation: {
      modules: "Modules",
      library: "Library",
      community: "Community",
      culture: "Culture",
      about: "About",
      resources: "Resources",
      manifesto: "Manifesto"
    },
    hero: {
      title: "My Film Revolution",
      subtitle: "Turn your reality into art. Every frame tells a story.",
      cta: "Start your journey now"
    },
    footer: {
      rights: "© 2025 My Film Revolution. All rights reserved."
    }
  },
  "es-419": {
    navigation: {
      modules: "Módulos",
      library: "Biblioteca",
      community: "Comunidad",
      culture: "Cultura",
      about: "Acerca de",
      resources: "Recursos",
      manifesto: "Manifiesto"
    },
    hero: {
      title: "My Film Revolution",
      subtitle: "Transforma tu realidad en arte. Cada cuadro cuenta una historia.",
      cta: "Comienza tu viaje ahora"
    },
    footer: {
      rights: "© 2025 My Film Revolution. Todos los derechos reservados."
    }
  }
};

for (const [lang, content] of Object.entries(translations)) {
  fs.writeFileSync(
    path.join(dir, `${lang}.json`),
    JSON.stringify(content, null, 2),
    "utf8"
  );
  console.log(`✅ Tradução criada para: ${lang}`);
}

console.log("✅ Todos os arquivos de tradução foram gerados!");
