var timer = 60;
var score = 0;
let hitrn;

const hitVal = document.querySelector("#hitVal");
const bubble = document.querySelector("#pbtm");

bubble.addEventListener("click", function (e) {
  let clickValue = Number(e.target.textContent);

  if (clickValue === hitrn) {
    increaseScore();
  }
  makeBubble();
  getNewHit();
});

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";
  for (let i = 1; i <= 119; i++) {
    let rand = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rand}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>Game Over Your Score is : ${score}</h1>`;
    }
  }, 1000);
}

getNewHit();
runTimer();
makeBubble();
