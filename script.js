let humanScore = 0;
let computerScore = 0;

//function for playing the game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`you won this round ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if(humanChoice === "rock" && computerChoice === "paper") {
        console.log(`you loose ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice === computerChoice) {
        console.log(`its a tie you both chose ${humanChoice}`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`you won this round ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`you loose ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`you loose ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }else {
        console.log(`you win ${humanChoice} beats ${computerChoice}`);
        humanScore++;
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