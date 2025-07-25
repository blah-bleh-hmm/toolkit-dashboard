const dice = document.querySelector(".dice");
const rollBtn = document.querySelector("#rollDice");
const numberDisplay = document.querySelector("#theNumber");

const randomDice = () => {
  const random = Math.floor(Math.random() * 10);

  if (random >= 1 && random <= 6) {
    rollDice(random);
  } else {
    randomDice();
  }
};

const rollDice = (random) => {
  dice.style.animation = "rolling 4s";

  setTimeout(() => {
    switch (random) {
      case 1:
        dice.style.transform = "rotateX(0deg) rotateY(0deg)";
        setTimeout(() => {
          numberDisplay.textContent = 1;
        }, 15);
        break;

      case 6:
        dice.style.transform = "rotateX(180deg) rotateY(0deg)";
        setTimeout(() => {
          numberDisplay.textContent = 6;
        }, 15);
        break;

      case 2:
        dice.style.transform = "rotateX(-90deg) rotateY(0deg)";
        setTimeout(() => {
          numberDisplay.textContent = 2;
        }, 15);
        break;

      case 5:
        dice.style.transform = "rotateX(90deg) rotateY(0deg)";
        setTimeout(() => {
          numberDisplay.textContent = 5;
        }, 15);
        break;

      case 3:
        dice.style.transform = "rotateX(0deg) rotateY(90deg)";
        setTimeout(() => {
          numberDisplay.textContent = 3;
        }, 15);
        break;

      case 4:
        dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
        setTimeout(() => {
          numberDisplay.textContent = 4;
        }, 15);
        break;

      default:
        break;
    }

    dice.style.animation = "none";
  }, 4050);
};

rollBtn.addEventListener("click", randomDice);
