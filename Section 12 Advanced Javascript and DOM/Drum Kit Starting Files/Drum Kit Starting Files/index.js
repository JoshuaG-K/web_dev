var numberOfDrumButtons = document.querySelectorAll(".drum").length;
alert(numberOfDrumButtons);
document.querySelector("#title").innerHTML = "test";

var buttonList = document.querySelectorAll(".drum");
var numDrums = document.querySelectorAll(".drum").length;
document.querySelector(".drum").addEventListener("click", function () {
    alert("I got clicked!");
});

for (var i = 0; i < numDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked!");
    });
}
