// საკლასო დავალება: html-ში შექმენით 3 პარაგრაფი და თითოეულს მიანიჭეთ id. 
// სამივე წამოიღეთ js-ში, თითოეულს შეუცვალეთ ფერი, ფონის ფერი, ტექსტი და ზომა



const p1 = document.getElementById("p1")

const p2 = document.getElementById("p2")

const p3 = document.getElementById("p3")

p1.style.color = "red"
p1.style.backgroundColor = "blue"
p1.textContent = 'Lorem'
p1.style.fontSize = "50px"

p2.style.color = "green"
p2.style.backgroundColor = "black"
p2.textContent = "Ipsum"
p2.style.fontSize = "20px"


p3.style.color = "blue"
p3.style.backgroundColor = "red"
p3.textContent = "Dolor"
p3.style.fontSize = "80px"


