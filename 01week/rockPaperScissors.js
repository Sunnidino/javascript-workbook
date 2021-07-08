'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* - Calculate the number of times both hand1 and hand2 will win. 3x3=9.
- Determine the ties for hand1 and hand2.
- Create function for hand1 wins R===S; hand1 R===P hand2 wins.
- Nest function hand1 wins P===R; hand1 P===S hand2 win.
- Nest function hand1 wins S===P; hand1 S===R hand2 wins.
*/

function rockPaperScissors(hand1, hand2){
  if (hand1 === hand2){
    return 'It\'s a tie!';  //hand1 and hand2 draw rock, paper or scissors at the same time. function will reflect a tie.
  }

  if (hand1 === 'rock') { //Anytime hand1 draws rock against hand2's arguments
    if (hand2 === 'scissors') { //if hand2 draws scissor; hand1 wins
      return 'Hand one wins!';
    } else if (hand2 === 'paper'){  //if hand2 draws paper; hand2 wins
      return 'Hand two wins!';
    }
  }

  if(hand1 === 'paper'){  //hand1 draws paper against hand2's arguments
    if(hand2 === 'rock'){ //if hand2 draws rock; hand1 wins
      return 'Hand one wins!';
    } else if (hand2 === 'scissors'){ // if hand2 draws scissors; hand2 wins
      return 'Hand two wins!';
    }
  }

  if (hand1 === 'scissors') { //hand1 draws scissors against hand2's arguments
    if (hand2 === 'paper') { //hand2 draws paper; hand1 wins
      return 'Hand one wins!';
    } else if (hand2 === 'rock'){ //hand2 draws rock; hand2 wins
      return 'Hand two wins!';
    }
  }
}
console.log(rockPaperScissors());


function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
