// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

function convertToString (number) {
  return string(number)
} 


// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

function addOne (number){
  return number+1;
}  // - Write a Function Declaration

let addOne = function(number){
  return number+1;
}  // - Write a Function Expression

let addOne = (number) => number+1;  // - Write an Arrow Function without curly brackets(if possible)

let addOne = (number) => {
  return number+1;
}   // - Write an Arrow Function with curly brackets

addOne(21);  // - Execute the function

let returnValue = addOne(21);  // - Execute the function and store the return value in a variable.

number  // - What is the typeof returnValue

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

function subtractOne (number){
  return number-1;
}  // - Write a Function Declaration

let subtractOne =  function(number){
  return number-1;
}  // - Write a Function Expression

let subtractOne = (number) => number-1;  // - Write an Arrow Function without curly brackets(if possible)

let subtractOne = (number) => {
  return number-1;
}  // - Write an Arrow Function with curly brackets

subtractOne(56);  // - Execute the function

let returnValue = subtractOne(56);  // - Execute the function and store the return value in a variable.

number // - What is the typeof returnValue

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
} // - Write a Function Declaration

let sum = function(firstNum, secondNum) {
  return firstNum + secondNum;
} // - Write a Function Expression

let sum = (firstNum, secondNum) => firstNum + secondNum; // - Write an Arrow Function without curly brackets(if possible)

let sum = (firstNum, secondNum) => {
  return firstNum + secondNum;
} // - Write an Arrow Function with curly brackets

sum(23, 45);  // - Execute the function

let returnValue = sum(23,45);  // - Execute the function and store the return value in a variable

number  // - What is the typeof returnValue

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

function square(number){
  return number*number;
}  // - Write a Function Declaration

let square = function(number){
  return number*number;
}  // - Write a Function Expression

let square = (number) => number*number; // - Write an Arrow Function without curly brackets(if possible)

let square = (number) => {
  return number*number;
}  // - Write an Arrow Function with curly brackets

square(40);  // - Execute the function

let returnValue = square(40);  // - Execute the function and store the return value in a variable

number // - What is the typeof returnValue

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

function isGreater(x, y){
  if(x>y){
    return true;
  }else{
    return false;
  }
}   // - Write a Function Declaration

let isGreater = function (x, y){
  if(x>y){
    return true;
  }else{
    return false;
  }
}   // - Write a Function Expression

let isGreater = (x, y) => 
  x>y ? true : false; 
    // - Write an Arrow Function without curly brackets(if possible)

let isGreater = (x, y) => {
  if(x>y){
    return true;
  }else{
    return false;
  }
}   // - Write an Arrow Function with curly brackets

isGreater(12, 23);  // - Execute the function

let returnValue = isGreater(12, 23);  // - Execute the function and store the return value in a variable

Boolean  // - What is the typeof returnValue

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

function oddOrEven (number) {
  if (number % 2 === 0 ){
    return `Number is even`
  }else {
    return `Number is odd`
  }
}  // - Write a Function Declaration

let oddOrEven =  function (number) {
  if (number % 2 === 0 ){
    return `Number is even`
  }else {
    return `Number is odd`
  }
}    // - Write an anonymous Function Expression

let oddOrEven =  function oddOrEven(number) {
  if (number % 2 === 0 ){
    return `Number is even`
  }else {
    return `Number is odd`
  }
}      // - Write an named Function Expression

let oddOrEven = (number) => 
    number % 2 === 0 ? `Number is even` : `Number is odd`
// - Write an Arrow Function without curly brackets (hint: use ternary operator)

  let oddOrEven = (number) => {
    if (number % 2 === 0 ){
      return `Number is even`
    }else {
      return `Number is odd`
    }
  }  // - Write an Arrow Function with curly brackets

oddOrEven(23);  // - Execute the function

let returnValue = oddOrEven(23);  // - Execute the function and store the return value in a variable

string // - What is the typeof returnValue
