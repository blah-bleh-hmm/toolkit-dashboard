const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("reset-game");
const newGameBtn = document.getElementById("new-game");
const winText = document.getElementById("winner-text");

let turnO = true;
let turnX = false;

let click = 0;

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnO = true;
  turnX = false;
  winText.innerText = "";

  enableBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.classList.add("btn-smile");
      box.innerText = "O";
      turnO = false;
      click++;
    } else {
      box.classList.add("btn-sword");
      box.innerText = "X";
      turnO = true;
      click++;
    }
    box.disabled = true;

    checkWinner();

    if(click === 9 && winText.innerText === "") {
      winText.innerText = "It's a draw!";
      disableBoxes();
    }
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
    box.classList.add("disabled");
    box.innerText = "";
    click = 0;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.classList.remove("disabled");
    box.classList.remove("btn-smile", "btn-sword");
    click = 0;
  }
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner desu");
        if (pos1Val === "O") {
          winText.innerText = "Smiles";
        } else {
          winText.innerText = "Swords";
        }
        disableBoxes();
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
