// 2) ID ები class ები და მათზე ვარჯიში 

// >შეცვაკლეთ ტექსტის შიგტავსი js-ის გამოყენებით და ღილაკზე დაჭერისას console.log -ში გამოიტანეთ

let textChange = document.getElementById("textChange")

let Console = document.getElementById("console")

textChange.textContent = "This is a paragraph"

Console.onclick = function(){
    console.log(textChange.textContent)
}

// >შექმენით div ბლოკი და ჩაწერეთ შიგნით ტექსტი, შემდეგ js ის ფაილის გამოყენებით შეაბრუნეთ მათი ფერები, ანუ div ბლოკის ფერი მიანიჭეთ ტექსტს და ტექსტის ფერი დივ ბლოკს

let textcontainer = document.getElementById("textContainer")

let text = document.getElementById("text")

let textContainerColor = textcontainer.style.color

let textColor = text.style.color

text.style.color = textContainerColor

textcontainer.style.color = textColor

// >ID ის ელემენტისთვის გაწერით, ღილაკზე დაკლიკვისას გაქრეთ ეს ელემენტი ეკრანიდან (გამოიყენეთ სტილი display: none

let disappearText = document.getElementById("disappearText")

let disappearbtn = document.getElementById("disappear")

disappearbtn.onclick = function(){
    disappearText.style.display = "none"
}

// >გაუწერეთ სამ ელემენტს ერთი და იგივე კლასი და ღილაკზე დაჭერისას შეუცვალეთ მათ ფონტი

let fontChange = document.querySelectorAll(".fontChange"); 
let fontChangeBtn = document.getElementById("fontChangeBtn");

fontChangeBtn.onclick = function(){
    fontChange.forEach(function(element) {
        element.style.fontFamily = "cursive";  
    });
};

// 3)ტექსტების მანიპულირება

// >შექმენით ღილაკი რომელზე დაჭერაც პარაგრაპს უცვლის შიგთავსს

// ეს ზემოთ უკვე გავაკეთე

// >გამოიყენეთ img tag ი და ღილაკზე დაჭერისას შეუცვალეთ ლინკი 

let photoChangeBtn = document.getElementById("photoChange")

let photo = document.getElementById("photo")

photoChangeBtn.onclick = function(){
    photo.src = "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
}

// >შექმენით input ველი ID ით და ღილაკი. როდესაც დააჭერთ ღილაკს, input ველში შეყვანილი ტექსტი გამოაჩინეთ პარაგრაფში.

let appearText = document.getElementById("appearText")

let textInput = document.getElementById("textInput")

let inputText = document.getElementById("inputText")

appearText.onclick = function(){
    inputText.textContent = textInput.value
}
