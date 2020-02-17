import ClockService from '../services/clock-service.js';
import store from '../store.js'


function _drawClock(){
    document.getElementById('clock').innerHTML = `
        <div class="time-div"><h1 class="current-time" onclick="app.clockController.toggleTimeFormat()" >${store.State.time}</h1></div>
    `;
}

function _drawUserName(){
    document.getElementById('user-name').innerText = store.State.user;
}

export default class ClockController{
    constructor(){
        store.subscribe("time", _drawClock);
        store.subscribe("user", _drawUserName);
        setInterval(ClockService.getTime, 1000)
        _drawUserName();
    }
    
    toggleTimeFormat(){
        ClockService.toggleFormat();
    }
}