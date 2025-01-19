// 1) შექმენით ტაიმერი რომელიც დაითვლის 20 იდან 0 ის ჩათლით, თითოეული გასული წამი გამოიტანეთ ვებგვერდზე,  html ში შექმენით ერთი პარაგრაფი და ყოველ ერთ წქამში შეცვალეთ პარაგრაფის ტექსტ კონტენტი და გამოიტანეთ წამები, გამოიყენეთ setInterval


let p = document.getElementById("timer");
let time = 20;
let h = document.getElementById("left")

const t = setInterval(function() {
    p.textContent = Number(time);
    time--;
    console.log(time);
    if(time < 0) {
        p.textContent = "Time is over!";
        clearInterval(t);
        h.textContent = ""
    }
}, 1000);