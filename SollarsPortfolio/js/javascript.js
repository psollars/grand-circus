// Get Loud on Contact Page

let loudButton = document.getElementById("get-loud");
let textBox = document.getElementById("text-area");

if (textBox !== null) { // conditional added to execute code on different pages
textBox.onfocus = function() {
	loudButton.style.display = "block";
}

loudButton.addEventListener("click", function getLoud() {
	let loudNoises = document.getElementById("loud-noises");
	if (textBox.value === "") {
		alert("Please enter a message before you GET LOUD!!!!");
	} else {
		let originalMessage = textBox.value;
		let loudMessage = originalMessage.toUpperCase() + "!!!!";
		textBox.value = loudMessage;
		loudNoises.style.display = "block";
		console.log('I got loud.');
		if (loudButton.innerHTML === "GET LOUD!!!") {
			loudButton.innerHTML = "GET LOUDERER!!!!"
		}
		setTimeout(function() { 
			loudNoises.style.display = "none";
		}, 2000);
	}
}); // end of loud function

} else { // if textBox is null 

// Image Swapper on About Me Page

let favorites = document.getElementById("favorites").getElementsByTagName("li");
let pictureBox = document.getElementById("picture-box");
let feature = document.getElementById("feature");

for (let i = 0; i < favorites.length; i += 1) {
		favorites[i].addEventListener("mouseover", function() {
			console.log(favorites[i]);
			feature.src = "images/featured-image-" + [i] + ".jpg"
		});
	} // end of image swapper
} //end of conditional