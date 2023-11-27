const form = document.getElementById("search-form");
const query = document.getElementById("search-query");
const google = "https://www.google.com/search?q=";

form.addEventListener("submit", search);

function search(e) {
  e.preventDefault();

  if (query.value) {
    const url = google + query.value;
    const win = window.open(url, "_blank");
  }
}
