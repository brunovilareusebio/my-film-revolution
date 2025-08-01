const fs = require("fs");
const path = require("path");

const filmes = [
  {
    id: "tangerine-2015",
    title: "Tangerine",
    original_title: "Tangerine",
    year: 2015,
    director: "Sean Baker",
    country: "EUA",
    duration: "88 min",
    production_context: "Mobile / iPhone",
    why_watch: "Um estudo visual e humano feito com iPhone.",
    relevance_to_modules: ["m1", "m2", "m3", "m10", "m12"],
    themes: ["amizade", "cidade", "cor urbana"],
    technical_focus: ["smartphone", "luz natural", "cor saturada"],
    thumbnail_url: "https://picsum.photos/300/450?random=1"
  },
  {
    id: "in-the-mood-for-love",
    title: "In the Mood for Love",
    original_title: "花样年华",
    year: 2000,
    director: "Wong Kar-wai",
    country: "Hong Kong",
    duration: "98 min",
    production_context: "Autoral",
    why_watch: "Masterclass em cor, luz e paletas emocionais.",
    relevance_to_modules: ["m2", "m8", "m13"],
    themes: ["emoção", "cor", "intimidade"],
    technical_focus: ["neon", "câmera lenta", "cor saturada"],
    thumbnail_url: " https://picsum.photos/300/450?random=2"
  }
];

fs.writeFileSync(path.join(__dirname, "..", "src", "data", "filmes.js"), `export const filmes = ${JSON.stringify(filmes, null, 2)};`, "utf8");
console.log("✅ Filmes gerados");
