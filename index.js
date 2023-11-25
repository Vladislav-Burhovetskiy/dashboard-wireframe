// BACKGROUND & PHOTOGRAFER

fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.user);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById(
      "author"
    ).textContent = `By: ${data.user.name}, ${data.user.location}`;
  })
  .catch((err) => {
    // Use a default background image/author
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA4NTI5NjN8&ixlib=rb-4.0.3&q=80&w=1080&quot;)`;
    document.getElementById("author").textContent = `By: Jeremy Bishop, California`;
  });




// RATE EXCHANGE
const amount = document.getElementById("rate-amount");
const selectFrom = document.getElementById("rate-select-from");
const selectTo = document.getElementById("rate-select-to");
const result = document.getElementById("rate-exchange-result");
const exchangeBtn = document.getElementById("rate-equal-btn");
const moneyCodes = ["USD", "EUR"];

moneyCodes.forEach((code) => {
  fetch(`https://v6.exchangerate-api.com/v6/67db86d6976ed8dfc7ac2009/latest/${code}`)
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      return res.json();
    })
    .then((data) => {
      document.getElementById("rate-top").innerHTML += `
        <p>${data.base_code} = ${(data.conversion_rates.UAH).toFixed(2)} UAH</p>
      `;
    })
    .catch((err) => console.error(err));
});

exchangeBtn.addEventListener("click", () => {
  if (amount.value) {
    fetch(`https://v6.exchangerate-api.com/v6/67db86d6976ed8dfc7ac2009/latest/USD`)
      .then(res => res.json())
      .then(data => {
        const fromExchangeRate = data.conversion_rates[selectFrom.value];
        const toExchangeRate = data.conversion_rates[selectTo.value];
        const convertedAmount = (amount.value / fromExchangeRate) * toExchangeRate;

        result.textContent = `${(convertedAmount).toFixed(2)} ${selectTo.value}`
      })
  } else {
    alert("Add amount!")
  }
})



// TIME IN CENTER

function getCurrentTime() {
  const date = new Date();
  document.getElementById("time").textContent = date.toLocaleTimeString(
    "en-us",
    { timeStyle: "short" }
  );
}

setInterval(getCurrentTime, 1000);

navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Weather data not available");
      }
      return res.json();
    })
    .then((data) => {
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `;
    })
    .catch((err) => console.error(err));
});

// GOOGLE SEARCH
const form = document.getElementById("search-form")
const query = document.getElementById("search-query")
const google = "https://www.google.com/search?q=";

form.addEventListener("submit", search)

function search(e) {
  e.preventDefault();

  if (query.value) {
    const url = google + query.value;
    const win = window.open(url, '_blank');
  }
}
