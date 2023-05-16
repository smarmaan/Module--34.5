const fetchAllCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showAllCountry(data));
};

const showAllCountry = (data) => {
  const countryContainer = document.getElementById("country-container");
  countryContainer.innerHTML = "";
  data.forEach((country) => {
    console.log(country.flags.png);

    const countryDiv = document.createElement("div");
    countryDiv.innerHTML = `



<div
class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<a href="#">
    <img class="rounded-t-lg" src="${
      country.flags.svg ? country.flags.svg : country.flags.png
    }" alt="${country.flags.svg ? "" : "Image Not Found"}" />
</a>
<div class="p-5">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Country Name :"${
          country.name.common
        }" </h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
        technology acquisitions of 2021 so far, in reverse chronological order.</p>
</div>
</div>

`;
    countryContainer.appendChild(countryDiv);
  });
};

// fetchAllCountry();













fetchCountryRegion("asia");
