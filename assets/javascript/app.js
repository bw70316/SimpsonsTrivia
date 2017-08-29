// window.onload = function() {
//   console.log('window - onload');

  
// };

 $(document).ready(function () {  
            $('.dropdown-toggle').dropdown();  
        });
 
$("#start").on('click', function(){
	$("#start").remove();
	game.loadQuestion();
	$("#hide").remove();
	$("#hideToo").remove();

});

$(document).on('click', '.answer-button', function(e){
	game.clicked(e);
});

$(document).on('click', '#reset', function() {
	game.reset();
});

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


 var game= {
 	questions:questions,
 	currentQuestion:0,
 	counter:30,
 	correct:0,
 	incorrect:0,
 	unanswered:0,
 	countdown: function(){
 		game.counter--;
 		$("#counter").html(game.counter);
 		if(game.counter<=0) {
 			console.log("Time's Up, ay caramba");
 			game.timeUp();
 		}

 	},
 	loadQuestion: function() {
 		timer = setInterval(game.countdown, 1000);
 		$('#subwrapper').html("<h2 id='question'>Time   Remaining : <span id='counter'>30</span> Seconds</h2>");
 		$("#subwrapper").append("<h2 id='question'>" + questions[game.currentQuestion].question + "</h2>" + '<img class="pic" src="'+ questions[game.currentQuestion].image + '"/>');



 		for(var i=0; i<questions[game.currentQuestion].answers.length;i++) {
			$("#subwrapper").append('<li><button class="answer-button" id="button- ' +i+'" data-name="' + questions[game.currentQuestion].answers[i]+'">' + questions[game.currentQuestion].answers[i]+'</button></li>')
		}

 	},
 	nextQuestion: function() {
 		game.counter = 30;
 		$("#counter").html(game.counter);
 		game.currentQuestion++;
 		game.loadQuestion();


 	},
 	timeUp: function() {
 		clearInterval(timer);
 		game.unanswered++
 		$('#subwrapper').html("<h2>Ay Caramba... You're out of time!!</h2>");
 		$('#subwrapper').append("<img class='burns' src='assets/css/giphy.gif' height='300px' width='200px'/>");
 		$('#subwrapper').append("<h3>The correct answer was: " +questions[game.currentQuestion].correctAnswer+"</h3");
 		if(game.currentQuestion==questions.length-1) {
 			setTimeout(game.results,1*1000);
 		} else {
 			setTimeout(game.nextQuestion, 1*1000);
 		}
 	},
 	results: function(){
 		clearInterval(timer);
 		$("#subwrapper").html("<h2>Game Over</h2>")
 		$("#subwrapper").append("<h3>Right: " +game.correct+ "<h3>");
 		$("#subwrapper").append("<h3>Wrong: " +game.incorrect+ "</h3>");
 		$("#subwrapper").append("<h3>Not Attempted: " +game.unanswered+ "</h3>");
 		$("#subwrapper").append("<button id='reset'>Play Again?</button>");
 		// game.reset();

 	},
 	clicked: function(e){

 		clearInterval(timer);
 		if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
 			game.answeredCorrect();
 		} else {
 			game.answeredIncorrect();
 		}
 		
 		
 	},
 	answeredCorrect: function() {
 		console.log("correct");
 		clearInterval(timer);
 		game.correct++;
 		$('#subwrapper').html('<h2>WOO HOO! You got it right!</h2>');
 		  $('#subwrapper').append("<img class='burns' src='assets/css/excellent.gif' height='300px' width='200px'/>")

 		if(game.currentQuestion==questions.length-1) {
 			setTimeout(game.results,3*1000);
 		} else {
 			setTimeout(game.nextQuestion, 3*1000);
 		}
  	},
 	answeredIncorrect: function() {
 		console.log("nope");
 		clearInterval(timer);
 		game.incorrect++;

 		$('#subwrapper').html("<h2>D'oh! You got it wrong!</h2>");
 		$('#subwrapper').append("<h3>The correct   answer was : " +questions[game.currentQuestion].correctAnswer+"</h3");
        $('#subwrapper').append("<img class='burns' src='assets/css/dummy.gif' height='300px' width='200px'/>")
 		if(game.currentQuestion==questions.length-1) {
 			setTimeout(game.results,3*1000);
 		} else {
 			setTimeout(game.nextQuestion, 3*1000);
 		}

 	},
 	reset: function(){
 		game.currentQuestion = 0;
 		game.counter = 30;
 		game.correct=0;
 		game.incorrect=0;
 		game.unanswered=0;
 		game.loadQuestion();

 	}

 }