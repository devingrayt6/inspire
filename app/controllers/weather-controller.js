import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  let weather = store.State.weather;
  let fahrenheit = (weather.kelvin - 273.15) * (9 / 5) + 32;
  weather.temp = fahrenheit.toFixed(0);
  document.getElementById('weather').innerHTML = weather.Template;
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
