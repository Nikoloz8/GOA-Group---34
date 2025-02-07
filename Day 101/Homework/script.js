// <!-- შექმენით ვებსაიტი, რომელიც მოიცავს ინფუთის ველებს, სადაც შეგიძლიათ დაამატოთ ადამიანების მონაცემები და შემდეგ ისინი ვებსაიტზე ვიზუალურად გამოაჩინოთ. თითოეული ჩანაწერისთვის საჭიროა შემდეგი ველების შევსება:

// სახელი
// გვარი
// ასაკი
// პირადი ნომერი (ID)
// სიმაღლე
// აღწერა
// ელ. ფოსტა

// ელ. ფოსტის მისამართი შეგიძლიათ ავტომატურად გენერირდეს მომხმარებლის სახელის, გვარისა და ასაკის საფუძველზე. თუ პროცესს რენდომ გენერაციის ელემენტსაც დაამატებთ, კიდევ უკეთესი იქნება.

// განსაკუთრებული ყურადღება მიაქციეთ მონაცემების მუდმივად შენახვას, რაც local storage-ის გამოყენებით შეგიძლიათ განახორციელოთ.

// წარმატებები პროექტში! ❤️ თუ რაიმე შეკითხვა გექნებათ ან დახმარება დაგჭირდებათ, არ მოგერიდოთ, მომწერეთ! 😄👍 -->

const form = document.querySelector(".form1")
const table = document.querySelector("table")
const firstname1 = document.getElementById("firstname")
const lastname1 = document.getElementById("lastname")
const email = form.email

const clear = document.getElementById("clear")

clear.onclick = function(){
    localStorage.clear()
    location.reload()       
}

function generateEmail() {
    if (firstname1.value != "" && lastname1.value != "") {
        email.value = firstname1.value + lastname1.value + "@gmail.com"
    }
}

firstname1.onchange = generateEmail
lastname1.onchange = generateEmail

function loadData() {
    const savedData = JSON.parse(localStorage.getItem("users")) || []
    let i = 0
    while (i < savedData.length) {
        addRow(savedData[i])
        i++
    }
}

function addRow(data) {
    const tr = document.createElement("tr")
    let i = 0
    while (i < data.length) {
        const td = document.createElement("td")
        td.textContent = data[i]
        tr.appendChild(td)
        i++
    }
    table.appendChild(tr)
}

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const data = [
        form.firstname.value,
        form.lastname.value,
        form.age.value,
        form.personalNumber.value,
        form.height.value,
        form.email.value
    ];

    const savedData = JSON.parse(localStorage.getItem("users")) || []
    savedData.push(data)
    localStorage.setItem("users", JSON.stringify(savedData))

    addRow(data)
    form.reset()
});

loadData();
