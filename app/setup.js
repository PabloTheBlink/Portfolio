import { Component } from "https://cdn.devetty.es/ScopeJS/js";
import { Event } from "https://cdn.devetty.es/EventJS/js";
import { AppController } from "./controllers/AppController.js?v=0.0.1";
import { loadCSS } from "./utils/loadCSS.js?v=0.0.1";
import { HeaderComponent } from "./components/HeaderComponent.js?v=0.0.1";

Component(HeaderComponent);

loadCSS("https://cdn.devetty.es/FastUI/css", () => Component(AppController).render(document.body));

setTimeout(() => {
  let touchstartX, touchstartY, touchendX, touchendY;

  document.body.addEventListener(
    "touchstart",
    (event) => {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    },
    false
  );

  document.body.addEventListener(
    "touchend",
    (event) => {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      if (touchendX < touchstartX) {
        Event.emit("swipe", 1);
      }
      if (touchendX > touchstartX) {
        Event.emit("swipe", -1);
      }
    },
    false
  );
}, 0);
