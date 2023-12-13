import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootMan = ReactDOM.createRoot(document.getElementById("root"));

rootMan.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
