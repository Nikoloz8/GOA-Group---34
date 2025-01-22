let div = document.getElementById("circle")

let btn = document.getElementById("btn")

let left = 0
let isRight = true


btn.onclick = function () {
    let interval = setInterval(function () {
        if (isRight) {
            if (left < 1400) {
                div.style.left = left + "px"
                left += 5
            } else {
                clearInterval(interval)
                isRight = false
            }

        } else {
            if (left > 0) {
                div.style.left = left + "px"
                left -= 5
            } else {
                clearInterval(interval)
                isRight = true
            }
        }
    }, 1)
}