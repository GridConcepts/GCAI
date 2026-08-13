import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { captureClickIds } from "./lib/click-ids";
import "./styles/index.css";

captureClickIds();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
