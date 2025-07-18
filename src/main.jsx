import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nProvider } from "./hooks/useTranslation";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/my-film-revolution/">
    <I18nProvider defaultLang="pt-BR">
      <App />
    </I18nProvider>
  </BrowserRouter>
);
