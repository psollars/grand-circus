# Lab 6 - JavaScript Labs
Over the course of the next few labs, you will be creating a simple role-playing game. The game involves two players - the prompted user (you!) and the Almighty Grant. The game consists of simulated attacks that reduce the total health points of each player.

The game will be built in 4 stages:
	1. Set up the basic functionality of the game
	2. Complicate the game by adding fun ction ality
	3. Convert characters to objects
	4. Add a front-end to your game

# JavaScript Lab Part Four

## Task:
Task: Implement a front-end for your game based on the wireframes given to you.

## What does the application do?
1. Displays the character’s name, health, heal count, and wins.
2. Displays Grant’s name and health.
3. Allows the user to click a button to:
	a. Start the game
	b. Choose to attack
	c. Choose to heal
	d. Choose to quit
4. Each time the user selects an action, the app will display text to let the user know what has happened that round.

## Build Specifications:
1. The start button will execute the startGame function, which creates the character and Grant object.
2. The attack, heal, and quit buttons will execute the startCombat function with an argument describing what action they have chosen, which will no longer contain the while loop.
3. The startCombat function will execute two functions:
	a. One function will update the character and Grant’s information within the DOM
	b. One function will update the text relating to what has happened during the round

## Bonus:
Add a visual indication of player health. ie color, status bar...