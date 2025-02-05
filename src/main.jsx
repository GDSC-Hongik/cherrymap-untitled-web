import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import GlobalStyle from "./utils/GlobalStyle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Global styles={GlobalStyle} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
