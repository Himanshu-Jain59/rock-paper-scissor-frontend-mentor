const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissors");
const rock = document.querySelector(".rock");
const game = document.querySelector(".game");
const footer = document.querySelector(".footer");
const gameplay = document.querySelector(".gameplay");
const playagain = document.querySelector("#playagain");

const start = () => {
  game.style.display = "none";
  footer.style.display = "none";
  gameplay.style.display = "flex";
};

playagain.addEventListener("click", () => {
  game.style.display = "flex";
  footer.style.display = "flex";
  gameplay.style.display = "none";
});
paper.addEventListener("click", start);
scissor.addEventListener("click", start);
rock.addEventListener("click", start);
