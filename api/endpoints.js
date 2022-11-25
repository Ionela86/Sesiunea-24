const APID = "b55e7f0cef1180e6dd8808b752b96374";

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ro&appid=${APID}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ro&appid=${APID}`;
}
