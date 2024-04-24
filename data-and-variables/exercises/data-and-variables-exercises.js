// Declare and assign the variables below

let Nameofthespaceshuttle;
Nameofthespaceshuttle = "Determination";
let Shuttlespeed;
Shuttlespeed = 17500;
let DistancetoMars;
DistancetoMars = 225000000;
let DistancetotheMoon;
DistancetotheMoon = 384400;
const Milesperkilometer = 0.621;



// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof Nameofthespaceshuttle)
console.log(typeof Shuttlespeed);
console.log(typeof DistancetoMars);
console.log(typeof DistancetotheMoon);
console.log(typeof Milesperkilometer);

// Calculate a space mission below

let milesToMars = DistancetoMars * Milesperkilometer;
let hoursToMars = milesToMars / Shuttlespeed;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below

console.log(Nameofthespaceshuttle+" will take "+daysToMars+ ' days to reach Mars.');
// Calculate a trip to the moon below

let milesToMoon = DistancetotheMoon * Milesperkilometer;
let hoursToMoon = milesToMoon / Shuttlespeed;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(Nameofthespaceshuttle+' will take '+daysToMoon+ 'days to reach the Moon.');