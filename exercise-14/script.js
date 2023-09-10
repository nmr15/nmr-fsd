let city;

async function clickHandler()
{
  city = document.getElementById('city').value;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93f26e3c57081a6210de53b8dcfdfea4`;

  await fetch(url)
    .then((weather) => { return weather.json() })
    .then(displayData);
}

function displayData(data)
{
  console.log(data);

  let imgurl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  const firstLetter = city.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = city.slice(1);
  const newCity = firstLetterCap + remainingLetters;

  const weather = document.getElementById("weather");

  weather.classList.add("card", "mt-5");

  document.getElementById('weather').innerHTML =
  `<img src=${imgurl} class="card-img-top w-25" />
  <div class="card-body">
    <h5 class="card-title">${newCity}, ${data.sys.country}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${Math.floor(data.main.temp - 273)}&deg;C &nbsp; Feels like ${Math.floor(data.main.feels_like - 273)}&deg;C</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">High: ${Math.floor(data.main.temp_max - 273)}&deg;C &nbsp; Low:${Math.floor(data.main.temp_min - 273)}&deg;C</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">Humidity: ${data.main.humidity}%</h6>
  </div>
  `;

  // document.getElementById("w__icon").innerHTML = `<img src=${imgurl} />`;
  document.getElementById("city").innerHTML = newCity;

}