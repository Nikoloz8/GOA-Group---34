function register() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let agree = document.getElementById("agree").checked

    if (name === "") {
        document.getElementById("nameWarn").style.display = "block"
    } else {
        document.getElementById("nameWarn").style.display = "none"
    }

    if (email === "") {
        document.getElementById("emailWarn").style.display = "block"
    } else {
        document.getElementById("emailWarn").style.display = "none"
    }

    if (password === "") {
        document.getElementById("passwordWarn").style.display = "block"
    } else {
        document.getElementById("passwordWarn").style.display = "none"
    }

    if (!agree) {
        document.getElementById("checkWarn").style.display = "block"
    } else {
        document.getElementById("checkWarn").style.display = "none"
    }

    if (name !== "" && email !== "" && password !== "" && agree) {
        console.log("Name:", name)
        console.log("Email:", email)
        console.log("Password:", password)
    }
}