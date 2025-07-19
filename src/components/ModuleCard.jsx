import React from "react";
import { Link } from "react-router-dom";

const ModuleCard = ({ module }) => {
  return (
    <Link to={`/modulos/${module.id}`} className="bg-gray-800 p-6 rounded-lg hover:shadow-amber-500/10 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-amber-500">{module.title}</h3>
      <p className="text-sm text-gray-400">{module.subtitle}</p>
    </Link>
  );
};

export default ModuleCard;
