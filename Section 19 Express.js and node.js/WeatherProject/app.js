const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

const apiKey = "0d4498134b05a4e5925099d9fc533880";
const units  = "Imperial";



app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var cityName = req.body.cityName;
    const weatherApiCall = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey+"&units=" + units +"";
    https.get(weatherApiCall, (response)=> {
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);

            var description = weatherData.weather[0].description;
            var temp = weatherData.main.temp;
            const iconType = weatherData.weather[0].icon;
            const iconURL = "http://openweathermap.org/img/wn/"+iconType+"@2x.png";

            res.write("<p> The weather is " + description +". </p>");
            res.write("<h1> The temperature in " + cityName +" is " + temp + " degrees Fahrenheit.</h1>");
            res.write("<img src="+iconURL+">");
            res.send();
        });
    });
});



app.listen(port, ()=>{
    console.log("App running on port: " + port);
});
