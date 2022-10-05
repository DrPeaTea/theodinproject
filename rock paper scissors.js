const getComputerChoice = Math.floor(Math.random() * 3);
const rockPlayer = document.querySelector(".rock");
const paperPlayer = document.querySelector(".paper");
const scissorsPlayer = document.querySelector(".scissors");
const optionsMap = {
  0: "rock",
  1: "paper",
  2: "scissors",
};

rockPlayer.addEventListener("click", () => {
  let computerChoice = Math.floor(Math.random() * 3);
  let computerChoiceWord = optionsMap[computerChoice];
  gameResult("rock", computerChoiceWord);
});
paperPlayer.addEventListener("click", () => {
  let computerChoice = Math.floor(Math.random() * 3);
  let computerChoiceWord = optionsMap[computerChoice];
  gameResult("paper", computerChoiceWord);
});
scissorsPlayer.addEventListener("click", () => {
  let computerChoice = Math.floor(Math.random() * 3);
  let computerChoiceWord = optionsMap[computerChoice];
  gameResult("scissors", computerChoiceWord);
});

function gameResult(playerChoice, computerChoiceWord) {
  if (computerChoiceWord === playerChoice) {
    alert("you picked the same as computer, draw");
  } else if (playerChoice === "rock" && computerChoiceWord === "paper") {
    alert("computer picked paper, computer wins");
  } else if (playerChoice === "rock" && computerChoiceWord === "scissors") {
    alert("computer picked scissors, you win");
  } else if (playerChoice === "paper" && computerChoiceWord === "rock") {
    alert("computer picked rock, you win");
  } else if (playerChoice === "paper" && computerChoiceWord === "scissors") {
    alert("computer picked scissors, computer wins");
  } else if (playerChoice === "scissors" && computerChoiceWord === "rock") {
    alert("computer picked rock, computer wins");
  } else if (playerChoice === "scissors" && computerChoiceWord === "paper") {
    alert("computer picked paper, you win");
  }
}
// function gameResult1(playerChoice, computerChoiceWord) {
//   if (computerChoiceWord === "rock") {
//     alert("computer picked rock, you win");
//   } else if (computerChoiceWord === "paper") {
//     alert("computer picked paper, draw");
//   } else if (computerChoiceWord === "scissors") {
//     alert("computer picked scissors, computer wins");
//   }
// }

// function gameResult2(playerChoice, computerChoiceWord) {
//   if (computerChoiceWord === "rock") {
//     alert("computer picked rock, computer wins");
//   } else if (computerChoiceWord === "paper") {
//     alert("computer picked paper, you win");
//   } else if (computerChoiceWord === "scissors") {
//     alert("computer picked scissors, draw");
//   }
// }

// rockPlayer.addEventListener("click", () => {
//   if (getComputerChoice === 1) {
//     alert("computer picked paper, computer wins");
//     window.location.reload();
//   } else if (getComputerChoice === 2) {
//     alert("computer picked scissors, player wins");
//     window.location.reload();
//   } else if (getComputerChoice === 0) {
//     alert("computer picked rock, draw");
//     window.location.reload();
//   }
// });
// paperPlayer.addEventListener("click", () => {
//   if (getComputerChoice === 2) {
//     alert("computer picked scissors, computer wins");
//     window.location.reload();
//   } else if (getComputerChoice === 0) {
//     alert("computer picked rock, you win");
//     window.location.reload();
//   } else if (getComputerChoice === 1) {
//     alert("computer picked paper, draw");
//     window.location.reload();
//   }
// });
// scissorsPlayer.addEventListener("click", () => {
//   if (getComputerChoice === 0) {
//     alert("computer picked rock, computer wins");
//     window.location.reload();
//   } else if (getComputerChoice === 1) {
//     alert("computer picked paper, you win");
//     window.location.reload();
//   } else if (getComputerChoice === 2) {
//     alert("computer picked scissors, draw");
//     window.location.reload();
//   }
// });
