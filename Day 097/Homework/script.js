// დავალება: შექმენით სია (array), რომელიც შეიცავს წერილებს. თითოეული ელ.ფოსტა არის ობიექტი, სადაც არის: თემა, შიგთავსი, გამგზავნი. გამოიყენეთ for...of ციკლი, რათა შერჩიოთ მხოლოდ ის წერილები, რომლებიც მოცემული თემით იწყება. შედეგი უნდა გამოჩნდეს HTML გვერდზე. ( HTML-ს უნდა ჰქონდეს ორი ნაწილი, ელ ფოსტების გამოსატანი და შესატანი ).
// მონაცემების სტრუქტურის ფორმატი (მაგალითი):
// const emails = [
//   { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
//   { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
//   { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
//   { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" }
// ];

// მოთხოვნა:
// გამოიყენეთ for...of, რათა ჩამოთვალოთ მხოლოდ ის წერილები, რომლებიც სათაურით იწყება სიტყვით "მოგზაურობა", 'მოხსენება' ან 'გაცნობიერება' (ამის ფილტრაცია უნდა შეეძლოს მომხმარებელს ჩექბოქსით, დროპდაუნით ან ნებისმიერი სხვა user input-ით ).
// შედეგი უნდა გამოჩნდეს HTML გვერდზე.
// შექმენით ელემენტი <ul> და თითოეული წერილი გამოიტანეთ როგორც <li>.

let emails = [
    { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
    { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
    { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
    { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" }
];

let emailList = document.getElementById("emailList")

function displayEmails(selectedSubject) {
    emailList.innerHTML = ""
    for (let email of emails) {
        if (selectedSubject === "" || email.subject === selectedSubject) {
            let li = document.createElement("li");
            li.textContent = email.subject + ": " + email.content + " (" + email.receivedDate + ")"
            emailList.appendChild(li)
        }
    }
}

let filter = document.getElementById("filter")

filter.onchange = function () {
    displayEmails(filter.value)
}

displayEmails("") 
