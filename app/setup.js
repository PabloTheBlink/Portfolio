import { Router, Component } from "https://cdn.devetty.es/ScopeJS/js";
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
