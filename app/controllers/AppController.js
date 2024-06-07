import { ALIGN, ITEMS } from "../config/constants.js?v=0.0.5";
import { router } from "../setup.js?v=0.0.5";

export const AppController = {
  controller: function () {
    this.menu_items = Object.keys(ITEMS);
    if (!router.params.section) router.navigate(`/${this.menu_items[0]}`);
    this.items = ITEMS[router.params.section] || [];
    this.goTo = function (route) {
      router.navigate(route);
    };
  },
  render: function () {
    return /* HTML */ `
      <header id="header-inner" class="padding-large color-white">
        <div class="max-width-large margin-auto display-flex justify-content-end align-items-center">
          <ul class="display-flex gap-medium justify-content-end">
            ${this.menu_items.map((item) => /* HTML */ ` <li style="text-transform: capitalize" onclick="goTo('/${item}')" class="${router.params.section == item ? "text-decoration-underline" : ""} cursor-pointer">${item}</li> `).join("")}
          </ul>
        </div>
      </header>
      <section id="view">
        ${this.items
          .map(({ title, content, links, align }, index) => {
            const pair = index % 2 == 0;
            return /* HTML */ `
              <article class="${pair ? "background-color-white" : ""} padding-large">
                <div class="max-width-large margin-auto display-flex ${align == ALIGN.LEFT ? "justify-content-start" : ""} ${align == ALIGN.CENTER ? "justify-content-center" : ""} ${align == ALIGN.RIGHT ? "justify-content-end" : ""}">
                  <div class="max-width-medium width-full">
                    <h1 class="${pair ? "color-primary" : "color-white"}">${title}</h1>
                    <div class="${pair ? "" : "color-white"}">${content}</div>
                    <br />
                    ${!!links
                      ? /* HTML */ `
                          <div class="display-flex ${align == ALIGN.LEFT ? "justify-content-start" : ""} ${align == ALIGN.CENTER ? "justify-content-center" : ""} ${align == ALIGN.RIGHT ? "justify-content-end" : ""}">
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
