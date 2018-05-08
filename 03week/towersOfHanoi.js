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
 - Apply 4 disc on stack.a;
 - Start to movePiece
 - disc1 to stack.b; disc2 to stack.c; disc1 to stack.c; disc 3 to stack.b;
 - disc1 to stack.a; disc2 to stack.b; disc1 to stack.b; disc4 to stack.c;
 - disc1 to stack.c; disc2 to stack.a; disc1 to stack.a; disc3 to stackc;
 - disc1 to stack.b; disc2 to stack.c; disc1 to stack.c for the WIN!.
const movePiece = () => {
  // create a
  console.log(stacks.a.pop());
   console.log(stacks.a);
   console.log(stacks.b.push(1));
   console.log(stacks.a.pop(stacks));
   console.log(stacks.c.push(stacks));
   }
 console.log(movePiece());

}

const isLegal = () => {
  // Verifies if the size of the disc and ensure the moved disc does not exceed the size of the disc below.
  const disc = [4,3,2,1];
if (disc === -1){
  console.log(stacks(disc))
 }
}

const checkForWin = () => {
  // function verifies the move is legal and moved to the correct stack.
 if (isLegal && movePiece){
   return 'Win'
 }
}

const towersOfHanoi = (startStack, endStack) => {
  // Create a function to support the overall game.
  checkForWin();
  let stacks {
    a:[4,3,2],
    b:[1],
    c:[]
  }
  console.log(stacks.a, stacks.c)

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
