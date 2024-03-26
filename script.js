function getComputerChoice() {
    const rock = "Rock";
    const paper = "Paper";
    const scissor = "Scissor";
    let computerChoice;

    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = rock;
        return computerChoice;
    } else if (randomNumber === 2) {
        computerChoice = paper;
        return computerChoice;
    } else {
        computerChoice = scissor;
        return computerChoice;
    }
    return computerChoice;
}

console.log(getComputerChoice())