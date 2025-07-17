import React from "react";
import FilmeCard from "../components/FilmeCard";
import { filmes } from "../data/filmes";

const BibliotecaPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Biblioteca Viva</h1>
      <p className="mb-6">Filmes, diretores, leituras, estudos de marca.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {filmes.map((filme) => (
          <FilmeCard key={filme.id} filme={filme} />
        ))}
      </div>
    </div>
  );
};

export default BibliotecaPage;
