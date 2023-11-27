const amount = document.getElementById("rate-amount");
const selectFrom = document.getElementById("rate-select-from");
const selectTo = document.getElementById("rate-select-to");
const result = document.getElementById("rate-exchange-result");
const exchangeBtn = document.getElementById("rate-equal-btn");
const moneyCodes = ["USD", "EUR"];

// moneyCodes.forEach((code) => {
//   fetch(`https://v6.exchangerate-api.com/v6/67db86d6976ed8dfc7ac2009/latest/${code}`)
//     .then((res) => {
//       if (!res.ok) {
//         throw Error("Something went wrong");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       document.getElementById("rate-top").innerHTML += `
//         <p>${data.base_code} = ${(data.conversion_rates.UAH).toFixed(2)} UAH</p>
//       `;
//     })
//     .catch((err) => console.error(err));
// });

// exchangeBtn.addEventListener("click", () => {
//   if (amount.value) {
//     fetch(`https://v6.exchangerate-api.com/v6/67db86d6976ed8dfc7ac2009/latest/USD`)
//       .then(res => res.json())
//       .then(data => {
//         const fromExchangeRate = data.conversion_rates[selectFrom.value];
//         const toExchangeRate = data.conversion_rates[selectTo.value];
//         const convertedAmount = (amount.value / fromExchangeRate) * toExchangeRate;

//         result.textContent = `${(convertedAmount).toFixed(2)} ${selectTo.value}`
//       })
//   } else {
//     alert("Add amount!")
//   }
// })
