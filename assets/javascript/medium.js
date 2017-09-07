// window.onload = function() {
//   console.log('window - onload');

  
// };

 $(document).ready(function () {  
            $('.dropdown-toggle').dropdown();  
        });
 

$("#medium").on('click', function(){
	$("#easy").remove();
	$("#medium").remove();
	gameMed.loadQuestion();
	$("#hide").remove();
	$("#hideToo").remove();

});



$(document).on('click', '.answer-button', function(e){
	gameMed.clicked(e);
	console.log("you got it");
	$.each(localStorage.setItem("score", gameMed.pointsAvailable));
});

$(document).on('click', '#reset', function() {

	location.reload();
});

var questionsMed= [{
	question: "1. bleh",
 answers: ["Ms. Hoover", "Ms. Crabapple", "Ms. Krabappel", "Mrs. Lovejoy"],
 correctAnswer: "Ms. Krabappel",
 image:"assets/css/krab.jpg"
 }, {
	question: "2. blerg?",
 answers: ["Ms. Hoover", "Ms. Crabapple", "Ms. Krabappel", "Mrs. Lovejoy"],
 correctAnswer: "Ms. Krabappel",
 image:"assets/css/krab.jpg"
 }, {
	question: "3. hubba",
 answers: ["Ms. Hoover", "Ms. Crabapple", "Ms. Krabappel", "Mrs. Lovejoy"],
 correctAnswer: "Ms. Krabappel",
 image:"assets/css/krab.jpg"
 }, {
	question: "4. dubbya?",
 answers: ["Ms. Hoover", "Ms. Crabapple", "Ms. Krabappel", "Mrs. Lovejoy"],
 correctAnswer: "Ms. Krabappel",
 image:"assets/css/krab.jpg"
 }, {
	question: "5. wasssup",
 answers: ["Ms. Hoover", "Ms. Crabapple", "Ms. Krabappel", "Mrs. Lovejoy"],
 correctAnswer: "Ms. Krabappel",
 image:"assets/css/krab.jpg"
 }];

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
 		scoreboard = setInterval(gameMed.scoreDown, 20);
 		timer = setInterval(gameMed.countdown, 1000);
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
			$("#subwrapper").append('<li><button class="answer-button" id="button- ' +i+'" data-name="' + questionsMed[gameMed.currentQuestion].answers[i]+'">' + questionsMed[gameMed.currentQuestion].answers[i]+'</button></li>')
		}

 	},
 	nextQuestion: function() {
 		gameMed.counter = 20;
 		clearInterval(scoreboard);

 		// scoreBoard = setInterval(game.scoreDown, 20);
 		$("#counter").html(gameMed.counter);
 		// $("#score").append(game.pointsAvailable)
 		gameMed.currentQuestion++;
 	   gameMed.loadQuestion();
 	    // setInterval(game.scoreDown, 20);
 		
 		


 	},
 	timeUp: function() {
 		clearInterval(timer);
 		clearInterval(scoreboard);
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
 		clearInterval(timer);
 		clearInterval(scoreboard);


 		$("#subwrapper").html("<h2 id='game-over'>Game Over</h2>")
 		$("#subwrapper").append("<h3 id='total'> total score: " + gameMed.score + "</h3>");
 		$("#subwrapper").append("<h3>Right: " +gameMed.correct+ "<h3>");
 		$("#subwrapper").append("<h3>Wrong: " +gameMed.incorrect+ "</h3>");
 		$("#subwrapper").append("<h3>Not Attempted: " +gameMed.unanswered+ "</h3>");
 		$("#subwrapper").append("<button id='reset'>Play Again?</button>");
 		
 		// game.reset();

 	},
 	clicked: function(e){

 		clearInterval(timer);
 		clearInterval(scoreboard);
 		if($(e.target).data("name")==questionsMed[gameMed.currentQuestion].correctAnswer){
 			gameMed.answeredCorrect();
 		} else {
 			gameMed.answeredIncorrect();
 		}
 		
 		
 	},
 	answeredCorrect: function() {
 		console.log("correct");
 		clearInterval(scoreboard);
 		clearInterval(timer);
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
 		clearInterval(scoreboard);
 		clearInterval(timer);
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
 		clearInterval(scoreboard);
 		// pointsAvailable=1000;
 		gameMed.unanswered=0;
 		gameMed.loadQuestion();
 		

 	}

  }