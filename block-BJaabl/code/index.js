/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/

function sayHello(name){
  alert(`Hello ${name}`)
}
sayHello (`john`);

/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/

function getFullName (firstname, lastName){
  return  ` Hello ${ firstname } ${lastName} `;
}
getFullName ("naman", "aggarwal");
getFullName ("kushal", "Dave");

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
function addTwoNumbers(firstNum, secondNum){
  if(isNaN(firstNum)===false && isNaN(secondNum)===false){
    alert(`The sum of both numbers is ${firstNum + secondNum}`)
  }else{
    alert(`enter a valid input`)
  }
}

addTwoNumbers(22, 12);
addTwoNumbers(45, 56);
addTwoNumbers(22, `nmn`);
addTwoNumbers(`nmn`, 12);


/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

let numA = +prompt(`enter first num`);
let numB = +prompt(`enter second num`);
let operation = prompt(`Operation
can only be one of these add, sub, mul, div.`)
if(operation === "add"){
  alert(`The sum of numbers is ${numA + numB}`)
}else if (operation === "sub"){
  alert(`The subtraction of numbers is ${numA - numB}`)
}else if (operation==="mul"){
  alert(`The multiplication of numbers is ${numA * numB}`)
}else if (operation==="div"){
  alert(`The division of numbers is ${numA / numB}`)
}else{
  alert(`enter a valid input.`)
}

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/

let year = +prompt(`mention a year`)
if(year%4===0){
  alert(`This is a leap year`)
}else{
  alert(
    `this is not a leap year`
  )
}

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
let numFactorial = +prompt(`enter a number for factorial`)
for(i=numFactorial; i>=1; i--){
  numFactorial *= i
}
alert(`the factorial of the number is ${numFactorial}`)