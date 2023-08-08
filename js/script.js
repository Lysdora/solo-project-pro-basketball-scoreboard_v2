// Home Variable
let scoreElHome = document.querySelector(".score-home");

let buttonScore1Home = document.querySelector(".btn-1");
let buttonScore2Home = document.querySelector(".btn-2");
let buttonScore3Home = document.querySelector(".btn-3");

let scoreHome = 0;

let equipeHomeEl = document.querySelector(".equipe-home");

//------------- - - - - - - - - - - - - -----------------------

// Guest Variable
let scoreElGuest = document.querySelector(".score-guest");

let buttonScore1Guest = document.querySelector(".btn-1-guest");
let buttonScore2Guest = document.querySelector(".btn-2-guest");
let buttonScore3Guest = document.querySelector(".btn-3-guest");

let scoreGuest = 0;

let equipeGuestEl = document.querySelector(".equipe-guest");

//------------- - - - - - - - - - - - - -----------------------

// Reset Game Variable
let resetGameEl = document.querySelector(".reset-game");

// New Game variable
let newGame = document.querySelector(".new-game");

// Timer for new game
let timerGame = document.querySelector(".timer");

let timer = 30;

let interval;

// Function Home

// add +1
buttonScore1Home.addEventListener("click", addOneHome);
function addOneHome() {
  scoreHome++;
  scoreElHome.textContent = scoreHome;
}

// add +2
buttonScore2Home.addEventListener("click", addTwoHome);
function addTwoHome() {
  scoreHome += 2;
  scoreElHome.textContent = scoreHome;
}

// add +3
buttonScore3Home.addEventListener("click", addThreeHome);
function addThreeHome() {
  scoreHome += 3;
  scoreElHome.textContent = scoreHome;
}

//------------- - - - - - - - - - - - - -----------------------

// Function Guest

// add +1
buttonScore1Guest.addEventListener("click", addOneGuest);
function addOneGuest() {
  scoreGuest++;
  scoreElGuest.textContent = scoreGuest;
}

// add +2
buttonScore2Guest.addEventListener("click", addTwoGuest);
function addTwoGuest() {
  scoreGuest += 2;
  scoreElGuest.textContent = scoreGuest;
}

// add +3
buttonScore3Guest.addEventListener("click", addThreeGuest);
function addThreeGuest() {
  scoreGuest += 3;
  scoreElGuest.textContent = scoreGuest;
}

//------------- - - - - - - - - - - - - -----------------------

function start() {
  interval = setInterval(decompte, 1000);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  scoreGuest = 0;
  scoreHome = 0;
  scoreElHome.textContent = scoreHome;
  scoreElGuest.textContent = scoreGuest;
  equipeHomeEl.classList.remove("winner");
  equipeGuestEl.classList.remove("winner");
  stop();
}

// new game
newGame.addEventListener("click", function () {
  reset();

  timer = 30; // reset chrono
  timerGame.textContent = timer;

  start(); // start counter
});

function highlightTheWinner() {
  if (scoreHome > scoreGuest) {
    equipeHomeEl.classList.add("winner"); // add css class winner
  } else if (scoreGuest > scoreHome) {
    equipeGuestEl.classList.add("winner"); // add css class winner
  }
}

function decompte() {
  if (timer === 0) {
    stop();
    highlightTheWinner();
  } else {
    timer--;
    timerGame.textContent = timer;
  }
}
