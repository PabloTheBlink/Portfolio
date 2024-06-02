import { HOME, EXPERIENCE, PROJECTS, TECHNOLOGIES } from "../config/constants.js?v=0.0.5";
import { router } from "../setup.js?v=0.0.5";

export const AppController = {
  controller: function () {
    switch (router.params.section) {
      case "":
        this.items = HOME;
        break;
      case "experience":
        this.items = EXPERIENCE;
        break;
      case "projects":
        this.items = PROJECTS;
        break;
      case "technologies":
        this.items = TECHNOLOGIES;
        break;
    }
    this.goTo = function (route) {
      router.navigate(route);
    };
  },
  render: function () {
    return /* HTML */ `
      <header id="header-inner" class="padding-large color-white">
        <div class="max-width-medium margin-auto display-flex justify-content-end align-items-center">
          <ul class="display-flex gap-medium justify-content-end">
            <li onclick="goTo('/')" class="${router.params.section == "" ? "text-decoration-underline" : ""} cursor-pointer">Inicio</li>
            <li onclick="goTo('/experience')" class="${router.params.section == "experience" ? "text-decoration-underline" : ""} cursor-pointer">Experiencia</li>
            <li onclick="goTo('/projects')" class="${router.params.section == "projects" ? "text-decoration-underline" : ""} cursor-pointer">Proyectos</li>
            <li onclick="goTo('/technologies')" class="${router.params.section == "technologies" ? "text-decoration-underline" : ""} cursor-pointer">Tecnologías</li>
          </ul>
        </div>
      </header>
      <section id="view">
        ${this.items
          .map(({ title, content, links }, index) => {
            const pair = index % 2 == 0;
            return /* HTML */ `
              <article class="${pair ? "background-color-white" : ""} padding-large">
                <div class="max-width-medium margin-auto">
                  <h1 class="${pair ? "color-primary" : "color-white"}">${title}</h1>
                  <div class="${pair ? "" : "color-white"}">${content}</div>
                  <br />
                  ${!!links
                    ? /* HTML */ `
                        <div class="display-flex justify-content-end">
                          ${links
                            .map(({ title, href }) => {
                              return /* HTML */ `
                                <a href="${href}" target="_blank" class="display-inline-block background-color-primary color-white padding-small">
                                  <span>${title}</span>
                                </a>
                              `;
                            })
                            .join("")}
                        </div>
                      `
                    : ``}
                </div>
              </article>
            `;
          })
          .join("")}
      </section>
      <footer id="footer-inner" class="padding-large color-white">
        <div class="max-width-medium margin-auto display-flex justify-content-between align-items-center">
          <span>Developed with ScopeJS</span>
          <span>By @PabloTheBlink</span>
        </div>
      </footer>
    `;
  },
};
