import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-amber-600/20 py-10 text-sm text-gray-400">
      <div className="container mx-auto grid md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-white font-bold mb-3">Sobre o Projeto</h3>
          <ul className="space-y-2">
            <li>Manifesto</li>
            <li>Equipe</li>
            <li>Apoie</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">Currículo</h3>
          <ul className="space-y-2">
            <li>Módulos</li>
            <li>Caminho Iniciante</li>
            <li>Caminho Autoral</li>
            <li>Caminho Comercial</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">Biblioteca</h3>
          <ul className="space-y-2">
            <li>Filmes por Categoria</li>
            <li>Diretores Essenciais</li>
            <li>Leituras & Referências</li>
            <li>Cultura & Festivais</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">Recursos</h3>
          <ul className="space-y-2">
            <li>LUTs</li>
            <li>Apps</li>
            <li>Guias</li>
            <li>Licenças</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">Comunidade</h3>
          <ul className="space-y-2">
            <li>Fórum</li>
            <li>Showcase</li>
            <li>Eventos</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-6 border-t border-gray-800 text-center text-gray-600">
        <p>&copy; 2025 My Film Revolution. Todos os direitos reservados.</p>
        <p className="mt-2">
          <a href="#" className="underline">Política de Privacidade</a> |{" "}
          <a href="#" className="underline">Termos</a> |{" "}
          <a href="#" className="underline">Contato</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
