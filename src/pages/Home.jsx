import React from "react";
import ModuleCard from "../components/ModuleCard";
import { modulos } from "../data/modulos";

const Home = () => {
  return (
    <section>
      <div className="relative h-[60vh] rounded-xl overflow-hidden mb-10">
        <img src="https://picsum.photos/1600/900 " alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">My Film Revolution</h1>
            <p className="text-lg text-gray-300 mt-2">Transforme sua realidade em arte. Cada frame conta uma história.</p>
            <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold">
              Comece sua jornada agora
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modulos.slice(0, 6).map((modulo) => (
          <ModuleCard key={modulo.id} module={modulo} />
        ))}
      </div>
    </section>
  );
};

export default Home;
