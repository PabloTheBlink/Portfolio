import { router } from "../config/router.js?v=0.0.2";
import startParticles from "../utils/startParticles.js?v=0.0.2";

export const AppController = {
  render: function () {
    return /* HTML */ `
      <div class="app" id="app">
        <main class="main">
          <app-header></app-header>
          <div class="content">
            <div class="container"></div>
          </div>
        </main>
      </div>
    `;
  },
  postRender: function () {
    startParticles();
    router.render(document.querySelector(".app .main .content .container"));
  },
};
