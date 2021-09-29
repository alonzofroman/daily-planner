$(document).ready(function () {

    console.log(moment());


    // Current Time
    // Here we want to use setInterval to constantly update the time
    let updateTime = function () {
        let currentTime = moment().format('MMMM Do YYYY, h:mm:ss')
        $("#currentDay").text(currentTime)
    }
   
    // To initally set the times, we will call the functions
    updateTime();
    
    // To continuously call the functions, we will use setInterval
    setInterval(updateTime, 1000);

})
