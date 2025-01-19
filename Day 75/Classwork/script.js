// 1) შექმენით ფორმა და ცხრილი, ფორმაში იქონიეთ 4 შესატანი ველი, მომხმარებლმა უნდა შემოიტანოს სახელი, იმეილი, პაროლი და ფბ ლინკი, როდესაც ფორმა დადასტურდება როგორც იცით გვერდი ავტომატურად დარეფრეშდება, გათიშეთ ეს ქმედება preventDefault() მეთოდის დახმარებით, დადასტურების შემდეგ წამოიღეთ შემოტანილი მნიშვნელობები ინფუთებიდან name ატრიბუტის დახმარებით, ყოველ დადასტურებაზე ცხრილში შექმენით ახალი რიგი და დაამატეთ ეს მნიშვნელობები, რომელიც გამოჩნდება გვერდზე

const form = document.querySelector(".form1")

const firstName = form.firstname

const email = form.email

const pass = form.pass

const fbLink = form.fblink

const table = document.querySelector("table")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const firstName = form.firstname.value

    const email = form.email.value

    const pass = form.pass.value

    const fbLink = form.fblink.value

    const data = [firstName, email, pass, fbLink]

    const tr = document.createElement("tr")

    for (let i = 0; i < data.length; i++) {
        const td = document.createElement("td")
        td.textContent = data[i]
        tr.appendChild(td)
    }

    form.firstname.value = ""
    form.email.value = ""
    form.pass.value = ""
    form.fblink.value = ""

    table.appendChild(tr)
}
)

// 2) შექმენით პროექტი სახელწოდებით todolist, გექნებათ ერთი ფორმა და ერთი დალაგებული სია, როდესაც ფორმა დადასტურდება წამოიღეთ დასამატებელი  მნიშნელობა და შექმენით ახალი li თეგი რომელსაც მიანეჭბთ დადასტურებულ მნიშვნელობას, ახალ უნიკალურ id_ს და მოვლენის მსმენელს რომელიც მოუსმენს დაკლიკების მოვლენას, როცა დაკლიკება მოხდება უნდა წაიშალოს კონკრეტულად ის ელემენტი რომელზეც მოხდა მოვლენა

const form1 = document.querySelector(".form2")

const ol = document.querySelector("ol")

const todo = form1.todo

let counter = 0

function deleteItem(id) {
    const item = document.getElementById(id)
    ol.removeChild(item)
}

form1.addEventListener("submit", function (e) {
    e.preventDefault()
    
    if (todo.value != "") {
       
        const li = document.createElement("li")
       
        li.textContent = todo.value
       
        li.id = counter
       
        li.onclick = function () {
            deleteItem(li.id)
        }
       
        todo.value = ""

        ol.appendChild(li)

        counter++
    }
})
