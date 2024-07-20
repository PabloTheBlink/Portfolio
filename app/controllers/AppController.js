import { ALIGN, ITEMS } from "../config/constants.js?v=0.0.18";
import { router } from "../setup.js?v=0.0.18";

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
  },
  render: function () {
    return /* HTML */ `
      <header id="header-inner" class="padding-large color-white">
        <nav class="hide-tablet max-width-large margin-auto display-flex justify-content-end align-items-center">
          <ul class="display-flex gap-medium justify-content-end">
            ${this.menu_items.map((item) => /* HTML */ ` <li style="text-transform: capitalize" onclick="goTo('/${item}')" class="${router.params.section == item ? "text-decoration-underline" : ""} cursor-pointer">${item}</li> `).join("")}
          </ul>
        </nav>
        <button onclick="toggleMenu()" class="cursor-pointer font-size-large float-right fa fa-bars show-tablet background-color-primary color-white padding-small"></button>
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
              <article fadeIn="0" class="${pair ? "background-color-white" : ""} ${title && content ? "padding-large" : ""}">
                <div class="max-width-large margin-auto display-flex align-items-center gap-large ${align == ALIGN.LEFT && !images && !example ? "justify-content-start" : ""} ${align == ALIGN.CENTER && !images && !example ? "justify-content-center" : ""} ${align == ALIGN.RIGHT && !images && !example ? "justify-content-end" : ""} ${!!images || !!example ? "justify-content-between" : ""}">
                  ${align == ALIGN.RIGHT && !!images ? /* HTML */ ` <img fadeIn="0" style="width: 20rem; height: auto" src="${images[0]}" /> ` : ``}
                  <div class="max-width-medium margin-auto width-full">
                    ${title ? /* HTML */ `<h1 class="${pair ? "color-primary" : "color-white"}">${title}</h1>` : ``} ${content ? /* HTML */ `<div class="${pair ? "" : "color-white"}">${content}</div>` : ``} ${align == ALIGN.CENTER && !!images ? /* HTML */ ` <img fadeIn="0" style="margin-top: 1rem; width: auto; height: 20rem; max-width: 95%; object-fit: cover" src="${images[0]}" class="margin-auto display-block" /> ` : ``}
                    ${!!links
                      ? /* HTML */ `
                          <div style="margin-top: 1rem" class="display-flex gap-small ${align == ALIGN.LEFT ? "justify-content-start" : ""} ${align == ALIGN.CENTER ? "justify-content-center flex-direction-column" : ""} ${align == ALIGN.RIGHT ? "justify-content-end" : ""}">
                            ${links
                              .map(({ title, href }) => {
                                return /* HTML */ `
                                  <a fadeIn="0" href="${href}" target="_blank" class="display-inline-block ${align == ALIGN.CENTER ? "min-width-small display-flex justify-content-center background-color-white" : "background-color-primary color-white"} padding-small">
                                    <span>${title}</span>
                                  </a>
                                `;
                              })
                              .join("")}
                          </div>
                        `
                      : ``}
                  </div>
                  ${align == ALIGN.LEFT && !!images ? /* HTML */ ` <img fadeIn="0" style="width: auto; height: 20rem" src="${images[0]}" /> ` : ``} ${example ? /* HTML */ ` <iframe fadeIn="0" src="${example}"></iframe> ` : ``}
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
