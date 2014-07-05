// The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2014;
var birthYear = 1990;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

console.log("They are either " + age2 + " or " + age1 + ".");


// The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 24;
var maxAge = 100;
var amountPerDay = 5;
var lifetimeSupply = (maxAge - currentAge) * 365 * amountPerDay;

console.log("You will need " + lifetimeSupply + " servings of your favorite snack to last you until the ripe old age of " + maxAge + ".");


// The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 4;
var circumference = 2 * Math.PI * radius;
console.log("The circumference is " + circumference + ".");
area = Math.PI * Math.pow(radius, 2);
console.log("The area is " + area + ".");


// The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsiusTemp = 30;
var fahrenheitTemp = celsiusTemp * (9 / 5) + 32;
console.log(celsiusTemp + "\xB0C is " + fahrenheitTemp + "\xB0F.");

fahrenheitTemp = 75;
celsiusTemp = (fahrenheitTemp - 32) * (5/9);
console.log(fahrenheitTemp + "\xB0F is " + celsiusTemp.toFixed(2)  + "\xB0C.");


// What number's bigger?

// Write a function named greaterNum that:
	// takes 2 arguments, both numbers.
	// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2) {
	if(num1 > num2) {
		return num1;
	}
	else if(num2 > num1) {
		return num2;
	}
	else {
		return null;
	}
	return
}

console.log("The greater number of " + 5 + " and " + 10 + " is " + greaterNum(5,10) + ".");
console.log("The greater number of " + 44 + " and " + 13 + " is " + greaterNum(44,13) + ".");
console.log("The greater number of " + 6 + " and " + 6 + " is " + greaterNum(6,6) + ".");


// The Grade Assigner

// Write a function named assignGrade that:
	// takes 1 argument, a number score.
	// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score) {
	if(score >= 97 && score <= 100) {
		return "A+";
	}
	else if(score >= 93 && score < 97) {
		return "A";
	}
	else if(score >= 90 && score < 93) {
		return "A-";
	}
	else if (score >= 87 && score < 90) {
		return "B+";
	}
	else if (score >= 83 && score < 87) {
		return "B";
	}
	else if (score >= 80 && score < 83) {
		return "B-";
	}
	else if (score >= 77 && score < 80) {
		return "C+";
	}
	else if (score >= 73 && score < 77) {
		return "C";
	}
	else if (score >= 70 && score < 73) {
		return "C-";
	}
	else if (score >= 67 && score < 70) {
		return "D+";
	}
	else if (score >= 63 && score < 67) {
		return "D";
	}
	else if (score >= 60 && score < 63) {
		return "D-";
	}
	else if (score >= 0 && score < 60) {
		return "F";
	}
	else {
		return null;
	}
}

console.log(assignGrade(78));
console.log(assignGrade(100));
console.log(assignGrade(105));
console.log(assignGrade(0));


// The Pluralizer

// Write a function named pluralize that:
	// takes 2 arguments, a noun and a number.
	// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different nouns and numbers and log the result to make sure it works.

function pluralize(noun, num) {
	if(num > 1 || num === 0 || num < -1) {
		return num + " " + noun + "s";
	}
	else {
		return num + " " + noun;
	}
}

console.log(pluralize("dog", 2));
console.log(pluralize("dog", 0));
console.log(pluralize("dog", -5));
console.log(pluralize("dog", 1));
console.log(pluralize("dog", -1));


// The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

for(i = 60; i <= 100; i++) {
	console.log("For " + i + ", you got a " + assignGrade(i));
}


// Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var favoriteBeverages = ["sparkling water", "tea", "coffee", "cider", "wine"];

for(i = 0; i < favoriteBeverages.length; i++) {
	console.log("My #" + (i + 1) + " choice is " + favoriteBeverages[i] + ".");
}

function choices(array) {
	for(i = 0; i < array.length; i++) {
		function defaultConditions(counter) {
			if ((counter + 1) % 10 === 1) {
				console.log("My " + (counter + 1) + "st choice is " + favoriteBeverages[counter] + ".");
			}
			else if ((i + 1) % 10 === 2) {
				console.log("My " + (counter + 1) + "nd choice is " + favoriteBeverages[counter] + ".");
			}
			else if ((i + 1) % 10 === 3) {
				console.log("My " + (counter + 1) + "rd choice is " + favoriteBeverages[counter] + ".");
			}
			else {
				console.log("My " + (counter + 1) + "th choice is " + favoriteBeverages[counter] + ".");
			}
			return;
		}
		if((i + 1) < 111) {
			if((i + 1) > 3 && (i + 1) < 21) {
				console.log("My " + (i + 1) + "th choice is " + favoriteBeverages[i] + ".");
			}
			else {
				defaultConditions(i);
			}	
		}
		else {
			if((i + 1) % 100 > 10 && (i + 1) % 100 < 21) {
				console.log("My " + (i + 1) + "th choice is " + favoriteBeverages[i] + ".");
			}
			else {
				defaultConditions(i);
			}
		}
	}
	return;
}

favoriteBeverages[225] = "sprite";
choices(favoriteBeverages);