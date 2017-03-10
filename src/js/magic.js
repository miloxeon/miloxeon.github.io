'use strict';

var magicContainer = document.getElementById('magic-container');
var magicButton = document.getElementById('magic');
magicContainer.style.opacity = 0;

magicButton.addEventListener('click', function () {
	magicContainer.style.opacity = 1;
	magicContainer.innerHTML = generateStars() + generateMoon() + generateAurora();
	magicButton.outerHTML = '';
});

function randInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function generateMoon() {
	return '<div class="moon"></div>';
}

function generateAurora() {
	return '<div class="aurora"><i></i></div>';
}

function generateStars() {
	var result = '';
	for ( var i = 0; i < 50; i++ ) {
		result += '<i style="height: ' + 
		randInt(150, 800) + 
		'px; width: ' + 
		randInt(90, 500) +
		'px; animation-name: star-' + 
		randInt(1, 4) + 
		'; animation-duration: ' + 
		randInt(15, 90) + 
		's;"><i></i></i>';
	}
	return '<div class="stars">' + result + '</div>';
}
