function makeLine(size) {
   let lineMade = '';
   for(let i = 0; i < size; i++){
      lineMade += '#';
      }
      return lineMade;
   }

console.log(makeLine(5));

function makeSquare(size) {
   let square = '';
   for(let i = 0; i < size; i++){
      console.log(makeLine(5));
   }
   return square;
}
console.log(makeSquare(5));

function makeRectangle(width, height) {
   let rectangle = '';
   for (let i = 0; i < height; i++) {
     rectangle += (makeLine(width) + '\n');
   }
   return rectangle.slice(0, -1);
 }
console.log(makeRectangle(5,3));

function makeDownwardStairs(height) {
   let stairs = '';
   for(let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
   }
   return stairs.slice(0,-1);
}
console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars){
   let spaceLine = "";
   for(let i = 0; i < numSpaces; i++){
      spaceLine += " ";
   }
   for(let i = 0; i < numChars; i++){
      spaceLine += "#";
   }
   for(let i = 0; i < numSpaces; i++){
      spaceLine += " ";
   }
   return spaceLine;
}
console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height){
   let triangle = '';
   for(let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
   }
   return triangle.slice(0,-1);
}
console.log(makeIsoscelesTriangle(5));

function upsidedownTriangle(height){
   let triangle = '';
   for(let i = height; i > 0; i--) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
      }
   return triangle.slice(0,-1);
}

function reverse(str) {
   let reversed = '';

   for (let i = 0; i < str.length; i++) {
       reversed = str[i] + reversed;
   }

   return reversed;
}

function makeDiamond(height) {
   console.log(makeIsoscelesTriangle(height));
   // console.log(upsidedownTriangle(height));
   console.log(reverse(makeIsoscelesTriangle(5)));
}
console.log("makeDiamond")
console.log(makeDiamond(5));