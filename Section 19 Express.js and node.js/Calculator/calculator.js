const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sum = num1 + num2;
    res.send("The sum is: " + sum);
});

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight / height**2;
    var bmiString = "Your BMI is: " + bmi;
    res.send(bmiString);
});


app.listen(port, () => {
    console.log("Serving running on port " + port);
});