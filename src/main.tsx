// @packages
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// @app
import "@i18n/i18n";
import "@styles/global.scss";

// @own
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
