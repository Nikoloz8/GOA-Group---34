 
// Easy
// დავალება NUM 1: შექმენი ფუნქცია, რომელიც მიიღებს რიცხვს და პირობით შეამოწმებს, არის თუ არა ის კენტი ან ლუწი.

function oddEven(n){
    if (n % 2 == 0){
        return "Even"
    } else{
        return "Odd"
    }
}

// დავალება NUM 2: შექმენი პირობა, რომელიც შეამოწმებს, არის თუ არა სია ცარიელი და თუ არა, იპოვოს რიცხვების ჯამი.

function sumOfNumbersInList(list = []){
    sum = 0
    if (!list){
        return "List is empty"
    } else{
        for (let i = 0; i < list.length; i++){
            sum += list[i]
        }
    }
    return sum
}

// console.log(sumOfNumbersInList([1, 3, 7]))

// დავალება NUM 3: შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას, გაამრავლებს ყველა რიცხვს 3-ზე და დაიბრუნებს მხოლოდ იმ რიცხვებს, რომლებიც 20-ზე მეტია.

function mult3(list){
    let plusTwenty = []
    
    for (let i = 0; i < list.length; i++){
        if ((list[i] * 3) > 20){
            plusTwenty.push(list[i] * 3)
        }
    } 

    return plusTwenty

}

console.log(mult3([5, 3, 1, 7, 9, 2]))

// Medium
// დავალება NUM 4: შექმენი პირობა, რომელიც შეამოწმებს სიაში უდიდეს რიცხვს და დააბრუნებს მას.

function biggest(list){
    cvladi = 0
    for (let i = 0; i < list.length; i++){
        if(list[i] > cvladi){
            cvladi = list[i]
        }
    }
    return cvladi
}

console.log(biggest([1, 5, 25, 2, 9, 4, 11]))

// დავალება NUM 5: დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და პირობით შეამოწმებს, თუ მათი ნამრავლი 100-ზე მეტია.

function bigThanHundred(a, b){
    return (a * b) > 100
}

console.log(bigThanHundred(2, 9))

// Chad
// დავალება NUM 6: შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და შეამოწმებს, თუ ტექსტის პირველ და ბოლო ასოები ერთნაირია.

function text(string){
    return string[0] == string[string.length - 1]
}

console.log(text("aba"))

// დავალება NUM 7: შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და დააბრუნებს თითოეული ასოს სიხშირეს, ანუ რამდენჯერ გვხვდება თითოეული ასო ტექსტში.

function ratio(text){
    let obj = {

    }

    for (let i = 0; i < text.length; i++) {
        let char = text[i];  
        

        if (obj[char]) {
           
            obj[char] += 1; 
        
        } else {
           
            obj[char] = 1;  
        
        }

    }

    return obj
}

console.log(ratio("iyo da ara iyo ra gvtis uketesi ra iqneboda"))

// Giga chad
// დავალება NUM 8: შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და შეამოწმებს, არის თუ არა ის პალინდრომი (ტექსტი, რომელიც წაკითხვისას ერთნაირად ჩანს როგორც წინ და უკან, მაგალითად: "level").

function isItPalindrome(string){
    let reversedString = ""
    for (let i = string.length - 1; i > -1; i--){
        reversedString += string[i]
    }
    return reversedString === string
}

console.log(isItPalindrome("aba"))