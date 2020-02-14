export default class Weather {
  constructor(data) {
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.temp = null;
  }

  get Template() {
    return `
    <div class="weather-shadow">
      <div class="text-white">
        <strong>${this.temp} <i class="fas fa-thermometer-half"></i>F</strong>
        <p>${this.city}</p>
      </div>
    </div>
    `
  }
}