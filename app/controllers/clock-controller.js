import ClockService from '../services/clock-service.js';
import store from '../store.js'


function _drawClock(){
    document.getElementById('clock').innerHTML = `
        <div class="time-div"><h1 class="current-time" onclick="app.clockController.toggleTimeFormat()" >${store.State.time}</h1></div>
    `;
}

export default class ClockController{
    constructor(){
        store.subscribe("time", _drawClock);
        setInterval(ClockService.getTime, 1000)
    }
    
    toggleTimeFormat(){
        ClockService.toggleFormat();
    }
}