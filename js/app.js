$(document).ready(function() {
	for (var i = 1; i <= 100; i++) {
		$('body').append('<p>' + fizzBuzz(i) + '</p>');
	}
});

function fizzBuzz(number) {
	if (number % 3 === 0 && number % 5 === 0) {
		return "fizzbuzz";
	} else if(number % 3 === 0) {
		return "fizz";
	} else if (number % 5 === 0) {
		return "buzz";
	} else return number;
}