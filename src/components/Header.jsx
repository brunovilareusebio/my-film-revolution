import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-amber-600/20 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-amber-500">My Film Revolution</h1>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <Link to="/modulos" className="hover:text-amber-400">Módulos</Link>
          <Link to="/biblioteca" className="hover:text-amber-400">Biblioteca</Link>
          <Link to="/comunidade" className="hover:text-amber-400">Comunidade</Link>
          <Link to="/cultura" className="hover:text-amber-400">Cultura</Link>
        </nav>

        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-amber-500">☰</button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black backdrop-blur-md p-4 space-y-3 border-t border-amber-600/20">
          <Link to="/" className="block py-2 px-3 rounded hover:bg-amber-600/10">Home</Link>
          <Link to="/modulos" className="block py-2 px-3 rounded hover:bg-amber-600/10">Módulos</Link>
          <Link to="/biblioteca" className="block py-2 px-3 rounded hover:bg-amber-600/10">Biblioteca</Link>
          <Link to="/comunidade" className="block py-2 px-3 rounded hover:bg-amber-600/10">Comunidade</Link>
          <Link to="/cultura" className="block py-2 px-3 rounded hover:bg-amber-600/10">Cultura</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
