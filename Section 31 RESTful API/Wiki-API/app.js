//jshint esversion:6

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const express = require("express");

const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

// Connects mongoose to our local mongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/wikiDB");

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article", articleSchema);

// Requests targetting one article
app.route("/articles")
    .get((req , res) => {
        Article.find({}, (err, foundArticles)=> {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        });
    })
    .post((req, res) => {
        console.log(req.body.title);
        console.log(req.body.content);
    
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        newArticle.save(function(err) {
            if (!err) {
                res.send("Successfully added a new article");
            } else {
                res.send(err);
            }
        });
    })
    .delete((req, res) => {
        Article.deleteMany({}, (err, deletedCount) => {
            if (!err) {
                res.send("Successfully deleted " + deletedCount + " items.");
            } else {
                res.send(err);
            }
        });
    }
);
// Requests targeting a specific article
app.route("/articles/:articleTitle")
    .get((req, res) => {
        // articleTitle is in the parameters of the get string
        const articleTitle = req.params.articleTitle;
        Article.findOne({title: articleTitle}, (err, foundArticle) => {
            if (!err) {
                if (foundArticle) {
                    res.send(foundArticle);
                } else {
                    res.send("No articles with that title found.");
                }
            } else {
                res.send(err);
            }
        })
    })
    .put((req, res) => {
        Article.updateOne(
            {title: req.params.articleTitle},
            {title: req.body.title,
            content: req.body.content},
            function(err) {
                if (!err) {
                    res.send("Article updated succesfully!");
                } else {
                    res.send(err);
                }
            });
    })
    .patch((req, res) => {
        Article.updateOne(
            {title: req.params.articleTitle},
            {$set: req.body},
            function(err) {
                if (!err) {
                    res.send("Article updated succesfully!");
                } else {
                    res.send(err);
                }
        });
    })
    .delete((req, res) => {
        Article.deleteOne({title:req.params.articleTitle}, (err) => {
            if (!err) {
                res.send("Successfully deleted the article.");
            } else {
                res.send(err);
            }
        })
    }); 



app.listen(port, () => {
    console.log("Server started successfully on port " + port);
});
