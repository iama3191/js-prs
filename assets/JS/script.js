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
 * This function will increase the user's score by one and display the value in the user box
 */
function win(userOption, computerOption) {

    let oldUserScore = parseInt(document.getElementById('user-points').innerText);
    document.getElementById('user-points').innerText = ++oldUserScore;

    document.getElementById("battle-text").innerText =  "You win!";
}

/**
 * This function will increase the computer's score by one and display the value in the computer box
 */
function lose(userOption, computerOption) {

    let oldUserScore = parseInt(document.getElementById('computer-points').innerText);
    document.getElementById('computer-points').innerText = ++oldUserScore;

    document.getElementById("battle-text").innerText =  "You loose!";
}


/**
 * This function will increase the computer's score by one and display the value in the computer box
 */
 function draw(userOption, computerOption) {
    
    document.getElementById("battle-text").innerText =  "It's a draw";
    
}

/**
 * This function will run the main game. It needs to return who wins
 */
function runGame(userChoice) {

    let computerChoice = computerSelection();
    console.log("your choice is " + userChoice);
    console.log("computer's choice is " + computerChoice);

    if(userChoice === computerChoice) {
        draw(userChoice, computerChoice);
    } else { //if they are different
            if (((userChoice==='rock') && (computerChoice==='scissors')) || ((userChoice==='paper') && (computerChoice==='rock')) || ((userChoice==='scissors') && (computerChoice==='paper'))) {
                win(userChoice, computerChoice);
            } else if (((userChoice==='rock') && (computerChoice==='paper')) || ((userChoice==='paper') && (computerChoice==='scissors')) || ((userChoice==='scissors') && (computerChoice==='rock'))) {
                lose(userChoice, computerChoice);
            }
        }
}
