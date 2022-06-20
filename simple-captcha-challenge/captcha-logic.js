/**
 * Author: Brock Broussard
 * 
 * To use the following code, insert it into your project's client-side
 * JavaScript file.
 */ 

const captchaButton = document.getElementById('captcha-button');

// select any number between 1 and 50; to reduce difficulty, decrease the integer
let x = Math.floor(Math.random() * Math.floor(50));
let y = Math.floor(Math.random() * Math.floor(50));

function checkAnswer(event) {
	const input = document.getElementById('captcha-field');
	if (input.value !== (x + y).toString()) {
		alert("You did not enter the correct answer. Please try again.");
		event.preventDefault();
	}
}

if (document.title === "<name of your page as specified after the title tag>") {
	document.getElementById("x").innerHTML = x;
	document.getElementById("y").innerHTML = y;
	captchaButton.addEventListener("click", function(){checkAnswer()});
}