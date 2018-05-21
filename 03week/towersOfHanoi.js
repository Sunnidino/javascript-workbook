'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);

}/* Whiteboarding
//  - Create 3 columns(stacks);
//  - Create a variable for 4 disc
//  - Start to movePiece
// - disc1 to stack.b; disc2 to stack.c; disc1 to stack.c; disc 3 to stack.b;
// - disc1 to stack.a; disc2 to stack.b; disc1 to stack.b; disc4 to stack.c;
// - disc1 to stack.c; disc2 to stack.a; disc1 to stack.a; disc3 to stackc;
// - disc1 to stack.b; disc2 to stack.c; disc1 to stack.c for the WIN!.*/

function movePiece(startStack,endStack) {
  // Your code here
  const capturedDisk = stacks[startStack].pop();
   stacks[endStack].push(capturedDisk);
}

function isLegal(startStack, endStack) {
  // Your code here
 if(stacks[startStack].length === 0){
   return false;
   console.log("Invalid Entry");
 }
}

function checkForWin() {
  // Your code here
 if (stacks.c.length === 4){
   console.log("Win!");
 }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
if (isLegal(startStack, endStack)){
  movePiece(startStack, endStack);
  checkForWin();
} else {
  console.log('It Does NOT Works!');
 }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

  getPrompt();








// 'use strict';
//
// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// let stacks = {
//   a: [4, 3, 2, 1],
//   b: [],
//   c: []
// };
//
// function printStacks() {
//   console.log("a: " + stacks.a);
//   console.log("b: " + stacks.b);
//   console.log("c: " + stacks.c);
// }
// /* Whiteboarding
//  - Create 3 columns(stacks);
//  - Create a variable for 4 disc
//  - Start to movePiece
// - disc1 to stack.b; disc2 to stack.c; disc1 to stack.c; disc 3 to stack.b;
// - disc1 to stack.a; disc2 to stack.b; disc1 to stack.b; disc4 to stack.c;
// - disc1 to stack.c; disc2 to stack.a; disc1 to stack.a; disc3 to stackc;
// - disc1 to stack.b; disc2 to stack.c; disc1 to stack.c for the WIN!.*/
//
//
//  const movePiece = (startStack, endStack) => {
//    stacks[endStack].push(stacks[startStack].pop());
//    console.log(movePiece());
//  };
//
// console.log("startStack -",startStack);
//
// const isLegal = (disc) => {
//   // Verifies if the size of the disc and ensure the moved disc does not exceed the size of the disc below.
//
//  if (4 > disc){
//    return "Keep going!";
//  } else if (3 > disc){
//     "Keep going!";
//  } else if (2 > disc){
//    "Keep going";
//  } else {
//      "Try Again"
//    }
//  }
//  console.log(isLegal());
//
// // function verifies the move is legal and moved to the correct stack.
// const checkForWin = ()=>{
//   if (stacks.c.length === 4){
//     return "Win!";
//   }
// }
// console.log(checkForWin());
//
// const towersOfHanoi = (startStack, endStack) => {
//   // Create a function to support the overall game.
// console.log(startStack + "should say startStack letter");
// movePiece(startStack, endStack);
// checkForWin();
//  if (stacks.c.length === 4){
//    return 'Win!';
//  }
// }
// towersOfHanoi();
//
// function getPrompt() {
//   printStacks();
//   rl.question('start stack: ', (startStack) => {
//     rl.question('end stack: ', (endStack) => {
//       towersOfHanoi(startStack, endStack);
//       getPrompt();
//     });
//   });
// }
//
// // Tests
//
// if (typeof describe === 'function') {
//
//   describe('#towersOfHanoi()', () => {
//     it('should be able to move a block', () => {
//       towersOfHanoi('a', 'b');
//       assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
//     });
//   });
//
//   describe('#isLegal()', () => {
//     it('should not allow an illegal move', () => {
//       stacks = {
//         a: [4, 3, 2],
//         b: [1],
//         c: []
//       };
//       assert.equal(isLegal('a', 'b'), false);
//     });
//     it('should allow a legal move', () => {
//       stacks = {
//         a: [4, 3, 2, 1],
//         b: [],
//         c: []
//       };
//       assert.equal(isLegal('a', 'c'), true);
//     });
//   });
//   describe('#checkForWin()', () => {
//     it('should detect a win', () => {
//       stacks = { a: [], b: [4, 3, 2, 1], c: [] };
//       assert.equal(checkForWin(), true);
//       stacks = { a: [1], b: [4, 3, 2], c: [] };
//       assert.equal(checkForWin(), false);
//     });
//   });
//
// } else {
//
//   getPrompt();
//
// }
