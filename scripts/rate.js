const amount = document.getElementById("rate-amount");
const selectFrom = document.getElementById("rate-select-from");
const selectTo = document.getElementById("rate-select-to");
const result = document.getElementById("rate-exchange-result");
const exchangeBtn = document.getElementById("rate-equal-btn");
const moneyCodes = ["usd", "eur"];

moneyCodes.forEach((code) => {
  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${code}.json`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      return res.json();
    })
    .then((data) => {
      const uahRate = data.eur ? data.eur.uah : data.usd.uah;
      const currency = data.usd ? "USD" : "EUR";

      document.getElementById("rate-top").innerHTML += `
        <p>${currency} = ${uahRate.toFixed(2)} UAH</p>
      `;
    })
    .catch((err) => console.error(err));
});

exchangeBtn.addEventListener("click", () => {
  if (amount.value) {
    const fromValue = selectFrom.value.toLowerCase();
    const toValue = selectTo.value.toLowerCase();
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromValue}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const fromExchangeRate = data[fromValue];
        const toExchangeRate = fromExchangeRate[toValue];
        const convertedAmount =
          (amount.value / fromExchangeRate[fromValue]) * toExchangeRate;

        result.textContent = `${convertedAmount.toFixed(2)} ${selectTo.value}`;
      });
  } else {
    alert("Add amount!");
  }
});
