import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev + 1) % items.length);

  return (
    <div className="relative overflow-hidden">
      <div className="flex" style={{ transform: `translateX(-${index * 100}%)` }}>
        {items.map((item, i) => (
          <div key={i} className="w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-amber-500">❮</button>
      <button onClick={next} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-amber-500">❯</button>
    </div>
  );
};

export default Carousel;
