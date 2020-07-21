var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var started = false;
var level = 0;

//a key pressed turns the game to started and allows other functions to work
$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("level: " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id"); //store the id of the button that got clicked

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

//   checks the last entry in the array entered
  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    // resets the user's pattern each round
  userClickedPattern=[];
  level++;

  $("#level-title").text("level: " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
    //compares to see if entries are the same
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    //compares to see if entries are the same length
    if(userClickedPattern.length===gamePattern.length){
        //if they are the same length then proceed to the next round
        setTimeout(function(){
            nextSequence();
        }, 1000);
    }

  } else {
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game over, Press Any Key to Restart");
    startOver();
  }
}

function startOver(){
    level = 0;
    gamePattern=[];
    started = false;
}