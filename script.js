// play rock paper scissors
const game = () => {
    // initialize player and computer scores
    let playerScore = 0;
    let computerScore = 0;

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
        playerSelection = playerSelection.toLowerCase(); // set player selection to lower case
        if (playerSelection === "rock") { // player selected rock
            if (computerSelection === "rock") { // computer picked rock
                return "It's a draw! Rock vs Rock"; // player draw
            } else if (computerSelection === "paper") { // computer picked paper
                computerScore++; // increment computerScore
                return "You lose! Paper beats Rock!"; // player loss
            } else { // computerSelection === scissors; computer picked scissors
                playerScore++;
                return "You win! Rock beats Scissors!"; // player win
            }
        } else if (playerSelection === "paper") { // player selected paper
            if (computerSelection === "rock") { // computer picked rock
                playerScore++;
                return "You win! Paper beats Rock!"; // player win
            } else if (computerSelection === "paper") {  // computer picked paper
                return "It's a draw! Paper vs Paper"; // player draw
            } else { // computerSelection === scissors; computer picked scissors
                computerScore++;
                return "You lose! Scissors beats Paper!"; // player loss
            }
        } else if (playerSelection === "scissors") { // player selected scissors
            if (computerSelection === "rock") { // computer picked rock
                computerScore++;
                return "You lose! Rock beats Scissors!"; // player lose
            } else if (computerSelection === "paper") { // computer picked paper
                playerScore++;
                return "You win! Scissors beats Paper!"; // player win
            } else { // computerSelection === scissors; computer picked scissors
                return "It's a draw! Scissors vs Scissors"; // player draw
            }
        } else { // input was invalid
            return "Invalid input!";
        }

    }

    // play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Enter your hand!"), getComputerChoice()));
        console.log(`playerScore: ${playerScore}, computerScore: ${computerScore}`);
    }

    if(playerScore > computerScore){
        console.log(`Player wins game! Player: ${playerScore}, Bot: ${computerScore}`);
    }else if(playerScore < computerScore){
        console.log(`Player loses game! Player: ${playerScore}, Bot: ${computerScore}`);
    }else{
        console.log(`Game ends in draw! Player: ${playerScore}, Bot: ${computerScore}`);
    }
}

game();
