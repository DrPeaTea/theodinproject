const getComputerChoice = Math.floor(Math.random() * 3);
const rockPlayer = document.querySelector(".rock");
const paperPlayer = document.querySelector(".paper");
const scissorsPlayer = document.querySelector(".scissors");
// rock = 0
// paper = 1
// scissors = 2

rockPlayer.addEventListener("click", () => {
  if (getComputerChoice === 1) {
    alert("computer picked paper, computer wins");
    window.location.reload();
  } else if (getComputerChoice === 2) {
    alert("computer picked scissors, player wins");
    window.location.reload();
  } else if (getComputerChoice === 0) {
    alert("computer picked rock, draw");
    window.location.reload();
  }
});
paperPlayer.addEventListener("click", () => {
  if (getComputerChoice === 2) {
    alert("computer picked scissors, computer wins");
    window.location.reload();
  } else if (getComputerChoice === 0) {
    alert("computer picked rock, you win");
    window.location.reload();
  } else if (getComputerChoice === 1) {
    alert("computer picked paper, draw");
    window.location.reload();
  }
});
scissorsPlayer.addEventListener("click", () => {
  if (getComputerChoice === 0) {
    alert("computer picked rock, computer wins");
    window.location.reload();
  } else if (getComputerChoice === 1) {
    alert("computer picked paper, you win");
    window.location.reload();
  } else if (getComputerChoice === 2) {
    alert("computer picked scissors, draw");
    window.location.reload();
  }
});
console.log(getComputerChoice);
