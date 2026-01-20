let humanScore = 0;
let computerScore = 0;

const message = document.querySelector(".message");
function messageToDisplay(text){
    message.replaceChildren();
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    message.appendChild(paragraph);
}
//function for playing the game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        const message = (`its a tie you both chose ${humanChoice}
            you have ${humanScore} point(s) against computer's 
            ${computerScore} point(s)`);
            messageToDisplay(message)
        return;
    }

    const humanWins =
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper");

    if (humanWins) {
        humanScore++;
        const message = (`you won this round ${humanChoice} beats ${computerChoice}
            you have ${humanScore} point(s) against computer's 
            ${computerScore} point(s)`);
            messageToDisplay(message);
    } else {
        computerScore++;
        const message = (`you loose ${computerChoice} beats ${humanChoice}
            you have ${humanScore} point(s) against computer's 
            ${computerScore} point(s)`);
            messageToDisplay(message);
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
        playGame(choice.id, getComputerChoice()));
});
function playGame(humanChoice,computerChoice){
    playRound(humanChoice,computerChoice);
    if (humanScore === 5){
        displaywinner("human");
    }else if(computerScore === 5){
        displaywinner("computer");
    }
}
function displaywinner(winner){
    const winnermessage = document.createElement("h1");
    const playGround = document.querySelector("playerSelection");
    if (winner === "human"){
        winnermessage.textContent = "YOU WIN!!";
        humanScore = 0;
        computerScore = 0;
        playerSelection.replaceChildren();
        playerSelection.appendChild(winnermessage);
    } else{
        winnermessage.textContent = "COMPUTER WINS";
        computerScore = 0;
        humanScore = 0;
         playerGround.replaceChildren();
        playerGround.appendChild(winnermessage);
        
    }
}