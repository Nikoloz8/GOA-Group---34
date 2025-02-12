// სავარჯიშო 1:
// დაამატე initials getter, რომელიც დააბრუნებს პიროვნების ინიციალებს. თუ პიროვნება აქვს firstName და lastName properties, დააბრუნე მხოლოდ პირველი ასო ორივედან.

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    get initials(){
        return this.firstName[0] + "." + this.lastName[0]
    }
}

let Person1 = new Person("Sopia", "Giorgadze")

console.log(Person1.initials)

// სავარჯიშო 2:
// დაამატე ageInMonths getter, რომელიც დააბრუნებს პიროვნების ასაკს თვეებში (თუ პიროვნებას აქვს age property, რომელიც აჩვენებს მის ასაკს წლებით).

// სავარჯიშო 3:
// დაამატე isRetired getter, რომელიც დააბრუნებს true, თუ პიროვნება არის პენსიონერი (60 წლის ან მეტი), და false თუ არა.


class forAge extends Person{
    constructor(firstName, lastName, age){
        super(firstName, lastName)
        this.age = age
    }

    get ageInMonths(){
        return this.age * 12
    }

    get isRetired(){
        return this.age >= 60
    }
}

let Person2 = new forAge("Sopia", "Giorgadze", 17)

console.log(Person2.ageInMonths)
console.log(Person2.isRetired)




// სავარჯიშო 4:
// დაამატე formattedPrice getter, რომელიც დააბრუნებს პროდუქტის ფასს ფორმატირებულად (მაგალითად, "$100.00").

class Money{
    constructor(count){
        this.count = count
    }

    get formated(){
        return `$${this.count}.00 ` 
    }
}

let count1 = new Money(921)

console.log(count1.formated)


// ავარჯიშო 5:
// დაამატე discountPrice getter, რომელიც დააბრუნებს ფასის შეღავათიან ვერსიას
// წარმატებები ♡´･ᴗ･`♡

class Discount extends Money{
    constructor(count, discount){
        super(count)
        this.discount = discount
    }


    get discountPrice(){
        return `$${this.count - this.discount}.00 `
    }
}

let count2 = new Discount(921, 321)

console.log(count2.discountPrice)

