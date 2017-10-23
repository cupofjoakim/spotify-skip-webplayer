walk();

function walk() {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    convertSpotifyLinks(links[i]);
  }
}

function convertSpotifyLinks(node) {
  var initialAttribute = node.getAttribute("href");
  var replacedAttribute = initialAttribute.replace(/(https:\/\/open.spotify.com\/)/i, "spotify:").replace("/", ":");

  if (replacedAttribute !== initialAttribute) {
    node.setAttribute("href", replacedAttribute);
  }
}
