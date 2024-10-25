import { Router, Component } from "../assets/js/ScopeJS.min.js?v=0.0.19";
import { HTTPS } from "./config/constants.js?v=0.0.19";
import { AppController } from "./controllers/AppController.js?v=0.0.19";
import { RadioController } from "./controllers/RadioController.js?v=0.0.19";

Component({
  tagName: "counter",
  controller: function () {
    this.counter = 0;
    this.up = function () {
      this.counter++;
      this.apply();
    };
    this.down = function () {
      this.counter--;
      this.apply();
    };
  },
  render: function () {
    return /* HTML */ `
      <div class="display-flex justify-content-center align-items-center gap-large padding-small background-color-white color-primary max-width-small margin-auto">
        <button onclick="down()" class="fa fa-arrow-down background-color-primary color-white padding-small"></button>
        <span style="width: 5rem; text-align: center">${this.counter}</span>
        <button onclick="up()" class="fa fa-arrow-up background-color-primary color-white padding-small"></button>
      </div>
    `;
  },
});

export const router = Router(
  [
    {
      path: "/:section",
      controller: AppController,
      alias: "section",
    },
    {
      path: "/radio",
      controller: RadioController,
      alias: "radio",
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
