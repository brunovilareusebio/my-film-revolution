import React from "react";
import { useParams } from "react-router-dom";
import { filmes } from "../data/filmes";

const FilmeDetailPage = () => {
  const { id } = useParams();
  const filme = filmes.find((f) => f.id === id);

  if (!filme) return <p>Filme não encontrado</p>;

  return (
    <div>
      <div className="relative h-64 md:h-96 bg-black flex items-center justify-center mb-6">
        <h1 className="text-4xl font-bold text-amber-500">{filme.title}</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Detalhes</h2>
          <p>Ano: {filme.year}</p>
          <p>Diretor: {filme.director}</p>
          <p>País: {filme.country}</p>
          <p>Duração: {filme.duration}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Por que assistir?</h2>
          <p>{filme.why_watch}</p>
        </div>
      </div>
    </div>
  );
};

export default FilmeDetailPage;
