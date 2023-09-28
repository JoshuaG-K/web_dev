const express = require("express");

const app = express();
const port = 3000;

app.get("/", function(req, res) {
    res.send("<h2 style='color: red;'> Sending a response! </h2>")
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: jgarciakimble@gmail.com")
});

app.get("/about", function(req, res) {
    res.send("I like games, anime, reading, learning, and creating cool programs. ")
});

app.get("/projects", (req, res) => {
    res.send("Currently working on learning full stack development");
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

