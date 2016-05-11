$(document).ready(function(){
	'use strict';
  var startingNum = Math.floor((Math.random() *100) +1);
  var counter = 0;


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $('.new').click(function(){
      newGame();
    });

    $('#guessButton').click(function () {
        validateGuess(parseInt($('#userGuess').val())); //Guesses Number) 
    });


    function validateGuess(guess){
              if (isNaN(guess) || guess === 0 || guess > 100) {
                alert("Please choose an interger between 1 and 100\nYour previous guess doesn't count toward your total guesses");
              }
              else {
                $("#userGuess").val('');
                guessComparison(guess);
                insertGuess(guess);
              }        
      };

 function feedback(temperature) {
// We use this function just so we don't repeat ourselves in the compareGuess
    $('#feedback').text(temperature);
  }

function insertGuess(guess){
  counter++;
  $('#count').text(counter);
  $('#guessList').append('<li>' + guess + '</li>');
}

function feedback(message){
  $('#feedback').text(message);
}

//hot cold hints
function guessComparison(userInput){
  var difference = (userInput - startingNum);
  if (difference === startingNum){
   feedback('You Won!');
  }

  else if (Math.abs(difference) <= 10){
   feedback('Hot');
  }

  else if (Math.abs(difference) <= 20) {
   feedback('Warm');
  }

  else {
   feedback('Cold');
  }

}


function newGame() {
  startingNum = Math.floor((Math.random() *100) +1);
   counter = 0;
    $('#count').text(counter);
    $('#guessList').empty();
    $("#userGuess").val('');
    $('#feedback').text("Make Your Guess!");
    }

});