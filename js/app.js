
$(document).ready(function(){
	
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
              if (isNaN(guess) || guess === 0) {
                alert("Please choose an interger between 1 and 100\nYour previous guess doesn't count toward your total guesses");
                clearField();
                counter.innerHTML--;
              }
              else if (typeof guess == 'number') {
                appendGuess(guess);
                hotCold(guess, startingNum);
                clearField();
              }        

      });
  
    $('.new').click(function(){
      newGame();
    });
});

//Append guess to list
function appendGuess(x){
  $('#guessList').append('<li>' + x + '</li>');
}

//hot cold hints
function hotCold(userInput, randomNum){
  if (userInput === randomNum){
    document.getElementById('feedback').innerHTML = 'You Won!';
    //console.log('You Won!');
  }
  else if (Math.abs(userInput - randomNum) <= 10){
    document.getElementById('feedback').innerHTML = 'Hot';
    //console.log('Hot');
  }
  else if (Math.abs(userInput - randomNum) <= 20) {
    document.getElementById('feedback').innerHTML ='Warm';
    //console.log('warm');
  }
  else {
    document.getElementById('feedback').innerHTML = 'Cold';
    //console.log('Cold');
}
}

//Increase counter with every guess
var counter = document.getElementById("count");
counter.innerHTML = 0;
$('#guessButton').click(function(){
  counter.innerHTML++;
});

function newGame() {
  startingNum = Math.floor((Math.random() *100) +1);
  //console.log(startingNum);
  counter.innerHTML = 0;
  $('#guessList').empty();
  document.getElementById('feedback').innerHTML = "Make Your Guess!";
  clearField();
    }

  //clear field
  function clearField(){
    document.getElementById("userGuess").value ="";
  }  