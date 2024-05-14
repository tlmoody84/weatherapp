let apiKey = '3ae7d10fc4bceaf4a69f018ef7340781';
let apiUrl = "https://api.openweathermap.org/data/2.5/weather";

let locationInput = document.getElementById('locationInput');
let temperatureElement = document.getElementById('temperature');
let searchButton = document.getElementById('searchButton');
let locationElement = document.getElementById('location');
let descriptionElement = document.getElementById('description');
let windElement = document.getElementById('speed');
let gustElement = document.getElementById('gust');

searchButton.addEventListener('click', () => {
  let location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});
function fetchWeather(location) {
  let url = `${apiUrl}?q=${location}&appid=${apiKey}&units=imperial`;
  fetch(url)
    .then(response => response.json())

    .then(data => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°F`;
      descriptionElement.textContent = data.weather[0].description;
      windElement.textContent = `Wind Speed: ${data.wind.speed} mph`;
      gustElement.textContent = `Wind Gust: ${data.wind.gust} mph`;
    })
    .catch(error => {
      console.log(error);
      locationElement.textContent = 'Error';
      temperatureElement.textContent = 'Error';
      descriptionElement.textContent = 'Error';
      windElement.textContent = 'Error';
      gustElement.textContent = 'Error';
    });

}
