let humanScore = 0;
let computerScore = 0;
let round = 1

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
};


function playGame () {
    playRock =  document.getElementById('rock').addEventListener('click', function() {
            const computerSelection = getComputerChoice(Math.random());
            if (computerSelection === "rock") {
            $('#output').html(`The computer chose ${computerSelection} too. Wow it's a tie!`);

        }   else if (computerSelection === "scissors") {
            $('#output').html(`The computer chose ${computerSelection}. You win!`);
            humanScore++
            document.querySelector('#human-score').textContent = humanScore;
        }   else {
            computerScore++
            $('#output').html( `The computer chose ${computerSelection}. You lose.`);
            document.querySelector('#computer-score').textContent = computerScore;

        }
        if (round >= 5) {
            determineWinner();  
        } else {
            round++
            document.querySelector('#round-number').textContent = round;

        }
    });
    playPaper = document.getElementById('paper').addEventListener('click', function() {
            const computerSelection = getComputerChoice(Math.random());
            if (computerSelection === "paper") {
            $('#output').html(`The computer chose ${computerSelection} too. Wow it's a tie!`);
        }   else if (computerSelection === "rock") {
            humanScore++
            $('#output').html(`The computer chose ${computerSelection}. You win!`);
            document.querySelector('#human-score').textContent = humanScore;
        }   else {
            computerScore++
            $('#output').html( `The computer chose ${computerSelection}. You lose.`);
            document.querySelector('#computer-score').textContent = computerScore;
        }
        if (round >= 5) {
            determineWinner();  
        } else {
            round++
            document.querySelector('#round-number').textContent = round;
        }
    });
    playScissors = document.getElementById('scissors').addEventListener('click', function() {
            const computerSelection = getComputerChoice(Math.random());
            if (computerSelection ===  "scissors") {
            $('#output').html(`The computer chose ${computerSelection} too. Wow it's a tie!`);
        }   else if (computerSelection === "paper") {
            $('#output').html(`The computer chose ${computerSelection}. You win!`);
            humanScore++
            document.querySelector('#human-score').textContent = humanScore;
        }   else {
            $('#output').html( `The computer chose ${computerSelection}. You lose.`);
            computerScore++
            document.querySelector('#computer-score').textContent = computerScore;
        } 
        if (round >= 5) {
            determineWinner();  
        } else {
            round++
            document.querySelector('#round-number').textContent = round;
        }
    });
};

function determineWinner () {
    if (humanScore > computerScore) {
        $('#output').html('<h1>You won the whole game!!!</h1>');
    } else if (humanScore === computerScore) {
        $('#output').html('<h1>Wow it\'s a tie!</h1>')
    } else {
        $('#output').html('<h1>You lost the game. Better luck next time!</h1>')
    }
};

playGame();


