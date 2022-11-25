const bucharest = document.querySelector(".bucharest");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");
const deva = document.querySelector(".deva");
const alba = document.querySelector(".alba");
const cluj = document.querySelector(".cluj");
const sibiu = document.querySelector(".sibiu");

function updateCityDisplay(city) {
  const currentCity = document.getElementById("current-city");
  currentCity.innerHTML = city + ".";
}
function updateCity(city) {
  updateCityDisplay(city);
  localStorage.setItem("city", city);
  displayWeatherForecast(city);
  displayCurrentWeather(city);
}
bucharest.addEventListener("click", function () {
  updateCity("București");
});
timisoara.addEventListener("click", function () {
  updateCity("Timișoara");
});
oradea.addEventListener("click", function () {
  updateCity("Oradea");
});
deva.addEventListener("click", function () {
  updateCity("Deva");
});
alba.addEventListener("click", function () {
  updateCity("Alba Iulia");
});
cluj.addEventListener("click", function () {
  updateCity("Cluj");
});
sibiu.addEventListener("click", function () {
  updateCity("Sibiu");
});

const scrollTop = document.getElementById("scrolltop");
window.onload = () => {
  scrollTop.style.visibility = "hidden";
  scrollTop.style.opacity = 0;
};

window.onscroll = () => {
  if (window.scrollY > 500) {
    scrollTop.style.visibility = "visible";
    scrollTop.style.opacity = 1;
  } else {
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
  }
};
