import React from "react";

const TrilhasPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Trilhas Temáticas</h1>
      <p className="mb-6">Explore trilhas por região, tema e estética.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-2xl font-bold text-amber-500">Cinema Brasileiro</h2>
          <p className="mt-2">Filmes, diretores e estética do cinema nacional.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-2xl font-bold text-amber-500">Cidades e Corpos</h2>
          <p className="mt-2">Urbano, intimidade, som de ambiente.</p>
        </div>
      </div>
    </div>
  );
};

export default TrilhasPage;
