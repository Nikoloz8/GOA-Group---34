// 5) შევქმნათ ფუნქცია რომელსაც გადაეცემა მასივი და აბრუნებს ამ მასივის ელემეტების ჯამს

function sumOfElements(list) {
    sum = 0
    for (let i = 0; i < list.length; i++) {
        sum += list[i]
    }
    return sum
}

// console.log(sumOfElements([1, 3, 5]))
// 6) შევქმნათ ფუნქცია რომელსაც გადაეცემა ობიექტების მასივი და აბრუნებს მასივს ამ ობიექტების name- propetry-ით

function extractNames(objects) {
    let names = [];
    for (let i = 0; i < objects.length; i++) {
        names.push(objects[i].name);
    }
    return names;
}

const objectsArray = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

console.log(extractNames(objectsArray)); //

// 7) შევქმნათ ობიექტი და გავუწეროთ მას 3 მეთოდი და 3 ფროფერთი 

const methodProperty = {
    firstName: "Sophia",
    lastName: "Gorgadze",
    age: 27,
    log: function () {
        console.log(this.firstName, this.lastName, this.age)
    },

    greet: function () {
        console.log("Hello " + this.firstName)
    },

    bye: function () {
        console.log("Bye " + this.firstName)
    }
}

// methodProperty.log()

// methodProperty.greet()

// methodProperty.bye()

// 8) შევქმნათ ფუნქცია რომელსაც გადაეცემა დიდი ტექსტი ან წინადადება (სტრინგი) და უნდა დააბრუნოს ყველაზე დიდი და ყველაზე პატარა ნაპოვნი სიტყვა (მასივის ფორმატში) ( [ ყველაზე პატარა, ყველაზე დიდი ] )

function string(str) {
    let words = str.split(" ");
    let minWord = words[0];
    let maxWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < minWord.length) {
            minWord = words[i];
        }
        if (words[i].length > maxWord.length) {
            maxWord = words[i];
        }
    }
    return [minWord, maxWord];
}

console.log(string("iyo da ara iyo ra gvtis uketesi ra iqneboda")); 
