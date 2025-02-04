// 1. **Greeting Function**  
//    Create a function `greet` that accepts a name as a parameter and greets the person. If no name is provided, the default name should be "Guest".

function greet(name = "Guest"){
    return "Hello " + name
}

console.log(greet())

// 2. **Addition with Default Parameters**  
//    Write a function `add_numbers` that takes two numbers and returns their sum. The second number should have a default value of 0.

function addNumbers(a, b = 0){
    return a + b
}

console.log(addNumbers(1))

// 3. **Rectangle Area Calculator**  
//    Create a function `calculate_area` to find the area of a rectangle. It should take two parameters: length and width. If the width is not provided, use a default value of 1.

function calculateArea(l, w = 1){
    return w * l
}

// 4. **Temperature Conversion**  
//    Write a function `convert_temperature` to convert temperatures between Celsius and Fahrenheit. It should have two parameters: temperature and scale (either "C" for Celsius or "F" for Fahrenheit), with "C" as the default scale.

function convertTemperature(temperature, scale){
        if (scale === "C") {
          return (temperature * 9/5) + 32;
        } else if (scale === "F") {
          return (temperature - 32) * 5/9;
        } else {
          return "Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit.";
        }
}

// 5. **Shopping List**  
//    Create a function `add_to_shopping_list` that accepts an item and a quantity. The quantity should default to 1 if not provided.

function addToShoppingList(item, quanity = 1){
    return quanity + " x " + item
}

// 6. **Power Function**  
//    Write a function `power` that calculates the power of a number with a default exponent value of 2 (i.e., square).

function power(base, exponent = 2) {
    return base ** exponent;
  }
// 7. **Personalized Message**  
//    Create a function `create_message` that generates a personalized message given a name and an optional greeting ("Hello" as default).

function createMessage(name, greeting = "Hello"){
    return greeting + " " + name
}

// 8. **Calculate Discount**  
//    Write a function `apply_discount` that calculates the final price of an item after applying a discount. The discount should be a default of 10%.

function applyDiscount(price, discount = 10){
    return price - ((price / 100) * discount)
}

console.log(applyDiscount(100, 5))

// console.log(applyDiscount(100, 5))

// 9. **Introduction Function**  
//    Create a function `introduce` that takes a name, age, and country. If age and country are not provided, they should default to "unknown".

function introduce(name, age = "unknown", country = "unknown"){
    return name, age, country
}

// 10. **Calculate Final Price**  
//     Write a function `calculate_price` that takes the price of an item and a sales tax. The sales tax should default to 5%.

function calculateAge(price, salesTax = 5){
    return price + ((price / 100) * salesTax)
}

console.log(calculateAge(100, 5))

// 11. **Find the Maximum**  
//     Create a function `find_max` that accepts three numbers and returns the largest one using comparison operators and if-else statements.

function findMax(a, b, c){
    if (a < b && b > c){
        return b
    } else if (b < a && a > c){
        return a
    } else{
        return c
    }
}

console.log(findMax(15, 26, 9))

// 12. **Pass or Fail**  
//     Write a function `pass_or_fail` that accepts a student's score and returns "Pass" if the score is 50 or above, and "Fail" otherwise.

function passOrFail(score){
    if (score >= 50){
        return "Pass"
    } else{
        return "Fail"
    }

}

// console.log(passOrFail(39))

// 13. **Sum of Numbers**  
//     Write a function `sum_of_numbers` that accepts a list of numbers and returns their sum using a for loop.

function sumOfNumbers(list){
    sum = 0
    for (i = 0; i < list.length; i++){
        sum = sum + list[i]
    }
    return sum
}

console.log(sumOfNumbers([1, 3, 7]))

// 14. **Count Even Numbers**  
//     Create a function `count_evens` that accepts a list of integers and returns the count of even numbers using a for loop.

function countEvens(list){
    counter = 0
    for (i = 0; i < list.length; i++){
        if (list[i] % 2 == 0){
            counter += 1
        }
    }

    return counter
}

console.log(countEvens([1, 4, 2, 1, 8]))