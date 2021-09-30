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
        let boxTime = moment().format("hh:mm");

    //Set box 9
    if (moment().isBefore(moment().hour(9))) {  //If the hour has not happened yet, set to green
        $("#box9").css("background-color", "green");
    }
    
    else if (moment().isBetween(moment().hour(9), moment().hour(10))) { //If it is the current hour, set to red
        $("#box9").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(9))) { //If the hour has passed, set to grey
        $("#box9").css("background-color", "lightgray");
    }
    
    //Set box 10
    if (moment().isBefore(moment().hour(10))) {
        $("#box10").css("background-color", "green");
    }
    
    else if (moment().isBetween(moment().hour(10), moment().hour(11))) {
        $("#box10").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(10))) {
        $("#box10").css("background-color", "lightgray");
    }

    //Set Box 11
    if (moment().isBefore(moment().hour(11))) {
        $("#box11").css("background-color", "green");
    }
    
    else if (moment().isBetween(moment().hour(11), moment().hour(12))) {
        $("#box11").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(11))) {
        $("#box11").css("background-color", "lightgray");
    }

    //Set Box 12
    if (moment().isBefore(moment().hour(12))) {
        $("#box12").css("background-color", "green");
    }
    
    else if (moment().isBetween(moment().hour(12), moment().hour(13))) {
        $("#box12").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(12))) {
        $("#box12").css("background-color", "lightgray");
    }

    //Set Box 1
    if (moment().isBefore(moment().hour(13))) {
        $("#box1").css("background-color", "green");
    }
    
    else if (moment().isBetween(moment().hour(13), moment().hour(14))) {
        $("#box1").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(13))) {
        $("#box1").css("background-color", "lightgray");
    }

    //Set Box 2
    if (moment().isBefore(moment().hour(14))) {
        $("#box2").css("background-color", "green");
    }
    
    else if (moment().isBetween(moment().hour(14), moment().hour(15))) {
        $("#box2").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(14))) {
        $("#box2").css("background-color", "lightgray");
    }

    //Set Box 3
    if (moment().isBefore(moment().hour(15))) {
        $("#box3").css("background-color", "green");
    }
    
    else if (moment().isBetween(moment().hour(15), moment().hour(16))) {
        $("#box3").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(15))) {
        $("#box3").css("background-color", "lightgray");
    }

    //Set Box 4
    if (moment().isBefore(moment().hour(16))) {
        $("#box4").css("background-color", "green");
    }
    
    else if (moment().isBetween(moment().hour(16), moment().hour(17))) {
        $("#box4").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(16))) {
        $("#box4").css("background-color", "lightgray");
    }

    //Set Box 5
    if (moment().isBefore(moment().hour(17))) {
        $("#box5").css("background-color", "green");
    }
    
    else if (moment().isBetween(moment().hour(17), moment().hour(18))) {
        $("#box5").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(17))) {
        $("#box5").css("background-color", "lightgray");
    }
}
    checkTime();
    setInterval(checkTime, 60000); 
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


