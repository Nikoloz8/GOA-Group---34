// day 63 

// 1) შექმენით ფუნქცია სახელად filter, რომელსაც ექნება ერთი პარამეტრი სახელად numberArr, ამ პარამეტრს უნდა გადაეცემოდეს მასივი (იგივე სია), თვქენი დავალებაა გაფილტროთ მიღებული სია, ფუნქციაში შექმენით ერთი მასივი სახელად evenNUmbers გადაურეთ პარამეტრში ჩასმუილ მასივს for ციკლით და ყველა ლუწი რიცხვი დაამატეთ evenNumbers მასივში, საბოლოოდ კი დააბრუნეთ მასივი როდესაც მორჩება for ციკლის მუშაობა (evenNumbers მასივი სადაც იქნება მოცემული მხოლოდ ლუწი რიცხვები)

function filter(numberArr){
    let evenNumbers = []
    for (i = numberArr.length; i >= 0; i--){
        if (numberArr[i] % 2 === 0){
            evenNumbers.push(numberArr[i])
        }
    }

    return evenNumbers
}

// console.log(filter([5, 3, 2, 1, 9, 4, 7, 20, 28]))