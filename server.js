var express = require("express");
var mongoose = require("mongoose");
// var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();

// Set up an Express Router
var router = express.Router();

// Require our routes file pass our router object
// require("./config/routes")(router);

var Highscore = require("./models/Highscore.js");

// Designate our public folder as a static directory
app.use(express.static(__dirname + "/public"));

// Connect Handlebars to our Express app
// app.engine("handlebars", expressHandlebars({
//   defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");


mongoose.connect("MONGODB_URI: mongodb://heroku_zd3rrrxv:9h2bal9mgoe53v4asridpamrqv@ds129434.mlab.com:29434/heroku_zd3rrrxv")
// Use bodyParser in our app
app.use(bodyParser.urlencoded({
  extended: false
}));

// Have every request go through our router middleware
app.use(router);


// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/simpsons";

// // Connect mongoose to our database
// mongoose.connect(db, function(error) {
//   // Log any errors connecting with mongoose
//   if (error) {
//     console.log(error);
//   }
//   // Or log a success message
//   else {
//     console.log("mongoose connection is successful");
//   }
// });

app.post("/highscores", function(req, res) {

db.simpsons.insert(game.score, function(error, saved) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Otherwise, send the note back to the browser
    // This will fire off the success function of the ajax request
    else {
      res.send(saved);
    }
  });
});
  // Inserting an array and a boolean into the req.body object for example purposes
 

app.get("/", function(req, res) {
  res.send(index.html);
});


app.listen(3000, function() {
  console.log("App running on port 3000!");
});


// Listen on the port
