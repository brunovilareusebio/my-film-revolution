import React from "react";

const ProjetoPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Projeto Final</h1>
      <p className="mb-6">Crie seu primeiro curta autoral ou peça de branded content.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-amber-500">Curta Autoral</h2>
          <p className="mt-2">Guia, roteiro, storyboard, edição e exportação.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-amber-500">Branded Content</h2>
          <p className="mt-2">Crie conteúdo visual para marcas, redes sociais e storytelling comercial.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjetoPage;
