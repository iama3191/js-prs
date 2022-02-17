//Declare variable and ask for an input to the user
let userSelection = prompt('Let\'s play a game. Pick your weapon: rock, paper or scissors').toLowerCase();

//options available to pick from
let choices = ['rock','paper','scissors'];

//computer's selection is chosen by a function
let computerSelection = computerPlay();

//It's not defined, this will storage the return value from my functions.
let result;

//function for computer's selection
function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)]
}

//this will check the user's input and will call the playRound function if the input is between the option [rock,paper,scissors]
if (choices.includes(userSelection)) {
    result = playRound(userSelection, computerSelection);
    console.log(userSelection, computerSelection, result);
} else {
    console.log('Wrong input');
}

//main function
function playRound(userChoice, computerChoice) {
    if(userChoice===computerChoice) {
        result = 'It\'s a tie';
    } else { //if they are different
        if (((userChoice==='rock') && (computerChoice==='scissors')) || ((userChoice==='paper') && (computerChoice==='rock')) || ((userChoice==='scissors') && (computerChoice==='paper'))) {
            result = `The user wins! ${userChoice} beats ${computerChoice}`
        } else if (((userChoice==='rock') && (computerChoice==='paper')) || ((userChoice==='paper') && (computerChoice==='scissors')) || ((userChoice==='scissors') && (computerChoice==='rock'))) {
            result = `The computer wins! ${computerChoice} beats ${userChoice}`
        }
    }
    return result;
}