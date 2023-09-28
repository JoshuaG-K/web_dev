var fs = require("fs");
fs.copyFileSync("file.txt", "file2.txt");

var superheroes = require("superheroes");
var supervillains = require("supervillains")

var mySuperheroName = superheroes.random();
console.log("Hero Name: " + mySuperheroName);

var mySupervillainName = supervillains.random();
console.log("Villain Name: " + mySupervillainName);


