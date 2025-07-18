import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useTranslation } from "../hooks/useTranslation";  // importa o hook

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, lang, setLang } = useTranslation();  // pega funções e estado da tradução

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-amber-600/20 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-amber-500">{t("hero.title")}</h1>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-amber-400">{t("navigation.home")}</Link>
          <Link to="/modulos" className="hover:text-amber-400">{t("navigation.modules")}</Link>
          <Link to="/biblioteca" className="hover:text-amber-400">{t("navigation.library")}</Link>
          <Link to="/comunidade" className="hover:text-amber-400">{t("navigation.community")}</Link>
          <Link to="/cultura" className="hover:text-amber-400">{t("navigation.culture")}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-black border border-amber-600 text-amber-500 px-2 py-1 rounded"
          >
            <option value="pt-BR">PT</option>
            <option value="en-US">EN</option>
            <option value="es-419">ES</option>
          </select>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-amber-500">☰</button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black backdrop-blur-md p-4 space-y-3 border-t border-amber-600/20">
          <Link to="/" className="block py-2 px-3 rounded hover:bg-amber-600/10">{t("navigation.home")}</Link>
          <Link to="/modulos" className="block py-2 px-3 rounded hover:bg-amber-600/10">{t("navigation.modules")}</Link>
          <Link to="/biblioteca" className="block py-2 px-3 rounded hover:bg-amber-600/10">{t("navigation.library")}</Link>
          <Link to="/comunidade" className="block py-2 px-3 rounded hover:bg-amber-600/10">{t("navigation.community")}</Link>
          <Link to="/cultura" className="block py-2 px-3 rounded hover:bg-amber-600/10">{t("navigation.culture")}</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
