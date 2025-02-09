// Array Destructuring: Extract values from an array and assign them to variables in a single line of code.

let [one, two, three] = [1, 2, 3]

console.log(one)

// Object Destructuring: Unpack properties from objects into distinct variables with concise syntax.

let { name, surname } = { name: "Nika", surname: "Tevdoradze" }

console.log(name)

// Renaming Variables: Rename variables while destructuring to provide clearer names for extracted values.

let { 0: first, 1: second } = ["Apple", "Banana"]

console.log(first)

// Skipping Values: Skip over unwanted elements in an array or properties in an object during destructuring.

let [adin, , tri] = [1, 2, 3]

console.log(tri)


// Destructuring in Loops: Iterate over an array of objects and destructure each object's properties directly in the loop declaration.

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

for (const person of people) {
    const { name, age } = person;
    console.log(`Name: ${name}, Age: ${age}`)
}


// დანარჩენი არ იყო ახსნილი, ბატონმა ლაშამ დავალება შეცდომით ჩააგდო.