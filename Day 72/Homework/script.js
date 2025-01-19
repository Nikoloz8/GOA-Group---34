// 1) შექმენით ფუნქცია, რომელიც გამოიტანს მესიჯს სამი წამის შემდეგ

const time1 = setInterval(function () {
    console.log("3 second passed")
    clearInterval(time1)
}, 3000)

// 2) შექმენით პროგრამა, რომელიც ყოველ წამს გამოიტანს ამჟამინდელ დროს "საათი:წუთი:წამი"

let timeP = document.getElementById("time")

const time2 = setInterval(function () {
    let date = new Date()
    timeP.textContent = date.toLocaleTimeString()
}, 1000)

// 3) შექმენით პროგრამა, რომელიც ყოველ 3 წამში შეცვლის საიტის background ფონის ფერს.(ფერის მნიშვნელობა შეინახეთ მასივში)

let colorList = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Green",
    "GreenYellow",
    "HoneyDew"
]
// 4) დაწერეთ პროგრამა, რომელიც ყოველ 5 წამში შეცვლის საიტზე არსებული პარაგრაფის textContent-ს

let body = document.getElementById("body")

let text = document.getElementById("textContent")

const time3 = setInterval(function () {
    let num = [Math.floor(Math.random() * colorList.length)]
    body.style.backgroundColor = colorList[num]
    text.textContent = colorList[num]
    console.log(colorList[num])
}, 3000)





// 5) პროექტი:

// შექმენით პროგრამა ტაიმერი, რომელსაც გადასცემთ 3 ღილაკს Start,Pause,Reset


const startBtn = document.getElementById("startBtn")

const stopBtn = document.getElementById("stopBtn")

const resetBtn = document.getElementById("resetBtn")

let timer = document.getElementById("timer")

let timerNum = 0

startBtn.onclick = function(){
    let forTimer = setInterval(function(){
        timerNum++
        timer.textContent = timerNum
        stopBtn.onclick = function(){
            clearInterval(forTimer)
        }
        resetBtn.onclick = function(){
            timerNum = 0
            timer.textContent = timerNum
            clearInterval(forTimer)
            
        }
    }
, 1000)
}