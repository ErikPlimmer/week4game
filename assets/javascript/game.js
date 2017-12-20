// global varibles 
var randomNumber = 0;

var wins = 0;

var losses = 0;

bismuthNumber = [3, 8];

lapisNumber  = [1, 12, 7, 9];

peridotNumber = [10, 11, 2];

smokeyNumber = [1, 5, 6, 14];

var score = 0;
var bismuth=0;
var lapis=0;
var peridot=0;
var smokey=0;
var counter=0;

// Start game function 
//==================================================================================
function startGame(){
   randomNumber = Math.floor((Math.random() * 120) + 12);
    counter = 0;

    $("#number").html(randomNumber);
    $(".score").html("Crystals collected:", counter);

// Generate random number for each crystal
//==========================================

bismuth = bismuthNumber[Math.floor(Math.random() * bismuthNumber.length)];

lapis = lapisNumber[Math.floor(Math.random() * lapisNumber.length)];

peridot = peridotNumber[Math.floor(Math.random() * peridotNumber.length)];

smokey = smokeyNumber[Math.floor(Math.random() * smokeyNumber.length)];


      // console.log("bismuth is " , bismuth);
      // console.log("lapis is ", lapis);
      // console.log("smokey is ",smokey);
      // console.log("peridot is ",peridot);
      // console.log("random number is ",randomNumber);
}

//Check win function
//==================================================================================

function checkWin(){
    if (counter === randomNumber) {
      wins++;
  $("#wins").html("Wins:" + " " + wins);
  
    alert("You won. Starting new game");
    startGame();
}

    else if(counter > randomNumber) {
      losses++;
   $("#losses").html("Losses:" + " " + losses);
    alert("You loser. Starting new game");
    startGame();
}

}; //end checkWin function

 

// Load game 
//==================================================================================
$(document).ready(function() {
  startGame();
  $("#wins").html("Wins:" + " " + wins);
  $("#losses").html("Losses:" + " " + losses);  

  //bismuth crystal counter function
  $("#bismuth").on("click", function() {

    // Each time the user clicks the bismuth crystal the counter goes up.  
        counter = counter + bismuth;
   
    $(".score").html("Crystals collected:" + " " +counter);
   								 
    // We then output the number of times the crystal is clicked.
    alert("You collected " + bismuth + " crystals!");
   
    checkWin();

  }); // bismuth function end 



  	//lapis crystal counter function
    $("#lapis").on("click", function() {

    // Each time the user clicks the lapis crystal the counter goes up.
      counter = counter + lapis;

    $(".score").html("Crystals collected:" + " " +counter);

    // We then output the number of times the crystal is clicked.
    alert("You collected " + lapis + " crystals!");

    checkWin();
    									
  }); // lapis function end 



    //peridot crystal counter function
    $("#peridot").on("click", function() {

    // Each time the user clicks the peridot crystal the counter goes up.
        counter = counter + peridot;

    $(".score").html("Crystals collected:" + " " +counter);

    // We then output the number of times the crystal is clicked.
    alert("You collected " + peridot + " crystals!");
    
    checkWin();
    									
  }); // peridot function end 



  //smokey quarts crystal counter function
    $("#smokey").on("click", function() {

    // Each time the user clicks the smokey quartz crystal the counter goes up.
        counter = counter + smokey;

    $(".score").html("Crystals collected:" + " " + counter);
    									
    // We then output the number of times the crystal is clicked.
    alert("You collected " + smokey + " crystals!");
    
    checkWin();

  }); // smokey function end



}); // main function end

