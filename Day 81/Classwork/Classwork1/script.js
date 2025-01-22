// 1) შევქმნათ ჯავასკრიპტით ანიმაცია რომელიც შექმნილ ოთკუდხედს შემოავლებინებს მთელ ვებსაიტს


let Cube = document.getElementById("cube")

Cube.style.position = "absolute"

let left = 0

let top1 = 0


setInterval(function () {
    Cube.style.left = left + "px"
    Cube.style.top = top1 + "px"
    
    if (left < 1500 && top1 == 0) {
        left += 3
    }
    if (left == 1500 && top1 < 690) {
        top1 += 3
    }
    if (top1 == 690 && left > 0) {
        left -= 3
    }
    if (left == 0 && top1 > 0) {
        top1 -= 3
    }

}, 0)