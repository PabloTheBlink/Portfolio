export async function getPublicIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json&ipAddressVersion=4");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error fetching IPv4:", error);
  }
}
