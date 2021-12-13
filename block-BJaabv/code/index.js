// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(dogAge, converRate) {
  return `Your dog age will be ${dogAge} and the conversion rate of human to dog years is ${1/converRate}`
}
calculateDogAge(35,7);

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age, watchPerWeek) {
  if(age<=35){
    return `the total number of movie you watched ${watchPerWeek * 48 * age} `
  }else {
    alert(`Age should be less than or equal to 35.`);
  }
}
calculateMoviesToWatch(25, 2);


/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celTemp) {
  return `${celTemp}°C is ${celTemp * 33.8}°F`;
}
celsiusToFahrenheit(12);

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(farTemp) {
  return `${farTemp}°F is ${farTemp * -17.22}°C`;
}
celsiusToFahrenheit(10);

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n,x) {
  if(n>=1){
    return n**x
  }else{
    return `The number below 1 is not allowed`
  }
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/


function sumOrProductOfN(number, string) {
  let finalSum = 0;
  for(let i=number; i>=1; i--){
    finalSum += i
  }
  
  let finalMul = 1;
  for(let i=number; i>=1; i--){
    finalMul *= i
  }

  if(string==='product'){
    return `The product of 1,.,.${number} is ${finalMul} `
  }else if(string==='sum'){
    return `The sum of 1,.,.${number} is ${finalSum} `
  }else{
    alert( `Not a valid Input`)
  }
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
// sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  let finalSum = 0;
  for(let i=n; i>=1; i--){
    finalSum += i
  }
  return `the sum of the numbers 1 to ${n} is ${finalSum}.`
}
sumOfN(6);
/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

function sumOfN(n) {
  let finalSum = 0;
  for(let i=n; i>=1; i--){
    if(i%5===0 ||  i%7===0){
    finalSum += i;
    }
  }
  return `the sum of the numbers 1 to ${n} is ${finalSum}.`
}
sumOfN(20);

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min() {
  // Your code goes here
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck() {
  // Your code goes here
}
