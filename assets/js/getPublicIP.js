export async function getPublicIP() {
  try {
    const response = await fetch("https://icanhazip.com/");
    const ip = await response.text();
    return ip.trim();
  } catch (error) {
    console.error("Error fetching IP:", error);
  }
}
