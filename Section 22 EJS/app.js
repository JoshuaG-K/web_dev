const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

const port = process.env.PORT || 3000;

const itemList = [];
const workList = [];

app.get("/", (req, res) => {
    currentDay = date.getDate();
    res.render("list", {listTitle:currentDay, newItem: itemList});
});

app.post("/", (req, res) => {
    let item = req.body.newItem;
    if (req.body.list == "Work") {
        workList.push(item);
        res.redirect("/work");
    } else {
        itemList.push(item);
        res.redirect("/");
    }
});

app.get("/work", (req, res) => {
    res.render("list", {listTitle:"Work List", newItem: workList});
});

app.listen(port, function() {
    console.log("Serving is running on port " + port);
});
