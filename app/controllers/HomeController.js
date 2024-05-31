import { HOME } from "../config/constants.js?v=0.0.3";
import { Event } from "https://cdn.devetty.es/EventJS/js";

export const HomeController = {
  controller: function () {
    this.items = HOME;
    this.selected_item_index = 0;
    this.go = function (index) {
      if (index == -1 && this.selected_item_index == 0) return;
      if (index == 1 && this.selected_item_index == this.items.length - 1) return;
      this.selected_item_index += index;
      this.apply();
    };
    this.swipe_event = Event.listen("swipe", (index) => this.go(index));
    this.onDestroy = function () {
      Event.unlisten(this.swipe_event);
    };
    this.rotate = function (e) {
      if (e.target.classList.contains("rotating")) {
        e.target.classList.remove("rotating");
      } else {
        e.target.classList.add("rotating");
      }
    };
  },
  render: function () {
    return /* HTML */ `
      <div style="width: 100%; height: 100%">
        <img onclick="rotate" src="https://pbs.twimg.com/profile_images/1740971921208995840/fq8nN2B3_400x400.jpg" id="img_profile" style="border-radius: 100%; cursor: pointer; transition: 1s; height: 20rem; display: block; margin: auto" />
        <div class="items" style="height: calc(100% - 20rem)">
          ${this.items
            .map((item, index) => {
              return /* HTML */ `
                <div class="item" style="left: ${64 * (index - this.selected_item_index) + 2}em;">
                  <div class="panel" style="${this.selected_item_index != index ? "opacity: 0;" : ""}">
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
                </div>
              `;
            })
            .join("")}
        </div>
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
