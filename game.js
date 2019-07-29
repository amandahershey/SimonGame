/* jshint esversion: 6*/
let started = false;
let userClick = [];
let level = 0;
const buttonColors = ['red', 'green', 'blue', 'yellow'];
let gamePattern = [];


// Start the game by pessing a key
$(document).keypress(() => {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// Generate next color in sequence
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
  playSequence();
}

// Plays the sequence before player tries to copy
function playSequence() {
  let i = 0;
  let sequence = setInterval(() => {
    $("#" + gamePattern[i]).fadeOut(150).fadeIn(150);
    i++;
    if (i === gamePattern.length) {
      clearInterval(sequence);
    }
  }, 1000);
}

// Player clicked button
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length - 1);
});