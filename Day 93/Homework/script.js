let img = document.getElementById("img")
        let cookieCounter = document.getElementById("cookie-counter")
        let goldCounter = document.getElementById("gold-counter")
        let biggerButton = document.getElementById("bigger")
        let betterButton = document.getElementById("better")
        let doubleButton = document.getElementById("double")

        let cookies = 0
        let gold = 0
        let clickPower = 1
        let goldPower = 1
        let doubleMultiplier = 1

        let biggerPrice = 50
        let betterPrice = 100
        let doublePrice = 200


        img.onclick = function () {
            cookies += clickPower * doubleMultiplier
            gold += goldPower
            updateDisplay()
        };

        biggerButton.onclick = function () {
            if (gold >= biggerPrice) {
                gold -= biggerPrice
                clickPower++
                biggerPrice *= 2
                biggerButton.textContent = "Bigger Finger || Price: " + biggerPrice + " Gold"
                updateDisplay();
            }
        };

        betterButton.onclick = function () {
            if (cookies >= betterPrice) {
                cookies -= betterPrice
                goldPower++
                betterPrice *= 2
                betterButton.textContent = "Better Mines || Price: " + betterPrice + " Cookies"
                updateDisplay()
            }
        };

        doubleButton.onclick = function () {
            if (gold >= doublePrice) {
                gold -= doublePrice;
                doubleMultiplier *= 2
                doublePrice *= 2
                doubleButton.textContent = "Double Cookies || Price: " + doublePrice + " Gold"
                updateDisplay()
            }
        };

        function updateDisplay() {
            cookieCounter.textContent = cookies
            goldCounter.textContent = gold

            if (gold >= biggerPrice) {
                biggerButton.style.backgroundColor = "red"
            } else {
                biggerButton.style.backgroundColor = "gray"
            }

            if (cookies >= betterPrice) {
                betterButton.style.backgroundColor = "red"
            } else {
                betterButton.style.backgroundColor = "gray"
            }

            if (gold >= doublePrice) {
                doubleButton.style.backgroundColor = "red"
            } else {
                doubleButton.style.backgroundColor = "gray"
            }
        }

        updateDisplay();