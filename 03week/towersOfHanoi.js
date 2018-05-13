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
}
/* Whiteboarding
 - Create 3 columns(stacks);
 - Create a variable for 4 disc
 - Start to movePiece
- disc1 to stack.b; disc2 to stack.c; disc1 to stack.c; disc 3 to stack.b;
- disc1 to stack.a; disc2 to stack.b; disc1 to stack.b; disc4 to stack.c;
- disc1 to stack.c; disc2 to stack.a; disc1 to stack.a; disc3 to stackc;
- disc1 to stack.b; disc2 to stack.c; disc1 to stack.c for the WIN!.*/


 const movePiece = (startStack, endStack) => { //parameter includes 4 disc and 3 columns
   console.log(stacks[startStack] + "is stacks.startStack working?");

    let movingPiece = stacks.pop(startStack);
    stacks.push(endStack);


 };



const isLegal = (disc) => {
  // Verifies if the size of the disc and ensure the moved disc does not exceed the size of the disc below.

 if (4 > disc){
   return "Keep going!";
 } else if (3 > disc){
    "Keep going!";
 } else if (2 > disc){
   "Keep going";
 } else {
     "Try Again"
   }
 }
 console.log(isLegal());

// function verifies the move is legal and moved to the correct stack.
const checkForWin = (disc)=>{

  if (isLegal){
    return 'Win'
  }
}
console.log(checkForWin([4,3,2,1]));

const towersOfHanoi = (startStack, endStack) => {
  // Create a function to support the overall game.
console.log(startStack + "should say startStack letter");
movePiece(startStack, endStack);
checkForWin();
 if (startStack === endStack){
   return 'Win!';
 }
}
towersOfHanoi();

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
