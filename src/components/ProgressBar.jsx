import React from "react";

const ProgressBar = ({ percent }) => {
  return (
    <div className="w-full bg-gray-700 h-2.5 rounded-full">
      <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
