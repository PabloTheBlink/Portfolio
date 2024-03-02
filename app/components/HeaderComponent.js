import { router } from "../config/router.js?v=0.0.1";

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
              <a href="#/" onclick="goTo('/')" class="${router.alias == "home" ? "active" : ""}">
                <span>Inicio</span>
              </a>
            </li>
            <li>
              <a href="#/experience" onclick="goTo('/experience')" class="${router.alias == "experience" ? "active" : ""}">
                <span>Experiencia</span>
              </a>
            </li>
            <li>
              <a href="#/projects" onclick="goTo('/projects')" class="${router.alias == "projects" ? "active" : ""}">
                <span>Proyectos</span>
              </a>
            </li>
            <li>
              <a href="#/technologies" onclick="goTo('/technologies')" class="${router.alias == "technologies" ? "active" : ""}">
                <span>Tecnologías</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    `;
  },
};
