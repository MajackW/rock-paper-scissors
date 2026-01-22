const body = document.querySelector("body");
let humanScore = 0;
let computerScore = 0;
function renderGameUI(){
    const container = document.createElement("div");
    container.classList.add("container");
    renderTitle(container);
    renderOptions(container);
    renderChoices(container);
    renderScores(container);
    body.appendChild(container);
    return(container);
}
function renderTitle(container){
    const gameTitle = document.createElement("div");
    gameTitle.classList.add("title");
    const header = document.createElement("h1");
    header.textContent = "Rock Paper Scissors";
    gameTitle.appendChild(header);
    container.appendChild(gameTitle);
}
function renderOptions(container){
    const optionsContainer = document.createElement("div")
    optionsContainer.classList.add("options");
    const options = ["rock","paper","scissors"];
    options.forEach((option) => {
        const button = document.createElement("button");
        button.id = option;
        button.textContent = option;
        optionsContainer.appendChild(button)
    });
    container.appendChild(optionsContainer);
}
function renderChoices(container){
    const choicesContainer = document.createElement("div");
    choicesContainer.classList.add("choicesContainer");
    choices = ["humanChoice","result","computerChoice"];
    choices.forEach((choice) => {
        const card = document.createElement("div");
        card.classList.add(choice);
        choicesContainer.appendChild(card);
    });
    container.appendChild(choicesContainer);
}
function renderScores(container){
    const scoresContainer = document.createElement("div");
    scoresContainer.classList.add("scoresContainer");
    scores = ["humanScore","computerScore"];
    scores.forEach((score) => {
        const card = document.createElement("div");
        card.id = score;
        scoresContainer.appendChild(card);
    });
    container.appendChild(scoresContainer);
}
function getComputerChoice(){
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1){
        return(rock);
    }else if(randomNum === 2){
        return(paper);
    }else{
        return(scissors);
    }
}
function getwinner(humanChoice,computerChoice){
    if (humanChoice === computerChoice){
        return("tie");
    }
    humanWins = (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
    return humanWins ? "human" : "computer";
}
function playGame(){
    const ui = renderGameUI();
    const container = ui.querySelector(".choicesContainer");
    eventListeners(ui);

}
function eventListeners(container){
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            computerChoice = getComputerChoice()
            console.log(computerChoice);
            const winner = getwinner(event.target.id, computerChoice);
            updateResult(winner,container,event.target.id,computerChoice);
            updateChoices(container,event.target.id,computerChoice)
            updateScores(container);
        });
    });
}
function updateResult(winner,container,humanChoice,computerChoice){
    if (winner === "human"){
        const resultContainer = container.querySelector(".result")
        resultContainer.replaceChildren();
        humanScore++;
        const result = document.createElement("p");
        result.textContent = `you win, ${humanChoice} beats ${computerChoice}`;
        resultContainer.appendChild(result); 
    }else if(winner === "computer"){
        const resultContainer = container.querySelector(".result")
        resultContainer.replaceChildren();
        computerScore++;
        const result = document.createElement("p");
        result.textContent = `computer wins, ${computerChoice} beats ${humanChoice}`;
        resultContainer.appendChild(result); 
    }else{
        const resultContainer = container.querySelector(".result")
        resultContainer.replaceChildren();
        const result = document.createElement("p");
        result.textContent = `Its a tie, you both chose ${humanChoice}`;
        resultContainer.appendChild(result);        
    }
}
function updateScores(container){
    const humanScoreContainer = container.querySelector("#humanScore");
    const computerScoreContainer = container.querySelector("#computerScore");
    humanScoreContainer.replaceChildren();
    computerScoreContainer.replaceChildren();
    const humanHeader = document.createElement("h2");
    const computerHeader = document.createElement("h2");
    humanHeader.textContent = "Your Score:";
    computerHeader.textContent = "Computer's Score:";
    const humanPoints = document.createElement("p");
    const computerPoints = document.createElement("p");
    humanPoints.textContent = `${humanScore}`;
    computerPoints.textContent = `${computerScore}`;
    humanScoreContainer.append(humanHeader,humanPoints);
    computerScoreContainer.append(computerHeader,computerPoints);
}
function updateChoices(container,humanChoice,computerChoice){
    const humanChoiceContainer = container.querySelector(".humanChoice");
    const computerChoiceContainer = container.querySelector(".computerChoice");
    humanChoiceContainer.replaceChildren();
    computerChoiceContainer.replaceChildren();
    const humanHeader = document.createElement("h2");
    const computerHeader = document.createElement("h2");
    humanHeader.textContent = "Your Choice:";
    computerHeader.textContent = "Computer's Choice:";
    const humanPoints = document.createElement("p");
    const computerPoints = document.createElement("p");
    humanPoints.textContent = `${humanChoice}`;
    computerPoints.textContent = `${computerChoice}`;
    humanChoiceContainer.append(humanHeader,humanPoints);
    computerChoiceContainer.append(computerHeader,computerPoints);    
}
playGame();