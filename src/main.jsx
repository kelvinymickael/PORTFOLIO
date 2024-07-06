import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeContextProvider } from "./context/ThemeContext";
import { ShowMenuProvider } from "./context/ShowMenuContext.jsx";
//import { LanguageContextProvider } from "./context/LanguageContext.jsx";

import "./lib/i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
      <ShowMenuProvider>
        <App />
      </ShowMenuProvider>
  </ThemeContextProvider>
);
