// buttons
const btns = document.querySelectorAll('button');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const resetDiv = document.querySelector('#reset');
const resetBtn = document.querySelector('.reset');

// board choices
const computerChoices = document.querySelector('#computer-choices');
const playerChoices = document.querySelector('#player-choices');

// scores
const computerScore = document.querySelector('#computer-score');
const playerScore = document.querySelector('#player-score');

let computerWon = 0;
let playerWon = 0;

// results
const results = document.querySelector('#results');

// end game
const theEnd = document.querySelector('#the-end');
const winner = document.querySelector('#winner');

// what the user and computer have selected is stored here
let computerSelection;
let playerSelection;
let result;

function computerChoice () {
    let randomNo = Math.floor(Math.random() * 3);
    if (randomNo == '0') {
        computerSelection = 'rock';
    } else if (randomNo == '1') {
        computerSelection = 'paper';
    } else if (randomNo == '2') {
        computerSelection = 'scissors';
    }
    const selected = document.createElement('li');
    selected.textContent = computerSelection;
    computerChoices.insertBefore(selected, computerChoices.firstChild);
    console.log(randomNo);
    console.log(selected);
}

function compareChoices () {
    if (computerSelection == 'rock' && playerSelection == 'rock') {
        result = 'It\'s a tie! Rock ties with rock!';
    } else if (computerSelection == 'paper' && playerSelection == 'paper') {
        result = 'It\'s a tie! Paper ties with paper!';
    } else if (computerSelection == 'scissors' && playerSelection == 'scissors') {
        result = 'It\'s a tie! Scissors ties with scissors!';
    } else if (computerSelection == 'rock' && playerSelection == 'paper') {
        result = 'You Win! Paper beats rock!';
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        result = 'You Win! Scissors beat paper!';
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        result = 'You Win! Rock beats scissors!';
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        result = 'You Lose! Rock beats scissors!';
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        result = 'You Lose! Paper beats rock!';
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        result = 'You Lose! Scissors beat paper!';
    }
    results.textContent = result;
}

function scoreUpdate () {
    if (result.includes('Lose')) {
        computerWon++;
        computerScore.textContent = computerWon;
    } else if (result.includes('Win')) {
        playerWon++;
        playerScore.textContent = playerWon;
    }
}

function endGame () {
    if (computerWon == 5) {
        winner.textContent = 'Computer Wins!';
        theEnd.classList.add('ended');
        resetDiv.style.display = 'flex';
    } else if (playerWon == 5) {
        winner.textContent = 'Player Wins!';
        theEnd.classList.add('ended');
        resetDiv.style.display = 'flex';
    }
}

function rockChosen () {
    playerSelection = 'rock';
    const selected = document.createElement('li');
    selected.textContent = playerSelection;
    playerChoices.insertBefore(selected, playerChoices.firstChild);
    computerChoice();
    compareChoices();
    scoreUpdate();
    if (computerWon == 5 || playerWon == 5) {
        //end game
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    endGame();
}

function paperChosen () {
    playerSelection = 'paper';
    const selected = document.createElement('li');
    selected.textContent = playerSelection;
    playerChoices.insertBefore(selected, playerChoices.firstChild);
    computerChoice();
    compareChoices();
    scoreUpdate();
    if (computerWon == 5 || playerWon == 5) {
        //end game
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    endGame();
}

function scissorsChosen () {
    playerSelection = 'scissors';
    const selected = document.createElement('li');
    selected.textContent = playerSelection;
    playerChoices.insertBefore(selected, playerChoices.firstChild);
    computerChoice();
    compareChoices();
    scoreUpdate();
    if (computerWon == 5 || playerWon == 5) {
        //end game
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    endGame();
}

function resetGame () {
    computerWon = 0;
    computerScore.textContent = computerWon;
    playerWon = 0;
    playerScore.textContent = playerWon;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    winner.textContent = '';
    theEnd.classList.remove('ended');
    computerChoices.innerHTML = '';
    playerChoices.innerHTML = '';
    results.textContent = 'Choose your weapon! First to 5 Wins!';
    resetDiv.style.display = 'none';
}

rock.addEventListener('click', rockChosen);
paper.addEventListener('click', paperChosen);
scissors.addEventListener('click', scissorsChosen);

resetBtn.addEventListener('click', resetGame);