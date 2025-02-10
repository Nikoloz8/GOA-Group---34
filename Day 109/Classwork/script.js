// # 2) შექმენით ფუნქცია რომელსაც გადაეცემა მინ 2 და მაქსიმუმ უთვალავი ელემენტი, პირველი არგუმენტი უნდა იყყოს ფუნქცია და დანარჩენი არგუმენტი ინტეჯერები, მაგ func(add, 1,7,2,1), add, minus, mulitply

function add() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
}

function minus() {
    let result = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        result -= arguments[i]
    }
    return result
}

function multy() {
    let result = 1
    for (let i = 0; i < arguments.length; i++) {
        result *= arguments[i]
    }
    return result;
}

function min2(func) {
    let numbers = []

    for (let i = 1; i < arguments.length; i++) {
        numbers.push(arguments[i])
    }

    return func(...numbers)
}


console.log(min2(minus, 2, 3, 4))
