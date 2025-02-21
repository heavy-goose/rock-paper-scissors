let humanScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

const buttons = document.querySelectorAll("button");
const replayButton = document.querySelector("#replay");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const message = document.querySelector(".message");
const choices = document.querySelector("#choices");
const roundResult = document.querySelector("#round-result");

rock.addEventListener("click", (e) => playRound("rock"));
paper.addEventListener("click", (e) => playRound("paper"));
scissors.addEventListener("click", (e) => playRound("scissors"));

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomInt = Math.floor(Math.random() * 3);
    return choices[randomInt];
}

// Get the result for a single pairing of rock, paper, scissors
function getResult(computer, human) {
    choices.innerText = `Player: ${human} |vs| ${computer}: Computer`
    if (computer === human) {
        return "tie";
    } else if ((computer === "rock" && human === "scissors") || (computer === "paper" && human === "rock") || (computer === "scissors" && human == "paper")) {
        return "computer"
    } else {
        return "human";
    }
}

// Simulate a single round of rock, paper, scissors.
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let winner = getResult(computerChoice, humanChoice);
    switch (winner) {
        case "computer":
            roundResult.innerText = "Computer + 1 Point!"
            computerScore++;
            break;
        case "human":
            roundResult.innerText = "Player + 1 Point!"
            humanScore++;
            break;
        default:
            roundResult.innerText = "It's a tie!"
            break;
    }
    displayScore();
    
    // check if game is over
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            roundResult.innerText = "YOU WIN";
        } else {
            roundResult.innerText = "YOU LOOSE";
        }
        // Hide choice buttons; "un-hide" reset button
        buttons.forEach((button) => button.toggleAttribute("hidden"));
    }
}

replayButton.addEventListener("click", (e) => {
    resetGame();
})
    
function displayScore() {
    playerScoreDisplay.innerHTML = `Player: ${humanScore}`;
    computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    displayScore();
    roundResult.innerText = "";
    choices.innerText = "";
    buttons.forEach((button) => button.toggleAttribute("hidden"));
}