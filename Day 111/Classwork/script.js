// // 1) შექმენით ოთკუთხედის კლასი სიგრძის და სიგანის ფროფერთით და გეთერ მეთოდი მისი პერიმეტრისთვის

class square {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    get perimeter() {
        return 2 * (this.width + this.height)
    }
}

let square1 = new square(20, 20)

console.log(square1.perimeter)

// // 2) შექმენით ცხოველის კლასი,  შემდეგ მისი შთამომავალი ძუძუმწოვრის კლასი და ძუძუმწოვრის შთამომაცალი ძაღლის კლასი. თითოეული კლასის კონტრუკტორი უნდა იყოს მის მშობელ კლასზე დაფუძენბული.

class Animal {
    constructor(height, weight, width) {
        this.height = height
        this.weight = weight
        this.width = width
    }
}

class Dzudzu extends Animal {
    constructor(height, weight, width, doesBark) {
        super(height, weight, width)
        this.doesBark = doesBark
    }
}

class Dog extends Dzudzu {
    constructor(height, weight, width, doesBark, name, haveTail) {
        super(height, weight, width, doesBark)
        this.name = name
        this.haveTail = haveTail
    }
}

let animal = new Animal(100, 200, 20)
console.log(animal);

let dzudzu = new Dzudzu(80, 150, 15, true)
console.log(dzudzu);

let dog = new Dog(60, 30, 10, true, "Rex", true)
console.log(dog);





// 3) შექმენით მანქანის და ელექტრონული მანქანის კლასი, გამოიყენეთ extends. ელექტროუნული კლასში შეცვალეთ ერთი მისი მშობელის მეთოდი და მეორე მეთოდზე დააშენეეთ ახალი ფუნქციონალი 

class Car{
    constructor(brand, model, year, doesStart){
        this.brand = brand
        this.model = model
        this.year = year
        this.doesStart = doesStart
    }

    vroom(){
        return "Vrooooooom"
    }
}

class electricCar extends Car{
    constructor(brand, model, year, doesStart, doesElectric, Kws, doesVroom, doesDrift){
        super(brand, model, year, doesStart)
        this.doesElectric = doesElectric
        this.Kws = Kws
        this.doesVroom = doesVroom
        this.doesDrift = doesDrift
    }

    wuuu(){
        return "Not " + super.vroom() + ", i do Wuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"
    }


}

electric = new electricCar("Tesla", "Model X", 2020, true, true, 40, false, false)

benzin = new Car("Dodge", "Challanger", 2020, true)

console.log(electric.wuuu())