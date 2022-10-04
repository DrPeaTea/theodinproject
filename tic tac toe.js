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

//function

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (player1Turn === true && box.textContent === "") {
      box.textContent = player1[1];
      player1Turn = false;
      // gamearr[box.id].push("1");
      console.log(gamearr);
    } else if (player1Turn === false && box.textContent === "") {
      box.textContent = player2[1];
      player1Turn = true;
    } else {
    }
  });
});
