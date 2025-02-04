let div = document.getElementById("fade-element")
let btn = document.getElementById("fade-button")

let opc = 1
let fadingOut = true

btn.onclick = function () {
    let interval = setInterval(function () {
        if (fadingOut) {
            if (opc > 0) {
                div.style.opacity = opc;
                opc -= 0.01;
            } else {
                clearInterval(interval)
                fadingOut = false;
            }
        } else {
            if (opc < 1) {
                div.style.opacity = opc;
                opc += 0.01;
            } else {
                clearInterval(interval);
                fadingOut = true
            }
        }
    }, 3);
}

