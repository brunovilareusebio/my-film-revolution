import React from "react";
import { Link } from "react-router-dom";

const ComunidadePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Comunidade</h1>
      <p className="mb-6">Fórum, eventos, showcases, networking.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-amber-500">Fórum</h2>
          <p className="mt-2">Discuta técnicas, projetos e inspirações.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-amber-500">Showcase de Alunos</h2>
          <p className="mt-2">Veja projetos de outros cineastas e compartilhe o seu.</p>
        </div>
      </div>
    </div>
  );
};

export default ComunidadePage;
