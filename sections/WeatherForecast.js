function displayWeatherForecast(city) {
  const forecastEndpoint = getForecastEndpoint(city);

  fetch(forecastEndpoint)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);

      const { list } = data;
      const weatherForecastContainerElement =
        document.querySelector(".weather-forecast");

      weatherForecastContainerElement.innerHTML = "";
      const dayMap = {};
      list.forEach((element) => {
        const { dt } = element;

        const day = getDayofWeek(dt);

        if (dayMap[day]) {
          dayMap[day].push(element);
        } else {
          dayMap[day] = [element];
        }
      });
      console.log(dayMap);
      for (key in dayMap) {
        weatherForecastContainerElement.innerHTML += `<h3 class="text-primary">${key}</h3>`;

        const days = dayMap[key];

        days.forEach((element) => {
          const { dt, main, weather } = element;

          const hour = getHour(dt);

          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);

          const weatherDescription = weather[0].description;
          const weatherIcon = getWeatherIcon(weather[0].icon);

          weatherForecastContainerElement.innerHTML += `
        <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 m-3">
        <div>
        
        <div>${hour}</div>
        </div>
        <div><img src=${weatherIcon} alt="" /></div>
        <div><strong>${temperature} °C</strong></div>
        <div> ${weatherDescription}</div>
        <div>Real feel: ${realFeel}°C</div>
        </div>

        `;
        });
      }
    });
}
