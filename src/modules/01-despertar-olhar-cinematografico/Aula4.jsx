import React from "react";

const Aula4 = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-amber-400 mb-2">
        Aula 4: Análise de Filmes Autorais e Construção do Olhar
      </h2>
      <p className="mb-4">
        Estudo detalhado dos filmes referência do módulo. Como a direção de fotografia revela autoria. Construção de identidade artística.
      </p>

      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <h3 className="font-semibold">Exercício:</h3>
        <p>
          Analise 5 filmes autorais (com foco em direção de fotografia e linguagem visual), incluindo:
          <br />• O Som ao Redor
          <br />• Vitalina Varela
          <br />• Tangerine
        </p>
      </div>

      <h3 className="font-semibold mb-2">Referências Extras:</h3>
      <ul className="list-disc pl-5 space-y-1 text-blue-400">
        <li>
          <a href="https://www.youtube.com/results?search_query=cinematography+visual+analysis" target="_blank" rel="noopener noreferrer">
            Videoessay sobre direção de fotografia autoral
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/show/4xN2U7Y5f1kZ8jQwJhJwYH" target="_blank" rel="noopener noreferrer">
            Podcast sobre cinema autoral brasileiro
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Aula4;
