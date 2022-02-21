const choices = ["rock", "paper", "scissors"];

//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let optionType = this.getAttribute("data-type");
            runGame(optionType);
            //computerSelection();
        })        
    }
})

/**
 * This function will generate randomly the computer selection
 */
function computerSelection() {
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
     return computerChoice;
}
/**
 * This function will run the main game
 */
function runGame(userChoice) {
    console.log("your choice is " + userChoice)
}
/**
 * This function will check both answers and will return the correct one
 */
function checkAnswers() {

}

/**
 * This function will increment by 1 the user's score if it gets the correct answer
 */
function incrementUserScore() {

}

/**
 * This function will increment by 1 the computer's selection if it gets the correct answer
 */
function incrementComputerScore() {

}