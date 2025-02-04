// 3) html-ში აიღეთ ერთი პარაგრაფი, მას გაუწერეთ ტექსტი და id. js-ში წამოიღეთ ეს ელემენტი Id-ის გამოყენებით და ცვლადში შეინახეთ მისი textcontent. საბოლოოდ alert box-ში გამოიტანეთ ცვლადის მნიშვნელობა

let paragraph1 = document.getElementById("paragraph1").textContent

console.log(paragraph1)


// 4) html-ში შექმენით პარაგრაფი და პირდაპირ inline css-ით გაუწერეთ ფერი, ფონის ფერი, ფონტის სისქე და ფონტის ზომა. ეს ელემენტი js-ში წამოიღეთ id-ის გამოყენებით და შეინახეთ ცვლადში.
// შემდეგ შექმენით ობიექტი, რომელსაც ექნება 4 კუთვნილება: "color", "bg-color", "font-weight", "font-size" და თითოეულს მიანიჭეთ ამ ელემენტის შესაბამისი დიზაინი.

// hint: მაგალითად ფერის მისანიჭებლად უნდა დაუწეროთ შემდეგი მნიშვნელობა - document.getElementById("ელემენტის id").style.color


let paragraph2 = document.getElementById("paragraph2")

let styleObj = {
    color : paragraph2.style.color,
    bgColor : paragraph2.style.backgroundColor,
    fontWeight : paragraph2.style.fontWeight,
    fontSize : paragraph2.style.fontSize
}

console.log(styleObj)