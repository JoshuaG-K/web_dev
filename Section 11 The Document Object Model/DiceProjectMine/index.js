var imageList = document.querySelectorAll(".player-dice");
var firstDice = imageList[0];
var secondDice = imageList[1];

var diceImageList = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

var randomFirst = Math.floor(Math.random()*diceImageList.length);
var randomSecond = Math.floor(Math.random()*diceImageList.length);

firstDice.setAttribute("src", "images/"+diceImageList[randomFirst]);
secondDice.setAttribute("src", "images/"+diceImageList[randomSecond]);

if (randomFirst > randomSecond) {
    document.querySelector(".title-heading").innerHTML = "<img class='flag-img' src='images/red-flag.png' alt='Winning Flag'> Player1 Wins!";
} else if (randomFirst < randomSecond) {
    document.querySelector(".title-heading").innerHTML = "Player2 Wins! <img class='flag-img' src='images/red-flag.png' alt='Winning Flag'>";
} else {
    document.querySelector(".title-heading").innerHTML = "A Tie!";
}

