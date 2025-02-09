let body = document.getElementById("body")

let playerName = localStorage.getItem("playerName")

if (!playerName) {
    playerName = prompt("Enter your name: ")
    localStorage.setItem("playerName", playerName)
}

let color = document.getElementById("color")

setInterval(function () {
    body.style.backgroundColor = color.value
    localStorage.setItem("color", color.value)
}, 1)

let scoreName = document.getElementById("nameScore")
scoreName.textContent = `${playerName}'s Score: `

let label = document.getElementById("label")
let but = document.getElementById("check")
let coefficient = 2
let point = 0
let score = document.getElementById("score")
let red = document.getElementById("red")
let green = document.getElementById("green")
let num = document.getElementById("num")

let secret = Math.floor(Math.random() * 3)

but.onclick = function () {
    score.textContent = point
    console.log(secret)

    if (secret == num.value) {
        point += 1
        localStorage.setItem("point", point)
        green.style.display = "block"
        red.style.display = "none"
        coefficient = coefficient * 2
        label.textContent = `Guess number between 0-${coefficient}`
        secret = Math.floor(Math.random() * (coefficient + 1))
        localStorage.setItem("coefficient", coefficient)
        num.value = ""
    } else {
        green.style.display = "none"
        red.style.display = "block"
    }
}

function load() {
    let savedCoefficient = localStorage.getItem("coefficient")
    if (savedCoefficient !== null) {
        coefficient = savedCoefficient
    }

    let savedPoint = localStorage.getItem("point")
    if (savedPoint !== null) {
        point = savedPoint
        score.textContent = point
    }

    let savedColor = localStorage.getItem("color")
    if (savedColor !== null) {
        color.value = savedColor
        body.style.backgroundColor = savedColor
    }

    label.textContent = `Guess number between 0-${coefficient}`
}

load()