let text = document.getElementById("text")
let title = document.getElementById("title")
let sub = document.getElementById("sub")

let date = new Date()

let filter = document.getElementById("filter")

let emailList = document.getElementById("emailList")

let emails = [
    { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
    { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
    { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
    { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" }
]

function displayEmails(selectedSubject) {
    emailList.innerHTML = ""
    for (let i = 0; i < emails.length; i++) {
        if (selectedSubject === "" || emails[i].subject === selectedSubject) {
            let li = document.createElement("li")
            li.textContent = emails[i].subject + ": " + emails[i].content + " (" + emails[i].receivedDate + ")"
            emailList.appendChild(li)
        }
    }
}

sub.onclick = function () {
    let newEmail = {
        subject: title.value,
        content: text.value,
        receivedDate: date.toISOString().split('T')[0]
    }
    emails.push(newEmail) 
    displayEmails(filter.value) 

    let optionExists = false
    for (let i = 0; i < filter.options.length; i++) {
        if (filter.options[i].value === title.value) {
            optionExists = true
            break
        }
    }
    if (!optionExists) {
        let option = document.createElement("option")
        option.value = title.value
        option.textContent = title.value
        filter.appendChild(option)
    }

    text.value = ""
    title.value = ""

}

filter.onchange = function () {
    displayEmails(filter.value)
}

displayEmails("")