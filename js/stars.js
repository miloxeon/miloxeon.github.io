'use strict';

function randInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

document.querySelector('.stars').innerHTML += function() {
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
		's;"><i></i></i>\n';
	}
	return result;
}();
