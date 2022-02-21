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
 * This function will generate randomly the computer selection between the options: rock, paper, scissors
 */
function computerSelection() {
    let computerRandomChoice = choices[Math.floor(Math.random()*choices.length)];
     return computerRandomChoice;
}

/**
 * This function will run the main game
 */
function runGame(userChoice) {

    let computerChoice = computerSelection();
    console.log("your choice is " + userChoice);
    console.log("computer's choice is " + computerChoice);

    if(userChoice === computerChoice) {
        console.log("It's a draw.");
    } else { //if they are different
            if (((userChoice==='rock') && (computerChoice==='scissors')) || ((userChoice==='paper') && (computerChoice==='rock')) || ((userChoice==='scissors') && (computerChoice==='paper'))) {
                console.log(`The user wins! ${userChoice} beats ${computerChoice}`);
            } else if (((userChoice==='rock') && (computerChoice==='paper')) || ((userChoice==='paper') && (computerChoice==='scissors')) || ((userChoice==='scissors') && (computerChoice==='rock'))) {
                console.log(`The computer wins! ${computerChoice} beats ${userChoice}`);
            }
}
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