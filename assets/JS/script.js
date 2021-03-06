const choices = ["rock", "paper", "scissors"];

//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let optionType = this.getAttribute("data-type");
            runGame(optionType);
        })
    }
})

/**
 * This function will generate randomly the computer selection between the options: rock, paper, scissors
 */
function computerSelection() {

    let computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerRandomChoice;
}

/**
 * This function will increase the user's score by one and display the value in the user box
 */
function win(user, computer) {

    let oldUserScore = parseInt(document.getElementById('user-points').innerText);
    document.getElementById('user-points').innerText = ++oldUserScore;

    document.getElementById("user-box").style.border = "4px solid green";
    document.getElementById("computer-box").style.border = "4px solid red";

    document.getElementById("battle-text").innerHTML = `${user} beats ${computer}. YOU WIN!`;
}

/**
 * This function will increase the computer's score by one and display the value in the computer box
 */
function lose(user, computer) {

    let oldUserScore = parseInt(document.getElementById('computer-points').innerText);
    document.getElementById('computer-points').innerText = ++oldUserScore;

    document.getElementById("user-box").style.border = "4px solid red";
    document.getElementById("computer-box").style.border = "4px solid green";

    document.getElementById("battle-text").innerHTML = `${computer} beats ${user}. YOU LOSE!`;
}

/**
 * This function will increase the computer's score by one and display the value in the computer box
 */
function draw(user, computer) {

    document.getElementById("battle-text").innerHTML = `${user} equals ${computer}. IT'S A DRAW!`;

    document.getElementById("computer-box").style.border = "none";
    document.getElementById("user-box").style.border = "none";
}

/**
 * This function will run the main game. It needs to return who wins
 */
function runGame(userChoice) {

    let computerChoice = computerSelection();

    if (userChoice === computerChoice) {
        draw(userChoice, computerChoice);
    } else { //if they are different
        if (((userChoice === 'rock') && (computerChoice === 'scissors')) || ((userChoice === 'paper') && (computerChoice === 'rock')) || ((userChoice === 'scissors') && (computerChoice === 'paper'))) {
            win(userChoice, computerChoice);
        } else if (((userChoice === 'rock') && (computerChoice === 'paper')) || ((userChoice === 'paper') && (computerChoice === 'scissors')) || ((userChoice === 'scissors') && (computerChoice === 'rock'))) {
            lose(userChoice, computerChoice);
        }
    }
    userImage(userChoice);
    computerimage(computerChoice);
    gameCount(userChoice, computerChoice);
}

/**
 * function will track the games round and show the user the count while playing 
 */
function gameCount(user, computer) {

    let gameNumber = parseInt(document.getElementById("games").innerText);

    if (user && computer) {
        document.getElementById("games").innerText = ++gameNumber
    }
    gameOver(gameNumber);
}

/**
 * This function will evaluate the number of rounds and will end the game and return the winner.
 */
function gameOver(round) {

    let userScore = parseInt(document.getElementById("user-points").textContent);
    let computerScore = parseInt(document.getElementById("computer-points").textContent);

    if (round === 5) {

        document.getElementsByClassName("content-option")[0].style.visibility = "hidden";

        document.getElementsByClassName("result-area")[0].style.visibility = "hidden";

        document.getElementsByClassName("game-over")[0].style.visibility = "visible";

        if(userScore === computerScore) {
            document.getElementById("final-message").innerText = `GAME OVER!! This was a draw. Final result: ${userScore} vs. ${computerScore}. Do you want another chance?`
        } else {
            if(userScore > computerScore) {
                document.getElementById("final-message").innerText = `GAME OVER!! Congrats! You won! Final result: ${userScore} vs. ${computerScore}. Do you want to play again?`
            } else {
                document.getElementById("final-message").innerText = `GAME OVER!! Awww...You lost! Final result: ${userScore} vs. ${computerScore}. Do you want another round?`
            }
        }
    }  
    userDecision();
}

/**
 * This function will evaluate the user decision for restarting the game or ending the game
 */
function userDecision() {
    let decisions = document.getElementsByClassName("btn-over");

    for (decision of decisions) {
        decision.addEventListener("click", function(){
            let decisionType = this.getAttribute("data-type");
            if(decisionType === 'y') {
                window.location.reload();
            } else {
                document.getElementById("final-message").innerText = "See you soon!";
                document.getElementsByClassName("decision")[0].style.visibility = "hidden";
            }
        });
    }
}

/**
 * Function will change the chosen emoji from the user
 */
function userImage(userChoice) {

    let userImages = document.getElementById("user-box");

    if (userChoice === "rock") {
        userImages.innerHTML = "????";
    } else if (userChoice === "paper") {
        userImages.innerHTML = "???";
    } else {
        userImages.innerHTML = "??????";
    }
}

/**
 * Function will change the chosen emoji from the computer
 */
function computerimage(computerChoice) {

    let computerImages = document.getElementById("computer-box");

    if (computerChoice === "rock") {
        computerImages.innerHTML = "????";
    } else if (computerChoice === "paper") {
        computerImages.innerHTML = "???";
    } else {
        computerImages.innerHTML = "??????";
    }
}