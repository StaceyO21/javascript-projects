let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let insect = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};
// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
dog["astronautID"] = 4;
insect["astronautID"] = 5;

// console.log(superChimpOne);
// console.log(salamander);
// console.log(superChimpTwo);
// console.log(dog);
// console.log(insect);
// Add a move method to each animal object
superChimpOne["move"] = function(){
   return Math.floor(Math.random()*11);
};
console.log(superChimpOne);

salamander["move"] = function(){
   return Math.floor(Math.random()*11);
};

superChimpTwo["move"] = function(){
   return Math.floor(Math.random()*11);
};

dog["move"] = function(){
   return Math.floor(Math.random()*11);
};

insect["move"] = function(){
   return Math.floor(Math.random()*11);
}

console.log(superChimpOne);
console.log(salamander);
console.log(superChimpTwo);
console.log(dog);
console.log(insect);

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, dog, insect];
// Print out the relevant information about each animal.

// Start an animal race!
function crewReports(animal) {
   // for(item in crew) {
      let reportString = `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
   
   // for (let j = 0; j < crew.length; j++){
   //    console.log(`${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.`);
   // }
   return reportString
}
// console.log(crewReports(superChimpOne));
for(i = 0; i < crew.length; i++){
   console.log(crewReports(crew[i]));
}
console.log("test");

function fitnessTest(arr) {
   console.log("fitnessTest");
    let fitnessTestArr = [];
   for (i = 0; i < arr.length; i++) {
      // console.log(arr[i].name);
      let steps = 0;
      let turns = 0;
      let results = "";
      while (steps < 20) {
        steps += arr[i].move();
         turns++;
         // console.log(results);
      }
      results = `${arr[i].name} took ${turns} turns to take 20 steps.`
      fitnessTestArr.push(results);
   }
   return fitnessTestArr
}
let fitnessResults = fitnessTest(crew);
for(let i = 0; i < fitnessResults.length; i++){
   console.log(fitnessResults[i]);
}