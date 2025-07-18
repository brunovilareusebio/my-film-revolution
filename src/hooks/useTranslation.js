import { useState, useCallback, useMemo, useEffect, createContext, useContext } from "react";

// Importa os JSONs gerados
import ptBR from "../i18n/pt-BR.json";
import enUS from "../i18n/en-US.json";
import es419 from "../i18n/es-419.json";

// Dicionário de idiomas disponíveis
const dictionaries = {
  "pt-BR": ptBR,
  "en-US": enUS,
  "es-419": es419,
};

export const AVAILABLE_LANGS = [
  { code: "pt-BR", label: "Português" },
  { code: "en-US", label: "English" },
  { code: "es-419", label: "Español" },
];

// Key usada no localStorage
const STORAGE_KEY = "mfr-lang";

// Util: navega em objeto aninhado via path "hero.title"
function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

// Interpolação simples: t('hero.subtitle', {nome:'Bruno'})
function interpolate(str, vars = {}) {
  if (typeof str !== "string") return str;
  return str.replace(/\{\{(\w+)\}\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : `{{${k}}}`));
}

// Cria contexto
const I18nContext = createContext({
  lang: "pt-BR",
  t: (key, vars) => key,
  setLang: () => {},
  translations: ptBR,
});

// Provider
export function I18nProvider({ children, defaultLang = "pt-BR" }) {
  // Detecta idioma salvo ou do navegador
  const initialLang = (() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (stored && dictionaries[stored]) return stored;
    const nav = typeof navigator !== "undefined" ? navigator.language : defaultLang;
    // normaliza navegador (pt-BR / pt / en / es)
    const match =
      Object.keys(dictionaries).find((code) => code.toLowerCase() === nav.toLowerCase()) ||
      (nav.startsWith("pt") ? "pt-BR" : nav.startsWith("es") ? "es-419" : "en-US");
    return match || defaultLang;
  })();

  const [lang, setLangState] = useState(initialLang);

  const setLang = useCallback((newLang) => {
    if (!dictionaries[newLang]) return;
    setLangState(newLang);
    try {
      window.localStorage.setItem(STORAGE_KEY, newLang);
    } catch (_) {
      /* ignore */
    }
  }, []);

  const translations = useMemo(() => dictionaries[lang] || dictionaries["pt-BR"], [lang]);

  const t = useCallback(
    (key, vars) => {
      const val = getPath(translations, key);
      if (val === undefined) {
        // fallback para PT-BR se chave ausente
        const fb = getPath(dictionaries["pt-BR"], key);
        return interpolate(fb !== undefined ? fb : key, vars);
      }
      return interpolate(val, vars);
    },
    [translations]
  );

  // Atualiza <html lang="">
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", lang);
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t, translations }), [lang, setLang, t, translations]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// Hook de uso
export function useTranslation() {
  return useContext(I18nContext);
}

