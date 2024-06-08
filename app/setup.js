import { Router } from "../assets/js/ScopeJS.min.js?v=0.0.8";
import { HTTPS } from "./config/constants.js?v=0.0.8";
import { AppController } from "./controllers/AppController.js?v=0.0.8";

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
