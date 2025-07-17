import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ModuloPage = () => {
  const { slug } = useParams();
  const [module, setModule] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../modules/${slug}/module.config.js`)
      .then((mod) => setModule(mod.default));
    import(`../modules/${slug}/index.jsx`)
      .then((mod) => setContent(React.createElement(mod.default)));
  }, [slug]);

  if (!module) return <p>Carregando módulo...</p>;

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-amber-500">{module.title}</h1>
      <p className="text-gray-400">{module.subtitle}</p>
      <div className="mt-6">{content}</div>
    </div>
  );
};

export default ModuloPage;
