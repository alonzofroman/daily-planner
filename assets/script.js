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

    //Set box 9
    if (moment().isBefore(moment().hour(9))) {  //If the hour has not happened yet, set to green
        $("#box9").css("background-color", "lightgreen");
    }
    
    else if (moment().isSame(moment().hour(9))) { //If it is the current hour, set to red
        $("#box9").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(9))) { //If the hour has passed, set to grey
        $("#box9").css("background-color", "lightgray");
    }
    
    //Set box 10
    if (moment().isBefore(moment().hour(10))) {
        $("#box10").css("background-color", "lightgreen");
    }
    
    else if (moment().isSame(moment().hour(10))) {
        $("#box10").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(10))) {
        $("#box10").css("background-color", "lightgray");
    }

    //Set Box 11
    if (moment().isBefore(moment().hour(11))) {
        $("#box11").css("background-color", "lightgreen");
    }
    
    else if (moment().isSame(moment().hour(11))) {
        $("#box11").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(11))) {
        $("#box11").css("background-color", "lightgray");
    }

    //Set Box 12
    if (moment().isBefore(moment().hour(12))) {
        $("#box12").css("background-color", "lightgreen");
    }
    
    else if (moment().isSame(moment().hour(12))) {
        $("#box12").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(12))) {
        $("#box12").css("background-color", "lightgray");
    }

    //Set Box 1
    if (moment().isBefore(moment().hour(13))) {
        $("#box1").css("background-color", "lightgreen");
    }
    
    else if (moment().isSame(moment().hour(13))) {
        $("#box1").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(13))) {
        $("#box1").css("background-color", "lightgray");
    }

    //Set Box 2
    if (moment().isBefore(moment().hour(14))) {
        $("#box2").css("background-color", "lightgreen");
    }
    
    else if (moment().isSame(moment().hour(14))) {
        $("#box2").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(14))) {
        $("#box2").css("background-color", "lightgray");
    }

    //Set Box 3
    if (moment().isBefore(moment().hour(15))) {
        $("#box3").css("background-color", "lightgreen");
    }
    
    else if (moment().isSame(moment().hour(15))) {
        $("#box3").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(15))) {
        $("#box3").css("background-color", "lightgray");
    }

    //Set Box 4
    if (moment().isBefore(moment().hour(16))) {
        $("#box4").css("background-color", "lightgreen");
    }
    
    else if (moment().isSame(moment().hour(16))) {
        $("#box4").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(16))) {
        $("#box4").css("background-color", "lightgray");
    }

    //Set Box 5
    if (moment().isBefore(moment().hour(17))) {
        $("#box5").css("background-color", "lightgreen");
    }
    
    else if (moment().isSame(moment().hour(17))) {
        $("#box5").css("background-color", "red");
    }
    else if (moment().isAfter(moment().hour(17))) {
        $("#box5").css("background-color", "lightgray");
    }
}
    checkTime();
    setInterval(checkTime, 60000); //Checks the time every minute
})


//Save text to local storage when save button is clicked
$("#save9").on("click", function () {
    var item9 = $("#box9").val().trim();
    localStorage.setItem('text9', item9);
    console.log(item9)
}) 

//box 10 save
$("#save10").on("click", function () {
    var item10 = $("#box10").val().trim();
    localStorage.setItem('text10', item10);
}) 

//box11 save
$("#save11").on("click", function () {
    var item9 = $("#box11").val().trim();
    localStorage.setItem('text11', item11);
}) 

//box12 save
$("#save12").on("click", function () {
    var item12 = $("#box12").val().trim();
    localStorage.setItem('text12', item12);
}) 

//box1 save
$("#save1").on("click", function () {
    var item1 = $("#box1").val().trim();
    localStorage.setItem('text1', item1);
}) 

//box2 save
$("#save2").on("click", function () {
    var item2 = $("#box2").val().trim();
    localStorage.setItem('text2', item2);
}) 

//box3 save
$("#save3").on("click", function () {
    var item3 = $("#box3").val().trim();
    localStorage.setItem('text3', item3);
}) 

//box4 save
$("#save4").on("click", function () {
    var item4 = $("#box4").val().trim();
    localStorage.setItem('text4', item4);
}) 

//box5 save
$("#save5").on("click", function () {
    var item5 = $("#box5").val().trim();
    localStorage.setItem('text5', item5);
}) 

//Function to display text on page refresh
$(document).ready(function () {
    var text9 = localStorage.getItem('text9');
    // console.log(localStorage.getItem('text9'));
    $("#box9").append(text9);

    var text10 = localStorage.getItem('text10');
    $("#box10").append(text10);

    var text11 = localStorage.getItem('text11');
    $("#box11").append(text11);

    var text12 = localStorage.getItem('text12');
    $("#box12").append(text12);

    var text1 = localStorage.getItem('text1');
    $("#box1").append(text1);

    var text2 = localStorage.getItem('text2');
    $("#box2").append(text2);

    var text3 = localStorage.getItem('text3');
    $("#box3").append(text3);

    var text4 = localStorage.getItem('text4');
    $("#box4").append(text4);

    var text5 = localStorage.getItem('text5');
    $("#box5").append(text5);
})


