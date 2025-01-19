// Tasks on const, let, and Variables
// Task: Declare a constant PI with the value 3.14 and try reassigning it. What happens?

const PI = 3.14;

// PI = 3.14159; // Error.

// Task: Create a let variable age and set it to your age. Try changing it to a different value.

let age = 16;

age = 17; // Works.

// Task: Declare two variables x and y using let. Assign them values and swap them without creating a new variable.

let x = 10;

let y = 20;

x = 20

y = 10

// Task: Use const to declare a variable favoriteColor and set it to your favorite color as a string. Try reassigning it and note the result.

const favoriteColor = "Red";

// favoriteColor = "Blue"; // Error.

// Tasks on Arithmetic Operations

// Task: Create two variables a and b with values 10 and 3. Perform the following operations on them: addition, subtraction, multiplication, division, and modulus. Log the results.

let a = 10;

let b = 3;

let sum = a + b;

let difference = a - b;

let multiplication = a * b;

let division = a / b;

let modulus = a % b;

console.log(sum, difference, multiplication, division, modulus);

// Task: Use the exponentiation operator ** to calculate 2 raised to the power of 5. Store the result in a variable and log it.

let power = 2 ** 5;

console.log(power);

// Task: Write a program that calculates the area of a rectangle. Declare width and height as variables, and log the area using multiplication.

let len = 5;

let wid = 10;

console.log(len * wid);

// Task: Declare two numbers p and q. Perform the arithmetic operations: increment p by 1 and decrement q by 1. Log the updated values of both.

let p = 10;

let q = 20;

p++;

q--;

console.log(p, q);

// Tasks on Comparison Operations
// Task: Declare two variables num1 and num2. Use comparison operators (>, <, >=, <=, ==, ===, !=, !==) to compare them. Log the results.

num1 = 53;

num2 = 21;

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);

// Task: Compare two strings using both == and ===. For example, compare '10' == 10 and '10' === 10. Note the difference in results.

let strNum = '10';

let numNum = 10;

console.log(strNum == numNum); // True
console.log(strNum === numNum); // False

// Task: Create a let variable temp and set it to 30. Write a condition that checks if temp is greater than or equal to 25. Log a message depending on the result.

let temp = 30;

console.log(temp >= 25);

// Task: Create a let variable score. Set it to 50. Write a condition that checks if the score is not equal to 100. If true, log a custom message.

let score = 50;

if (score !== 100) {
  console.log("Score is not 100.");
}

// Tasks on Data Types: Number, Boolean, and String
// Task: Declare a const variable myNumber and assign it a number. Check if it is of type number using typeof. Log the result.

const myNumber = 5

console.log(typeof(myNumber))

// Task: Create a boolean variable isRaining and set it to false. Write a condition that logs "Take an umbrella!" if isRaining is true.

let isRaining = false

if (isRaining == true){
  console.log("Take an umbrella!")
}

// Task: Declare a variable str and assign it a string value. Log the length of the string using .length.

let str = "String"

console.log(str.length)

// Task: Create a string variable firstName and another lastName. Concatenate them into a single variable fullName and log the result.

let firstName = "Sopia"
let lastName = "Gorgadze"

console.log(firstName + " " + lastName)

// Combined Tasks
// Task: Write a function that accepts two numbers, performs all arithmetic operations on them, and returns a summary object with the results (addition, subtraction, multiplication, etc.).

function operations(a, b, operation){
  if (operation == "+"){
    return a + b
  } else if (operation == "-"){
    return a - b
  } else if (operation == "*"){
    return a * b
  } else if (operation == "/"){
    return a / b
  }
}

console.log(operations(5, 7, "*"))

// Task: Create three variables: num, isEven, and isGreaterThanTen. Set num to a number. Assign isEven a boolean based on whether the number is even, and assign isGreaterThanTen a boolean based on whether it is greater than 10.

let num = 27

let isEven;

let isGreaterThanTen;

if (num % 2 == 0){
  isEven = false
} else{
  isEven = true
}

if (num > 10){
  isGreaterThanTen = true
} else{
  isGreaterThanTen = false
}

console.log(isEven, isGreaterThanTen)


// Task: Declare a let variable password and check if its length is at least 8 characters. Log "Password is strong" if the condition is met.

let password = "Password"

if (password.length > 7){
  console.log("Password is strong")
} else{
  console.log("Password is weak")
}

// Task: Write a program that takes a string input (your name) and checks if it equals "John". If true, log "Hello, John!", else log "Hello, stranger!".

function greet(name){
  if (name == "John"){
    return "Hello, John!"
  } else{
    return "Hello, stranger!"
  }
}

console.log(greet("John"))