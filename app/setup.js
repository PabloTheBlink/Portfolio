import { Router, Component } from "../assets/js/ScopeJS.min.js?v=0.0.19";
import { SecurityManagerService } from "../assets/js/SecurityManagerService.js?v=0.0.19";
import { HTTPS, SECURITY_API_KEY } from "./config/constants.js?v=0.0.19";
import { AppController } from "./controllers/AppController.js?v=0.0.19";

async function getPublicIP() {
  try {
    const response = await fetch("https://icanhazip.com/");
    const ip = await response.text();
    return ip.trim();
  } catch (error) {
    console.error("Error fetching IP:", error);
  }
}

if (navigator.userAgent !== "SecurityManager") {
  const service = new SecurityManagerService("https://security.devetty.es/api", SECURITY_API_KEY);

  const ipAddress = await getPublicIP(); // Placeholder, replace with actual logic to get client IP
  const urlToCheck = window.location.pathname + window.location.search;
  const origin = document.referrer || "";
  const method = "GET"; // Replace with actual HTTP method
  const body = {
    GET: new URLSearchParams(window.location.search).toString(),
    POST: {}, // You may need to collect POST data dynamically
    body: null, // Replace with actual request body if needed
  };

  (async () => {
    const ok = await service.check(ipAddress, urlToCheck, origin, method, body);

    if (!ok) {
      document.body.innerHTML = "Access Forbidden";
      document.body.style.color = "red";
      throw new Error("403 Forbidden");
    }
  })();
}

Component({
  tagName: "counter",
  controller: function () {
    this.counter = 0;
    this.up = function () {
      this.counter++;
      this.apply();
    };
    this.down = function () {
      this.counter--;
      this.apply();
    };
  },
  render: function () {
    return /* HTML */ `
      <div class="display-flex justify-content-center align-items-center gap-large padding-small background-color-white color-primary max-width-small margin-auto">
        <button onclick="down()" class="fa fa-arrow-down background-color-primary color-white padding-small"></button>
        <span style="width: 5rem; text-align: center">${this.counter}</span>
        <button onclick="up()" class="fa fa-arrow-up background-color-primary color-white padding-small"></button>
      </div>
    `;
  },
});

export const router = Router(
  [
    {
      path: "/:section",
      controller: AppController,
      alias: "section",
    },
  ],
  {
    useHash: location.protocol !== HTTPS,
    error: {
      controller: AppController,
      alias: "error",
    },
  }
);

router.render(document.querySelector("#content"));
