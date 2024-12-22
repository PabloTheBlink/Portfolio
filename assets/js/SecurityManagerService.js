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
