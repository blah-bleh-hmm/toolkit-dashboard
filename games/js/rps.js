let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const winLoseText = document.querySelector("#win-lose-text");
const resultAns = document.querySelector("#result-ans");

const userScorePara = document.querySelector("#user-score-value");
const compScorePara = document.querySelector("#comp-score-value");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  winLoseText.innerText = "It's a Draw!";
  resultAns.innerText = "Play again";
  document.querySelector("#result-text").style.backgroundColor = "#023048";
  document.querySelector("#result-ans").style.color = "#f4c95d";
  document.querySelector("#win-lose-text").style.color = "#f4c95d";

};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    winLoseText.innerText = "You Won!";
    resultAns.innerText = `${userChoice} beats ${compChoice}`;
    document.querySelector("#result-text").style.backgroundColor = "#659aba";
    document.querySelector("#result-ans").style.color = "#ffeed4";
  document.querySelector("#win-lose-text").style.color = "#ffeed4";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    winLoseText.innerText = "You Lost!";
    resultAns.innerText = `${compChoice} beats ${userChoice}`;
    document.querySelector("#result-text").style.backgroundColor = "#f4c95d";
     document.querySelector("#result-ans").style.color = "#023048";
  document.querySelector("#win-lose-text").style.color = "#023048";
  }
};

const playGame = (userChoice) => {
  // Convert choice ID to lowercase for comparison
  const userChoiceLower = userChoice.toLowerCase();

  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoiceLower === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoiceLower === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoiceLower === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoiceLower, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
