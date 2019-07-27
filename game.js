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
    console.log('game start');
  }
});