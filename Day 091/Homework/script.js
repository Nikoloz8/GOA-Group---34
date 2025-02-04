function isAlpha(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z')) {
            return false;
        }
    }
    return true;
}

const username1 = document.getElementById("username");

username1.oninput = function () {
    const username = username1.value;

    if (username.length >= 3 && isAlpha(username)) {
        username1.style.border = "3px solid green";
    } else {
        username1.style.border = "3px solid red";
    }
};

const email1 = document.getElementById("email");

email1.oninput = function () {
    const email = email1.value

    function count(string, value) {
        let count = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] === value) {
                count++
            }
        }
        return count
    }

    if (
        count(email, "@") == 1 &&
        (email.endsWith(".com") || email.endsWith(".net") || email.endsWith(".org"))
    ) {
        email1.style.border = "3px solid green"
    } else {
        email1.style.border = "3px solid red"
    }
}


const password1 = document.getElementById("password")

password1.oninput = function () {
    const password = document.getElementById("password").value

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
            if (count(password, uppercaseAlphabet[i]) > 0) {
                upperCount++
            }
        }
        return upperCount
    }


    function specialsCheck() {
        const specialSymbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        let specialsCount = 0
        for (let i = 0; i < specialSymbols.length; i++) {
            if (count(password, specialSymbols[i]) > 0) {
                specialsCount++
            }
        }
        return specialsCount
    }

    function numbersCheck() {
        const numbers = "1234567890";
        let numbersCount = 0
        for (let i = 0; i < numbers.length; i++) {
            if (count(password, numbers[i]) > 0) {
                numbersCount++
            }
        }
        return numbersCount
    }

    if (password.length >= 8 && upperCheck() > 0 && specialsCheck() > 0 && numbersCheck() > 0) {
        password1.style.border = "3px solid green"
    } else {
        password1.style.border = "3px solid red"
    }

}

const confirmPassword1 = document.getElementById("confirmPassword")

confirmPassword.oninput = function () {
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value
    if (confirmPassword == password) {
        confirmPassword1.style.border = "3px solid green"
    } else {
        confirmPassword1.style.border = "3px solid red"
    }
}

const age1 = document.getElementById("age")
age1.oninput = function () {
    const age = document.getElementById("age").value
    if (age >= 18) {
        age1.style.border = "3px solid green"
    } else {
        age1.style.border = "3px solid red"
    }

}