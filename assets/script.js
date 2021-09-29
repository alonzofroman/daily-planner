$(document).ready(function () {
    
    // Function to update to the current time when called
    let updateTime = function () {
        let currentTime = moment().format('MMMM Do YYYY, h:mm:ss') //Formatting the time
        $("#currentDay").text(currentTime) //Displays the current time
    }
    updateTime();
    // Update the time by calling the function every second
    setInterval(updateTime, 1000);

})


