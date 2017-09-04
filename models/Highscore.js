var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var highscoreSchema = new Schema({

	name: {
		type: String,
		required:true
	},
  // headline, a string, must be entered
  highscore: {
    type: Number,
    required: true,

  },
  // summary, a string, must be entered
  
  
});

// Create the Headline model using the headlineSchema
var Highscore= mongoose.model("Highscore", highscoreSchema);

// Export the Headline model
module.exports = Highscore;