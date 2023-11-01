// play rock paper scissors
const game = () => {
    // initialize player and computer scores
    let playerScore = 0;
    let computerScore = 0;

    // initialize round counter
    let round = 0;

    // functions up here because arrow functions aren't hoisted
    // functions moved into game function because they need to access
    // player and computer scores

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

    // play 5 rounds
    while ((playerScore < 3) && (computerScore < 3)) {
        // call playRound with prompt() as userSelection and getComputerChoice for computerSelection
        const result = playRound(prompt("Enter your hand!"), getComputerChoice());
        console.log(result);
        alert(result);

        console.log(`Round ${round}: 
        playerScore: ${playerScore}, computerScore: ${computerScore}`);
        alert(`Round: ${round}: 
        playerScore: ${playerScore}, computerScore: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log(`Player wins game! Player: ${playerScore}, Computer: ${computerScore}`);
        alert(`Player wins game! Player: ${playerScore}, Computer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Player loses game! Player: ${playerScore}, Computer: ${computerScore}`);
        alert(`Player loses game! Player: ${playerScore}, Computer: ${computerScore}`);
    } else {
        console.log(`Game ends in draw! Player: ${playerScore}, Computer: ${computerScore}`);
        alert(`Game ends in draw! Player: ${playerScore}, Computer: ${computerScore}`);
    }
}

// tie button in html to game
const button = document.querySelector("button");
button.addEventListener("click", game);
