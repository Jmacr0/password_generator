

alert("Please let me know your password requirements.");

var length = parseInt(prompt("How many characters must be included?(8-128)"));
var specialChar = prompt("Include special characters?[y/n]");
var numChar = prompt("Include numbers?[y/n]");
var upperChar = prompt("Include uppercase?[y/n]");
var lowerChar = prompt("Include lowercase?[y/n]");

var answers = [length, specialChar, numChar, upperChar, lowerChar];

}