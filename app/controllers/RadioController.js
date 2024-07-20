import { ITEMS } from "../config/constants.js?v=0.0.17";
import { router } from "../setup.js?v=0.0.17";

export const RadioController = {
  tagName: "radio",
  controller: function () {
    this.full_screen = false;
    this.menu_items = Object.keys(ITEMS);
    this.show_menu = false;
    this.goTo = function (route) {
      router.navigate(route);
    };
    this.toggleMenu = function () {
      this.show_menu = !this.show_menu;
      this.apply();
    };

    this.openFullscreen = function () {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        /* Safari */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        /* IE11 */
        document.documentElement.msRequestFullscreen();
      }
    };

    this.closeFullscreen = function () {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    };

    this.toggleFullScreen = function () {
      this.full_screen = !this.full_screen;
      //this.full_screen ? this.openFullscreen() : this.closeFullscreen();
      this.apply();
    };

    this.audio = document.querySelector("audio#radio");
    this.meta = {};
    this.toggleAudio = function () {
      this.audio.paused ? this.audio.play() : this.audio.pause();
      // this.full_screen = !this.audio.paused;
      // this.full_screen ? this.openFullscreen() : this.closeFullscreen();
      this.apply();
    };
    this.getMeta = function () {
      fetch("https://api.devetty.es/radio")
        .then((r) => r.json())
        .then((r) => {
          this.meta = r.data.information.category.meta;
          if (this.audio.src == "") {
            this.audio.src = "https://pablomsj.com/radio.mp3";
            this.toggleAudio();
            return;
          }
          this.apply();
        });
    };
    this.interval = setInterval(this.getMeta.bind(this), 1000);
    this.onDestroy = function () {
      if (this.interval) clearInterval(this.interval);
      this.audio.pause();
    };
  },
  render: function () {
    const { Lyrics, album, artist, copyright, date, description, encoded_by, filename, genre, title, track_number, track_total } = this.meta;
    return /* HTML */ `
      ${!this.full_screen
        ? /* HTML */ `
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
          `
        : ``}
      <section id="view">
        <div ${!this.full_screen ? `class="max-width-large margin-auto display-flex flex-direction-column justify-content-center align-items-center padding-large"` : ``} style="height: 100%">
          ${!this.full_screen ? /* HTML */ `<h1 class="color-white" style="width: 100%; margin-bottom: -5rem">Radio en directo</h1>` : ``}
          <div style="margin: auto; width: 100%; height: ${this.full_screen ? "100%" : "30rem"}; border-radius: 0.5rem; position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1.5rem; overflow: hidden">
            <div style="height: 3rem"></div>

            <div style="cursor: pointer" onclick="toggleAudio">
              ${this.audio.paused
                ? /* HTML */ `
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" height="100px" width="100px" version="1.1" viewBox="0 0 60 60" xml:space="preserve">
                      <g>
                        <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30   c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15   C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z" />
                        <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30   S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" />
                      </g>
                    </svg>
                  `
                : /* HTML */ `
                    <svg style="animation: heartBeat 2s infinite; transition: 1s;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" height="100px" width="100px" version="1.1" id="Capa_1" viewBox="0 0 512 512" xml:space="preserve">
                      <path d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M224,320  c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z M352,320  c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z" />
                    </svg>
                  `}
            </div>

            <h1 style="color: white; margin: 0; text-align: center; font-size: 1.5rem; height: 3rem">
              ${artist && title
                ? /* HTML */ `
                    <p style="margin: 0">Now playing</p>
                    <p style="margin: 0 auto; margin-top: 1rem; max-width: 20rem; font-size: 2.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${title}</p>
                    <p style="margin: 0 auto; margin-top: 0.25rem; max-width: 20rem; font-size: 0.75rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${artist}</p>
                  `
                : ``}
            </h1>

            <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8475060ea6c558a3f5ba9190d8?v=1" style="${!this.audio.paused ? `animation: heartBeat 0.5s infinite;` : ``} transition: 0.25s; object-fit: cover; width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: -1" />
            <div style="background-color: rgba(0, 0, 0, 0.75); width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: -1"></div>

            <button onclick="toggleFullScreen()" style="cursor: pointer; position: absolute; bottom: 1rem; right: 1rem; background-color: transparent" class="color-white padding-small">
              <i class="fa fa-expand"></i>
            </button>
          </div>
        </div>
      </section>
      ${!this.full_screen
        ? /* HTML */ `
            <footer id="footer-inner" class="padding-large color-white">
              <div class="max-width-large margin-auto display-flex justify-content-between align-items-center">
                <span>Developed with ScopeJS</span>
                <span>By @PabloTheBlink</span>
              </div>
            </footer>
          `
        : ``}
    `;
  },
};
