import { createBrowserRouter } from "react-router";
import { GridConceptsHomepage } from "./components/grid-concepts-homepage";
import { AiStateReport } from "./components/ai-state-report";
import { GmLawCaseStudy } from "./components/case-study-gm-law";
import { NotFound } from "./components/not-found";

export const router = createBrowserRouter([
  { path: "/", Component: GridConceptsHomepage, errorElement: <NotFound /> },
  { path: "/state-of-ai-report", Component: AiStateReport, errorElement: <NotFound /> },
  { path: "/case-studies/gm-law", Component: GmLawCaseStudy, errorElement: <NotFound /> },
  { path: "*", Component: NotFound },
]);
