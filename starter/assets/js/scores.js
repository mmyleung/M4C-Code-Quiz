//save values from local storage to variables
var scores = JSON.parse(localStorage.getItem("score"));
//create list elements according to number of keys in local storage
//target ordered list
var highscoreList = document.getElementById("highscores");

//array that saves the score only
var sortedScores = scores.sort(function(a, b) {
    return b.score - a.score
});
console.log(sortedScores);
//for loop to add list elements dynamically
if (scores !== null) {
    for(let i = 0; i < sortedScores.length; i++){
        //store initials
        var init = sortedScores[i].name;
        var score = sortedScores[i].score;
        //create new list elements
        var listElements = document.createElement("li");
        //set text content to list item
        listElements.textContent = `${init} - ${score}`;
        //append to high score list
        highscoreList.appendChild(listElements);
    }

}
