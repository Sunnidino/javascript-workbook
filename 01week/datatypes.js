//Write a JavaScript program to display the current day and time.
function findTime(){
const now = new Date(); //find date
const date = (now.getMonth() + 1) + "/" + now.getDate(); //display month/day
const time = now.getHours() + ":" + now.getMinutes(); //display hour:minute
const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //array for day of the week
const day = dayArray[now.getDay()]; //get string day of week
const dateTime = "It is " + day + ", " + date + " at " + time + "."; //display time and date in string
return dateTime;
}

findTime();

//Write a JavaScript program to convert a number to a string.
//Create a funtion to return
function numToString(num1,num2){
  return num1 + num2;
}
console.log(numToString('4','5'));

//Write a JavaScript program to convert a string to the number.
//Function to return string of numbers
function stringToNum(){
  return ('10'+'5'+'6');
}
console.log(stringToNum());

//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean

function time(){
  if (8 >= 10) {
    return 'Go to class';
  }else {
    return 'Class is over';
  }
}
console.log (time()); //Create a function to determine is 8 is greater than 10 and return false statement.

//Null

const dataTwo = null;
function findUpdate(dataTwo){
 return (dataTwo * 2);  //
}
console.log(findUpdate(null));  //Create a funtion that does not have a value.

//Undefined = Create a function to return a variable with an unassigned value
function  add(a){
  return a; //create function return without a value
}
console.log(add());

//Number = Create a funtion to return a number.
function addNums(num){
  return num; //funtion return an interger
}
console.log(addNums(2));
//NaN
function data(){
  return (a+1);  //Function will return NaN due to the variable 'a'.
}
console.log (data());

//String
function profileString(name,city){
  return (`My name is ${name}. I live in ${city}`);//return with String Interpolation (wrap variable with ${}
}
console.log(profileString('Sunny','Austin'));

//Write a JavaScript program that adds 2 numbers together.

function addTwoNum(add1,add2){
  return add1 + add2; // funtion returns add1+add2
}
console.log(addTwoNum(2,4));

//Write a JavaScript program that runs only when 2 things are true.

function twoTrue(a,b){
  return a && b; //return both parameters a and b as true.
}
const a = 'red';
const b = 'blue';
if (a && b ) {
  console.log('red');
} else {
  console.log ('blue');
}
console.log (twoTrue(a,b));

//Write a JavaScript program that runs when 1 of 2 things are true.

function eitherTrue(a,b){
if(a || b){
  console.log('red'); //returns one or the other.
}else {
  console.log('blue');
 }
}
console.log(eitherTrue(b));
//Write a JavaScript program that runs when both things are not true.

function noneWork(){    //Function included else if statment to exclude all possible statements
  if (1 >= 5) {
   return 'Try Again';
  } else if (2 >= 5){
    return 'Not this one';
  } else {
    return 'No, Try Again';
  }
}
console.log(noneWork());
