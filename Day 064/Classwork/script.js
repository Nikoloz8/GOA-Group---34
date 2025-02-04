// 1) შექმენით საიტი სადაც გექნებათ ერთი ღილაკი. ამ ღილაკზე დაკლიკებისას მომხარებელს უნდა გამოიუტანოთ confirm box-ი. სადაც შეეკითხებით არის თუ არა ის ზრდასრული(18 წელს ზემოთ). თუ მომხარებელი დააჭერს OK-ს გამოუტანეთ ალერტ მესიჯი You are adult, სხვა შემთხვევაში გომუტანეთ, You are kid

function adultKid() {
    let bool = confirm("Are you over 18?")
    if (bool == true) {
        alert("You are adult!")
    } else {
        alert("You are kid!")
    }
}


// 2) შექმენით საიტი სადაც გექნებათ სარეგისტრაციო ფორმა. მომხარებელს უნდა შემოატანინოთ სახელი, ემაილი, პაროლი და გამოუტანოთ checkbox-ი. ფორმა არ დადასტურდეს იქამდე სანამ მომხარებელი არ მონიშნავს ჩექმბოქსს. შეამოწმეთ არის თუ არა ინფუთები ცარიელი. თუ კი გამოუტანეთ გამაფრთხილებელი მესიჯი და გათიშეთ ფუნქცია, ხოლო თუ მომხარებელმა ყველაფერი სწორად შეიყვანა გამოიტანეთ ინფუთების მნიშვნელობა კონსოლში



let myForm = document.getElementById("form")

function onClick(){
    
    let pass = myForm.pass.value

    let check = document.getElementById("check").checked

    let name = myForm.name.value
    
    let email = myForm.email.value
    
    if (check == true && pass.length > 0 && email.length > 0 && name.length > 0 ){
        console.log(name)
        console.log(email)
        console.log(pass)
    } else{
        alert("Fill all fields!")
    }

}

btn.onclick = onClick