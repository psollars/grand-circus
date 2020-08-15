//"use strict";
(function() {
	function initialize() {
		userPlayer.health = 40;
		userPlayer.wins = 0;
		userPlayer.healCount = 3;
		compPlayer.health = 10;
		compPlayer.wins = 0;
		}; // end of initialize

		var scoreToWin = 3;
		var keepPlayingGame;
		var keepPlayingMatch = true;

		var userPlayer = {
			name: "",
			health: 40,
			wins: 0,
			healCount: 3,
			heal: function() {
				if (userPlayer.healCount > 0) {	
					var healthToAdd = getRandomInt(1, 10);
					userPlayer.health = userPlayer.health + healthToAdd;
					userPlayer.healCount -= 1;
				} else {
					alert("You do not have any healing potions remaining!");
				}
				return userPlayer.health;
			},
			attack: function() { 
				var attackPower = getRandomInt(1, 3);
				compPlayer.health = compPlayer.health - attackPower;
				return compPlayer.health;
			}
		} // end of userPlayer object
		var compPlayer = {
			name: "Grant", 
			health: 10,
			wins: 0,
			heal: function() { 
				var healthToAdd = 10;
				compPlayer.health = healthToAdd;
				return compPlayer.health;
			},
			attack: function() { 
				var attackPower = getRandomInt(1, 5);
				userPlayer.health = userPlayer.health - attackPower;
				return userPlayer.health;
			}
		} // end of compPlayer object


		function getRandomInt(min, max) {
					min = Math.ceil(min);
					max = Math.floor(max);
					return Math.floor(Math.random() * (max - min)) + min;
				}

		function startGame() {
			console.log("game started!");

			if (userPlayer.name) {
				startCombat();
			} else {
				userPlayer.name = prompt("Please enter your name."); // prompt for user name
			}

			if (userPlayer.name) { // check to see if user name was entered
				startCombat();
			} else {
				exitCombat();
			}
		} // end of startGame

		function startCombat() {
			do { // do...while... loop initializes and plays through each match
				while (userPlayer.health > 0 && compPlayer.health > 0 && keepPlayingMatch === true) { // as long as they are alive & keepPlaying... deal damage.
				var attack = window.confirm(userPlayer.name + " has " + userPlayer.health + " health\n" + compPlayer.name + " has " + compPlayer.health  + " health\n" + "Click OK to attack or Cancel to retreat."); // prompt user to keep playing... ATTACK/QUIT
					if (attack === true) {
						userPlayer.attack();
						compPlayer.attack();
					} else {
						exitCombat();
					}	
				} // end of battle loop

				if (userPlayer.health <= 0) { // check health to see if there is a winner
					userPlayer.health = 0;
					matchIsWon(compPlayer);
				} else if (compPlayer.health <= 0){
					compPlayer.health = 0;
					matchIsWon(userPlayer);
				} // end check health, end of each match

				if (keepPlayingMatch === false) {
					keepPlayingGame = false;
				} else {
					keepPlayingGame = (userPlayer.wins < scoreToWin) && (compPlayer.wins < scoreToWin);	
				}	

				if (userPlayer.wins === scoreToWin) {
					gameIsWon(userPlayer);
				} else if (compPlayer.wins === scoreToWin) {
					gameIsWon(compPlayer);//end of game do...while...
				}
						userPlayer.heal();
						compPlayer.heal();
			} while (keepPlayingGame); //end of game do...while...
		} //end of startCombat()

			function matchIsWon(player) {
				player.wins += 1;
				alert(player.name + " wins the match!\nThe score is: " + userPlayer.name + " " + userPlayer.wins + " | " + compPlayer.name + " " + compPlayer.wins);
				var playNextMatch = window.confirm("Click OK to continue battle or Cancel to retreat.");
				if (playNextMatch) {
				} else {
					exitCombat();
				}
// call some other function to continue or quit
			} // end matchIsWon

			function gameIsWon(player) {
				alert(player.name + " WINS THE GAME!");
				var playGameAgain = window.confirm("Would you like to start a new game?\nClick OK to play a new game or Cancel to quit.");
				if (playGameAgain) {
					initialize();
					startGame();
				} else {
					exitCombat();
				}
			} //end gameIsWon

			function exitCombat() {
				keepPlayingMatch = false;
				keepPlayingGame = false;
			} //exitCombat

		var startButton = document.getElementById("startButton");
		startButton.addEventListener("click", function() {
			startGame();
		}, false);

		var userHealButton = document.getElementById("userHealButton");
		userHealButton.addEventListener("click", function() {
			userPlayer.heal();
		}, false);
		
		var userAttackButton = document.getElementById("userAttackButton");
		userAttackButton.addEventListener("click", function() {
			userPlayer.attack();
		}, false);

}()); // end of immediately invoked function
