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
  return ('The winner is number') + ' ' +(num1 + num2);
}
console.log(numToString(4,5));

//Write a JavaScript program to convert a string to the number.
//Function to return string of numbers
function stringToNum(){
  return (10+5+6);
}
console.log(stringToNum());

//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean
function getUpdate(){
  return true; //function return true statement
}
console.log(getUpdate());
//Null
function findUpdate(){
 return null;  // Create a function with
}
console.log(findUpdate());

//Undefined = Create a function to return a variable with an unassigned value
function  add(){
  return ''; //create function return without a value
}
console.log(add());

//Number = Create a funtion to return a number.
function addNums(num){
  return num; //funtion return an interger
}
console.log(addNums(2));
//NaN
function data(){
  return 1+1;
}
console.log (data());

//String
function profileString(name,city){
  return (`My name is ${name}. I live in ${city}`);//return with String Interpolation (wrap variable with ${}
}
console.log(profileString('Sunny','Austin'));
const name = 'Sunny';
const city = 'Austin';
console.log(name + ' ' + city);
//Write a JavaScript program that adds 2 numbers together.
function addTwoNum(add1,add2){
  return add1 + add2; // funtion returns add1+add2
}
console.log(addTwoNum(2,4));
const add1 = 2;
const add2 = 4;
console.log(add1+add2);
//Write a JavaScript program that runs only when 2 things are true.
function twoTrue(a,b){
  return a && b; //return both parameters a and b as true.
}
console.log(twoTrue('run','truthy'));
const a = 'run';
const b = 'truthy';
if (a && b ) {
  console.log('Run');
} else {
  console.log ('True')
}
//Write a JavaScript program that runs when 1 of 2 things are true.

function eitherTrue(a,b){
if(a || b){
  console.log('run'); //returns one or the other.
}else {
  console.log('True');
}
}
console.log(eitherTrue(b));
//Write a JavaScript program that runs when both things are not true.
function noneWork(){    //Need work on understanding Boolean function
  if (noneWork){
    console.log('Try Again');
  }else{
    console.log('No, Try Again');
  }
}
