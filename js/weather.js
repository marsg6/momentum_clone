function onCurrentPositionReceived(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=eb5c8a0bf05010119cf55c0e144ab3e8&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cityName = data.name;
      const currentWeather = data.weather[0].main;
      const currentTemperature = data.main.temp;

      const city = document.querySelector(".post-login__city");
      city.innerText = cityName;
      const weather = document.querySelector(".post-login__weather");
      weather.innerText = currentWeather;
      const temperature = document.querySelector(".post-login__temperature");
      temperature.innerText =
        `${parseInt(currentTemperature).toString()}` + "°C";
    });
}

function onCurrentPositionQueryError() {
  alert("can't receive position");
}

navigator.geolocation.getCurrentPosition(
  onCurrentPositionReceived,
  onCurrentPositionQueryError
);
