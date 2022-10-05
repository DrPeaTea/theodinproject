// variables
const gameBoard = document.querySelector(".gameboard");
const box = document.querySelectorAll(".box");
const player1 = ["name1", "X"];
const player2 = ["name2", "O"];
let player1Turn = true;
let gamearr = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const gameboard = ["", "", "", "", "", "", "", "", ""];

//function

function makeBotMove() {
  let nextMove;

  // Check if there are any positions that make us win
  for (let i = 0; i < gameboard.length; i++) {
    if (gameboard[i] !== "") {
      continue;
    }

    const newGameboard = [...gameboard]; // Destructuring makes a new array instead of a linkQ
    newGameboard[i] = "O";

    if (checkBoard(newGameboard) === true) {
      nextMove = i;
      break;
    }
  }

  if (!nextMove) {
    // Check if there are any moves that make our opponenent win
    for (let i = 0; i < gameboard.length; i++) {
      if (gameboard[i] !== "") {
        continue;
      }

      const newGameboard = [...gameboard]; // Destructuring makes a new array instead of a linkQ
      newGameboard[i] = "X";

      if (checkBoard(newGameboard) === true) {
        nextMove = i;
        break;
      }
    }
  }

  if (!nextMove) {
    // Take first empty position
    nextMove = gameboard.findIndex((position) => position === "");
  }

  gameboard[nextMove] = "O";
  gameBoard.querySelector(`#position-${nextMove}`).textContent = "O";
}

// Return true if someone won, otherwise false
function checkBoard(board) {
  const wins = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  let isWinner = false;

  wins.forEach((win) => {
    // [6, 7, 8]
    // win[0] = 6
    // win[1] = 7
    // win[2] = 8

    if (
      board[win[0]] !== "" &&
      board[win[0]] === board[win[1]] &&
      board[win[1]] === board[win[2]]
    ) {
      isWinner = true;
    }
  });

  return isWinner;
}

let moves = 0;

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent !== "") {
      return;
    }

    box.textContent = "X";
    gameboard[box.dataset.positionId] = "X";
    moves = moves + 1;

    if (moves > 8) {
      alert("Its a draw!");
      window.location.reload();
      return;
    }

    if (checkBoard(gameboard) === true) {
      alert("Player Won!");
      window.location.reload();
      return;
    }

    // Computer can take a turn
    makeBotMove();
    moves = moves + 1;

    if (checkBoard(gameboard) === true) {
      alert("Computer Won!");
      window.location.reload();
    }
  });
});

// if (player1Turn === true && box.textContent === "") {
//   box.textContent = player1[1];
//   player1Turn = false;
//   //gamearr[box.id].push("1");
//   gameboard[box.id] = "X";
//   console.log(gamearr);
// } else if (player1Turn === false && box.textContent === "") {
//   box.textContent = player2[1];
//   player1Turn = true;

//   gameboard[box.id] = "O";
// }

// winning conditions

// if (
//   (gameboard[0] !== "" &&
//     gameboard[0] === gameboard[1] &&
//     gameboard[1] === gameboard[2]) ||
//   (gameboard[3] !== "" &&
//     gameboard[3] === gameboard[4] &&
//     gameboard[4] === gameboard[5]) ||
//   (gameboard[6] !== "" &&
//     gameboard[6] === gameboard[7] &&
//     gameboard[7] === gameboard[8]) ||
//   (gameboard[0] !== "" &&
//     gameboard[0] === gameboard[3] &&
//     gameboard[3] === gameboard[6]) ||
//   (gameboard[1] !== "" &&
//     gameboard[1] === gameboard[4] &&
//     gameboard[4] === gameboard[7]) ||
//   (gameboard[2] !== "" &&
//     gameboard[2] === gameboard[5] &&
//     gameboard[5] === gameboard[8]) ||
//   (gameboard[0] !== "" &&
//     gameboard[0] === gameboard[4] &&
//     gameboard[4] === gameboard[8]) ||
//   (gameboard[2] !== "" &&
//     gameboard[2] === gameboard[4] &&
//     gameboard[4] === gameboard[6])
// ) {

//     // }
//   });
// });
