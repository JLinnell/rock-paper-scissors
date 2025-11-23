let humanScore = 0;
let computerScore = 0;

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


function getHumanChoice () {
let userChoice = prompt("Rock, paper,scissors, shoot!").toLowerCase();
switch(userChoice) {
  case "paper":
    console.log("You chose paper");
    return userChoice
    break;
  case "scissors":
    console.log("You chose scissors");
    return userChoice
    break;
  case "rock":
    console.log("You chose rock");
    return userChoice
    break;
  default:
    console.log("I have never heard of that one!");
    return userChoice
}
}

function playGame () {

    if (humanScore >= 5) {
        console.log("You won the game!!")
    } else if (computerScore >= 5) {
        console.log("The computer wins")
    } else {
        playRound;
    }
}



 document.getElementById('myButton').addEventListener('click', function() {
    const computerSelection = getComputerChoice(Math.random());
    const humanSelection = getHumanChoice();
    playGame();
    if (humanSelection === computerSelection) {
    console.log("It's a tie!");
}   else if (humanSelection === "rock" && computerSelection === "scissors") {
    console.log("You win!");
    humanScore++
}   else if (humanSelection === "scissors" && computerSelection === "paper") {
    console.log("You win!");
    humanScore++
}   else if (humanSelection === "paper" && computerSelection === "rock") {
    console.log("You win!");
    humanScore++
}   else {
    console.log("You lose")
    computerScore++
}
 });


