
// getComputerChoice
// randomly return either Rock, Paper, or Scissors
const getComputerChoice = () => {
    // Math.random() returns random number betwee 0 (inclusive) and 1 (exclusive)
    // Math.random() * 3 -> 0 (inclusive) to 3 (exclusive)
    // Math.floor(Math.random * 3) -> get whole numbers from 0 to 2 (inclusive)
    // Math.floor(Math.random() * 3) + 1 -> 1 to 3 (inclusive) whole numbers
    let hand = Math.floor((Math.random() * 3)) + 1;
    switch(hand){
        case 1:
            console.log(`computer hand: rock`);
            return "rock";

        case 2:
            console.log(`computer hand: paper`);
            return "paper";

        case 3:
            console.log(`computer hand: scissors`);
            return "scissors";

        default:
            console.log("Something went wrong inside getComputerChoice() switch statement.");
    }
}

const playRound = (playerSelection, computerSelection) =>{
    playerSelection = playerSelection.toLowerCase(); // set player selection to lower case
    if(playerSelection === "rock"){ // player selected rock
        if(computerSelection === "rock"){ // computer picked rock
            return "It's a draw! Rock vs Rock"; // player draw
        }else if(computerSelection === "paper"){ // computer picked paper
            return "You lose! Paper beats Rock!"; // player loss
        }else{ // computerSelection === scissors; computer picked scissors
            return "You win! Rock beats Scissors!"; // player win
        }
    }else if(playerSelection === "paper"){ // player selected paper
        if(computerSelection === "rock"){ // computer picked rock
            return "You win! Paper beats Rock!"; // player win
        }else if(computerSelection === "paper"){  // computer picked paper
            return "It's a draw! Paper vs Paper"; // player draw
        }else{ // computerSelection === scissors; computer picked scissors
            return "You lose! Scissors beats Paper!"; // player loss
        }
    }else if(playerSelection === "scissors"){ // player selected scissors
        if(computerSelection === "rock"){ // computer picked rock
            return "You lose! Rock beats Scissors!"; // player lose
        }else if(computerSelection === "paper"){ // computer picked paper
            return "You win! Scissors beats Paper!"; // player win
        }else{ // computerSelection === scissors; computer picked scissors
            return "It's a draw! Scissors vs Scissors"; // player draw
        }
    }else{ // input was invalid
        return "Invalid input!";
    }

}

// test all possible combinations
// console.log(playRound("ROCK", "rock"));
// console.log(playRound("ROCK", "paper"));
// console.log(playRound("ROCK", "scissors"));

// console.log(playRound("PAPER", "rock"));
// console.log(playRound("PAPER", "paper"));
// console.log(playRound("PAPER", "scissors"));

// console.log(playRound("SCISSORS", "rock"));
// console.log(playRound("SCISSORS", "paper"));
// console.log(playRound("SCISSORS", "scissors"));


