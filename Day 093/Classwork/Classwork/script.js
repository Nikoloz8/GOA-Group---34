let dec = document.getElementById("dec")
        let inc = document.getElementById("inc")
        let res = document.getElementById("res")
        let p = document.getElementById("p")

        let counter = 0


        dec.onclick = function () {
            counter--
            p.textContent = counter
            if (counter > 0) {
                p.style.color = "green"
            } else if (counter == 0) {
                p.style.color = "black"
            } else if (counter < 0) {
                p.style.color = "red"
            }
        }

        inc.onclick = function () {
            counter++
            p.textContent = counter
            if (counter > 0) {
                p.style.color = "green"
            } else if (counter == 0) {
                p.style.color = "black"
            } else if (counter < 0) {
                p.style.color = "red"
            }
        }

        res.onclick = function () {
            counter = 0
            p.textContent = counter
            if (counter > 0) {
                p.style.color = "green"
            } else if (counter == 0) {
                p.style.color = "black"
            } else if (counter < 0) {
                p.style.color = "red"
            }
        }