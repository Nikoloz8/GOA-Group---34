// პირადი ველების შექმნა – შექმენი კლასი, რომელიც შეიცავს ერთ ან მეტ პირად ველს და უზრუნველყოს მათი ინკაფსულაცია.
// getter და setter მეთოდები – დაამატე getter და setter მეთოდები პირადი ველებისთვის, რათა მათთან წვდომა კონტროლდეს.

class User1 {
    #name
    #age
    #password


    constructor(name, age, password) {
        this.#name = name
        this.#age = age
        this.#password = password
    }


    get name() {
        return this.#name
    }


    set name(newName) {
        if (newName.length > 2) {
            this.#name = newName
        } else {
            console.log("Name must be at least 3 characters long.")
        }
    }

    get age() {
        return this.#age;
    }


    set age(newAge) {
        if (newAge > 0 && newAge < 120) {
            this.#age = newAge
        } else {
            console.log("Invalid age! Age must be between 1 and 120.")
        }
    }


    get password() {
        return "Access denied!"
    }


    set password(newPassword) {
        if (newPassword.length >= 6) {
            this.#password = newPassword
        } else {
            console.log("Password must be at least 6 characters long.")
        }
    }


    getUserInfo() {
        return `Name: ${this.#name}, Age: ${this.#age}`
    }
}

let user1 = new User1("John", 25, "123")

user1.age = 150

console.log(user1.getUserInfo())


user1.name = "Mike"
console.log(user1.name)


user1.name = "Jo"

user1.age = 30
console.log(user1.age)




console.log(user1.password)

user1.password = "newpass123"
console.log(user1.password)



// მხოლოდ წაკითხვადი ველი – შექმენი კლასი, სადაც პირადი ველი შესაძლებელია მხოლოდ წაკითხვად იყოს და მისი შეცვლა კლასის გარედან შეუძლებელი იყოს.

class User2 {
    
    #id

    constructor(id) {
        this.#id = id 
    }

 
    get id() {
        return this.#id
    }
}


const user2 = new User2(12345)


console.log(user2.id)

user2.id = 67890
console.log(user2.id)

// console.log(user1.#id) ეს ერორია


// შექმენი BankAccount კლასი - რომელსაც ექნება პირადი ველი #balance. დაამატე getBalance() მეთოდი, რომელიც აბრუნებს ბალანსს და deposit(amount) მეთოდი, რომელიც ანგარიშზე თანხას დაამატებს. ბალანსზე პირდაპირი წვდომა გარედან არ უნდა იყოს შესაძლებელი.

// (🔥◡🔥)🔥 წარამატებები! *:･ﾟ🌟.


class bankAccount{
    #balance

    constructor(balance){
        this.#balance = balance
    }

    getBalance(){
        return this.#balance     
    }

    deposit(amount){
        this.#balance += amount
    }

}

const bankAccount1 = new bankAccount(4312) 

bankAccount1.deposit(500)
console.log(bankAccount1.getBalance())
