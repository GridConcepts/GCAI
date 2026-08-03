import { createBrowserRouter } from "react-router";
import { GridConceptsHomepage } from "./components/grid-concepts-homepage";
import { AiStateReport } from "./components/ai-state-report";

export const router = createBrowserRouter([
  { path: "/", Component: GridConceptsHomepage },
  { path: "/state-of-ai-report", Component: AiStateReport },
]);
