import React from "react";
import { Link } from "react-router-dom";

const FilmeCard = ({ filme }) => {
  return (
    <Link to={`/biblioteca/filmes/${filme.id}`} className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-amber-500/10 transition">
      <img src={filme.thumbnail_url} alt={filme.title} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 text-lg font-semibold text-amber-500">{filme.title}</h3>
      <p className="text-sm text-gray-400">{filme.year} - {filme.director}</p>
    </Link>
  );
};

export default FilmeCard;.jsx
