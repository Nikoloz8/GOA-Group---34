// 1) შექმენით პროგრამა რომელიც საშუალებას მოგვცემს დავიყოთ ჯგუფებად.


function split(list) {
    let arr = []

    for (let i = 0; i < 99; i++) {
        let group = []

        while (group.length < 3 && list.length > 0) {
            let randomIndex = Math.floor(Math.random() * list.length)
            if (!group.includes(list[randomIndex])) {
                group.push(list[randomIndex])
                list.splice(randomIndex, 1)
            }
        }

        if (group.length === 3) {
            arr.push(group)
        }
    }

    return arr
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(split(list))


// 2) შექმენით კარტის კლასი, პინის ფულის და 'თქვენ შესახებ ფაქტების' ფროფერთიები, დაამატეთ შესაბამისი მეთოდები

class Card {
    constructor(pin, facts) {
        this.pin = pin
        this.facts = facts
    }

    get PinMoney() {
        return this.pin
    }

    set PinMoney(newPinMoney) {
        if (newPinMoney > 0) {
            this.pin = newPinMoney
        } else {
            console.log("Money can't be negative!")
        }
    }

    get Facts() {
        return this.facts
    }

    set fact(newFacts) {
        this.facts = newFacts
    }

    getCardInfo() {
        return `PIN Money: ${this.pin} \n Facts about you: ${this.facts}`
    }

}



let myCard = new Card(500, "I love programming!")
console.log(myCard.getCardInfo())

myCard.pin = 1000;
console.log(myCard.pin)

myCard.facts = "I enjoy solving coding challenges."
console.log(myCard.facts)






console.log(myCard.getCardInfo())