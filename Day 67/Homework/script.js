// ---

// ## **10 Simple Constructor Exercises**

// ### 1. **Basic Constructor with Properties**
//    - Create a `Person` constructor with properties `name` and `age`.  
//    - Add a method `introduce()` that logs:  
//      `"Hi, I am <name> and I am <age> years old."`

function Person(name, age){
    this.name = name,
    this.age = age,
    this.introduce = function() {

        return `Hi, I am ${this.name} and I am ${this.age} years old.`
    }
}

let person1 = new Person("Data", 5)
console.log(person1.introduce())

// ### 2. **Constructor with Default Parameter Value**
//    - Create a `Book` constructor with parameters `title` and `author`.  
//    - If no `author` is provided, set it to `"Unknown"`.  
//    - Add a method `getDetails()` to print the book's details.

function Book(title, author = "Unknown"){
    this.title = title,
    this.author = author
    this.getDetails = function(){
        return this.title + " " + this.author
    }
}

let book1 = new Book("Chemi memuarebi", "Sophia Gorgadze")

console.log(book1.getDetails())

// ### 3. **Constructor with Arrays**
//    - Create a `Classroom` constructor that takes an array of `students`.  
//    - Add a method `countStudents()` to log the number of students in the array.

function Classroom(list){
    this.list = list,
    this.countStudents = function(){
        return list.length
    }
}

let classroom1 = new Classroom(["Sophia Gorgadze", "Tea Nacvlishvili", "Ioseb Gorgadze"])

console.log(classroom1.countStudents())

// ### 4. **State Management with Constructor**
//    - Create a `Counter` constructor with an initial value of 0.  
//    - Add methods `increment()` and `getValue()` to increase the counter by 1 and retrieve the current value.

function Counter(){
    this.value = 0
    this.increment = function(){
        this.value++
    }
    this.getValue = function(){
        return this.value
    }
}

let counter1 = new Counter()

counter1.increment()
counter1.increment()
counter1.increment()
counter1.increment()

console.log(counter1.getValue())

// ### 5. **Constructor with Boolean State**
//    - Create a `Light` constructor with a `state` property initialized to `"off"`.  
//    - Add a method `toggle()` to switch the state between `"on"` and `"off"`.

function Light() {
    this.state = "Off";
    this.toggle = function() {
        if (this.state == "On") {
            this.state = "Off";
        } else {
            this.state = "On";
        }
        return this.state; 
    };
}

let light1 = new Light();

console.log(light1.toggle()) 
light1.toggle()
console.log(light1)

// ### 6. **Product Constructor with Properties**
//    - Create a `Product` constructor with properties `name` and `price`.  
//    - Add a method `getDetails()` to log:  
//      `"Product: <name>, Price: <price> USD"`

function Product(name, price){
    this.name = name,
    this.price = price,
    this.getDetails = function(){
        return `Product: ${this.name}, Price: ${this.price} USD`
    }
}

let product1 = new Product("Sasisqi", 7)

console.log(product1.getDetails())

// ### 7. **Constructor with Object Properties**
//    - Create a `User` constructor with properties `username` and `contact` (an object containing `email` and `phone`).  
//    - Add a method `getContactInfo()` to print the user’s contact information.

function User(username, contact){
    this.username = username,
    this.contact = contact,
    this.getContactInfo = function(){
        return this.contact
    }
}

let user1 = new User("Dato", {email : "nikoloztevdoradze08@gmail.com", phone : 57719563})

console.log(user1.getContactInfo())

// ### 8. **Constructor with Array of Objects**
//    - Create a `Library` constructor that takes an array of book objects (each with `title` and `author`).  
//    - Add a method `listBooks()` to print all books in the library.

function Library(list){
    this.list = list,
    this.listBooks = function(){
        return this.list
    }
}

const library1 = new Library([
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
])

console.log(library1.listBooks())

// ### 9. **Cart Constructor with Array Management**
//    - Create a `Cart` constructor with an empty `items` array.  
//    - Add methods `addItem(item)` to add an item and `getItems()` to print all items.

function Cart(items){
    this.items = items,
    this.addItem = function(item){
        this.items.push(item)
    }
    this.getItems = function(){
        return this.items
    }
}

let cart1 = new Cart([])

cart1.addItem("Sasisqi")
cart1.addItem("Namcxvari")
cart1.addItem("Kalbasi")
cart1.addItem("1 Cali Sophia")

console.log(cart1.getItems())

// ### 10. **Conditional Logic in Constructor**
//    - Create a `Student` constructor with properties `name` and `marks` (an array of numbers).  
//    - Add a method `hasPassed()` that returns `true` if the average mark is 50 or above, otherwise `false`.

function Student(name, marks){
    this.name = name
    this.hasPassed = function(){
        sum = 0
        for(let i = 0; i < marks.length; i++){
            sum += marks[i]
        }
        return 50 <= (sum / marks.length)
    }
}

let student1 = new Student("Jonia", [60, 60, 70, 1])

console.log(student1.hasPassed())