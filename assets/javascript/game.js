/*
Tracking for each game
*/
let wins = 0 
let losses = 0
let randomTarget;
let currentScore = 0
let gemA;
let gemB;
let gemC;
let gemD;

function generateRandomNum(max, min){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function gameBegin(){
	console.log("Game begins!");
	$("#wins").text(wins);
	$("#losses").text(losses);
	randomTarget = generateRandomNum(120,19);
	$("#target-number").text(randomTarget);
	currentScore = 0
	$("#active-score").text(currentScore);
	gemA = generateRandomNum(12,1);
	gemB = generateRandomNum(12,1);
	gemC = generateRandomNum(12,1);
	gemD = generateRandomNum(12,1);
	console.log(
		"GEMS: ",
		"GEM-A: ", gemA,
		"GEM-B: ", gemB,
		"GEM-C", gemC,
		"GEM-D", gemD
	)
}
gameBegin()
/*
game begin
	show the player the random number
	set the score to zero
	set a random number for each gem
*/

$(".gem").click(function(){
	console.log(this.id)
	let clickValue;
	switch (this.id){
		case "gemA":
			clickValue = gemA;
			break;
		case "gemB":
			clickValue = gemB;
			break;
		case "gemC":
			clickValue = gemC;
			break;
		case "gemD":
			clickValue = gemD;
			break;
		default:
			console.log("A gem was not clicked");
	}
	currentScore += clickValue;
	$("#active-score").text(currentScore);

	if (currentScore === randomTarget){
		wins++;
		gameBegin();
	}
	if (currentScore > randomTarget){
		losses++;
		gameBegin();
	}

})
/*
Image click event
	add the value to the user total
	show user new value
	if current score is less than random number that was generated,
		keep playing
	if equal to  random number that was generated
		you win.
		add win to wins
		 Restart game
	if more than the random number that was generated
		then you lose
		add a loss
		restart game
*/







































// // <!-- create 4 buttons with id and class -->

// // find 4 gem images
// // make them part of the button
// // define variables
// let targetNum;
// let randomGem;
// let wins = 0
// let losses = 0
// let points = 0
//  // <!-- create variable for wins and losses 
// //make a space to show the random number 
// /* make a place to show wins and losses
// make a place to show total points during the game*/

// /*  generate a random number for the score between 19-120 (math.random math.floor?*/
// function getTargetNum(min, max){
// 		// const min = 19
// 		// const max = 120
// 		return Math.floor(Math.random()* (max - min +1)+ 1);
// }
// // generate a random hidden number for 1-12 points for each gem*/
// for (var i = 0; i < 4; i++){
// 	$(".input").each(function(){
//     var randomGem = Math.floor((Math.random() * 11) +1 );
//     console.log(randomGem);
//     var randomGem = $(this)
//     (this).attr({
//     	"data-random": random
//    	}); 
//   });
// }
// // listen for a click?*/
// // 

// $(".container").click(function(){
//   if(points < targetNum){
// 		points++;
// 	}
// 	else {
//     if (points === targetNum){
//     	wins++
//       alert("you win!")
//     }
// 	}
// })
        
//         // 

//     //is the total of the value clicked less than the target score?
//       //for variable? 
       
//         // store new value
//         //  this becomes the new score?

//         /* else if equal to the variable set for the random number then 
//             alert you win
//             add a win
//             reset to 0 points
//             generate new random number */


//            /* else if it greater than random number you lost

//             add a loss to counter*/

            
// 		//  begin a new game
		
// function getTargetNum(){
//   points = 0
//   $("#myid").get(wins)
//   $("#myid").get(losses)
// }
    


//             // reset points to 0 
//             // pick a new random number for the target 
//             // set new values for each gem stone

//     /*un the random number generator */