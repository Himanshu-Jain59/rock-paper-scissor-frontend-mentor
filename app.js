const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissors");
const rock = document.querySelector(".rock");
const game = document.querySelector(".game");
const footer = document.querySelector(".footer");
const gameplay = document.querySelector(".gameplay");
const playagain = document.querySelector("#playagain");
const user = document.querySelector(".user");
const cpu = document.querySelector(".cpu");
const result = document.querySelector(".result p");
const score = document.querySelector(".score");

const signs = ["rock", "paper", "scissor"];
let userscore = 0;

const start = () => {
  game.style.display = "none";
  footer.style.display = "none";
  gameplay.style.display = "flex";
};

function winner(player) {
  let computer = signs[Math.floor(Math.random() * 2)];
  console.log(player, computer);

  changeImg(player, computer);

  if (player == computer) {
    result.innerHTML = "MATCH DRAW";
  } else if (player == "rock") {
    if (computer == "paper") {
      result.innerHTML = "YOU LOSE";
    } else {
      result.innerHTML = "YOU WIN";
    }
  } else if (player == "scissor") {
    if (computer == "rock") {
      result.innerHTML = "YOU LOSE";
    } else {
      result.innerHTML = "YOU WIN";
    }
  } else if (player == "paper") {
    if (computer == "scissor") {
      result.innerHTML = "YOU LOSE";
    } else {
      result.innerHTML = "YOU WIN";
    }
  }
  setTimeout(updateScore, 7000);
}

function updateScore() {
  if (result.innerHTML == "YOU WIN") {
    userscore += 1;
    score.innerHTML = userscore;
  }
}

function changeImg(player, computer) {
  user.style.backgroundImage = `url(./images/icon-${player}.svg)`;
  user.style.borderColor = `var(--${player})`;
  cpu.style.backgroundImage = `url(./images/icon-${computer}.svg)`;
  cpu.style.borderColor = `var(--${computer})`;
}

playagain.addEventListener("click", () => {
  game.style.display = "flex";
  footer.style.display = "flex";
  gameplay.style.display = "none";
});
paper.addEventListener("click", () => {
  winner(signs[1]);
  start();
});
scissor.addEventListener("click", () => {
  winner(signs[2]);
  start();
});
rock.addEventListener("click", () => {
  winner(signs[0]);
  start();
});
