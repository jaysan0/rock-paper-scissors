"use-strict";

// variable to store computer choice
let computerSelection;

// variable to store player choice
let playerSelection;

// variable to store the result
let result;

// function for computer choice
function computerPlay() {
  // generates either 0, 1 or 2
  let computerNo = Math.floor(Math.random() * 3);
  // 0 is rock, 1 is paper, 2 is scissors
  if (computerNo === 0) {
    computerSelection = "rock";
    return computerSelection;
  } else if (computerNo === 1) {
    computerSelection = "paper";
    return computerSelection;
  } else if (computerNo === 2) {
    computerSelection = "scissors";
    return computerSelection;
  }
}

// function for player choice, running computer choice function, and comparing choices
function round() {
  // the user is prompted to choose
  // user choice is saved
  playerSelection = prompt("Rock, Paper, Scissors?", "");
  console.log(playerSelection);
  // computer selects
  // computer choice is saved
  computerSelection = computerPlay();
  console.log(computerSelection);
  // both choices are compared
  if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    result = "You Lose!";
  } else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissor") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    result = "You Win!";
  } else if (
    (computerSelection == "rock" && playerSelection == "rock") ||
    (computerSelection == "paper" && playerSelection == "paper") ||
    (computerSelection == "scissors" && playerSelection == "scissors")
  ) {
    result = "It's a draw! Try again!";
  }
  console.log(result);
  return result;
}

// function to start the game and play 5 rounds
function game() {
  // 5 rounds are played
  start: for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    round();
    // if it's a draw, the round is repeated
    if (result === "It's a draw! Try again!") {
      i--;
      continue start;
    }
    // if 5 win/lose rounds are played, print the end
    if (i === 5) {
      console.log("The End");
    }
  }
}
game();

// TO-DOs:
// make it ignore caps
// a functionality if gibberish is entered
// add a score
// make it visual
// make it interactive
