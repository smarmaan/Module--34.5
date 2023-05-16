const inputField = document.getElementById("search");
const url = inputField.value.trim();

if (!url) {
  alert("Please enter a valid URL");
}

const apiUrl = `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(
  url
)}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const shortenedLink = data.result.full_short_link;

    console.log(shortenedLink);
  })
  .catch((error) => console.error(error));
