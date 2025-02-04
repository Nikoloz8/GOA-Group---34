// 2) შეასრულეთ დავალებები დღეს ნასწავლი სტანდარტებისა და საუკეთესო პრაქტიკების გამოყენებით: კომენტარები, ინდენტაცია, ცვლადების შესაბამისი სახელები, camelCase method და external javascript:

// 1.Multiply Two Numbers
// Write a function multiply() that prompts the user to input two numbers and returns their product.

function multiply(){
    let a = prompt("Enter num1: ")
    let b = prompt("Enter num2: ")
    return "Products of multiplication between this numbers is: " + String(Number(a) * Number(b))
}

// console.log(multiply())

// 2.Subtract Two Numbers
// Write a function subtract() that prompts the user for two numbers and returns the difference.

function difference(){
    let a = prompt("Enter num1: ")
    let b = prompt("Enter num2: ")
    return "Products of difference between this numbers is: " + String(Number(a) - Number(b))
}

// 3.Divide Two Numbers
// Write a function divide() that prompts the user for two numbers and returns their quotient.

function divide(){
    let a = prompt("Enter num1: ")
    let b = prompt("Enter num2: ")
    return "Products of divide between this numbers is: " + String(Number(a) / Number(b))
}

// 4.Return a Full Name
// Write a function fullName() that prompts the user to input their first name and last name, and returns the full name as a single string.

function fullName(){
    let firstName = prompt("Enter your firstname")
    let lastName = prompt("Enter your lastname")
    return firstName + ' ' + lastName
}

// console.log(fullName())

// 5.Convert Minutes to Seconds
// Write a function minutesToSeconds() that prompts the user for a number of minutes and returns the equivalent in seconds.

function minutesToSeconds(){
    let min = prompt("Enter minutes: ")
    return "This minutes in seconds is: " + String(Number(min) * 60)
}

// console.log(minutesToSeconds())

// 6.Calculate the Area of a Rectangle
// Write a function rectangleArea() that prompts the user to input the length and width of a rectangle and returns the area.

function rectangleArea(){
    let l = prompt("Enter length of rectangle: ")
    let w = prompt("Enter width of rectangle: ")
    return "Area of this rectangle is: " + String(Number(l) * Number(w))
}

// 7.Concatenate Two Strings
// Write a function concatenateStrings() that prompts the user for two strings and returns them concatenated together.

function concatenateStrings(){
    let str1 = prompt("Enter your String1: ")
    let str2 = prompt("Enter your String2: ")
    return "This is concatinated strings: " + (str1 + str2)
}

// 8.Exponentiation
// Write a function power() that prompts the user for a base number and an exponent, and returns the result of raising the base to the power of the exponent.

function power(){
    let x = prompt("Enter base number: ")
    let y = prompt("Enter exponent: ")
    return "The result is: " + String(Number(x) ** Number(y))
}

// console.log(power())

// 9.Calculate Circle Circumference
// Write a function circumference() that prompts the user to input a circle's radius and returns the circumference.
function circumference() {
    let radius = Number(prompt("Enter the radius of the circle: "));
    let result = 2 * 3.14 * radius;
    alert("The circumference of the circle is: " + result);
}

// 10.Return the Next Number
// Write a function nextNumber() that prompts the user for a number and returns the next number (the input number plus one).

function nextNumber() {
    let number = Number(prompt("Enter the number: "));
    return "The next of this number is: " + String(number + 1)
}

// console.log(nextNumber())