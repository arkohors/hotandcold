
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    startingNum = Math.floor((Math.random() *100) +1);
  console.log(startingNum);  


$('#guessButton').click(function(){
            //Guessed number
            guess = parseInt($('#userGuess').val());
            appendGuess(guess);
            hotCold(guess, startingNum);
      });
  		

});


//numberToGuess = $('.new').click (function(){
  //       randomNumber();
    //  });


//Random Number
//function randomNumber(){
//  startingNum = Math.floor((Math.random() *100) +1);
//  console.log(startingNum);

//}

//Append guess to list
function appendGuess(x){
  $('#guessList').append('<li>' + x + '</li>');
}

//hot cold hints
function hotCold(userInput, randomNum){
  if (userInput === randomNum){
    document.getElementById('feedback').innerHTML = 'You Won!';
    console.log('You Won!');
  }
  else if (Math.abs(userInput - randomNum) <= 10){
    document.getElementById('feedback').innerHTML = 'Hot';
    console.log('Hot');
  }
  else if (Math.abs(userInput - randomNum) <= 20) {
    document.getElementById('feedback').innerHTML ='Warm';
    console.log('warm');
  }
  else {
    document.getElementById('feedback').innerHTML = 'Cold';
  console.log('Cold');
}
}

//Increase counter with every guess
var counter = document.getElementById("count");
counter.innerHTML = 0;
$('#guessButton').click(function(){
  counter.innerHTML++;
});
