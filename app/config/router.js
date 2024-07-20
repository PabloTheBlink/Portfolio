import { Router } from "../../assets/js/ScopeJS.min.js?v=0.0.18";
import { HomeController } from "../controllers/HomeController.js?v=0.0.18";
import { ExperienceController } from "../controllers/ExperienceController.js?v=0.0.18";
import { ProjectsController } from "../controllers/ProjectsController.js?v=0.0.18";
import { TechnologiesController } from "../controllers/TechnologiesController.js?v=0.0.18";

export const router = Router(
  [
    {
      path: "/",
      controller: HomeController,
      alias: "home",
    },
    {
      path: "/experience",
      controller: ExperienceController,
      alias: "experience",
    },
    {
      path: "/projects",
      controller: ProjectsController,
      alias: "projects",
    },
    {
      path: "/technologies",
      controller: TechnologiesController,
      alias: "technologies",
    },
  ],
  {
    useHash: false,
    error: {
      controller: HomeController,
      alias: "home",
    },
  }
);
