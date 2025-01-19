// ახსენით რა განსხვაებაა ასოციაციურ მასივსა და ობიექტს შორის

// ასოციაციური მასივი იგივეა, რაც ობიექტი, უბრალოდ მას აქვს მასივის სინტაქსი. ობიექტი ბევრად მოხერხებული მონაცემთა სტრუქტურაა.

// შექმენით ასოციაციური მასივი და სცადეთ მასზე აქამდე ნასწავლი 3 მასივის მეთოდის გამოყენება

let person = []

person["firstName"] = "Nikoloz"
person["lastName"] = "Tevdoradze"
person["age"] = 16

person.push("Andria")
person.shift()
person.pop()

console.log(person)

// გამოიყენეთ ყველა შესწავლილი Math ობიექტის მეთოდი და გააკეთეთ თითო თითო მაგალითი, ასევე კომენტარების საშვალებით ახსენით თუ რას აკეთებს თითოეული

// Math.PI - returns math pi constant

console.log(Math.PI)

// Math.E - returns euler number constant

console.log(Math.E)

// Math.floor - rounds down float number to integer

console.log(Math.floor(5.6))

// Math.trunc - removes float part from number

console.log(Math.trunc(5.61232141))

// Math.round - rounds float number to closest integer

console.log(Math.round(5.51232141))

// Math.ceil - rounds up float number

console.log(Math.ceil(5.61232141))

// Math.pow - takes 2 values, first number to power and second the power, then powers number to certain value

console.log(Math.pow(2, 9))

// Math.random - generates random number between 0 and 1

console.log(Math.floor(Math.random() * 10))

// Math.abs - returns abosoulte postive part of number

console.log(Math.abs(-7))

// Math.sqrt - takes square root from number

console.log(Math.sqrt(16))


// შექმენით ჯეირანის თამაში, საიტზე აიღეთ 3 ღილაკი შესაბამისი არჩევანით: ქვა, ბადე, მაკრატელი. საიტზე მომხმარებელს უნდა შეეძლოს ჯეირანის წესების მქონე თამაში. გამოიყენეთ Math.random

const rockButton = document.getElementById('rock');        
const paperButton = document.getElementById('paper');       // ამ ნაწილში ვქმნი კონსტანტებს და მომაქვს ღილაკები, h2 ელემენტები html - დან
const scissorsButton = document.getElementById('scissors');  
const resultDiv = document.getElementById('result');

let playerScore = document.getElementById("player-scores")    
let computerScore = document.getElementById("computer-scores")        // აქ ვქმნი ცვლადებს, რომელშიც ვინახავ კომპიუტერისა და მოთამაშის ქულებს
const choices = ["ქვა", "მაკრატელი", "ფურცელი"]  // აქ ვინახავ კომპიუტერის მიერ შესაძლო არჩევანს

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);  
    return choices[randomIndex];   // აქ ვქმნი ფუნქციას, რომლის დახმარებითაც რენდომულად ვირჩევ ციფრს 0-2 და ვაბრუნებ მნიშვნელობას სიიდან იგივე ინდექსით.
}

function determineWinner(userChoice, computerChoice) {   // აქ ვქმნი ფუნქციას, სადაც ხდება მომხმარებლისა და კომპიუტერის არჩევნის შედარება და შესაბამისი შედეგის გამოტანა, ასევე მოთამაშისა და კომპიუტერის ქულების დათვლა.
    if (userChoice === computerChoice) {
        return "ფრე!";
    } else if (
        (userChoice === 'ქვა' && computerChoice === 'მაკრატელი') ||
        (userChoice === 'მაკრატელი' && computerChoice === 'ფურცელი') ||
        (userChoice === 'ფურცელი' && computerChoice === 'ქვა')
    ) { 
        let playerCurrentValue = Number(playerScore.textContent)
        playerCurrentValue += 1
        playerScore.textContent = playerCurrentValue
        return "შენ მოიგე!";
    
    } else {
        let computerCurrentValue = Number(computerScore.textContent)
        computerCurrentValue += 1
        computerScore.textContent = computerCurrentValue
        return "კომპიუტერმა მოიგო!";

    
    }
}

// ქვემოთ HTML დოკუმენტში მყოფი ღილაკები მომაქვს id ის დახმარებით და მათზე დაჭერისას ვქმნი ანონიმურ ფუნქციას, რომელიც უკვე ემსახურება შედეგების გამოტანას. 

rockButton.onclick = function() {
    const userChoice = 'ქვა';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultDiv.textContent = `შენ აირჩიე ქვა. კომპიუტერმა აირჩია ${computerChoice}. ${result}`;
};

paperButton.onclick = function() {
    const userChoice = 'ფურცელი';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultDiv.textContent = `შენ აირჩიე ფურცელი. კომპიუტერმა აირჩია  ${computerChoice}. ${result}`;
};

scissorsButton.onclick = function() {
    const userChoice = 'მაკრატელი';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultDiv.textContent = `შენ აირჩიე მაკრატელი. კომპიუტერმა აირჩია  ${computerChoice}. ${result}`;
};