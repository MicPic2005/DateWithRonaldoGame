let titleScreen = document.querySelector(".title-screen")
let startButton = document.querySelector(".start-button")
let screenOne = document.querySelector(".screen-one")
let nextButton = document.querySelector(".next-button")
let innerText = document.querySelector(".inner-text")
let screenTwo = document.querySelector(".screen-two")
let nextTwo = document.querySelector(".next-button-two")
let screenThree = document.querySelector(".screen-three")
let throwUpButton = document.querySelector(".throw-up")
let gameOverScreen = document.querySelector(".game-over-screen")
let gameOverText = document.querySelector(".game-over-text")
let testCase = document.querySelector(".img-one")
let imgTwo = document.querySelector(".img-two")
let restartButton = document.querySelector(".restart-button")
let screenFour = document.querySelector(".screen-four")
let nextButtonThree = document.querySelector(".next-button-three")
let greet = document.querySelector(".greet")
let screenFive = document.querySelector(".screen-five")
let insult = document.querySelector(".insult")
let compliment = document.querySelector(".compliment")
let screenSix = document.querySelector(".screen-six")
let nextButtonFour = document.querySelector(".next-button-four")
let winScreen = document.querySelector(".win-screen")
let restartButtonTwo = document.querySelector(".restart-button-two")

startButton.onclick = function() {
  screenOne.style.display = "block";
  titleScreen.style.display = "none";
};

nextButton.onclick = function() {
  screenOne.style.display = "none";
  screenTwo.style.display = "block";
}

nextTwo.onclick = function() {
  screenTwo.style.display = "none";
  screenThree.style.display = "block";
}

throwUpButton.onclick = function() {
  testCase.style.display = "block";
  imgTwo.style.display = "none";
  screenThree.style.display = "none";
  gameOverScreen.style.display = "block";
  gameOverText.innerHTML = "You Threw up all over Ronaldo's new jersey. He gets very angry and leaves you."
}

restartButton.onclick = function() {
  gameOverScreen.style.display = "none";
  titleScreen.style.display = "block";
}

greet.onclick = function() {
  screenFour.style.display = "block";
  screenThree.style.display = "none";
}

nextButtonThree.onclick = function() {
  screenFive.style.display = "block";
  screenFour.style.display = "none";
}

insult.onclick = function() {
  imgTwo.style.display = "block";
  testCase.style.display = "none";
  screenFive.style.display = "none";
  gameOverScreen.style.display = "block";
  gameOverText.innerHTML = "You insulted Ronaldo's football skills. He gets very angry and starts beating you up."
}

compliment.onclick = function() {
  screenSix.style.display = "block";
  screenFive.style.display = "none";
}

nextButtonFour.onclick = function() {
  winScreen.style.display = "block";
  screenSix.style.display = "none";
}

restartButtonTwo.onclick = function() {
  winScreen.style.display = "none";
  titleScreen.style.display = "block";
}