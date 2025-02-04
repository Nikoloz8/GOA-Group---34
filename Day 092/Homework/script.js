let input = document.getElementById("input")

        input.oninput = function () {
            if (input.value.length >= 6) {
                input.style.backgroundColor = "red"
            }

            function count(string, value) {
                let count = 0;
                for (let i = 0; i < string.length; i++) {
                    if (string[i] === value) {
                        count++
                    }
                }
                return count
            }

            function upperCheck() {
                const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                let upperCount = 0
                for (let i = 0; i < uppercaseAlphabet.length; i++) {
                    if (count(input.value, uppercaseAlphabet[i]) > 0) {
                        upperCount++
                    }
                }
                return upperCount
            }

            function numbersCheck() {
                const numbers = "1234567890";
                let numbersCount = 0
                for (let i = 0; i < numbers.length; i++) {
                    if (count(input.value, numbers[i]) > 0) {
                        numbersCount++
                    }
                }
                return numbersCount
            }

            if (input.value.length >= 8 && upperCheck(input.value) > 0 || numbersCheck(input.value) > 0) {
                input.style.backgroundColor = "yellow"
            }

            function specialsCheck() {
                const specialSymbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
                let specialsCount = 0
                for (let i = 0; i < specialSymbols.length; i++) {
                    if (count(input.value, specialSymbols[i]) > 0) {
                        specialsCount++
                    }
                }
                return specialsCount
            }

            if (input.value.length >= 8 && upperCheck(input.value) > 0 && numbersCheck(input.value) > 0 && specialsCheck(input.value) > 0){
                input.style.backgroundColor = "green"
            }
        }