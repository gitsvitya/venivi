import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

// Точка входа создает корневой React-контейнер и рендерит приложение в строгом режиме.
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
