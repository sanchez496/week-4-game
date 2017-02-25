

// Game Start
function startGame(){
	}

//alert click ok to begin

startGame();
alert("Hit enter to begin the game. Beat the computer by guessing the combination of correction crystals!");

//Random number generater
var randomNumber = "";
	for (var i=0; i<2; i++){
		var random = Math.floor(Math.random() * 9) +1;
		randomNumber = random + randomNumber;
	}

	console.log(randomNumber);

$(".Random").append( randomNumber )


// crystal number generater and assingment

$("#purple").on("click", function(){

	alert("test");
})

// Restart and Reset Game