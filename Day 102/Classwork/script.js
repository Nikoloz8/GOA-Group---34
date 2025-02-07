let dec = document.getElementById("dec")
let inc = document.getElementById("inc")
let res = document.getElementById("res")
let p = document.getElementById("p")

// let counter = 0 
counter = localStorage.getItem("counter")
p.textContent = counter

dec.onclick = function () {
    counter--
    p.textContent = counter
    if (counter > 0) {
        p.style.color = "green"
    } else if (counter == 0) {
        p.style.color = "black"
    } else if (counter < 0) {
        p.style.color = "red"
    }
    localStorage.setItem("counter", counter)
}

inc.onclick = function () {
    counter++
    p.textContent = counter
    if (counter > 0) {
        p.style.color = "green"
    } else if (counter == 0) {
        p.style.color = "black"
    } else if (counter < 0) {
        p.style.color = "red"
    }
    localStorage.setItem("counter", counter)
}

res.onclick = function () {
    counter = 0
    localStorage.setItem("counter", counter)
    p.textContent = counter
    if (counter > 0) {
        p.style.color = "green"
    } else if (counter == 0) {
        p.style.color = "black"
    } else if (counter < 0) {
        p.style.color = "red"
    }
}

let forColor = setInterval(function(){
    if (counter > 0) {
        p.style.color = "green"
    } else if (counter == 0) {
        p.style.color = "black"
    } else if (counter < 0) {
        p.style.color = "red"
    }
} , 0)