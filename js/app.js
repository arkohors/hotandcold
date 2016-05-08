
$(document).ready(function(){
	'use strict';
  var startingNum = Math.floor((Math.random() *100) +1);
  var counter = $("#count");
  counter.innerHTML = 0;


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


    newGame();

    $('#guessButton').click(function(){
            var guess = parseInt($('#userGuess').val()); //Guesses Number
              if (isNaN(guess) || guess === 0 || guess > 100) {
                alert("Please choose an interger between 1 and 100\nYour previous guess doesn't count toward your total guesses");
                clearField();
                counter.innerHTML = 0;
              }
              else {
                appendGuess(guess);
                counter.innerHTML++;
                hotCold(guess);
                clearField();

              }        

      });
  
    $('.new').click(function(){
      newGame();
    });


//Append guess to list
function appendGuess(guess){
  $('#guessList').append('<li>' + guess + '</li>');
}

function feedback(message){
  $('#feedback').text(message);
}

//hot cold hints
function hotCold(userInput){
  if (userInput === startingNum){
   feedback('You Won!');
  }

  else if (Math.abs(userInput - startingNum) <= 10){
   feedback('Hot');
  }

  else if (Math.abs(userInput - startingNum) <= 20) {
   feedback('Warm');
  }

  else {
   feedback('Cold');
  }

}


function newGame() {
  var startingNum = Math.floor((Math.random() *100) +1);
  var counter = $("#count");
  counter.innerHTML = 0;
  $('#guessList').empty();
  $('#feedback').text("Make Your Guess!");
  clearField();
    }

  //clear field
  function clearField(){
    $("#userGuess").empty();
  }  
  });