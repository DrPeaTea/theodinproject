const getComputerChoice = Math.floor(Math.random() * 3);
const rockPlayer = document.querySelector(".rock");
const paperPlayer = document.querySelector(".paper");
const scissorsPlayer = document.querySelector(".scissors");

const options= { //This is an Enumerated Type
  Rock: options.Rock,
  Paper: options.Paper,
  Scissors: options.Scissors
};

const optionsMap = { 
  0: options.Rock,
  1: options.Paper,
  2: options.Scissors,
};
rockPlayer.addEventListener("click", () => {
  let computerChoice = Math.floor(Math.random() * 3);
  let computerChoiceWord = optionsMap[computerChoice];
  gameResult(options.Rock, computerChoiceWord);
});
paperPlayer.addEventListener("click", () => {
  let computerChoice = Math.floor(Math.random() * 3);
  let computerChoiceWord = optionsMap[computerChoice];
  gameResult(options.Paper, computerChoiceWord);
});
scissorsPlayer.addEventListener("click", () => {
  let computerChoice = Math.floor(Math.random() * 3);
  let computerChoiceWord = optionsMap[computerChoice];
  gameResult(options.Scissors, computerChoiceWord);
});

function gameResult(playerChoice, computerChoiceWord) {
  let result = "";
  if (computerChoiceWord === playerChoice) {
    result = "Draw!"
  } else if ((playerChoice === options.Rock && computerChoiceWord === options.Paper) ||
             (playerChoice === options.Paper && computerChoiceWord === options.Scissors) ||
             (playerChoice === options.Scissors && computerChoiceWord === options.Paper)) { // || is Logical OR
    result = "Computer wins!";
  } else if ((playerChoice === options.Rock && computerChoiceWord === options.Scissors)||
             (playerChoice === options.Paper && computerChoiceWord === options.Rock) ||
             (playerChoice === options.Scissors && computerChoiceWord === options.Rock)){
    result = "You win!";
  } 
  alert(`Computer picked ${computerChoiceWord}, You picked ${playerChoice}. ${result}`); 
}