//alert('Let\'s play a game');

//let playerSelection = prompt('Please pick your weapon: rock, paper, scissors').toLowerCase();

let option = ['rock','paper','scissors'];

let computerSelection = computerPlay();

function computerPlay() {
    return option[Math.floor(Math.random()*option.length)]
}

console.log(computerPlay());

//This function will check the user's input
//If it isn't rock, paper or scissors --> needs to enter a valid word
function checkWord(playerSelection) {
    if ((playerSelection==='rock')||(playerSelection==='paper')||(playerSelection==='scissors')) {
        return playerSelection;
    } else {
        return alert('Word not valid');
    }
}

//console.log(checkWord(playerSelection));
