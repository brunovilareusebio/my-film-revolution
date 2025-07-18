import React from "react";

const Aula2 = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-amber-400 mb-2">
        Aula 2: Teoria da Autoria Cinematográfica & Cinema de Autor
      </h2>
      <p className="mb-4">
        O que é autoria? Diferenças entre cinema industrial e cinema autoral. Grandes autores: olhares e processos.
      </p>

      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <h3 className="font-semibold">Exercício:</h3>
        <p>Análise crítica de 2 filmes autorais: como a visão pessoal do diretor se manifesta na obra?</p>
      </div>

      <h3 className="font-semibold mb-2">Leituras/PDFs:</h3>
      <ul className="list-disc pl-5 space-y-1 text-blue-400">
        <li>
          <a href="https://periodicos.unespar.edu.br/index.php/mosaico/article/view/45/pdf" target="_blank" rel="noopener noreferrer">
            A Noção de Autoria no Cinema
          </a>
        </li>
        <li>
          <a href="https://relici.org.br/index.php/relici/article/view/348/396" target="_blank" rel="noopener noreferrer">
            Teoria dos Cineastas
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Aula2;
