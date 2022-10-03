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

function gameResult(playerChoice, computerChoiceWord) {
  if (computerChoiceWord === "rock") {
    alert("computer picked rock, draw");
  } else if (computerChoiceWord === "paper") {
    alert("computer picked paper, computer wins");
  } else if (computerChoiceWord === "scissors") {
    alert("computer picked scissors, you win");
  }
}
paperPlayer.addEventListener("click", () => {
  let computerChoice = Math.floor(Math.random() * 3);
  let computerChoiceWord = optionsMap[computerChoice];
  gameResult1("paper", computerChoiceWord);
});

function gameResult1(playerChoice, computerChoiceWord) {
  if (computerChoiceWord === "rock") {
    alert("computer picked rock, you win");
  } else if (computerChoiceWord === "paper") {
    alert("computer picked paper, draw");
  } else if (computerChoiceWord === "scissors") {
    alert("computer picked scissors, computer wins");
  }
}
scissorsPlayer.addEventListener("click", () => {
  let computerChoice = Math.floor(Math.random() * 3);
  let computerChoiceWord = optionsMap[computerChoice];
  gameResult2("scissors", computerChoiceWord);
});

function gameResult2(playerChoice, computerChoiceWord) {
  if (computerChoiceWord === "rock") {
    alert("computer picked rock, computer wins");
  } else if (computerChoiceWord === "paper") {
    alert("computer picked paper, you win");
  } else if (computerChoiceWord === "scissors") {
    alert("computer picked scissors, draw");
  }
}

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
console.log(getComputerChoice);
