import React from "react";
import ProgressBar from "./ProgressBar";

const ModuleProgress = ({ progress }) => {
  return (
    <div className="space-y-2">
      <ProgressBar percent={progress} />
      <p className="text-sm text-gray-400">{progress}% concluído</p>
    </div>
  );
};

export default ModuleProgress;
