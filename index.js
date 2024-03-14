// Function to generate random number
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function gameRound() {
  console.log("Random Number between 1 and 5: ");

  // Function call
  let randomNumber1 = Math.round(randomNumber(1, 6));
  let randomNumber2 = Math.round(randomNumber(1, 6));
  console.log(randomNumber1);
  console.log(randomNumber2);
  let image1 = "./images/dice" + randomNumber1 + ".png";
  let image2 = "./images/dice" + randomNumber2 + ".png";
  console.log(image1);
  console.log(image2);

  document.querySelector(".img1").setAttribute("src", image1);
  document.querySelector(".img2").setAttribute("src", image2);

  let svg =
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill='#FF3371' d='M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z'/></svg>";

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = svg + " Player 1 Wins!";
    ++player1stats;
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! " + svg;
    ++player2stats;
  } else {
    document.querySelector("h1").innerHTML =
      "<span id='flagDraw'>🚩 </span> Draw!";
    ++drawStats;
  }
}

let gameStarted = false;

let player1stats = 0;
let player2stats = 0;
let drawStats = 0;

let player1statsString,
  player2statsString,
  drawStatsString = "";

refreshStats();

document.getElementById("startGame").addEventListener("click", myFunction);

function refreshStats() {
  console.log(player1stats);
  console.log(player2stats);
  console.log(drawStats);
  player1statsString = player1stats.toString;
  console.log(player1statsString);
  document.getElementById("Player1Stats").textContent = player1stats.toString();
  document.getElementById("Player2Stats").textContent = player2stats.toString();
  document.getElementById("drawStats").textContent = drawStats.toString();
}

function myFunction() {
  if (!gameStarted) {
    gameStarted = true;
    document.getElementById("startGame").textContent = "New Round";
  }

  gameRound();
  refreshStats();
}
