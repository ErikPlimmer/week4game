// global varibles 
var randomNumber = 0;
var wins = 0;

var losses = 0;

var counter = 0;

numberOptions = ["1", "10", "15", "20"];
// functions 

 

// Random number 
$(document).ready(function() {
  randomNumber = Math.floor((Math.random() * 120) + 12);
   $("#number").append(randomNumber);

 // $("#random-number").append(randomNumber);
								
 // document.querySelector("#number").innerHTML = "solve: " + randomNumber + "<br>"; 

 for (var i = 0; i < numberOptions.length; i++) {
 	$("#bismuth" + numberOptions[i]);
}

  //bismuth crystal counter function
  $("#bismuth").on("click", function() {

    // Each time the user clicks the bismuth crystal the counter goes up.
      
    // imageCrystal.attr("data-crystalvalue", numberOptions[i]);
 counter += ("#bismuth");
    // counter += Math.floor((Math.random() * 3) + 1);
    $(".score").append(counter);
   								 console.log(counter);
    // We then output the number of times the crystal is clicked.
    alert("You clicked this crystal " + counter + " times!");
    							

  });

  	//lapis crystal counter function
    $("#lapis").on("click", function() {

    // Each time the user clicks the bismuth crystal the counter goes up.

    // counter += Math.floor((Math.random() * 3) + 1);
    $(".score").append(counter);
    // We then output the number of times the crystal is clicked.
    alert("You clicked this crystal " + counter + " times!");
    									
  });

    //peridot crystal counter function
      $("#peridot").on("click", function() {

    // Each time the user clicks the bismuth crystal the counter goes up.

    // counter += Math.floor((Math.random() * 3) + 1);
    $(".score").append(counter);
    // We then output the number of times the crystal is clicked.
    alert("You clicked this crystal " + counter + " times!");
    									
  });

  //smokey quarts crystal counter function
  $("#smokey").on("click", function() {
  	$(".score").append(counter);
    // Each time the user clicks the bismuth crystal the counter goes up.

    // counter += Math.floor((Math.random() * 3) + 1);
    										console.log("smokey is ",counter);
    // We then output the number of times the crystal is clicked.
    alert("You clicked this crystal " + counter + " times!");

  });

});


// console.log("random number" ,randomNumber);
// console.log("bismuth is", counter);
// console.log("lapis is ", counter);
// console.log("peridot is" counter);



 // 	document.querySelector("#wins").innerHTML = "Wins: " + wins + "<br><br><br><br>";
	// document.querySelector("#losses").innerHTML = "Losses: " + losses + "<br><br><br><br>";