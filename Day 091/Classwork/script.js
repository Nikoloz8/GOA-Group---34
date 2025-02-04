let persons = [
    { username: "Nikoloz", password: "1234" },
    { username: "Sopia", password: "5678" }
]

let form = document.getElementById("form")
form.onsubmit = function (e) {
    e.preventDefault()
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value
    const age = document.getElementById("age").value

    if (age < 18) {
        alert("You must be 18 or older!")
        return false
    }

    if (password != confirmPassword) {
        alert("Passwords do not match")
        return false
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

    if (
        count(email, "@") !== 1 || 
        (!email.endsWith(".com") && !email.endsWith(".net") && !email.endsWith(".org"))
    ) {
        alert("Email is not valid!")
        return false
    }


    let userFound = false;
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].username === username && persons[i].password === password) {
            userFound = true
            break;
        }
    }
    if (!userFound) {
        alert("Username or password is wrong!");
        return false
    }

    alert("Form submitted successfully!");
    return true
}