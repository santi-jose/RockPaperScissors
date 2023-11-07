// play rock paper scissors

// global variables tracking elements in index.html

// get div to post results of each round
const resultDiv = document.querySelector("#resultDiv");

// get button elements from index.html
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

// global variables tracking game state

// initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// initialize round counter
let round = 0;

// functions up here because arrow functions aren't hoisted

// getComputerChoice
// randomly return either Rock, Paper, or Scissors
const getComputerChoice = () => {
    // Math.random() returns random number betwee 0 (inclusive) and 1 (exclusive)
    // Math.random() * 3 -> 0 (inclusive) to 3 (exclusive)
    // Math.floor(Math.random * 3) -> get whole numbers from 0 to 2 (inclusive)
    // Math.floor(Math.random() * 3) + 1 -> 1 to 3 (inclusive) whole numbers
    let hand = Math.floor((Math.random() * 3)) + 1;
    switch (hand) {
        case 1:
            // console.log(`computer hand: rock`);
            return "rock";

        case 2:
            // console.log(`computer hand: paper`);
            return "paper";

        case 3:
            // console.log(`computer hand: scissors`);
            return "scissors";

        default:
            console.log("Something went wrong inside getComputerChoice() switch statement.");
    }
}

// resetGame
// this function resets all initial variables necessary to keep track
// of game state to their initial values. It also clears the resultDiv
// so that it is blank to rewrite into for the new game. 
const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    round = 0;

    // clear out the resultDiv
    let pRound = resultDiv.lastElementChild; // get last child in resultDiv
    while (pRound) { // while we have a valid node
        resultDiv.removeChild(pRound); // remove pRound, paragraph round
        pRound = resultDiv.lastElementChild; // get new last child in resultDiv
    }
}

// playRound function plays a round of rock paper scissors given 
// playerSelection and computerSelection arguments. Returns a string
// which determines how the round plays out. 
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection !== null) { // if we received user input

        playerSelection = playerSelection.toLowerCase(); // set player selection to lower case
        if (playerSelection === "rock") { // player selected rock
            // we play a round, so we increment round counter
            round++;

            if (computerSelection === "rock") { // computer picked rock
                return "It's a draw! Computer chose Rock. You chose Rock. Rock vs Rock"; // player draw
            } else if (computerSelection === "paper") { // computer picked paper
                computerScore++; // increment computerScore
                return "You lose! Computer chose Paper. You chose Rock. Paper beats Rock!"; // player loss
            } else { // computerSelection === scissors; computer picked scissors
                playerScore++;
                return "You win! Computer chose Scissors. You chose Rock. Rock beats Scissors!"; // player win
            }
        } else if (playerSelection === "paper") { // player selected paper
            // we play a round, so we increment round counter
            round++;

            if (computerSelection === "rock") { // computer picked rock
                playerScore++;
                return "You win! Computer chose Rock. You chose Paper. Paper beats Rock!"; // player win
            } else if (computerSelection === "paper") {  // computer picked paper
                return "It's a draw! Computer chose Paper. You chose Paper. Paper vs Paper"; // player draw
            } else { // computerSelection === scissors; computer picked scissors
                computerScore++;
                return "You lose! Computer chose Scissors. You chose Paper. Scissors beats Paper!"; // player loss
            }
        } else if (playerSelection === "scissors") { // player selected scissors
            // we play a round, so we increment round counter
            round++;

            if (computerSelection === "rock") { // computer picked rock
                computerScore++;
                return "You lose! Computer chose Rock. You chose Scissors. Rock beats Scissors!"; // player lose
            } else if (computerSelection === "paper") { // computer picked paper
                playerScore++;
                return "You win! Computer chose Paper. You chose Scissors. Scissors beats Paper!"; // player win
            } else { // computerSelection === scissors; computer picked scissors
                return "It's a draw! Computer chose Scissors. You chose Scissors. Scissors vs Scissors"; // player draw
            }
        } else { // input was invalid
            return "Invalid input! Enter a playable hand!";
        }
    } else { // playerSelection === null. (No input)
        return "No hand played! Enter a playable hand!";
    }

}

// event listener for rock button
rockButton.addEventListener("click", function () {
    if ((playerScore === 5) || (computerScore === 5)) {
        alert("Starting new game!");
        resetGame();
    } else {
        const result = playRound("rock", getComputerChoice());
        console.log(result);
        console.log(`Round ${round}: 
    playerScore: ${playerScore}, Computer: ${computerScore}`);

        const p = document.createElement("p");
        p.innerText = result + `
    Round ${round}: 
    playerScore: ${playerScore}, Computer: ${computerScore}`;
        resultDiv.appendChild(p);

        if ((playerScore === 5) || (computerScore === 5)) {
            const gameResult = document.createElement("p");
            if (playerScore === 5) {
                gameResult.innerText = `Game over!
            You win! 
            playerScore: ${playerScore}, computerScore: ${computerScore}`;
            } else { // computerScore == 5
                gameResult.innerText = `Game over!
            You lose!
            playerScore: ${playerScore}, computerScore: ${computerScore}`;
            }
            resultDiv.append(gameResult);
        }
    }
});

// event listener for paper button
paperButton.addEventListener("click", function () {
    if (playerScore === 5 || computerScore === 5) {
        alert("Starting new game!");
        resetGame();
    } else {
        const result = playRound("paper", getComputerChoice());
        console.log(result);
        console.log(`Round ${round}: 
    playerScore: ${playerScore}, Computer: ${computerScore}`);

        // create new paragraph element describing round results in html
        const p = document.createElement("p");
        p.innerText = result + `
    Round ${round}: 
    playerScore: ${playerScore}, Computer: ${computerScore}`;
        resultDiv.appendChild(p); // append new paragraph element

        // if either our playerScore or computerScore reach 5
        if ((playerScore === 5) || (computerScore === 5)) {
            const gameResult = document.createElement("p");
            if (playerScore === 5) {
                gameResult.innerText = `Game over!
            You win! 
            playerScore: ${playerScore}, computerScore: ${computerScore}`;
            } else { // computerScore == 5
                gameResult.innerText = `Game over!
            You lose!
            playerScore: ${playerScore}, computerScore: ${computerScore}`;
            }
            resultDiv.append(gameResult);
        }
    }
});

// event listener for scissors button
scissorsButton.addEventListener("click", function () {
    if ((playerScore === 5) || (computerScore === 5)) {
        alert("Starting new game!"); // alert user they are starting a new game
        resetGame(); // reset game if we have 
    } else {
        const result = playRound("scissors", getComputerChoice());
        console.log(result);
        console.log(`Round ${round}: 
    playerScore: ${playerScore}, Computer: ${computerScore}`);

        const p = document.createElement("p");
        p.innerText = result + `
    Round ${round}: 
    playerScore: ${playerScore}, Computer: ${computerScore}`;
        resultDiv.appendChild(p);

        if ((playerScore === 5) || (computerScore === 5)) {
            const gameResult = document.createElement("p");
            if (playerScore === 5) {
                gameResult.innerText = `Game over!
            You win! 
            playerScore: ${playerScore}, computerScore: ${computerScore}`;
            } else { // computerScore == 5
                gameResult.innerText = `Game over!
            You lose!
            playerScore: ${playerScore}, computerScore: ${computerScore}`;
            }
            resultDiv.append(gameResult);
        }
    }
});