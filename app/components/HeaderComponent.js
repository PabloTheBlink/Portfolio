import { router } from "../config/router.js?v=0.0.3";

export const HeaderComponent = {
  tagName: "app-header",
  controller: function () {
    router.listen((params) => {
      this.apply();
    });
    this.goTo = function (path) {
      router.navigate(path);
      this.apply();
    };
  },
  render: function () {
    return /* HTML */ `
      <header class="header">
        <div class="container">
          <ul>
            <li>
              <a style="display: flex; align-items: center; gap: 1rem" onclick="goTo('/')" class="${router.alias == "home" ? "active" : ""}">
                ${router.alias && router.alias != "home" ? /* HTML */ ` <img style="width: 2rem; height: 2rem; border-radius: 100%" src="https://pbs.twimg.com/profile_images/1740971921208995840/fq8nN2B3_400x400.jpg" id="img_profile" /> ` : ``}
                <span>Inicio</span>
              </a>
            </li>
            <li>
              <a onclick="goTo('/experience')" class="${router.alias == "experience" ? "active" : ""}">
                <span>Experiencia</span>
              </a>
            </li>
            <li>
              <a onclick="goTo('/projects')" class="${router.alias == "projects" ? "active" : ""}">
                <span>Proyectos</span>
              </a>
            </li>
            <li>
              <a onclick="goTo('/technologies')" class="${router.alias == "technologies" ? "active" : ""}">
                <span>Tecnologías</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    `;
  },
};
