let humanScore = 0;
let computerScore = 0;

//function for playing the game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert(`its a tie you both chose ${humanChoice}
            \n you have ${humanScore} point(s) against computer's ${computerScore} point(s)`);
        return;
    }

    const humanWins =
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper");

    if (humanWins) {
        humanScore++;
        alert(`you won this round ${humanChoice} beats ${computerChoice}
            \n you have ${humanScore} point(s) against computer's ${computerScore} point(s)`);
    } else {
        computerScore++;
        alert(`you loose ${computerChoice} beats ${humanChoice}
            \n you have ${humanScore} point(s) against computer's ${computerScore} point(s)`);
    }
}

/*this function gets the computers choice
between rock paper or scissors 
*/
function getComputerChoice() {
    let rock ="rock";
    let paper = "paper";
    let scissors = "scissors";

    let min = 1;
    let max = 4;

    let randomNumber = Math.floor(Math.random() * (+max - +min) + +min);
    if (randomNumber === 1) {
        return rock;
    } else if (randomNumber === 2) {
        return paper;
    } else {
        return scissors;
    }

}
const choices = document.querySelectorAll("button");
choices.forEach((choice) => {
    choice.addEventListener("click", () => 
        playRound(choice.id, getComputerChoice()));
});