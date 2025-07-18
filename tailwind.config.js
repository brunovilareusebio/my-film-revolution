
---

## ✅ 66. `src/tailwind.config.js` – Configuração do Tailwind

```js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D4A574",
        secondary: "#2C5F5D",
        dark: "#1A1A1A",
        light: "#FFFFFF"
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        heading: ["Helvetica Neue", "sans-serif"]
      },
      boxShadow: {
        amber: "0 4px 20px rgba(212, 165, 116, 0.2)"
      }
    }
  },
  plugins: []
};
