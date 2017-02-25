
var rose
var gold
var turq
var purple



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

$(".darkscore").append( randomNumber )

$( "#rose" ).click(function() {
	alert( "it's working" );
});

$( "#gold" ).click(function() {
	alert( "it's working" );
});

$( "#turq" ).click(function() {
	alert( "it's working" );
});

// crystal number generater and assingment

$( "#purple" ).click(function(){

	alert("test");
})

// Restart and Reset Game

