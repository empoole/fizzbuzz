$(document).ready(function() {
	var count = parseInt(prompt("Enter a number to count to: "), 10);
	
	if(count != count) { //NaN is treated as being unequal to itself
		alert("That is not a valid number.");
	} else if (count % 1 != 0) {
		alert("Please use a whole number.");
	} else {
		fizzBuzz(count);
	}
});

function fizzBuzz(countTo) {
	for (var i = 1; i <= countTo; i++) {	
		var out = '';
		if (i % 3 === 0) {
			out += "fizz";
		}
		
		if(i % 5 === 0) {
			out += "buzz";
		}
		
		if (out) {
			$('body').append('<p>' + out + '</p>');
		} else {
			$('body').append('<p>' + i + '</p>');
		}
	}
}