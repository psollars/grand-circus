(function() {
const user = {
	name: "Grant Chirpus",
	email: "coolguy@gmail.com",
	password: "ILoveCoffee"
}

const containers = document.getElementsByClassName("container");
const loggedInUsername = document.getElementById("loggedInUsername");
const signinButton = document.getElementById("signinButton");
const logoutButton = document.getElementById("logoutButton");
let formUsername = document.getElementById("username");
let formPassword = document.getElementById("password");
let userValidated = false;
let passwordValidated = false;

const checkLogin = function() {
	let submitUsername = formUsername.value;
	checkUser(submitUsername, userValidated);
	let submitPassword = formPassword.value;
	checkPassword(submitPassword, passwordValidated);
	if (userValidated && passwordValidated) {
		login(user.name);
	} else {
		alert("Sorry, your email and/or password is incorrect.");
		formPassword.value = "";
	}
} // checkLogin

const checkUser = function(usernameToCheck, validation) {
	if (usernameToCheck === user.email) {
		console.log("yes!");
		validation = true;
	} else {
		console.log("no!");
		validation = false;
	}
	userValidated = validation;
	return userValidated;
} // checkUser

const checkPassword = function(passwordToCheck, validation) {
	if (passwordToCheck === user.password) {
		console.log("yes!");
		validation = true;
	} else {
		console.log("no!");
		validation = false;
	}
	passwordValidated = validation;
	return passwordValidated;
} // checkPassword

const login = function(userLoggingIn) {
	containers[0].style.display = "none";
	containers[1].style.display = "block";
	loggedInUsername.innerHTML = userLoggingIn;
} // login

const logout = function() {
	console.log("log out");
	containers[0].style.display = "block";
	containers[1].style.display = "none";
	formUsername.value = "";
	formPassword.value = "";
} 

signinButton.onclick = checkLogin;
logoutButton.onclick = logout;
}()); // self calling function
