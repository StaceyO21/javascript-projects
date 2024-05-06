let num = 1001;


//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let num2 = num.toString();
console.log(typeof num2);
console.log(num2.length);
//console.log(String(num).length-1);
let num3 = 123.45
let num4 = num3.toString();
console.log(typeof num4);
console.log(String(num4).length-1);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if(String(num4).includes('.')){
console.log(String(num4).length-1);
}else{
    console.log(String(num4).length);
}