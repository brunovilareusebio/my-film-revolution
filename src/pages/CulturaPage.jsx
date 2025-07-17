import React from "react";
import { Link } from "react-router-dom";

const CulturaPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Cultura & Festivais</h1>
      <p className="mb-6">Festivais internacionais, clube de exibição, trilhas temáticas.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-amber-500">Clube de Exibição</h2>
          <p className="mt-2">Todo mês: 1 filme autoral, 1 mobile, 1 curta brasileiro, 1 experimental</p>
          <Link to="/cultura/exibicao" className="text-amber-400 underline">Ver filmes do mês</Link>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-amber-500">Calendário Cultural</h2>
          <p className="mt-2">Festivais, eventos, inscrições.</p>
          <Link to="/calendario" className="text-amber-400 underline">Ver eventos</Link>
        </div>
      </div>
    </div>
  );
};

export default CulturaPage;
