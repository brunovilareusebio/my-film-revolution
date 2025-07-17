import React from "react";

const RecursosPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Recursos Educacionais</h1>
      <p className="mb-6">Downloads, apps e ferramentas para seu aprendizado.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-amber-500">LUTs Gratuitas</h2>
          <p className="mt-2">Coleção de LUTs para celular e edição profissional.</p>
          <a href="/downloads/luts.zip" className="text-amber-400 underline">Baixar pacote</a>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold text-amber-500">Guias Técnicos</h2>
          <p className="mt-2">PDFs com teoria, prática e exercícios técnicos.</p>
          <a href="/downloads/guias.zip" className="text-amber-400 underline">Baixar guias</a>
        </div>
      </div>
    </div>
  );
};

export default RecursosPage;
