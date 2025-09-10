playGame();

/* Randomly generates and returns the computer's 
choice, being one of “rock”, “paper” or 
“scissors”.*/
function getComputerChoice() {
  // Generate a random number of value 1, 2 or 3.
  let num = Math.floor(Math.random() * 3 + 1);

  //Return a choice based on the number generated.
  if (num === 1) return "rock";
  else if (num === 2) return "paper";
  else return "scissors";
}

/* Get user's inputted choice of “rock”, “paper” or 
“scissors”. Then return this choice. */
function getHumanChoice() {
  let choice = prompt("Make your choice of rock, paper, or scissors", "rock");
  choice = choice.toLowerCase();
  return choice;
}

/* Plays a round of rock paper scissors, then
returns the winner as a string. */
function playRound(humanChoice, computerChoice) {
  let winner = "none";

  //Deciding a winner
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "scissors":
          winner = "human";
          break;
        case "paper":
          winner = "computer";
          break;
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "rock":
          winner = "human";
          break;
        case "scissors":
          winner = "computer";
          break;
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "paper":
          winner = "human";
          break;
        case "rock":
          winner = "computer";
          break;
      }
      break;
  }

  // Logging the winner
  if (winner === "human") {
    console.log(`You win! ${humanChoice} beats 
        \ ${computerChoice}`);
  } else if (winner === "computer") {
    console.log(`You lose! ${humanChoice} loses to 
        \ ${computerChoice}`);
  } else {
    console.log(`You tied! ${humanChoice} ties with 
        \ ${computerChoice}`);
  }

  return winner;
}

function playGame() {
  // Track game scores.
  let humanScore = 0;
  let computerScore = 0;

  // Loop to play 5 games.
  for (let i = 0; i < 5; i++) {
    // Get human and player choices of rock, paper, or scissors.
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    // Play a game round.
    let winner = playRound(humanChoice, computerChoice);

    // Increment the winner's score.
    if (winner === "human") humanScore++;
    else if (winner === "computer") computerScore++;
  }

  // Declare the overall winner
  console.log("The game is over");
  if (humanScore === computerScore) console.log("The game is a tie!");
  else if (humanScore > computerScore) console.log("You win!");
  else console.log("You lose!");
}
