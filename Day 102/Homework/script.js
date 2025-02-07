let input = document.getElementById("input")
let p = document.getElementById("p")

let but = document.getElementById("but")

function randomId() {
    return Math.ceil(Math.random() * 9999999)
}

counter = 0

but.onclick = function () {
    counter++
    localStorage.setItem(counter, randomId())
}


input.oninput = function () {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let storedValue = localStorage.getItem(key)
        if (input.value === storedValue) {
            p.textContent = "True"
            return
        }
    }
    p.textContent = "False"
};