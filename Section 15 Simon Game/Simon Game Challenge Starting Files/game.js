var gamePattern = [];
var userClickedPattern = []; 

var gameNotStarted = true;

var level = 0;

var buttonFlashTime = 100;
var gameOverFlashTime = 200;

var startText = "Press Any Key to Start";
var gameOverText = "Game Over, Press Any Key to Restart";

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(n=3) {
    // the parameter n is used to generate a random 
    // integer in the range [0, n-1]
    // The function gets a new randomNumber and adds
    // it to the gamePattern
    $("#level-title").text("Level " + level);
    level++;
    randomNumber = Math.floor(Math.random()*n); 
    randomChosenColor = buttonColours[randomNumber];
    animateGamePress(randomChosenColor);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
}

function animateGamePress(currentColour) {
    $("#"+currentColour).addClass("game-pressed");
    setTimeout(function () {
        $("#"+currentColour).removeClass("game-pressed");
    }, buttonFlashTime);
}

function animatePlayerPress(currentColour) {
    $("#"+currentColour).addClass("player-pressed");
    setTimeout(function () {
        $("#"+currentColour).removeClass("player-pressed");
    }, 50);
}

function playSound(name) {
    var chosenAudio = new Audio("sounds/"+name+".mp3");
    chosenAudio.play();
}

function checkAnswer() {
    var index = userClickedPattern.length-1;
    var userChosenColour = userClickedPattern[index];
    var gameColour = gamePattern[index];
    if (gameColour == userChosenColour) {
        // Animate the button pressed by the user 
        playSound(userChosenColour);
        animatePlayerPress(userChosenColour);
        if (index == gamePattern.length-1) {
            setTimeout(() => {nextSequence(3);}, 1000);
            userClickedPattern = [];
        }
        console.log("Success");
    } else {
        // run some game over code
        console.log("Wrong");
        playSound("wrong");
        resetGame();
    }
}

function resetGame() {
    gamePattern = [];
    userClickedPattern = [];
    $("#level-title").text(gameOverText);
    gameOverFlash();
    gameNotStarted = true;
    level = 0;

}

function gameOverFlash() {
    $("body").addClass("game-over");
    setTimeout(()=>{$("body").removeClass("game-over");}, gameOverFlashTime);
}

// Game logic
$(document).on("keydown", function () {
    if (gameNotStarted) {
        nextSequence();
        gameNotStarted = !gameNotStarted;
    }
});

// User button press logic
$(".btn").on("click", function (event) {
    // Get the user colour
    userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);

    checkAnswer();

    console.log(userClickedPattern);
    
});