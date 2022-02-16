//alert('Let\'s play a game');

let playerSelection = prompt('Please pick your weapon: rock, paper, scissors').toLowerCase();
let option = ['rock','paper','scissors'];
let computerSelection = computerPlay();

//function that picks a random option for the computer
function computerPlay() {
    return option[Math.floor(Math.random()*option.length)]
}

//main function for one round 

function playRound(playerOption, computerOption) {

    if (option.includes(playerOption))  {
        //if playerOption is rock
        if(playerOption==='rock') {
        if(computerSelection==='scissors') {
            //rock beats scissors
            alert(`${playerOption} beats ${computerOption}`);
        } else {
            if(computerSelection==='paper') {
                //paper beats rock
                alert(`${computerOption} beats ${playerOption}`);
            } else {
                //it's a tie
                alert('it is a tie');
            }
        }
        }

        //if playerOption is paper
        if(playerOption==='paper') {
        if(computerSelection==='rock') {
            //paper beats rock
            alert(`${playerOption} beats ${computerOption}`);
        } else {
            if(computerSelection==='scissors') {
                //scissors beats paper
                alert(`${computerOption} beats ${playerOption}`);
            } else {
                //it's a tie
                alert('it is a tie');
            }
        }
        }

        //if playerOption is scissors
        if(playerOption==='scissors') {
        if(computerSelection==='paper') {
            //scissors beats paper
            alert(`${playerOption} beats ${computerOption}`);
        } else {
            if(computerSelection==='rock') {
                //rock beats scissors
                alert(`${computerOption} beats ${playerOption}`);
            } else {
                //it's a tie
                alert('it is a tie');
            }
        }
        }
    } else {
        alert(`${playerOption} is not a valid option`)
    }

return `${playerOption} and ${computerOption}`
}

const winner = playRound(playerSelection,computerSelection);

console.log(`The user picked ${playerSelection} and the computer picked ${computerSelection}`);

