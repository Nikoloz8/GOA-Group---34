let btn = document.getElementById("btn")

let div = document.getElementById("div")

let deg = 10

btn.onclick = function(){
    let interval = setInterval(function(){
        deg += 1
        div.style.rotate = deg + "deg"
    }, 9)
}