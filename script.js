const body = document.querySelector("body");
renderGameUI();
function renderGameUI(){
    const container = document.createElement("div");
    container.classList.add("container");
    renderTitle(container);
    renderOptions(container);
    renderChoices(container);
    renderScores(container);
    body.appendChild(container);
    playGame();
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
    buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            computerChoice = getComputerChoice()
            console.log(computerChoice);
            const winner = getwinner(event.target.id, computerChoice);
            console.log(winner);
        });
    });
}