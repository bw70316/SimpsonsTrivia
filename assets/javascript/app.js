// window.onload = function() {
//   console.log('window - onload');

  
// };

 $(document).ready(function () {  
            $('.dropdown-toggle').dropdown();  
        });
 
$("#easy").on('click', function(){
	$("#medium").remove();
	$("#easy").remove();
	game.loadQuestion();
	$("#hide").remove();
	$("#hideToo").remove();

});

$("#medium").on('click', function(){
	$("#easy").remove();
	$("#medium").remove();
	gameMed.loadQuestion();
	$("#hide").remove();
	$("#hideToo").remove();

});

$("#beginner").on('click', function(){
	$("#easy").remove();
	$("#medium").remove();
	game.loadQuestion();
	$("#hide").remove();
	$("#hideToo").remove();

});

$("#med").on('click', function(){
	$("#easy").remove();
	$("#medium").remove();
	gameMed.loadQuestion();
	$("#hide").remove();
	$("#hideToo").remove();

});

$(document).on('click', '.answer-button', function(e){
	game.clicked(e);
	console.log("woot");
	$.each(localStorage.setItem("score", game.pointsAvailable));
});

$(document).on('click', '.answer-buttons', function(e){
	gameMed.clicked(e);
	console.log("you got it");
	$.each(localStorage.setItem("score", gameMed.pointsAvailable));
});

$(document).on('click', '#reset', function() {

	location.reload();
});

// $(document).on('click', '#beginner', function() {

// 	location.reload();
// });

// $(document).on('click', '#medium', function() {

// 	location.reload();
// });

// $(document).ready(function() {doTimer();});



var questions = [{
	question: "1. What is the name of Bart Simpson's teacher?",
 answers: ["Ms. Hoover", "Ms. Crabapple", "Ms. Krabappel", "Mrs. Lovejoy"],
 correctAnswer: "Ms. Krabappel",
 image:"assets/css/krab.jpg"
 }, {
 question: "2. What are the names of the Simpsons' longtime pets?",
 answers: ["Satan's Little Helper & Snowball II", "Laddie and Snowball I", "Itchy & Scratchy",
 "Santa's Little Helper & Snowball II"],
 correctAnswer: "Santa's Little Helper & Snowball II",
  image:"assets/css/pets.png"
 }, {
 question: "3. What is the name of Homer's boss?",
answers: ["Duffman", "C. Montgomery Burns", "Whalen Smithers", "Seymour Skinner"],
 "correctAnswer": "C. Montgomery Burns",
  image:"assets/css/homerasleep.jpg"
 }, {
 question: "4. Who is Bart's blue-haired best friend?",
 answers: ["Sherri", "Ralph Wiggum", "Nelson Muntz", "Millhouse VanHouten"],
 correctAnswer: "Millhouse VanHouten",
 image:"assets/css/images.jpg"
},  {
	question: "5. What musical instrument does Lisa play?",
 answers: ["Saxophone", "Drums", "Violin", "Trumpet"],
 "correctAnswer": "Saxophone",
image:"assets/css/lamb.jpg"}]; 

var questionsMed= [{
	question: "1. What is the Secret Ingedient in a 'Flaming Moe'?",
 answers: ["Uranium", "Orange Juice", "Duff", "Krusty Brand Couch Syrup"],
 correctAnswer: "Krusty Brand Cough Syrup",
 image:"assets/css/moe.gif"
 }, {
	question: "2. What is Grampa Simpson's Real Name?",
 answers: ["Abraham", "Jasper", "Ned", "Milloy"],
 correctAnswer: "Abraham",
 image:"assets/css/old.jpg"
 }, {
	question: "3. What is the name of Homer's Bowling Team?",
 answers: ["The Strike-outs", "Holy Rollers", "Pin Pals", "Gutter Boys"],
 correctAnswer: "Pin Pals",
 image:"assets/css/Bowlarama.jpg"
 }, {
	question: "4. What is the name of Homer's Acapella Band?",
 answers: ["The Clef-Notes", "Acayella", "The Be Sharps", "The Jazz Holes"],
 correctAnswer: "The Be Sharps",
 image:"assets/css/sharps.gif"
 }, {
	question: "What is the Name of Bleeding Gums Murphy's Album?",
 answers: ["Sax on the Beach", "Saxoholic", "Blues in Yellow", "Saxophone Blues"],
 correctAnswer: "Sax on the Beach",
 image:"assets/css/murphy.jpg"
 }];

 var game= {
 	questions:questions,
 	currentQuestion:0,
 	counter:20,
 	correct:0,
 	incorrect:0,
 	score:0,
 	unanswered:0,
 	pointsAvailable: 1000,
 	countdown: function(){
 		game.counter--;
 		$("#counter").html(game.counter);
 		if(game.counter<=0) {
 			console.log("Time's Up, ay caramba");
 			game.timeUp();
 		}
 	},

 	scoreDown: function() {
 		game.pointsAvailable--;
 		$("#score").html(game.pointsAvailable);

 	},

 	
 	loadQuestion: function() {
 		scoreboard = setInterval(game.scoreDown, 20);
 		timer = setInterval(game.countdown, 1000);
 		game.score += game.pointsAvailable;
 		console.log("#score");
 		console.log(game.score);
 		game.pointsAvailable= 1000;
 		$('#subwrapper').html("<h2 id='question'>Time   Remaining : <span id='counter'>20</span> Seconds</h2>");
 		$("#subwrapper").append("<h2 id='question'>" + questions[game.currentQuestion].question + "</h2>" + '<img class="pic" src="'+ questions[game.currentQuestion].image + '"/>');
 		$("#subwrapper").append("<h2 id='question'>Score <span id='score'>1000</span></h2>");
 		// game.reducePoints();

 		if(game.score<=0) {


 			$("#score").remove();
 		}
 		else {
 			console.log ("yaay");
 		}
 		




 		for(var i=0; i<questions[game.currentQuestion].answers.length;i++) {
			$("#subwrapper").append('<li><button class="answer-button" id="button- ' +i+'" data-name="' + questions[game.currentQuestion].answers[i]+'">' + questions[game.currentQuestion].answers[i]+'</button></li>')
		}

 	},
 	nextQuestion: function() {
 		game.counter = 20;
 		clearInterval(scoreboard);

 		// scoreBoard = setInterval(game.scoreDown, 20);
 		$("#counter").html(game.counter);
 		// $("#score").append(game.pointsAvailable)
 		game.currentQuestion++;
 	    game.loadQuestion();
 	    // setInterval(game.scoreDown, 20);
 		
 		


 	},
 	timeUp: function() {
 		clearInterval(timer);
 		clearInterval(scoreboard);
 		setTimeout(game.pointsAvailable, 3*1000);
 	 	// clearInterval(game.pointsAvailable);
 		// setInterval(game.scoreDown, 20);
 		game.unanswered++;
 		$('#subwrapper').html("<h2>Ay Caramba... You're out of time!!</h2>");
 		$('#subwrapper').append("<img class='burns' src='assets/css/giphy.gif' height='300px' width='200px'/>");
 		$('#subwrapper').append("<h3>The correct answer was: " +questions[game.currentQuestion].correctAnswer+"</h3");
 		if(game.currentQuestion==questions.length-1) {
 			setTimeout(game.results,3*1000);
 		} else {
 			setTimeout(game.nextQuestion, 3*1000);
 		}
 	},
 	results: function(){
 		clearInterval(timer);
 		clearInterval(scoreboard);
 		game.score - 1000;


 		$("#subwrapper").html("<h2 id='game-over'>Game Over</h2>")
 		$("#subwrapper").append("<h3 id='total'> Total Score: " + game.score + "</h3>");
 		$("#subwrapper").append("<h3>Right: " +game.correct+ "<h3>");
 		$("#subwrapper").append("<h3>Wrong: " +game.incorrect+ "</h3>");
 		$("#subwrapper").append("<h3>Not Attempted: " +game.unanswered+ "</h3>");
 		$("#subwrapper").append("<button id='reset'>Play Again?</button>");

 		if (game.incorrect === 4) {
 			game.score=0;
 		} else {
 			game.score=game.score
 		}
 		
 		// game.reset();

 	},
 	clicked: function(e){

 		clearInterval(timer);
 		clearInterval(scoreboard);
 		if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
 			game.answeredCorrect();
 		} else {
 			game.answeredIncorrect();
 		}
 		
 		
 	},
 	answeredCorrect: function() {
 		console.log("correct");
 		clearInterval(scoreboard);
 		clearInterval(timer);
 		game.correct++;
 		$('#subwrapper').html('<h2>WOO HOO! You got it right!</h2>');
 		$('#subwrapper').append("<h2> Score: " + game.pointsAvailable + "</h2");
 		  $('#subwrapper').append("<img class='burns' src='assets/css/excellent.gif' height='300px' width='200px'/>")
 	 	
 	 	setTimeout(game.pointsAvailable, 3*1000);
 	 	

 	 	
 	 	

 		if(game.currentQuestion==questions.length-1) {
 			setTimeout(game.results,3*1000);
 			// localStorage.setItem("score", game.pointsAvailable);
 		} else {
 			setTimeout(game.nextQuestion, 3*1000);
 		
 		}


  	},
 	answeredIncorrect: function() {
 		console.log("nope");
 		clearInterval(scoreboard);
 		clearInterval(timer);
 		game.pointsAvailable = 0;
 		game.incorrect++;
 		setTimeout(game.pointsAvailable, 3*1000);
 		
 		
 		$('#subwrapper').html("<h2>D'oh! You got it wrong!</h2>");
 		$('#subwrapper').append("<h3>The correct   answer was : " +questions[game.currentQuestion].correctAnswer+"</h3");
 		$('#subwrapper').append("<h2 id='score'> Score: " +game.pointsAvailable+"</h2");
        $('#subwrapper').append("<img class='burns' src='assets/css/dummy.gif' height='300px' width='200px'/>");
    	// clearInterval(scoreBoard);
 		if(game.currentQuestion==questions.length-1) {
 			setTimeout(game.results,3*1000);
 		} else {
 			setTimeout(game.nextQuestion, 3*1000);
 		}

 	},
 	reset: function(){

 		game.currentQuestion = 0;
 		game.counter = 20;
 		game.correct=0;
 		game.incorrect=0;
 		clearInterval(scoreboard);
 		// pointsAvailable=1000;
 		game.unanswered=0;
 		game.loadQuestion();
 		

 	},

  }

   var gameMed= {
 	questionsMed: questionsMed,
 	currentQuestion:0,
 	counter:20,
 	correct:0,
 	incorrect:0,
 	score:0,
 	unanswered:0,
 	pointsAvailable: 1000,
 	countdown: function(){
 		gameMed.counter--;
 		$("#counter").html(gameMed.counter);
 		if(gameMed.counter<=0) {
 			console.log("Time's Up, ay caramba");
 			gameMed.timeUp();
 		}
 	},

 	scoreDown: function() {
 		gameMed.pointsAvailable--;
 		$("#score").html(gameMed.pointsAvailable);

 	},

 	
 	loadQuestion: function() {
 		scoreboardMed = setInterval(gameMed.scoreDown, 20);
 		timerMed = setInterval(gameMed.countdown, 1000);
 		gameMed.score += gameMed.pointsAvailable;
 		console.log("#score");
 		console.log(gameMed.score);
 		gameMed.pointsAvailable= 1000;
 		$('#subwrapper').html("<h2 id='question'>Time   Remaining : <span id='counter'>20</span> Seconds</h2>");
 		$("#subwrapper").append("<h2 id='question'>" + questionsMed[gameMed.currentQuestion].question + "</h2>" + '<img class="pic" src="'+ questionsMed[gameMed.currentQuestion].image + '"/>');
 		$("#subwrapper").append("<h2 id='question'>Score <span id='score'>1000</span></h2>");
 		// game.reducePoints();

 		if(gameMed.score<=0) {


 			$("#score").remove();
 		}
 		else {
 			console.log ("yaay");
 		}
 		




 		for(var i=0; i<questionsMed[gameMed.currentQuestion].answers.length;i++) {
			$("#subwrapper").append('<li><button class="answer-buttons" id="button- ' +i+'" data-name="' + questionsMed[gameMed.currentQuestion].answers[i]+'">' + questionsMed[gameMed.currentQuestion].answers[i]+'</button></li>')
		}

 	},
 	nextQuestion: function() {
 		gameMed.counter = 20;
 		clearInterval(scoreboardMed);

 		// scoreBoard = setInterval(game.scoreDown, 20);
 		$("#counter").html(gameMed.counter);
 		// $("#score").append(game.pointsAvailable)
 		gameMed.currentQuestion++;
 	   gameMed.loadQuestion();
 	    // setInterval(game.scoreDown, 20);
 		
 		


 	},
 	timeUp: function() {
 		clearInterval(timerMed);
 		clearInterval(scoreboardMed);
 		setTimeout(gameMed.pointsAvailable, 3*1000);
 	 	// clearInterval(game.pointsAvailable);
 		// setInterval(game.scoreDown, 20);
 		gameMed.unanswered++;
 		$('#subwrapper').html("<h2>Ay Caramba... You're out of time!!</h2>");
 		$('#subwrapper').append("<img class='burns' src='assets/css/giphy.gif' height='300px' width='200px'/>");
 		$('#subwrapper').append("<h3>The correct answer was: " +questionsMed[gameMed.currentQuestion].correctAnswer+"</h3");
 		if(gameMed.currentQuestion==questionsMed.length-1) {
 			setTimeout(gameMed.results,3*1000);
 		} else {
 			setTimeout(gameMed.nextQuestion, 3*1000);
 		}
 	},
 	results: function(){
 		clearInterval(timerMed);
 		clearInterval(scoreboardMed);
 		game.score - 1000;


 		$("#subwrapper").html("<h2 id='game-over'>Game Over</h2>")
 		$("#subwrapper").append("<h3 id='total'> total score: " + gameMed.score + "</h3>");
 		$("#subwrapper").append("<h3>Right: " +gameMed.correct+ "<h3>");
 		$("#subwrapper").append("<h3>Wrong: " +gameMed.incorrect+ "</h3>");
 		$("#subwrapper").append("<h3>Not Attempted: " +gameMed.unanswered+ "</h3>");
 		$("#subwrapper").append("<button id='reset'>Play Again?</button>");
 		
 		// game.reset();

 	},
 	clicked: function(e){

 		clearInterval(timerMed);
 		clearInterval(scoreboardMed);
 		if($(e.target).data("name")==questionsMed[gameMed.currentQuestion].correctAnswer){
 			gameMed.answeredCorrect();
 		} else {
 			gameMed.answeredIncorrect();
 		}
 		
 		
 	},
 	answeredCorrect: function() {
 		console.log("correct");
 		clearInterval(scoreboardMed);
 		clearInterval(timerMed);
 		gameMed.correct++;
 		$('#subwrapper').html('<h2>WOO HOO! You got it right!</h2>');
 		$('#subwrapper').append("<h2> Score: " + gameMed.pointsAvailable + "</h2");
 		  $('#subwrapper').append("<img class='burns' src='assets/css/excellent.gif' height='300px' width='200px'/>")
 	 	
 	 	setTimeout(gameMed.pointsAvailable, 3*1000);
 	 	

 	 	
 	 	

 		if(gameMed.currentQuestion==questionsMed.length-1) {
 			setTimeout(gameMed.results,3*1000);
 			// localStorage.setItem("score", game.pointsAvailable);
 		} else {
 			setTimeout(gameMed.nextQuestion, 3*1000);
 		
 		}


  	},
 	answeredIncorrect: function() {
 		console.log("nope");
 		clearInterval(scoreboardMed);
 		clearInterval(timerMed);
 		gameMed.counter=20
 		gameMed.pointsAvailable = 0;
 		gameMed.incorrect++;
 		setTimeout(gameMed.pointsAvailable, 3*1000);
 		
 		
 		$('#subwrapper').html("<h2>D'oh! You got it wrong!</h2>");
 		$('#subwrapper').append("<h3>The correct   answer was : " +questionsMed[gameMed.currentQuestion].correctAnswer+"</h3");
 		$('#subwrapper').append("<h2 id='score'> Score: " +gameMed.pointsAvailable+"</h2");
        $('#subwrapper').append("<img class='burns' src='assets/css/dummy.gif' height='300px' width='200px'/>");
    	// clearInterval(scoreBoard);
 		if(gameMed.currentQuestion==questionsMed.length-1) {
 			setTimeout(gameMed.results,3*1000);
 		} else {
 			setTimeout(gameMed.nextQuestion, 3*1000);
 		}

 	},
 	reset: function(){

 		gameMed.currentQuestion = 0;
 		gameMed.counter = 20;
 		gameMed.correct=0;
 		gameMed.incorrect=0;
 		clearInterval(scoreboardMed);
 		// pointsAvailable=1000;
 		gameMed.unanswered=0;
 		gameMed.loadQuestion();
 		

 	}

  }
