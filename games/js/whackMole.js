const cards = document.querySelectorAll(".card");
const mole = document.querySelector(".mole");

const time = document.getElementById("time");
const score = document.getElementById("score");

let result = 0;
let hitCard;
let currentTime = 30;
let timerId = null;

function randomCard() {
  cards.forEach((card) => {
    card.classList.remove("mole");
  });

  let randomCard = cards[Math.floor(Math.random() * cards.length)];
  randomCard.classList.add("mole");
  hitCard = randomCard.id;
}

cards.forEach((cards) => {
  cards.addEventListener("mousedown", () => {
    if (cards.id == hitCard) {
      result++;
      score.textContent = result;
      hitCard = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomCard, 500);
}

moveMole();

function countDown() {
  currentTime--;
  time.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER! Your final score is: " + result);
  }
}

let countDownTimerId = setInterval(countDown, 1000);
