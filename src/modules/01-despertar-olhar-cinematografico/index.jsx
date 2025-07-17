import React from "react";
import moduleConfig from "./module.config";
import Aula1 from "./Aula1";
import Aula2 from "./Aula2";
import Aula3 from "./Aula3";
import Aula4 from "./Aula4";

const ModulePage = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-amber-500 mb-6">{moduleConfig.title}</h1>
      <p className="mb-6">Duração: {moduleConfig.durationWeeks} semanas ({moduleConfig.hours})</p>
      <div className="space-y-10">
        <Aula1 />
        <Aula2 />
        <Aula3 />
        <Aula4 />
      </div>
    </div>
  );
};

export default ModulePage;
