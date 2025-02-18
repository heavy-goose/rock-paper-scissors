let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    return choices[randomInt];
}

function getHumanChoice() {
    let keepGoing = true;
    while (keepGoing) {
        let choice = prompt("Chose 'rock', 'paper', or 'scissors': ").toLowerCase();
        if (choice === "rock" || choice === "scissors" || choice === "paper" ) {
            keepGoing = false;
            return choice;
        } else {
            alert("Enter a valid value!");
        }
    }
}

// Get the result for a single pairing of rock, paper, scissors and return "toe" or the winner, i.e. "computer" or "human"
function getResult(computer, human) {
    console.log(`Player chooses: ${human} | Computer chooses: ${computer}`);
    if (computer === human) {
        return "tie";
    } else if ((computer === "rock" && human === "scissors") || (computer === "paper" && human === "rock") || (computer === "scissors" && human == "paper")) {
        console.log(`${computer} beats ${human}!`);
        return "computer"
    } else {
        console.log(`${human} beats ${computer}!`);
        return "human";
    }
}

// Simulate a single round of rock, paper, scissors.
// Add score, and log the result.
function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    let winner = getResult(computerChoice, humanChoice);
    switch (winner) {
        case "computer":
            console.log("Computer wins!");
            computerScore++;
            break;
        case "human":
            console.log("Player wins!");
            humanScore++;
            break;
        default:
            console.log("It's a tie!");
            break;
    }
    console.log(`Player Score: ${humanScore} | Computer Score: ${computerScore}`);

}

// simulate a game of 5 rounds
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if(humanScore > computerScore) {
        console.log(`Player wins the game with ${playerScore} points!`);
    } else {
        console.log(`Computer wins the game with ${computerScore} points!`);
    }
}

playGame();

    
