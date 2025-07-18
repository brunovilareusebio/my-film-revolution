import React from "react";

const Aula1 = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-amber-400 mb-4">Aula 1: História do Cinema & Narrativas Visuais Poéticas</h2>

      <h3 className="font-semibold mb-2">Conteúdo Teórico:</h3>
      <p className="mb-4">
        Breve panorama do cinema (ponto de vista autoral e poético). Importância da narrativa visual e do olhar subjetivo. Cinema brasileiro e mundial: do experimental ao sensível.
      </p>

      <h3 className="font-semibold mb-2">Exercício Prático:</h3>
      <p className="mb-4">
        Início do diário visual (7 dias, captando imagens urbanas e pessoais).
      </p>

      <h3 className="font-semibold mb-2">Referências de Vídeo:</h3>
      <ul className="list-disc ml-6 mb-4">
        <li><a href="https://youtube.com/watch?v=jYt_miF1q10" target="_blank" rel="noreferrer" className="text-amber-400 underline">Trailer "O Som ao Redor"</a></li>
        <li><a href="https://youtube.com/watch?v=EY4Lt1c0Aqs" target="_blank" rel="noreferrer" className="text-amber-400 underline">Cena de "Vitalina Varela"</a></li>
        <li><a href="https://youtube.com/watch?v=EqNfaYpqLEc" target="_blank" rel="noreferrer" className="text-amber-400 underline">Making of "Tangerine"</a></li>
      </ul>

      <h3 className="font-semibold mb-2">Leituras/PDFs:</h3>
      <ul className="list-disc ml-6">
        <li><a href="https://scribd.com/document/440964396/Fundamentos-Da-Linguagem-Audiovisual" target="_blank" rel="noreferrer" className="text-amber-400 underline">Livro didático: Fundamentos da Linguagem Audiovisual</a></li>
        <li><a href="https://diaadiaeducacao.pr.gov.br/portals/cadernospde/pdebusca/producoes_pde/2013/2013_fap_arte_artigo_viviane_paduim.pdf" target="_blank" rel="noreferrer" className="text-amber-400 underline">Fundamentos Básicos da Linguagem Cinematográfica (Viviane Paduim)</a></li>
        <li><a href="https://repositorio.ufsm.br/bitstream/handle/1/18380/Curso_Esp-TICs_Linguagem-Visual.pdf" target="_blank" rel="noreferrer" className="text-amber-400 underline">Linguagem Visual (UFSM)</a></li>
      </ul>
    </section>
  );
};

export default Aula1;
