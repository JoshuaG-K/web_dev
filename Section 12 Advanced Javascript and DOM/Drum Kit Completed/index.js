function playSound (buttonInnerHTML) {
  switch (buttonInnerHTML) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play();
      break;
    
    case "j":
      var snare = new Audio("sounds/snare.mp3")
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3")
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3")
      kick.play();
      break;
    
    default:
      alert("Error: " + buttonInnerHTML);
  }
}

function buttonAnimation (buttonKey) {
  var buttonElement = document.querySelector("." + buttonKey);
  buttonElement.classList.add("pressed");
  setTimeout(function() {
    buttonElement.classList.remove("pressed")
  }, 150);
}

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
  });
  
  document.querySelectorAll(".drum")[i].addEventListener("keydown", function (event) {
    
    var keyString = event.key;
    playSound(keyString);
    buttonAnimation(keyString);
    
  });
}

// var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();