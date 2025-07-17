import React from "react";

const CalendarioPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Calendário Cultural</h1>
      <p className="mb-6">Eventos, festivais e inscrições.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-2xl font-bold text-amber-500">Festival de Veneza</h2>
          <p className="mt-2">Inscrições até 15/04</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-2xl font-bold text-amber-500">São Paulo Cine Club</h2>
          <p className="mt-2">Próximo filme: Tangerine</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarioPage;
