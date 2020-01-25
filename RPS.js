//button created for dark mode
//when user presses the button the css link href is changed from light mode to dark mode
//use get element by id to get the button click
//when the button is clicked trigger function to turn on lightmode

var lightModeClick = document.getElementById("lightmode");
lightModeClick.addEventListener("click", turnOnLightMode);

function turnOnLightMode() {
  document.getElementById("css").href = "RPSLightMode.css";
}

var darkModeClick = document.getElementById("darkmode");
darkModeClick.addEventListener("click", turnOnDarkMode);

function turnOnDarkMode() {
  document.getElementById("css").href = "RPSDarkMode.css";
}

//variable creating an array for the game history
var gameHistory = [];

//function to take in the username, validate it and display it
function handleUsername() {
  let input = document.getElementById("inputiD");
  let display = document.getElementById("username-display");

  //validation if statement
  if (input.value) {
    display.innerText = input.value;
  } else {
    alert("Use a proper name!");
  }
}

//an event listener using the button id which triggers the handleusername function
var usernameBtn = document.getElementById("usernameButton");
usernameBtn.addEventListener("click", handleUsername);

//defining player and computer score variables and setting as 0
var playerScore = 0;
var computerScore = 0;

//function to generate computer move with random number and assigning that to a move
function generateComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

//main game function - called when buttons are clicked, they return the player move which is checked by an if statement
function playGame(playerMove) {
  const computerMove = generateComputerMove();

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      showMessage("Draw");
      showMove("Rock");
    } else if (computerMove === "paper") {
      showMessage("Computer Wins");
      showMove("Paper");
      computerScore++;
    } else if (computerMove === "scissors") {
      showMessage("Player Wins Woo!");
      showMove("Scissors");
      playerScore++;
    }
  }

  if (playerMove === "paper") {
    if (computerMove === "paper") {
      showMessage("Draw");
      showMove("Paper");
    } else if (computerMove === "scissors") {
      showMessage("Computer Wins");
      showMove("Scissors");
      computerScore++;
    } else if (computerMove === "rock") {
      showMessage("Player Wins Woo");
      showMove("Rock");
      playerScore++;
    }
  }

  if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      showMessage("Draw");
      showMove("Scissors");
    } else if (computerMove === "rock") {
      showMessage("Computer Wins");
      showMove("Rock");
      computerScore++;
    } else if (computerMove === "paper") {
      showMessage("Player Wins Woo");
      showMove("Paper");
      playerScore++;
    }
  }

  //this links our player and computer score variable to the html. It is updated in the game function each time a button is clicked
  let player_Score = document.getElementById("playerscore");
  player_Score.innerText = playerScore;

  let computer_Score = document.getElementById("computerscore");
  computer_Score.innerText = computerScore;

  //This sets up an object to hold both playerMove and computerMove for the history function
  var gameChoices = {
    playerMove,
    computerMove
  };

  //This adds the game choices in the object above onto the gameHistory array
  gameHistory.push(gameChoices);
  //This calls the following paintHistory function
  paintHistory();

  //Function that uses DOM to update an ul html element with the game history array each time the game is played
  function paintHistory() {
    var historyElement = document.getElementById("history");
    var displayString = "";

    for (var i = 0; i < gameHistory.length; i++) {
      displayString +=
        "<li>" +
        gameHistory[i].playerMove +
        " vs " +
        gameHistory[i].computerMove +
        "</li>";
    }
    historyElement.innerHTML = displayString;
  }
}

//Functions that give the playgame function the value (message?) from the buttons below
function playRock() {
  playGame("rock");
}
function playPaper() {
  playGame("paper");
}
function playScissors() {
  playGame("scissors");
}

//Event listeners that trigger the functions for whichever button is pressed
let rockplay = document.getElementById("RockButton");
rockplay.addEventListener("click", playRock);

let paperplay = document.getElementById("PaperButton");
paperplay.addEventListener("click", playPaper);

let scissorsplay = document.getElementById("ScissorsButton");
scissorsplay.addEventListener("click", playScissors);

//Functions that change the results element innertext with
function showMessage(message) {
  let resultElement = document.getElementById("results");
  resultElement.innerText = message;
}
function showMove(message) {
  let resultElement = document.getElementById("computerMove");
  resultElement.innerText = message;
}
