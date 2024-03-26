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
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // make player choice case insensitive
    computerSelection = computerSelection.toLowerCase(); // make computer choice case insensitive
    let result;

    if (playerSelection === computerSelection) {
        result = "This is a tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You lose! paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        result = "You win! rock beats scissor";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        result = "You win! scissor beats paper";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        result = "You lose! rock beats scissor";
    } else if (playerSelection === "paper" && computerSelection == "rock") {
        result = "You win! paper beats rock";
    } else {
        result = "You lose! scissor beats paper";
    }
    return result;
}

function playGame() {

    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("Please choose one of the following choice Paper, Rock, or Scissors ");// placed inside so it will prompt for 5 times
        const computerSelection = getComputerChoice(); // placed inside so it will computer input for 5 times
        console.log(playRound(playerSelection, computerSelection))
    }


}



//onst playerSelection = prompt("Please choose one of the following choice Paper, Rock, or Scissors ");
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
console.log(playGame());