let dataBase = []
        function register() {
            let name = document.getElementById("name").value
            let email = document.getElementById("email").value
            let password = document.getElementById("password").value
            let genderElements = document.getElementsByName("gender")
            let gender = ""
            for (let i = 0; i < genderElements.length; i++) {
                if (genderElements[i].checked) {
                    gender = genderElements[i].value
                }
            }

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

            if (gender === "") {
                document.getElementById("genderWarn").style.display = "block"
            } else {
                document.getElementById("genderWarn").style.display = "none"
            }

            if (password.length < 8) {
                alert("Password is too short")
                return
            }

            if (name !== "" && email !== "" && password !== "" && gender !== "") {
                let user = { name: name, email: email, password: password, gender: gender }
                dataBase.push(user)
                console.log(dataBase)
            }
        }