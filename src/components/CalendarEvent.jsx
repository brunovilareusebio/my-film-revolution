import React from "react";

const CalendarEvent = ({ evento }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-amber-500">{evento.nome}</h3>
      <p className="mt-2 text-sm">{evento.data} – {evento.tipo}</p>
    </div>
  );
};

export default CalendarEvent;
