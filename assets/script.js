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

//Check whether time is in the past/present/future and set background color
$(document).ready(function() {

    let checkTime = function() {
        let boxTime = moment();

    }
})

//Save text to local storage when save button is clicked
$("#save9").on("click", function () {
    var item9 = $("#box9").val();
    localStorage.setItem('text9', item9);
    console.log(item9)
}) 

$(document).ready(function () {
    // var text9 = localStorage.getItem('text9');
    $("box9").val(localStorage.getItem('text9'));
    // console.log(text9);
})


