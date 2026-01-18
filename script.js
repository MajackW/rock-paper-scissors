let humanScore = 0;
let computerScore = 0;

//function for playing the game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`its a tie you both chose ${humanChoice}`);
        return;
    }

    const humanWins =
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper");

    if (humanWins) {
        console.log(`you won this round ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`you loose ${computerChoice} beats ${humanChoice}`);
        computerScore++;
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

/*  this function gets human choice between
rock paper or scissors and converts to lowercase
*/
function getHumanChoice(){
    let humanChoice;
    humanChoice = prompt("enter your choice: rock, paper or scissors? ");
    let humanChoiceLower = humanChoice.toLowerCase();
    return humanChoiceLower;
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
    let winner = (humanScore > computerScore) ? `you won with ${humanScore} points` : `computer won with ${computerScore} points`;
    console.log(winner);
}
playGame();