// დავალება: მომხმარებელს შემოატანინეთ თავისი ასაკი, თუ მომხმარებელი იყო 18 წლზე პატარა დაუპრინტეთ შენ არასულწლოვანი ხარ, ხოლო სხვაშემთხვევაში შენ სულწლოვანი ხარ


let age = Number(prompt("Enter your age: "))

if (age >= 18){
    alert("Your are adult!")
} else{
    alert(`You will be adult in ${18 - age} Year`)
}



// დავალება: for-ლუპის დახმარებით ჩაწერეთ ლისტში 1-დან 30-მდე რიცხვები, და შემდეგ შექმენით ახალი ლისტი სადაც ჩაწერთ იმ ლისტში მყოფ რიცხვებიდან მარტო ლუწ რიცხვებს

let list = []
for(i = 1; i < 30; i++){
    list.push(i)
}

let evenList = []

for(i = 1; i < list.length; i++){
    if (list[i] % 2 == 0){
        evenList.push(list[i])
    }
}

console.log(evenList)

// 1) შექმენით კონსტრუქტორი, რომელსაც ექნება 5 პარამტერი, ამ კონსტრუქტორის დახმარებით შექმენით 5 სხვადასხვა ობიექტი, კომენტარებით ახსენით რა არის კონსტრუქტორი და რას აკეთებს new კეივორდი. (კომენტარები აუცილებელია)

function Person(name, age, city, job, hobby) {
    // აქ, კონსტრუქტორის შიგნით, პარამეტრები განსაზღვრავენ ობიექტის თვისებებს.
    this.name = name;
    this.age = age;
    this.city = city;
    this.job = job;
    this.hobby = hobby;
}

let person = new Person("Nikoloz", 16, "Kutaisi", "Usaqmuri", "Programireba")

console.log(person)