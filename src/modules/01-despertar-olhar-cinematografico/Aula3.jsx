import React from "react";

const Aula3 = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-amber-400 mb-2">
        Aula 3: Fundamentos da Linguagem Visual & Simbólica
      </h2>
      <p className="mb-4">
        Composição visual: quadro, cor, luz, movimento. Símbolos visuais e narrativa. Direção de fotografia como escrita artística.
      </p>

      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <h3 className="font-semibold">Exercício:</h3>
        <p>Crie um curta-metragem de 1 minuto com o tema "Autorretrato Cinematográfico".</p>
      </div>

      <h3 className="font-semibold mb-2">Leituras/PDFs:</h3>
      <ul className="list-disc pl-5 space-y-1 text-blue-400">
        <li>
          <a href="https://academia.edu/9250137/Direção_de_fotografia" target="_blank" rel="noopener noreferrer">
            Direção de Fotografia
          </a>
        </li>
        <li>
          <a href="https://digital.faap.br/hubfs/Freemium%20ebooks/Ebook%20pcine.pdf" target="_blank" rel="noopener noreferrer">
            Ebook Fotografia de Cinema (FAAP)
          </a>
        </li>
        <li>
          <a href="https://scribd.com/presentation/578325495/Fundamentos-Da-Linguagem-Audiovisual-1" target="_blank" rel="noopener noreferrer">
            Slides de Linguagem Audiovisual
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Aula3;
