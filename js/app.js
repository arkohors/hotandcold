
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  		
});


function newgame {
	randomNumber(1,100)
}


//New Game Button
function newgame(){
	$(".new").click(function(){
			var startingNumber = randomNumber(0,100);
			counter.innerHTML = 0;
			$('.#guessList').empty();

});


//When a user clicks the button, refresh the page.
/*$(".new").click(function(){
	location.reload();
});*/
//Reset the random number

//Random Number selector
function randomNumber(min, max){
	numberToGuess = Math.floor(Math.random()*(max-min))+min;
}

//Making sure the guess variable is a number
var guess = parseInt($('#userGuess').val());


/*Feedback for input that is not a number */

if (typeof guess == 'number') {
	hotcold(guess)
}
else {
	alert("Please enter a valid integer");
}

//Feedback for input that is not between 1 or 100*/
if (guess < 1 || guess > 101) {
	alert("Please pick an integer between 1 and 100")
}

//Feedback for each guess
function hotcold(){
if (numberToGuess = guess) {
	document.getElementById("feedback").innerHTML === "You Won!";
}
else if (Math.abs(numberToGuess - guess <= 10) {
	document.getElementById("feedback").innerHTML === "Hot!";
}
else if (Math.abs(numberToGuess - guess <= 20) {
	document.getElementById("feedback").innerHTML ==== "Kinda Hot!";
}

//If Guess is greater than abs(20), then say "Cold"
//If Guess is within abs(20), then say "kinda hot"
//If Guess is within abs(10), then say "hot"


//Append the list of guesses to the ul#guessList
$('.button').click(function(){
		$('#guessList').append('<li>' + '</li>');
});

//Count the number of guesses made by a user
var btn = document.getElementById("guessButton");
var counter = document.getElementById("count");
counter.innerHTML = 0;
btn.onclick = function (){
	counter.innerHTML++;
};
