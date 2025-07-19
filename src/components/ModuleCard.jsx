import React from "react";

const ModuleCard = ({ module }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold">{module.title}</h2>
      <p className="text-gray-600">{module.description}</p>
    </div>
  );
};

export default ModuleCard;
