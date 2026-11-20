import { createBrowserRouter } from "react-router";
import { GridConceptsHomepage } from "./components/grid-concepts-homepage";
import { AiStateReport } from "./components/ai-state-report";
import { GmLawCaseStudy } from "./components/case-study-gm-law";
import { MetropoleCaseStudy } from "./components/case-study-metropole";
import { OrthodonticsAustraliaCaseStudy } from "./components/case-study-orthodontics-australia";
import { NotFound } from "./components/not-found";

export const router = createBrowserRouter([
  { path: "/", Component: GridConceptsHomepage, errorElement: <NotFound /> },
  { path: "/state-of-ai-report", Component: AiStateReport, errorElement: <NotFound /> },
  { path: "/case-studies/gm-law", Component: GmLawCaseStudy, errorElement: <NotFound /> },
  { path: "/case-studies/metropole", Component: MetropoleCaseStudy, errorElement: <NotFound /> },
  { path: "/case-studies/orthodontics-australia", Component: OrthodonticsAustraliaCaseStudy, errorElement: <NotFound /> },
  { path: "*", Component: NotFound },
]);
