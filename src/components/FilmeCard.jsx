// src/components/FilmeCard.jsx
import React from "react";

const FilmeCard = ({ filme }) => {
  if (!filme) return null;

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
      <div className="aspect-video w-full overflow-hidden rounded-md bg-black/10">
        {filme.thumbnail && (
            <img
              src={filme.thumbnail}
              alt={filme.titulo}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{filme.titulo}</h3>
      {filme.ano && (
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {filme.ano} • {filme.pais || "Desconhecido"}
        </p>
      )}
      {filme.sinopse && (
        <p className="text-sm text-gray-600 line-clamp-3">
          {filme.sinopse}
        </p>
      )}
      <div className="mt-auto">
        <button
          className="text-sm font-medium text-blue-600 hover:underline"
          onClick={() => console.log("Abrir filme:", filme.slug)}
        >
          Ver detalhes
        </button>
      </div>
    </div>
  );
};

export default FilmeCard;
