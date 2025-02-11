// 1) შექმნით ცხოველის, მაქანის და ადამიანისკლასი, თითოეული სამი property-თ და ერთი მეთოდით. თითოეული კლასიდან შექმენით სამ-სამი -ობიექტი და გამოიტანეთ ისინი კონსოლში.
// წარმატებები (•‿•)❤️


class Animal {
    constructor(name, age, sound) {
        this.name = name
        this.age = age
        this.sound = sound
    }

    makeSound() {
        console.log(this.name + " says " + this.sound);
    }
}

class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    drive() {
        console.log(this.brand + " " + this.model + " is driving.")
    }
}

class Human {
    constructor(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
    }

    introduce() {
        console.log("Hi, my name is " + this.name + ". I am " + this.age + " years old and I work as a " + this.job + ".")
    }
}

let dog = new Animal("Dog", 5, "Bark")
let cat = new Animal("Cat", 3, "Meow")
let cow = new Animal("Cow", 4, "Moo")

let car = new Vehicle("Toyota", "Camry", 2020)
let bike = new Vehicle("Yamaha", "YZF-R1", 2021)
let truck = new Vehicle("Ford", "F-150", 2019)

let john = new Human("John", 25, "Engineer")
let sarah = new Human("Sarah", 30, "Doctor")
let mike = new Human("Mike", 28, "Teacher")

dog.makeSound()
cat.makeSound()
cow.makeSound()

car.drive()
bike.drive()
truck.drive()

john.introduce()
sarah.introduce()
mike.introduce()