import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        placeholder="Buscar filmes, módulos, temas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
      <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</button>
    </form>
  );
};

export default SearchBar;
