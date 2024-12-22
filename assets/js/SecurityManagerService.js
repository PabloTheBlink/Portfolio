import { SECURITY_API_KEY } from "../../app/config/constants.js";
import { getPublicIP } from "./getPublicIP.js";

export class SecurityManagerService {
  constructor(url, apiKey) {
    this.url = url;
    this.apiKey = apiKey;
  }

  /**
   * Call the security manager service
   *
   * @param {string} url - The URL to call
   * @param {string} method - The HTTP method (default: GET)
   * @param {object} data - The data to send
   * @returns {Promise<boolean>} The response
   */
  async call(url, method = "GET", data = {}) {
    const fullUrl = `${this.url}${url}`;
    const headers = {
      "Content-Type": "application/json",
      "X-API-KEY": this.apiKey,
    };

    try {
      const response = await fetch(fullUrl, {
        method,
        headers,
        body: method !== "GET" ? JSON.stringify(data) : undefined,
      });

      if (response.status === 403) {
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error calling the security service:", error);
      return false;
    }
  }

  /**
   * Check the security manager service
   *
   * @param {string} ipAddress - The IP address to check
   * @param {string} urlToCheck - The URL to check
   * @param {string} origin - The origin of the request
   * @param {string} method - The HTTP method (default: GET)
   * @param {object|null} body - The request body (optional)
   * @param {object|null} extra - Additional data (optional)
   * @returns {Promise<boolean>}
   */
  async check(ipAddress, urlToCheck, origin, method = "GET", body = null, extra = null) {
    return await this.call("/check", "POST", {
      ip_address: ipAddress,
      url_to_check: urlToCheck,
      origin,
      method,
      body,
      extra,
    });
  }
}

export async function checkSecurity() {
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
}
