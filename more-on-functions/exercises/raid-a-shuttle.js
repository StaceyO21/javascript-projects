function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

let norm = function (a) {
  if (checkFuel(a) === 'green') {
    return a - 100001;
  }
  else if (checkFuel(a) === 'yellow') {
    return a - 5001;
  }
  else {
    return a;
  }
};
console.log(norm(fuelLevel));

let innocentVar = function (loot) {
 let swag = [];
 swag.push(cargoHold.splice(loot[0],1, 'rock'));
 swag.push(cargoHold.splice(loot[1],1, 'husband'))
  return swag;
}

// console.log(innocentVar());
// console.log(cargoHold);

let irs = function (fuelLevel,stuffToSteal){
  
let legallyProcuredGoods = innocentVar(stuffToSteal);
console.log(`Raided ${norm(fuelLevel)} kg of fuel from the tanks, and stole ${legallyProcuredGoods[0]} and ${legallyProcuredGoods[1]} from the cargo hold.`)
}
let wishList = [3,4];
console.log(irs(fuelLevel,wishList));