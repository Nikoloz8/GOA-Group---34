// 2) შევქმნათ წრე და ღილაკი, ღილაკის დაკლიკების დროს წრე ავარდეს და დავარდეს ძირს (საწყის პოზიციაზე) 

let circle = document.querySelector(".circle");
let btn = document.getElementById("btn");

circle.style.position = "relative";

let position = 0;
let direction = 1;
let interval;

btn.onclick = function () {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(function () {
        if (position >= 650) {
            direction = -1;
        } else if (position <= 0) {
            direction = 1;
            clearInterval(interval);
        }

        position += direction * 3;
        circle.style.bottom = position + "px";
    }, 10);
};

