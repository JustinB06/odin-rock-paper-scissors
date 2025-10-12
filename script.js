// Track game scores.
let humanScore = 0;
let computerScore = 0;

document.body.addEventListener("click", (event) => {
  // Get human and player choices of rock, paper, or scissors.
  let computerChoice = getComputerChoice();
  let humanChoice = event.target.id;

  // Play a game round.
  let winner = playRound(humanChoice, computerChoice);

  // Increment the winner's score.
  if (winner === "human") humanScore++;
  else if (winner === "computer") computerScore++;

  displayResults(humanChoice, computerChoice, winner);
});

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

  // Storing winning and losing outcomes
  const rockBattle = {
    choice: "rock",
    humanWinsWhenVS: "scissors",
    humanLosesWhenVS: "paper",
  };
  const paperBattle = {
    choice: "paper",
    humanWinsWhenVS: "rock",
    humanLosesWhenVS: "scissors",
  };
  const scissorsBattle = {
    choice: "scissors",
    humanWinsWhenVS: "paper",
    humanLosesWhenVS: "rock",
  };
  let battleArr = [rockBattle, paperBattle, scissorsBattle];

  // Deciding a winner
  for (battleType of battleArr) {
    if (humanChoice === battleType.choice) {
      if (computerChoice === battleType.humanWinsWhenVS) winner = "human";
      else if (computerChoice === battleType.humanLosesWhenVS)
        winner = "computer";
      break;
    }
  }

  return winner;
}

function displayResults(humanChoice, computerChoice, winner) {
  /* Getting the reference of elements that will 
  display output components.*/
  const humanScoreSpanRef = document.querySelector("#humanScore");
  const computerScoreSpanRef = document.querySelector("#computerScore");
  const humanChoicePRef = document.querySelector("#humanChoice");
  const computerChoicePRef = document.querySelector("#computerChoice");
  const resultsPRef = document.querySelector("#result");

  /* Setting the score display */
  humanScoreSpanRef.textContent = `${humanScore}`;
  computerScoreSpanRef.textContent = `${computerScore}`;

  /* Setting the choice display */
  humanChoicePRef.textContent =
    humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
  computerChoicePRef.textContent =
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

  /* Setting the winner's statement output to the page. */
  if (winner === "human") {
    resultsPRef.textContent = `You win! your ${humanChoice}
    \ beats the computer's ${computerChoice}`;
  } else if (winner === "computer") {
    resultsPRef.textContent = `You lose! your ${humanChoice}  
        \ loses to the computer's ${computerChoice}`;
  } else {
    resultsPRef.textContent = `You tied! your ${humanChoice}
        \ ties with the computer's ${computerChoice}`;
  }
}

/* function playGame() {
  // Track game scores.
  let humanScore = 0;
  let computerScore = 0;

  // Loop to play 5 games.
  // for (let i = 0; i < 5; i++) {
  // Get human and player choices of rock, paper, or scissors.
  // let humanChoice = getHumanChoice();
  // let computerChoice = getComputerChoice();
  //
  // Play a game round.
  // let winner = playRound(humanChoice, computerChoice);
  //
  // Increment the winner's score.
  // if (winner === "human") humanScore++;
  // else if (winner === "computer") computerScore++;
  // }

  // Event delegation for user's UI choice
  document.body.addEventListener("click", (event) => {
    // Get human and player choices of rock, paper, or scissors.
    let computerChoice = getComputerChoice();
    let humanChoice = event.target.id;

    // Play a game round.
    let winner = playRound(humanChoice, computerChoice);

    // Increment the winner's score.
    if (winner === "human") humanScore++;
    else if (winner === "computer") computerScore++;
  });

  // Declare the overall winner
  // console.log("The game is over.");
  // if (humanScore === computerScore) console.log("The game is a tie!");
  // else if (humanScore > computerScore) console.log("You win!");
  // else console.log("You lose!");
} */
