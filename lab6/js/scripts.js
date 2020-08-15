(function() {

	const reInitialize = function() {
		userPlayer.health = 40;
		let userPlayerHealth = document.getElementById("userPlayerHealth");
		userPlayerHealth.innerHTML = userPlayer.health;
					
		userPlayer.wins = 0;
		let winUpdate = document.getElementById("userPlayerWins");
		winUpdate.innerHTML = userPlayer.wins;

		userPlayer.healCount = 3;
		let userPlayerHealCount = document.getElementById("userPlayerHealCount");
		userPlayerHealCount.innerHTML = userPlayer.healCount;

		compPlayer.health = 10;
		let compPlayerHealth = document.getElementById("compPlayerHealth");
		compPlayerHealth.innerHTML = compPlayer.health;
		compPlayer.wins = 0;

		startButton.style.display = "block";
		userAttackButton.style.display = "none";
		userHealButton.style.display = "none";
		userRetreatButton.style.display = "none";

		messageBox.innerHTML = "Press Start to Begin Battle";

		}; // end of reInitialize

		var keepPlaying = true;

		var userPlayer = {
			name: "",
			health: 40,
			wins: 0,
			healCount: 3,
			scoreToWin: 3,
			heal: function() {
				if (userPlayer.healCount > 0) {	
					var healthToAdd = getRandomInt(3, 10);
					userPlayer.health = userPlayer.health + healthToAdd;
					userPlayer.healCount -= 1;
					let userPlayerHealth = document.getElementById("userPlayerHealth");
					userPlayerHealth.innerHTML = userPlayer.health;
					let userPlayerHealCount = document.getElementById("userPlayerHealCount");
					userPlayerHealCount.innerHTML = userPlayer.healCount;
					message("You have used a healing potion and restored your health to " + userPlayer.health + ", you have " + userPlayer.healCount + " healing potion(s) remaining");
				} else {
					message("You do not have any healing potions remaining!");
				}
				return userPlayer.health;
			},
			attack: function() { 
				let attackPower = getRandomInt(1, 3);
				compPlayer.health = compPlayer.health - attackPower;
				let compPlayerHealth = document.getElementById("compPlayerHealth");
				compPlayerHealth.innerHTML = compPlayer.health;
				return compPlayer.health;
			}
		} // end of userPlayer object

		var compPlayer = {
			name: "Grant", 
			health: 10,
			wins: 0,
			scoreToWin: 1,
			heal: function() { 
				var healthToAdd = 10;
				compPlayer.health = healthToAdd;
				let compPlayerHealth = document.getElementById("compPlayerHealth");
				compPlayerHealth.innerHTML = compPlayer.health;
				return compPlayer.health;
			},
			attack: function() { 
				let attackPower = getRandomInt(1, 5);
				userPlayer.health = userPlayer.health - attackPower;
				let userPlayerHealth = document.getElementById("userPlayerHealth");
				userPlayerHealth.innerHTML = userPlayer.health;
				return userPlayer.health;
			}
		} // end of compPlayer object

		function updateWinCount(player) { 
			player.wins = player.wins - attackPower;
			let playerwins = document.getElementById("playerwins");
			playerwins.innerHTML = player.wins;
			return player.wins;
		}

		function getRandomInt(min, max) {
					min = Math.ceil(min);
					max = Math.floor(max);
					return Math.floor(Math.random() * (max - min)) + min;
				}

		function startGame() {
			console.log("game started!");
			if (!userPlayer.name) {
				userPlayer.name = prompt("Please enter your name."); // prompt for user name
				var userPlayerName = document.getElementById("userPlayerName");
				userPlayerName.innerHTML = userPlayer.name;
			}
		} // end of startGame

		function checkHealth() {
			if (userPlayer.health <= 0) {
				userPlayer.health = 0;
				matchIsWon(compPlayer);
			} else if (compPlayer.health <= 0){
				compPlayer.health = 0;
				matchIsWon(userPlayer);
			} 
		} // end check health

		function matchIsWon(player) {
			player.wins += 1;
			if (player === userPlayer) {
				let winUpdate = document.getElementById("userPlayerWins");
				winUpdate.innerHTML = userPlayer.wins;
				compPlayer.heal();
				checkWins();
				if (keepPlaying) {
					message("You have stunned Grant Chirpus but he has regenerated his strength, defeat the Mighty Chicken " + (userPlayer.scoreToWin - userPlayer.wins) + " more time(s) to vanquish your enemy.");
				}		
				return userPlayer.wins;
			} else {
				checkWins();
				message("Grant Chirpus has defeated you!");
				exitCombat();
			}
		} // end matchIsWon

		function checkWins() {
			if (userPlayer.wins === userPlayer.scoreToWin) {
				keepPlaying = false;
				gameIsWon(userPlayer);
			}
		return keepPlaying;	
		} // end checkWins

		function gameIsWon(player) {
			message(player.name.toUpperCase() + " HAS DEFEATED THE MIGHTY GRANT CHIRPUS!");
			exitCombat();
		} // end gameIsWon

		function exitCombat() {
			message("You have battled valiantly, " + userPlayer.name + ".");
			window.setTimeout(reInitialize, 3000);
			return;
		}

		const startButton = document.getElementById("startButton");
		startButton.onclick = function() {
			startGame();
			message("The battle has begun! Attack the Mighty Chicken if you dare!!!");
			startButton.style.display = "none";
			userAttackButton.style.display = "block";
			userHealButton.style.display = "block";
			userRetreatButton.style.display = "block";
		};
		
		const userAttackButton = document.getElementById("userAttackButton");
		userAttackButton.onclick = function() {
			userPlayer.attack();
			compPlayer.attack();
			message("You have wounded Grant Chirpus, but the mighty chicken has retailiated.") //  by x damage and you've suffered x damage 
			checkHealth();
		};

		const userHealButton = document.getElementById("userHealButton");
		userHealButton.onclick = function() {
			userPlayer.heal();
		};

		const userRetreatButton = document.getElementById("userRetreatButton");
		userRetreatButton.onclick = function() {
			exitCombat();
		};

		const messageBox = document.getElementById("dialog");

		function message(messageToDisplay) {
			messageBox.innerHTML = messageBox.innerHTML + "<br /><br />" + messageToDisplay;
			messageBox.scrollTop = messageBox.scrollHeight;
		}	
}()); // end of immediately invoked function
// Thanks for playing!