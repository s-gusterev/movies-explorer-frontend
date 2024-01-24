import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as HashRouter } from "react-router-dom";
import App from "./components/App/App";
import "./vendor/fonts/fonts.css";
import "./vendor/normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
