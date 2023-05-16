// GIVEN I am taking a code quiz
// WHEN I click the start button
//target start button
var startBtn = document.getElementById("start")
//add event listener to button click
startBtn.addEventListener("click", function(event) {
    //stop bubbling
    event.stopPropagation;
    //THEN a timer starts and I am presented with a question
    //Initialise time to 75s
    let time = 75;
    //setInterval function to trigger function every 1000 milliseconds
    var timer = setInterval(setTime, 1000);
    //setTime function will be run to display time and reduce time by 1
    function setTime() {
        //target time span
        var timeDisplay = document.getElementById("time");
        //set text content to time
        timeDisplay.textContent = time;
        //reduce time by 1
        time --;
    }
});


// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score