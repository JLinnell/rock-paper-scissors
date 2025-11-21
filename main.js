function getComputerChoice (choice) {
    if (choice <= 0.33) {
        console.log("The computer chose paper")
        return "paper"
    }
    else if (choice <= 0.66) {
        console.log("The computer chose scissors")
        return "scissors"
    }
    else {
        console.log("The computer chose rock")
        return "rock"
    }
}

getComputerChoice(Math.random());

// function playRound (humanChoice, computerChoice) {

// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);