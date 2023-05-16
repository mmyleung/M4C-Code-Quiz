// GIVEN I am taking a code quiz
// WHEN I click the start button
//target start button
var startBtn = document.getElementById("start")
//target question div
var questionDiv = document.getElementById("questions");
//target question title div
var titleDiv = document.getElementById("question-title");
//target choices div
var choicesDiv = document.getElementById("choices")
//target end-screen
var endScreen = document.getElementById("end-screen");

//Initialise time to 75s
let time = 75;
var timer;

//add event listener to button click
startBtn.addEventListener("click", function(event) {
    //stop bubbling
    event.stopPropagation;
    //THEN a timer starts and I am presented with a question
    //setInterval function to trigger function every 1000 milliseconds
    timer = setInterval(setTime, 1000);
    //hide start-screen and display question screen
    //target start-screen
    var startScreen = document.getElementById("start-screen");
    //set class attribute to hide
    startScreen.setAttribute("class", "hide");
    //target questions div
    var questionScreen = document.getElementById("questions");
    //set class attribute to start
    questionScreen.setAttribute("class", "start");
});

//setTime function will be run to display time and reduce time by 1
function setTime() {
    //target time span
    var timeDisplay = document.getElementById("time");
    //set text content to time
    timeDisplay.textContent = time;
    //reduce time by 1
    time --;
}


//set variable for current question - initialised to 0
var currentQuestion = 0;

//function to display question
function displayQuestion() {
    //set titleDiv to current question title
    titleDiv.textContent = questionObject[currentQuestion].question;
    //remove existing choice buttons
    choicesDiv.innerHTML = "";
    //dynamically add buttons according to length choices array
    for (let i = 0; i < questionObject[currentQuestion].choices.length; i++) {
        var choiceButton = document.createElement("button");
        //set text content to equal the choices in choices array
        choiceButton.textContent = questionObject[currentQuestion].choices[i];
        //append the buttons to the choices div
        choicesDiv.appendChild(choiceButton);
        //add event listener on choice buttons
        choiceButton.addEventListener("click", checkAnswer);
    }
}

displayQuestion();

//checkAnswer function that compares the clicked button text content with answer
function checkAnswer(eventObj) {
    eventObj.stopPropagation();
    //target feedback div
    var feedback = document.getElementById("feedback");
    feedback.setAttribute("class", "feedback start");
    if (this.textContent === questionObject[currentQuestion].answer) {
        feedback.textContent = "Correct!"
        console.log(`click correct`)
        //add 1 to current question index
        currentQuestion++;
        //call checkTime
        checkTime();
        //display new question
        displayQuestion();
    } else {
        feedback.textContent = "Wrong!"
        console.log(`click wrong`)
        //call function to take away time
        subtractTime();
        //add 1 to current question index
        currentQuestion++;
        //call checkTime
        checkTime();
        //display new question
        displayQuestion();
    }
}



//function to subtract time which is called when answer is incorrect
function subtractTime() {
    time = time - 15;
    console.log(time);
    setTime();
}

//checkTime function called when button is clicked
function checkTime() {
    if(time <= 0) {
        //set time to 0
        time = 0;
        setTime();
        //clear interval to stop timer
        clearInterval(timer);
        questionDiv.setAttribute("class", "hide");
        endScreen.setAttribute("class", "start");
    } else {
        return
    }
}

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score