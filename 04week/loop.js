"use strict";


/*for loop
Use a for loop to console.log each item in the array carsInReverse.*/
 const carsInReverse = () => {
   const carsInReverse = ['Ford', 'Chevy', 'Toyota', 'Honda'];
 for (let i = 0; i < carsInReverse.length; i++) {
    console.log(carsInReverse[i]) + "<br>";
 }
}
console.log(carsInReverse());

/*for...in loop
Create an object (an array with keys and values) called persons with the following data:
firstName: "Jane"
lastName: "Doe"
birthDate: "Jan 5, 1925"
gender: "female"
Use a for...in loop to console.log each key.
Then use a for...in loop and if state to console.log the value associated with the key birthDate.
*/
const persons = {firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female"};

console.log(Object.keys(persons));
console.log(Object.values(persons));
for (const prop in persons){
 console.log(`obj.${prop} = ${persons[prop]}`);
}
console.log(Object.values(persons.birthDate));

/*while loop
Use a for loop to console.log the numbers 1 to 1000. */

var startPoint = 0;
while (startPoint < 1000){
  startPoint += 100;
  console.log( startPoint + "Counts to 1000 by 100");
}
/*do...while loop
Use a do...while loop to console.log the numbers from 1 to 1000.*/

var numStarts = 0;
do {
  numStarts += 1;
  console.log( numStarts + "Repeat");
} while (numStarts < 1000);

/*When is a for loop better than a while loop?
How is the readability of the code affected?
The for loop is best used when you are knowledgable about the number of iterations.
The while loop is best for unknown number of iterations that need to run in the fuction.

Readability is best for the for loop versus the while loop.*/

/*What is the difference between a for loop and a for...in loop?
for loop to iterate over the values in an iterable, like an array
for in to iterate over the properties of an object*/

//What is the difference between a while loop and a do...while loop?
//while loop, tests the condition before the code within the block is executed, the do-while loop is an exit-condition loop
