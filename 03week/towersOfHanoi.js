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
 */

 const movePiece = (disc,a,b,c) => { //parameter includes 4 disc and 3 columns
     if (disc > 0) { //if disc are greater than 0(smallest to largest sizes)
         movePiece(disc - 1,a,c,b); //stack.a will lose the top disc, disc can be moved from all 3 stacks, but the size/value of the disc does not allow larger disc placement over smaller disc.
         movePiece(disc - 1,b,a,c);
         document.write("Move disc " + disc + " from " + a + " to " + c + "<br />");
     }
 };
 movePiece(4,"a","b","c");

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

  if (isLegalWi){
    return 'Win'
  }
}
console.log(checkForWin([4,3,2,1]));

const towersOfHanoi = (startStack, endStack) => {
  // Create a function to support the overall game.

checkForWin();
 if (startStack === endStack){
   return 'Win!';
 }
}
towersOfHanoi('a','c');

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
