let dec = document.getElementById("dec")
let inc = document.getElementById("inc")
let res = document.getElementById("res")
let p = document.getElementById("p")

let counter = 0
let number = document.getElementById("number")

dec.onclick = function () {
    if (Number(number.value) < 101) {
        counter -= Number(number.value)
        p.textContent = counter
        if (counter > 0) {
            p.style.color = "green"
        } else if (counter == 0) {
            p.style.color = "black"
        } else if (counter < 0) {
            p.style.color = "red"
        }
    } else {
        alert("არ შეიძლება 100-ზე მეტი რიცხვის მიმატება ან გამოკლება")
    }
}

inc.onclick = function () {
    if (Number(number.value) < 101) {
        counter += Number(number.value)
        p.textContent = counter
        if (counter > 0) {
            p.style.color = "green"
        } else if (counter == 0) {
            p.style.color = "black"
        } else if (counter < 0) {
            p.style.color = "red"
        }
    } else {
        alert("არ შეიძლება 100-ზე მეტი რიცხვის მიმატება ან გამოკლება")
    }
}

res.onclick = function () {
    if (counter != 0) {
        counter = 0
        p.textContent = counter
        if (counter > 0) {
            p.style.color = "green"
        } else if (counter == 0) {
            p.style.color = "black"
        } else if (counter < 0) {
            p.style.color = "red"
        }
    } else{
        alert("Count is already zero.")
    }
}