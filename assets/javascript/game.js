// global varibles 
var randomNumber = 0;

var wins = 0;

var losses = 0;

var counter = 0;

bismuthNumber = [3, 8];

lapisNumber  = [1, 12, 7, 9];

peridotNumber = [10, 11, 2];

smokeyNumber = [1, 5, 6];

var score = 0;
// functions 
//==================================================================================
 

// Random number 
//==================================================================================
$(document).ready(function() {
  randomNumber = Math.floor((Math.random() * 120) + 12);

   $("#number").append(randomNumber);


var bismuth = bismuthNumber[Math.floor(Math.random() * bismuthNumber.length)];

var lapis = lapisNumber[Math.floor(Math.random() * lapisNumber.length)];

var peridot = peridotNumber[Math.floor(Math.random() * peridotNumber.length)];

var smokey = smokeyNumber[Math.floor(Math.random() * smokeyNumber.length)];

console.log("bismuth is " , bismuth);
console.log("lapis is ", lapis);
console.log("smokey is ",smokey);
console.log("peridot is ",peridot);




  //bismuth crystal counter function
  $("#bismuth").on("click", function() {

    // imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  counter =+ bismuth;
    // counter += Math.floor((Math.random() * 3) + 1);
    $(".score").append(counter);
   								 

    // We then output the number of times the crystal is clicked.
    alert("You clicked this crystal " + counter + " times!");
    							

  }); // bismuth function end 

  	//lapis crystal counter function
    $("#lapis").on("click", function() {

    // Each time the user clicks the bismuth crystal the counter goes up.
  counter += lapis;
 
    $(".score").append(lapis);
    // We then output the number of times the crystal is clicked.
    alert("You clicked this crystal " + lapis + " times!");
    									
  }); // lapis function end 

    //peridot crystal counter function
      $("#peridot").on("click", function() {

    // Each time the user clicks the bismuth crystal the counter goes up.


    $(".score").append(peridot);
    // We then output the number of times the crystal is clicked.
    alert("You clicked this crystal " + peridot + " times!");
    									
  }); // peridot function end 

  //smokey quarts crystal counter function
  $("#smokey").on("click", function() {

    // Each time the user clicks the bismuth crystal the counter goes up.

    $(".score").append(smokey);
    									
    // We then output the number of times the crystal is clicked.
    alert("You clicked this crystal " + smokey + " times!");

  }); // smokey function end
console.log("counter is ", counter);
}); // main function end

