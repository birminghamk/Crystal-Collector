$(function () {
// On page Load:
	// create variables and set them to default values: 
	//computerRandomNumber = random number between 19 and 120
	var computerRandomNumber = Math.floor(Math.random() * ((120-19) + 1) + 19);
	// array of crystal values = array of number values (4 values, all of them will
	//		be random number between 1 and 12)
	var crystalClickedValue = [Math.floor(Math.random() * ((12-1) + 1) + 1)];
	// wins = 0
	wins = 0;
	// losses = 0
	losses = 0
	//user total score = 0
	userTotalScore = 0;
	//update items on the page:
		function update () {
			$(".wins").html("Wins: " + wins);
			$(".losses").html("Losses " + losses);
		}
		// put wins  on page
		//put losses  on page
		// put computerRandomNumber on page
		// call update items on page function
	//reset(function):
		function reset () {
			userTotalScore = 0;
			var crystalClickedValue = [Math.floor(Math.random() * ((12-1) + 1) + 1)];
			var computerRandomNumber = Math.floor(Math.random() * ((120-19) + 1) + 19);
		}
		//userTotalScore = 0
		//comuterRandomNumber  - new random number = new random number using 
		// array of crystals set to new random number
	//call reset function
	reset();
	// put computerRandomNumber on the page
	$("#randomNumber").html(computerRandomNumber);
	//On crystal click
		//figure out what crystal they clicked and store in a variable
		// store crystal value in variable (crystalClickedValue)
		// Add crystalClickedValue to userTotalScore
		//call update
		//update the page to put new userTotalScore on the page
	$(".redCrystal").on("click", function() {
		var redCrystal = crystalClickedValue;
		userTotalScore= userTotalScore + crystalClickedValue;
		update();
		$(".scoreDisplay").html(userTotalScore);
		$(".totalScore").html(userTotalScore + crystalClickedValue);
	}); //END RED CRYSTAL CLICK

	$(".greenCrystal").on("click", function() {
		var greenCrystal = crystalClickedValue;
		userTotalScore= userTotalScore + crystalClickedValue;
		update();
		$(".scoreDisplay").html(userTotalScore);
		$(".totalScore").html(userTotalScore + crystalClickedValue);
	}); //END GREEN CRYSTAL CLICK

	$(".darkblueCrystal").on("click", function() {
		var darkblueCrystalClicked = crystalClickedValue;
		userTotalScore= userTotalScore + crystalClickedValue;
		update();
		$(".scoreDisplay").html(userTotalScore);
		$(".totalScore").html(userTotalScore + crystalClickedValue);
	}); //END DARKBLUE CRYSTAL CLICK

	$(".lightblueCrystal").on("click", function() {
		var lightblueCrystalClicked = crystalClickedValue;
		userTotalScore= userTotalScore + crystalClickedValue;
		update();
		$(".scoreDisplay").html(userTotalScore);
		$(".totalScore").html(userTotalScore + crystalClickedValue);
	}); //END LIGHTBLUE CRYSTAL CLICK

		
	// if they win, (userTotalScore = computerRandomNumber)
	// add 1 to wins
			// reset computerRandomNumber = new random number between 19 and 120, array of crystal values = new randomnumber between 1 and 12, userTotalscore 0
			// update the page to put new wins, computerRandomNumber, and userTotalScore to the page
			//call update
	if (userTotalScore === computerRandomNumber) {
		wins++;
		reset();
		update();
		$(".userMessage").html("You Win!");
		

	} // END WIN CONDITION

	//if they lose, (userTotalScore > computerRandomNumber) 
			// add 1 to losses
			// reset computerRandomNumber = new random number between 19 and 120, array of crystal values = new randomnumber between 1 and 12, userTotalscore 0
			// update the page to put new wins, computerRandomNumber, and userTotalScore to the page
			//call update
		else if (userTotalScore > computerRandomNumber) {
			losses++;
			reset();
			update();
			$(".userMessage").html("Try Again!");
		} //END LOSSES CONDITION


}); // END READY 

