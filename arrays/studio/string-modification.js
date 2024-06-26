const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let strTwo = str.slice(0,3);
let newString = str.slice(3) + strTwo;
//console.log(newString);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${newString} is the new way to say ${str}!`)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
const question = "How many letters would you like to relocate?"
let userAnswer = ""

userAnswer = input.question(question);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(userAnswer > str.length){
    console.log("Sorry, there are not that many letters in the word.");
    console.log(newString);
}else {
    console.log("Will do!");
}