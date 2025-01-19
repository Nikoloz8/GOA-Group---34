// # 5) გავაკეთოთ ფუნქცია რომელიც გადაცემული ID-ს მიხედვით აბრუნებს html-ის ელემენტს (მაგ: "first" -> document.getElementbyId("first")) შემდეგ კი გამოიყენეთ ეს ფუნქცია რომ დაბრუნბულ ელემენტს 3 ატრიბუტი შევუცვალოთ (მაგ: color, backgroundColor, textContent) (ჩვეულებრიივი ფუნქცია)
// // # WARNING!! ⚠️ (გამოვიყნოთ შესაბამისი სახელები და დავიცვათ ჯავასკრიპტის 'camel-case'  სტრუქტურა, ასევე ძალიან გთხოვთ გამოიყენეთ external ჯავასკრიპტი, ანუ ჯავასკრიპტის კოდი ცალკე ფაილში დაწერეთ)

function getElement(id){
    return document.getElementById(id)
}   

getElement(1).style.width = "100px"
getElement(2).style.width = "300px"
getElement(3).style.width = "600px"

getElement(1).style.height = "200px"
getElement(2).style.height = "500px"
getElement(3).style.height = "300px"

getElement(1).style.background = "black"
getElement(2).style.background = "red"
getElement(3).style.background = "pink"



