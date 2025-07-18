import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ModuloPage from "./pages/ModuloPage";
import BibliotecaPage from "./pages/BibliotecaPage";
import FilmeDetailPage from "./pages/FilmeDetailPage";
import ComunidadePage from "./pages/ComunidadePage";
import CulturaPage from "./pages/CulturaPage";
import SobrePage from "./pages/SobrePage";
import RecursosPage from "./pages/RecursosPage";
import ProjetoPage from "./pages/ProjetoPage";
import ManifestoPage from "./pages/ManifestoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-dark text-light min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modulos" element={<ModuloPage />} />
          <Route path="/modulos/:slug" element={<ModuloPage />} />
          <Route path="/biblioteca" element={<BibliotecaPage />} />
          <Route path="/biblioteca/filmes/:id" element={<FilmeDetailPage />} />
          <Route path="/comunidade" element={<ComunidadePage />} />
          <Route path="/cultura" element={<CulturaPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/recursos" element={<RecursosPage />} />
          <Route path="/projeto/:id" element={<ProjetoPage />} />
          <Route path="/manifesto" element={<ManifestoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
