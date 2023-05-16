// GIVEN I am taking a code quiz
// WHEN I click the start button
//target start button
var startBtn = document.getElementById("start")
//add event listener to button click
startBtn.addEventListener("click", function(event) {
    //stop bubbling
    event.stopPropagation;
    console.log(`start button is clicked`)
});


// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score