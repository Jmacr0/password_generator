//generate function called when user clicks on button

function generate(){

//prompt password criteria from the user

alert("Please let me know your password requirements.");

while(true){
    var lengthPassInput = prompt("How many characters must be included?(8-128)");
    if(lengthPassInput === null){
        break;
    } else if(lengthPassInput === ""){
        continue;
    }
    else if(parseInt(lengthPassInput) > 128 || parseInt(lengthPassInput) < 8) {
        continue;
    } else { 


var lengthPass = parseInt(lengthPassInput); 
var specialChar = prompt("Include special characters?[y/n]");
var numChar = prompt("Include numbers?[y/n]");
var upperChar = prompt("Include uppercase?[y/n]");
var lowerChar = prompt("Include lowercase?[y/n]");




//Store the answers in an array for access in for loop

var answers = [lengthPass, specialChar, numChar, upperChar, lowerChar];

//Arrays of characters

var speciaList = ['!','#','$','%','&','(',')','*','+','-','?','@','~'];
var lowerList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numList = [0,1,2,3,4,5,6,7,8,9];

//Store the arrays into another array for for loop index access (can refactor to multidimensional array???)

var fullCharArrays = [speciaList,numList,upperList,lowerList];


//Total char concatonates the selected arrays into one array

var totalChar = [];

for(var i = 1; i < answers.length; i++){
    if(answers[i].toLowerCase() === 'y'){
        //-1 to correct zero indexing for fullCharArrays because started i = 1 to exclude lengthPass in answers array
        totalChar = totalChar.concat(fullCharArrays[i -1]); 
    } else {
        continue;
    }
}


//randomPassword stores the random generated password as an array of characters

var randomPassword = [];

//iterate through the for loop lengthPass(user defined length of password) times, each time selecting a random char from totalChar

for(var i = 0; i < lengthPass; i++){
    randomPassword = randomPassword.concat(totalChar[Math.floor(Math.random() * totalChar.length)])
}


//finalPassword joins randomPassword into a string

var finalPassword = randomPassword.join("");

document.getElementById("randomPasswordDisplay").innerHTML = finalPassword;

    
    } break;
}

};




///////////////// Need to figure out scoping to set var finalPassword as global so I can reuse in copyToClipboard????  ///////////



function copyToClipboard(){

    var copyText = document.getElementById("randomPasswordDisplay");

    //example from w3 schools

    copyText.select(); //jQuery?

    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy")

    alert("Copied the password: " + copyText.value);
};
