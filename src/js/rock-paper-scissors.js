const stoneBtn = document.getElementById("stoneBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const paperBtn = document.getElementById("paperBtn");
const computerScoreSpan = document.getElementById("computerScore");
const playerScoreSpan = document.getElementById("playerScore");
const message = document.getElementById("message");
const computerChoiceBtn = document.getElementById("computerChoice");

let playerScore = 0;
let computerScore = 0;

const choices = ["stone", "scissors", "paper"];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    computerChoiceBtn.textContent = "Комп’ютер: " + computerChoice;
    if (playerChoice === computerChoice) {
        message.style.color = "gray";
        message.textContent = "Нічия!";

    } else if (
        (playerChoice === "stone" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "stone")
    ) {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        message.style.color = "green";
        message.textContent = "Ви виграли раунд!";
        
    } else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
         message.style.color = "red";
        message.textContent = "Комп’ютер виграв раунд!";
       
    }
}

stoneBtn.addEventListener("click", () => playRound("stone"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
paperBtn.addEventListener("click", () => playRound("paper"));