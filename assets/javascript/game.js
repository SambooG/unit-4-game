// <!-- create 4 buttons with id and class -->

// find 4 gem images
// make them part of the button
// define variables
let targetNum;
let randomGem;
let wins = 0
let losses = 0
let points = 0
 // <!-- create variable for wins and losses 
//make a space to show the random number 
/* make a place to show wins and losses
make a place to show total points during the game*/

/*  generate a random number for the score between 19-120 (math.random math.floor?*/
    function getTargetNum(min, max){
        // const min = 19
        // const max = 120
    return Math.floor(Math.random()* (max - min +1)+ 1);
    }
   // generate a random hidden number for 1-12 points for each gem*/
   for (var i = 0; i < 4; i++){
   $(".input").each(function(){
    var randomGem = Math.floor(Math.random() * 11)+1;
    console.log(randomGem);
    var randomGem = $(this)
    (this).attr({
        "data-random": random
   }); 
   });
   }
// listen for a click?*/
// $(".container").click(function(){

$(".container").click(function(){
    if(points < targetNum);
    points++;
    } else {
        if (points === targetNum);
        wins++
        alert("you win!")
    }
    })
        
        // 

    //is the total of the value clicked less than the target score?
        // if yes keep adding to the scored points
        // store new value

        /* else if equal to the variable set for the random number then 
            alert you win
            add a win
            reset to 0 points
            generate new random number */


           /* else if it greater than random number you lost

            add a loss to counter*/

            
    //  begin a new game
function getTargetNum(){
    points = 0
    $("#myid").get(wins)
    $("#myid").get(losses)
}
    


            // reset points to 0 
            // pick a new random number for the target 
            // set new values for each gem stone

    /*un the random number generator */