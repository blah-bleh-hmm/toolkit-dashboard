const cards = document.querySelectorAll(".memory-card");
const rightWrongText = document.getElementById("right-wrong-text");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return; // Prevent flipping if board is locked
  if (this === firstCard) return; // Prevent flipping the same card again
  this.classList.toggle("flip");
  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  hasFlippedCard = false;
  secondCard = this;

  //do cards match
  checkForMatch();
}

function checkForMatch() {
  const firstCardData = firstCard.querySelector(".back-face").dataset.framework;
  const secondCardData =
    secondCard.querySelector(".back-face").dataset.framework;
  let isMatch = firstCardData === secondCardData;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  rightWrongText.textContent = "You Got it Right!";

  resetBoard();
}

function unflipCards() {
  lockBoard = true; // Lock the board to prevent further clicks
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1000);
  rightWrongText.textContent = "Wrong \n Try Again!";
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffleCards() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});


