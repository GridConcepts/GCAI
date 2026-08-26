import { createBrowserRouter } from "react-router";
import { GridConceptsHomepage } from "./components/grid-concepts-homepage";
import { AiStateReport } from "./components/ai-state-report";
import { NotFound } from "./components/not-found";

export const router = createBrowserRouter([
  { path: "/", Component: GridConceptsHomepage, errorElement: <NotFound /> },
  { path: "/state-of-ai-report", Component: AiStateReport, errorElement: <NotFound /> },
  { path: "*", Component: NotFound },
]);
