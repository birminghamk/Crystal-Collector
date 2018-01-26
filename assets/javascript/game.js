$(function () {
// On page Load:
	var computerRandomNumber = 0; // variable stores initial computerRandomNumber value

	function createRandomNumber () {
		computerRandomNumber = Math.floor(Math.random() * ((120-19) + 1) + 19); // creates random number between 19 and 120
		$("#randomNumber").html(computerRandomNumber); //displays random number on page
	} 

	createRandomNumber(); // calls createRandomNumber function

	var userGuessSum = 0; // variable stores initial computerRandomNumber value
	
	var crystalClickedValue = [Math.floor(Math.random() * ((12-1) + 1) + 1)]; // variable stores crystal values (random number between 1 and 12)

	wins = 0; // variable stores initial wins value
	
	losses = 0 // variable stores initial losses value
	
	userTotalScore = 0; // variable stores initial user score
	
		function update () {
			$(".wins").html("Wins: " + wins); // displays wins to page
			$(".losses").html("Losses: " + losses); // displays losses to page
		}

		function crystalValues () {
			$("img").each(function () {
				$(this).attr("data-value", Math.floor(Math.random() * ((12-1) + 1) + 1));
			});
		}
		crystalValues(); // function that assigns random number 1-12 to each crystal image


		$("img").on("click", function () { // function user clicks crystal image
			userGuessSum += parseInt($(this).attr("data-value")); // adds sum each time user clicks a crystal
			$(".scoreDisplay").html(userGuessSum); // displays user score to page

			if (userGuessSum === computerRandomNumber) { // if user clicks crystals to match random number
				wins++; // increase wins by 1
				reset(); // calls reset function
				update(); // calls update function
				$(".userMessage").html("You Win!"); // displays  win message to user

			}  else if (userGuessSum > computerRandomNumber) { // if user clicks crystals and goes over random number
					losses++; // increase losses by 1
					reset(); // calls reset function
					update(); // calls update function
					$(".userMessage").html("Try Again!"); // displays  loss message to user
				} //END LOSSES CONDITION

		}); // END IF/ELSE IF STATEMENT

	//reset(function):
		function reset () { // reset function
			userGuessSum = 0; // user score goes back to initial value
			crystalValues(); // calls crystalValues function (gives new random number 1-12)
			createRandomNumber(); // calls createRandomNumber function (gives new random number 19-120)
			$(".scoreDisplay").text("0"); // puts initial score to 0

		} // END RESET FUNCTION
		
	reset(); // calls reset function

}); // END READY

