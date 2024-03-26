function getComputerChoice() {
    const rock = "Rock";
    const paper = "Paper";
    const scissor = "Scissor";
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
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // make player choice case insensitive
    computerSelection = computerSelection.toLowerCase(); // make player choice case insensitive
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        console.log("This is a tie")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! paper beats rock");
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log("You win! rock beats scissor");
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("You win! scissor beats paper");
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log("You lose! rock beats scissor");
    } else if (playerSelection === "paper" && computerSelection == "rock") {
        console.log("You win! paper beats rock");
    } else {
        console.log("You lose! scissor beats paper")
    }
}

const playerSelection = prompt("Please choose one of the following choice Paper, Rock, or Scissors ")
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));