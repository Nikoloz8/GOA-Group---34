// 1) შექმენით ობიექტი სადაც ჩაწერთ თვქენი საყვარელი პერსონაჟის მონაცემებს, დაამატეთ მინიმუმ 5 კუთვნილება თავიდანვე, შემდეგ დაბეჭდეთ ხუთივე კუთვნილება ცალ-ცალკე, შემდეგ შეცვალეთ რომელიმე ორი კუთვნილება და დაბეჭდეთ თავიდან ბოლომდე ობიექტი, საბოლოოდ დაამატეთ ერთი კუთვნილება და წაშალეთ რომელიმე ძველი კუთვნილება, კომენტარებით აუცილებლად ახზსენით თუ რას ნიშნავს ობიექტი, რაში გამოიყენება, რატომ არის მაგარი, რა არის კუთვნილება და რას ნიშნევას წერტილის ნოტაცია


const myFavoriteActor = {
    firstName : "Dean",
    lastName : "Winchester",
    car : "Chevrolet Impala",
    height : "185cm",
    age : 37
}

console.log(myFavoriteActor.firstName)
console.log(myFavoriteActor.lastName)
console.log(myFavoriteActor.car)
console.log(myFavoriteActor.height)
console.log(myFavoriteActor.age)

myFavoriteActor.firstName = "Bob"
myFavoriteActor.lastName = "Singer"

console.log(myFavoriteActor)

myFavoriteActor.brother = "Seam Winchester"

delete myFavoriteActor.height

console.log(myFavoriteActor)

// ზოგადად ობიექტი არის ყველაფერი ის, რასაც ვეხებით და რასაც გააჩნია კუთვნიილება. ჯავასკრიპტში ობიექტები გამოყენება კუთვნილებების/ინფორმაციის დალაგებულად, დახარისხებულად შესანახად (ზუსტად ეს ხდის მას მაგარს და გამორჩეულს ჩვეულებრივი სიისგან), კუთვნილება არის ყველაფერი ის, რაც ამ ობიექტს ახასიათებს. წერტილის ნოტაციას კი ვიყენებთ იმისთვის, რომ ობიექტებიდან შევძლოთ კონკრეტული კუთვნილების/ელემენტის ამორჩევა სხვადასხვა ოპერაციების შესასრულებლად.

