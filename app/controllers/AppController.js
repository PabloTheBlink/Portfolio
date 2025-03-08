import { ALIGN, ITEMS } from "../config/constants.js?v=0.0.19";
import { router } from "../setup.js?v=0.0.19";

export const AppController = {
  controller: function () {
    this.menu_items = Object.keys(ITEMS);
    if (!router.params.section) router.navigate(`/${this.menu_items[0]}`);
    this.items = ITEMS[router.params.section] || [];
    this.show_menu = false;
    this.goTo = function (route) {
      router.navigate(route);
    };
    this.toggleMenu = function () {
      this.show_menu = !this.show_menu;
      this.apply();
    };
    document.title = `Pablo Martínez San José - ${router.params.section}`;
  },
  postRender: function () {
    if (router.params.section == "radio") {
      document.querySelector("#app").classList.add("overlay");
    } else {
      document.querySelector("#app").classList.remove("overlay");
    }
  },
  render: function () {
    return /* HTML */ `
      <header id="header-inner" class="padding-large color-white">
        <nav class="hide-tablet max-width-large margin-auto display-flex justify-content-end align-items-center">
          <ul class="display-flex gap-medium justify-content-end">
            ${this.menu_items.map((item) => /* HTML */ ` <li style="text-transform: capitalize" onclick="goTo('/${item}')" class="${router.params.section == item ? "text-decoration-underline" : ""} cursor-pointer">${item}</li> `).join("")}
          </ul>
        </nav>
        <button aria-label="Abrir menú" onclick="toggleMenu()" class="cursor-pointer font-size-large float-right show-tablet background-color-primary color-white padding-small">
          <svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" style="width: 24px; height: 24px;" xml:space="preserve">
            <g>
              <rect y="5" width="50" height="5" />
              <rect y="25" width="50" height="5" />
              <rect y="45" width="50" height="5" />
            </g>
          </svg>
        </button>
      </header>
      <nav class="${this.show_menu ? "show" : ""} color-white show-tablet" id="floating-menu">
        <ul class="display-flex gap-medium flex-direction-column align-items-center">
          ${this.menu_items.map((item) => /* HTML */ ` <li style="text-transform: capitalize" onclick="goTo('/${item}')" class="${router.params.section == item ? "text-decoration-underline" : ""} cursor-pointer">${item}</li> `).join("")}
        </ul>
      </nav>
      <section id="view">
        ${this.items
          .map(({ title, content, links, images, align, example }, index) => {
            const pair = index % 2 == 0;
            return /* HTML */ `
              <article class="${pair ? "background-color-white" : ""} ${title && content ? "padding-large" : ""}">
                <div class="max-width-large margin-auto display-flex align-items-center gap-large ${align == ALIGN.LEFT && !images && !example ? "justify-content-start" : ""} ${align == ALIGN.CENTER && !images && !example ? "justify-content-center" : ""} ${align == ALIGN.RIGHT && !images && !example ? "justify-content-end" : ""} ${!!images || !!example ? "justify-content-between" : ""}">
                  ${align == ALIGN.RIGHT && !!images ? /* HTML */ ` <img alt="Imágen izquierda" lazy style="width: 20rem; height: auto" src="${images[0]}" /> ` : ``}
                  <div class="max-width-medium margin-auto width-full">
                    ${title ? /* HTML */ `<h1 class="${pair ? "color-primary" : "color-white"}">${title}</h1>` : ``} ${content ? /* HTML */ `<div class="${pair ? "" : "color-white"}">${content}</div>` : ``} ${align == ALIGN.CENTER && !!images ? /* HTML */ ` <img alt="Imágen central" lazy style="margin-top: 1rem; width: auto; height: 20rem; max-width: 95%; object-fit: cover" src="${images[0]}" class="margin-auto display-block" /> ` : ``}
                    ${!!links
                      ? /* HTML */ `
                          <div style="margin-top: 1rem" class="display-flex gap-small ${align == ALIGN.LEFT ? "justify-content-start" : ""} ${align == ALIGN.CENTER ? "justify-content-center flex-direction-column" : ""} ${align == ALIGN.RIGHT ? "justify-content-end" : ""}">
                            ${links
                              .map(({ title, href }) => {
                                return /* HTML */ `
                                  <a href="${href}" target="_blank" class="display-inline-block ${align == ALIGN.CENTER ? "min-width-small display-flex justify-content-center background-color-white" : "background-color-primary color-white"} padding-small">
                                    <span>${title}</span>
                                  </a>
                                `;
                              })
                              .join("")}
                          </div>
                        `
                      : ``}
                  </div>
                  ${align == ALIGN.LEFT && !!images ? /* HTML */ ` <img alt="Imágen derecha" lazy style="width: auto; height: 20rem" src="${images[0]}" /> ` : ``} ${example ? /* HTML */ ` <iframe src="${example}"></iframe> ` : ``}
                </div>
              </article>
            `;
          })
          .join("")}
      </section>
      <footer id="footer-inner" class="padding-large color-white">
        <div class="max-width-large margin-auto display-flex justify-content-between align-items-center">
          <span>Developed with ScopeJS</span>
          <span>By @PabloTheBlink</span>
        </div>
      </footer>
    `;
  },
};
