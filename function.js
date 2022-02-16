//alert('Let\'s play a game');

let playerSelection = prompt('Please pick your weapon: rock, paper, scissors').toLowerCase();
let option = ['rock','paper','scissors'];
let message;
let computerSelection = computerPlay();

//This function will check the user's input
//If it isn't rock, paper or scissors --> needs to enter a valid word

    if (option.includes(playerSelection)) {
        computerPlay();//in here I can assure that won't go on if there isn't a valid word
        console.log(playerSelection);
        console.log(computerPlay());
    } else {
        message='Word not valid';
        console.log(message);
    }

//function that picks a random option for the computer
function computerPlay() {
    return option[Math.floor(Math.random()*option.length)]
}
