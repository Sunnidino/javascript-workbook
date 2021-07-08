'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*Determine how the game is played before writing code for pig latin.
- Create a variable with vowels [a,i,o,u] and the other variable for the index/placement of a vowel.  This determines if the word will return yay or ay.
- Create a function to return word(s) that begin with vowels. Word will end with way.
- Write a function to return words that begin with consonants. Word will end with ay.
- Ensure there is a method for lowercase and trim.
*/

const pigLatin = (word) => {
  const vowelRegex = word.match(/[aeiou]/); // match() matches the expression, will return the array of vowels.
  const firstPosition = word.indexOf(vowelRegex);  //indexOf indicates the position where the vowel(s) can be found.
  if (firstPosition > 0){   // if the first position of a vowel is greater than 0 or doesn't start out with a vowel.
    return word.slice(firstPosition) + word.slice(0,firstPosition) + 'ay'; //return slice() method to extract the consonants before the vowels and reassign to the end of the word with 'ay' attached.
  } else {
    return word + 'way';  // if the word begins with a vowel. The word will end in 'way'.
  }
}
pigLatin('');


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
