export function loadCSS(url, callback) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  link.onload = callback;
  document.head.appendChild(link);
}
