// Create an object: Make an object called car with properties like brand, model, and year.

const car = {
    brand : "Audi",
    model : "RS6",
    year : 2020,
    startEngine : function(){
        console.log("Engine started.")
    }
}

// Access object properties: Using the car object, access the brand and year properties and print them.

console.log(car.brand, car.year)

// Add a new property: Add a new property color to the car object.

car.color = "Black"

// Change a property value: Update the year property of the car object to a new value.

car.year = 2021

// Delete a property: Remove the model property from the car object.

delete car.model

// Create a method: Add a method startEngine to the car object that prints "Engine started".

car.startEngine()

// Object inside an object: Create a new object owner inside the car object with properties like name and age.

car.owner = {
    firstName : "Nikoloz",
    lastName : "Tevdoradze",
    age : 16,
    birthDate : 2008,
}

console.log(car)