// 3) გააკეთეთ თითოეულ ნასწავლ მეთოდზე (.createElement, .appendChild(node), .insertBefore, .removeChild(node), .parentNode, .replaceChild) მაგალითი, ახსენით თითოეულის მუშაობა კომენტარებით

//createelement

let p1 = document.createElement("p") //ქმნის ახალ ელემენტს

// appendchild

let body = document.querySelector("body") 

p1.textContent = "This is a paragraph1"

body.appendChild(p1) //ამატებს ახალ ელემენტს

//insertbefore

let p2 = document.createElement("p")

p2.textContent = "This is a paragraph2"

body.appendChild(p2)

body.insertBefore(p2, p1) //უცვლის ადგილებს ელემენტებს

// removechild

body.removeChild(p1) //შლის ელემენტებს

// parentnode


let bodyInfo = body.parentNode //იღებს ინფორმაციას მშობელ ელემენტზე

console.log(bodyInfo)


//replacechild 

body.replaceChild(p1, p2) //ანაცვლებს ელემენტებს
