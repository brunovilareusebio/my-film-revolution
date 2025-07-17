import React from "react";

const BadgeCard = ({ badge }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-center">
      <div className="w-16 h-16 mx-auto bg-amber-600 rounded-full flex items-center justify-center mb-2">
        {badge.icon}
      </div>
      <h3 className="text-lg font-semibold">{badge.title}</h3>
      <p className="text-sm text-gray-400">{badge.description}</p>
    </div>
  );
};

export default BadgeCard;
