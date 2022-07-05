let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;


// player choice
function playerPrompt() {
    let playerChoice = prompt('rock, paper or scissors?');
    playerChoice = playerChoice.toLowerCase();

    while (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
        playerChoice = prompt('enter a valid option. rock, paper or scissors?');
    }
    return playerChoice;
}


// computer choice
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


// single round of game play
function playRound(playerSelection, computerSelection) {
    playerSelection = playerPrompt();
    computerSelection = computerPlay();

    if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
        return 'This round is a tie';
    }
    
    else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        return `You lose this round! ${computerSelection} beats ${playerSelection}`;
    }
    
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        return `You win this round! ${playerSelection} beats ${computerSelection}`;
    }
}


// five rounds of game play
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Score: You: ${playerScore} Computer: ${computerScore}`);
    }

    // overall game score
    if (playerScore > computerScore) {
        console.log(`You won the game! ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lost the game! ${computerScore} to ${playerScore}`);
    } else {
        console.log('The game ended in a tie!')
    }
}


game();
console.log('Game over! Thanks for playing!')
