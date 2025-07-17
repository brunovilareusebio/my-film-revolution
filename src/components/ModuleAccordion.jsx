import React, { useState } from "react";

const ModuleAccordion = ({ aulas }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {aulas.map((aula, idx) => (
        <div key={idx} className="bg-gray-800 p-4 rounded-lg">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full text-left font-semibold text-amber-500"
          >
            {aula.titulo}
          </button>
          {openIndex === idx && <div className="mt-2">{aula.conteudo}</div>}
        </div>
      ))}
    </div>
  );
};

export default ModuleAccordion;
