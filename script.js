let likeCount = 0;
const likeBtn = document.querySelector(".like-img");
const likeDisplay = document.querySelector(".like-count");

likeBtn.addEventListener("click", () => {
  likeCount++;
  likeDisplay.textContent = `Like Count : ${likeCount}`;

  // Add bounce animation
  likeBtn.classList.add("bounce-animation");

  // Remove animation class after animation completes
  setTimeout(() => {
    likeBtn.classList.remove("bounce-animation");
  }, 600);
});
