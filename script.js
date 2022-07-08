let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
const roundResult = document.querySelector('.round-result');
const currentScore = document.querySelector('.current-score');
const overallResult = document.querySelector('.overall-result');
const btns = document.querySelectorAll('.play-button');
const reloadBtn = document.querySelector('.reload');


btns.forEach(function(e) {
    e.addEventListener('click', () => {
        let text = e.value;
        if (text === 'rock') {
            playerSelection = 'rock';
        } else if (text === 'paper') {
            playerSelection = 'paper';
        } else if (text === 'scissors') {
            playerSelection = 'scissors';
        };
        playRound();
    });
})

// reload the page
reloadBtn.addEventListener('click', () => {
    document.location.reload();
});

// player choice
// function playerPrompt() {
//     let playerChoice = prompt('rock, paper or scissors?');
//     playerChoice = playerChoice.toLowerCase();

//     while (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
//         playerChoice = prompt('enter a valid option. rock, paper or scissors?');
//     }
//     return playerChoice;
// }


// computer choice
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


// single round of game play
function playRound() {

    // playerSelection = playerSelection;
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        roundResult.textContent = 'This round is a tie';
    }
    
    else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        displayCurrentScore();
        roundResult.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}`;
    }
    
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        displayCurrentScore();
        roundResult.textContent = `You win this round! ${playerSelection} beats ${computerSelection}`;
    }

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            overallResult.textContent = `You win the game! ${playerScore} to ${computerScore}`;
        } else if (computerScore > playerScore) {
            overallResult.textContent = `You lose the game! ${computerScore} to ${playerScore}`;
        } else {
            overallResult.textContent = `The game ends in a tie! ${playerScore} to ${computerScore}`;
        }
        disableButtons();
    }
}

// current score
function displayCurrentScore() {
    currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`
}

// disable buttons after any player scores at least five
function disableButtons() {
    btns.forEach(btn => {btn.disabled=true});
}

