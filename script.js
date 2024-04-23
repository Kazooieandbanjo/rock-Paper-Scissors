let playerPoint = 0;
let computerPoint = 0;
let winningScore = 5;
let computerSelection;
let playerSelection;


function getComputerChoice() {
    const rock = "rock";
    const paper = "paper";
    const scissor = "scissor";
    let computerChoice;

    let randomNumber = Math.floor(Math.random() * 3) + 1;// Randomly chooses 1-3

    if (randomNumber === 1) { // if randomNumber  is 1 then it is rock
        computerChoice = rock;
        return computerChoice;
    } else if (randomNumber === 2) { //if randomNumber  is 2 then it is paper
        computerChoice = paper;
        return computerChoice;
    } else {
        computerChoice = scissor; //if randomNumber  is 3 then it is scissor
        return computerChoice;
    }
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        result = "This is a tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerPoint++;
        result = "You lose! paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        playerPoint++;
        result = "You win! rock beats scissor";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        playerPoint++;
        result = "You win! scissor beats paper";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        computerPoint++;
        result = "You lose! rock beats scissor";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerPoint++;
        result = "You win! paper beats rock";
    } else {
        computerPoint++;
        result = "You lose! scissor beats paper";

    }


    if (playerPoint === winningScore) {
        alert("You won!, Please refresh to play again.")
        container.removeChild(rock);
        container.removeChild(paper);
        container.removeChild(scissor);
    } else if (computerPoint === 5) {
        alert("Computer won!, Please refresh to play again.")
        container.removeChild(rock);
        container.removeChild(paper);
        container.removeChild(scissor);
    }

    playerScore.textContent = `Player Score: ${playerPoint}`;
    computerScore.textContent = `Computer Score: ${computerPoint}`;
    alert(result);
}



const container = document.querySelector("div"); // GrandFather
const rock = document.querySelector("#rock"); //Father
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");



const scoreText = document.createElement("p");


const playerButton1 = rock.addEventListener('click', () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

});

const playerButton2 = paper.addEventListener('click', () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

const playerButton3 = scissor.addEventListener('click', () => {
    const playerSelection = "scissor";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
});




