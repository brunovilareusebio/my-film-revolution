import React from "react";

const FilterChips = ({ filters, selected, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`px-3 py-1 rounded-full text-sm ${
            selected.includes(filter)
              ? "bg-amber-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;
