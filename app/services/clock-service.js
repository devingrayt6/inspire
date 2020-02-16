import store from '../store.js';


class ClockService{


    getTime(){
        let currentTime = new Date();
        let militaryTime = store.State.militaryTime;
        let timeOfDay;
        let currentTimeString;
        //current hours, minutes, seconds
        let currentHours = currentTime.getHours();
        let currentMinutes = currentTime.getMinutes();
        let currentSeconds = currentTime.getSeconds();


        //Formating minutes and seconds
        currentMinutes = ( currentMinutes < 10 ? "0": '' ) + currentMinutes;
        currentSeconds = ( currentSeconds < 10 ? "0": '' ) + currentSeconds;

        //Formating time based on toggle
        if(militaryTime){
        currentHours = ( currentHours < 10 ? "0": '' ) + currentHours;
        currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
        }else{
            //Am or Pm for 12 hour clock
            timeOfDay = ( currentHours < 12 ? "AM" : "PM");
            //Convert 24 hour time to 12
            currentHours = ( currentHours > 12 ? currentHours-12 : currentHours);
            //change hour 0 to 12
            currentHours = ( currentHours == 0 ? 12 : currentHours);
            currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
        }

        //set time string
        
        store.commit("time", currentTimeString);
    }





    toggleFormat(){
        let newFormat = !store.State.militaryTime;
        store.commit('militaryTime', newFormat)
    }
}



const clockService = new ClockService();
export default clockService;