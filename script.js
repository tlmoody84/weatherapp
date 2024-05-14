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
