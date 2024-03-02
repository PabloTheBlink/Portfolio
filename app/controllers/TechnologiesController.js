import { TECHNOLOGIES } from "../config/constants.js?v=0.0.1";

export const TechnologiesController = {
  controller: function () {
    this.items = TECHNOLOGIES;
    this.selected_item_index = 0;
    this.go = function (index) {
      this.selected_item_index += index;
      this.apply();
    };
  },
  render: function () {
    return /* HTML */ `
      <div class="items">
        ${this.items
          .map((item, index) => {
            return /* HTML */ `
              <div4 class="item" style="left: ${64 * (index - this.selected_item_index) + 2}em;">
                <div class="panel" style="${this.selected_item_index != index ? "opacity: 0.25;" : ""}">
                  <div class="panel-header">
                    <h1>${item.title}</h1>
                  </div>
                  <div class="panel-content">
                    ${item.content}
                    ${item.links
                      ? /* HTML */ `
                          ${item.links
                            .map((link) => {
                              return /* HTML */ ` <a target="_blank" href="${link.href}">${link.title}</a>`;
                            })
                            .join("")}
                        `
                      : ``}
                  </div>
                </div>
              </div4>
            `;
          })
          .join("")}
      </div>
      <div class="navigate">
        <button onclick="go(-1)" ${this.selected_item_index == 0 ? "disabled" : ""}>
          <span>Anterior</span>
        </button>
        <span>${this.items[this.selected_item_index].title}</span>
        <button onclick="go(1)" ${this.selected_item_index == this.items.length - 1 ? "disabled" : ""}>
          <span>Siguiente</span>
        </button>
      </div>
    `;
  },
};
