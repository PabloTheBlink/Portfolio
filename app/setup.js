import { Router } from "../assets/js/ScopeJS.min.js";
import { AppController } from "./controllers/AppController.js?v=0.0.7";

export const router = Router(
  [
    {
      path: "/:section",
      controller: AppController,
      alias: "section",
    },
  ],
  {}
);

router.render(document.querySelector("#content"));
