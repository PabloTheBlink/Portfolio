import { Router } from "../assets/js/ScopeJS.min.js?v=0.0.9";
import { HTTPS } from "./config/constants.js?v=0.0.9";
import { AppController } from "./controllers/AppController.js?v=0.0.9";

export const router = Router(
  [
    {
      path: "/:section",
      controller: AppController,
      alias: "section",
    },
  ],
  {
    useHash: location.protocol !== HTTPS,
    error: {
      controller: AppController,
      alias: "error",
    },
  }
);

router.render(document.querySelector("#content"));
