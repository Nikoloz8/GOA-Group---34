// Basic Callback - Logging a Message with Delay
// Goal: გაიგო, როგორ გამოიყენება callback ფუნქცია და setTimeout().

// Task:
// წერე ფუნქცია, რომელიც იღებს name და callback ფუნქციას. ფუნქცია უნდა დაიდოს setTimeout()-ში, რომ 2 წამში დაბეჭდოს მისასალმებელი მესიჯი.

// function hello(name, callback){
//     setTimeout(function(){
//         callback(`Hello, ${name}`)
//     }, 2000)
// }

// function message(message){
//     console.log(message)
// }

// hello("Nika", message)


// Callback with Time Delay (Simulate a Process)
// Goal: გამოიყენე callback და setTimeout() დროის დაგვიანებისათვის, რომ შეიქმნას რეალური პროცესის მოლოდინი.

// Task:
// წერე ფუნქცია, რომელიც იღებს მესიჯს და callback ფუნქციას. ფუნქცია უნდა დაბეჭდოს მესიჯი 2 წამით დაგვიანებით setTimeout()-ის გამოყენებით. შემდეგ callback უნდა ამოწმებდეს, რომ პროცესი დასრულდა.

function hello(name, callback) {
    setTimeout(function () {
        console.log(`Hello, ${name}`)
        callback()
    }, 2000)
}

function message() {
    console.log("Process ended")
}

hello("Nika", message)


// Callback for Array Manipulation with Delay
// Goal: გამოიყენე callback და setTimeout() მასივის ელემენტების შესაცვლელად, დროის დაგვიანებით.

// Task:
// წერე ფუნქცია, რომელიც იღებს რიცხვების მასივსა და callback ფუნქციას. თითოეული რიცხვის კვადრატის გამოთვლა უნდა განხორციელდეს setTimeout()-ის გამოყენებით, რათა იყოს რეალური დელაიდებული პროცესი, და შემდეგ უნდა დააბრუნოს ახალი მასივი.

function masivi(arr, callback) {
    setTimeout(function () {
        let arr2 = []
        for (let i = 0; i < arr.length; i++) {
            arr2.push(arr[i] ** 2)
        }

        console.log(arr2)

        callback()
    }, 2000)
}

function call() {
    console.log("Calculated!")
}

masivi([1, 2, 3], call)

// Color Change Example with DOM Manipulation and Delay
// Goal: გამოიყენე callback და setTimeout() DOM-სთან ურთიერთობისთვის და დროის დაგვიანებით გვერდის განახლებისთვის.

// Task:
// წერე ფუნქცია, რომელიც იღებს ფერს და callback ფუნქციას. setTimeout()-ის გამოყენებით უნდა ჩაიწეროს ცვლადში ფერი 2 წამში, შემდეგ callback უნდა შეცვალოს ტექსტის ფერი.

// let body = document.getElementById("body")

function changeColor(color, callback) {
    setTimeout(function() {
        let chosenColor = color
        console.log(`Color chosen: ${chosenColor}`)
        
        callback(chosenColor)
    }, 2000)
}


function changeTextColor(color) {
    // body.style.backgroundColor = color
    console.log(`Text color changed to: ${color}`)
}

changeColor("red", changeTextColor)


// Interactive Callback with User Input and Delay
// Goal: გამოიყენე callback და setTimeout() მომხმარებლის შეყვანის რეაგირებისთვის და დინამიური შინაარსის ცვლილებისთვის.

function user(name, callback){
    setTimeout(function(){
        console.log(`Hello, User ${name}`)
        callback()
    }
            
    ,2000)
}

function cons(){
    console.log("Greeted")
}

user("Sopia", cons)

// Task:
// წერე ფუნქცია, რომელიც სთხოვს მომხმარებელს მათი სახელის შეყვანას. setTimeout()-ის გამოყენებით, 3 წამში უნდა გამოვიდეს ინტერაქტიული შეტყობინება, რომელიც მიულოცავს მათ, რომ დაეხმარა.

let p = document.getElementById("p")

p.style.display = "none"

function help(callback){
    let name = prompt("Please enter your name: ")
    setTimeout(function(){
        p.style.display = "block"
        callback(name)
    }, 3000)
}


function cons(name){
    p.textContent = `Thanks for your help, ${name}!`
}

help(cons)


// (ง •̀_•́)ง  წარმატებები❤️

// მადლობა <3 