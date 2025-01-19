
// შექმენით div ბლოკი და javascript-ისა innerHTML ატრიბუტის საშვალებით დაამატეთ რამდენიმე პარაგრაფი (მინიმუმ 3), 2 ღილაკი და სხვა თქვენთვის სასურველი ელემენტები

let myDiv = document.querySelector(".p-block")

myDiv.innerHTML += `
    <p>Hello World</p>
    <p>Hello World</p>
    <p>Hello World</p>
    <button>Click me</button>
    <button>Click me</button>
    <button>Click me</button>
`

// შექმენით დაულაგებელი სია პროგრამირების ენების შესახებ და ნასწავლი მეთოდების: document.createElement() და document.appendChild() საშვალებით ჩაამატეთ სიის ელემენტები, რომლებშიც ეწერება სხვადასხვა პროგრამირების ენის სახელი

const container = document.querySelector('.language-container');

const ul = document.createElement('ul');

const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'PHP'];

for (let i = 0; i < languages.length; i++) {
    const li = document.createElement('li');
    li.textContent = languages[i];
    ul.appendChild(li); // 
}
container.appendChild(ul);

// შექმენით ფორმა რომელშიც მომხმარებელს შემოატანინებთ სახელს, გვარსა და ემაილს. შემდეგ ეს მონაცემები დაამატეთ ცხრილში ნასწავლი მეთოდების საშვალებით, ასევე დაამატეთ წაშლის ფუნქცია ცხრილში ელემენტზე დაჭერისას

let body = document.querySelector("body")

let form = document.createElement("form")

let textInput1 = document.createElement("input")

textInput1.type = "text"

let textInput2 = document.createElement("input")

textInput2.type = "text"

let textInput3 = document.createElement("input")

textInput3.type = "text"


let br1 = document.createElement("br")
let br2 = document.createElement("br")

body.appendChild(form)



form.appendChild(textInput1)

textInput1.placeholder = "Enter Email"

form.appendChild(br1)
form.appendChild(textInput2)

textInput2.placeholder = "Enter Password"

form.appendChild(br2)
form.appendChild(textInput3)

textInput3.placeholder = "Enter Name"

let moveToTableBtn = document.createElement("button")

body.appendChild(moveToTableBtn)

let table = document.createElement("table")

body.append(table)


let tr1 = document.createElement("tr")
let tr2 = document.createElement("tr")
let tr3 = document.createElement("tr")

table.appendChild(tr1)
table.appendChild(tr2)
table.appendChild(tr3)

let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")

tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)

th1.textContent = "Email"
th2.textContent = "Password"
th3.textContent = "Name"

let td1 = document.createElement("td")
let td2 = document.createElement("td")
let td3 = document.createElement("td")
let td4 = document.createElement("td")
let td5 = document.createElement("td")
let td6 = document.createElement("td")

tr2.appendChild(td1)
tr2.appendChild(td2)
tr2.appendChild(td3)

tr3.appendChild(td4)
tr3.appendChild(td5)
tr3.appendChild(td6)


moveToTableBtn.textContent = "Click me to move that information in table"


moveToTableBtn.onclick = function(){
    td1.textContent = textInput1.value
    td2.textContent = textInput2.value
    td3.textContent = textInput3.value

}

td1.style.border = "1px solid black"
td2.style.border = "1px solid black"
td3.style.border = "1px solid black"
td4.style.border = "1px solid black"
td5.style.border = "1px solid black"
td6.style.border = "1px solid black"


td1.style.padding = "10px"
td2.style.padding = "10px"
td3.style.padding = "10px"

th1.style.padding = "10px"
th2.style.padding = "10px"
th3.style.padding = "10px"



th1.style.border = "1px solid black"
th2.style.border = "1px solid black"
th3.style.border = "1px solid black"

let deleteBtn = document.createElement("button")

body.appendChild(deleteBtn)

deleteBtn.textContent = "Clear table"

deleteBtn.onclick = function(){
    td1.textContent = ""
    td2.textContent = ""
    td3.textContent = ""
}


console.log(body)


