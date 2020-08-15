# Lab 3 - JavaScript Labs

Over the course of the next few labs, you will be creating a simple role-playing game. The game involves two players - the prompted user (you!) and the Almighty Grant. The game consists of simulated attacks that reduce the total health points of each player.

The game will be built in 4 stages:
1. Set up the basic functionality of the game
2. Complicate the game by adding fun ction ality
3. Convert characters to objects
4. Add a front-end to your game

# JavaScript Lab Part One


## Task:
Prompt the user if they would like to play the game with two characters - the user and the Almighty Grant. If yes, prompt the user to name their character. Run a while loop that will iterate until either the character has beat Grant three times or the character has been defeated.

## What does the application do?
1. The user is prompted to play a game. If the user chooses yes, the user is prompted to enter his or her name.
2. The game will use a while loop to simulate a turn-based fight between the user and Grant.
3. Each iteration of the while loop will remove health points from both the user and Grant until either the user or Grant has no health points remaining.
4. When health points for either the user is at 0, the round ends.
5. The game ends either when a) Grant has been defeated 3 times (has hit 0 health points 3 times) or b) the user has been defeated (hit 0 health points).
6. When the game is over, the application logs the winner.

## Build Specifications:
1. The application must prompt the user for his or her name and use it throughout the game.
2. The user starts with 40 “health points.” Grant starts with 10 “health points.”
3. For each time that Grant’s health points hit 0, he is “defeated” and the user gains 1 “win.”
4. Grant’s health points are reset to 10 after each time he hits 0 points. The user’s health points never reset.
5. The application tracks the number of times the user has won.
6. The application logs the progress of the fight after each iteration of the loop.