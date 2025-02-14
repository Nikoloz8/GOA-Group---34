// Set-ების დავალებები
// ნაკრებების გაერთიანება
// დაწერე ფუნქცია, რომელიც მიიღებს ნაკრებების მასივს და დააბრუნებს მათ გაერთიანებას.
// მაგალითი:
// ნაკრებებისგაერთიანება([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]); 
// // შედეგი: Set {1, 2, 3, 4}

function union(sets) {
    let seter = new Set()
    for (let i = 0; i < sets.length; i++) {
        for (let j of sets[i]) {
            seter.add(j)
        }
    }

    return seter
}

let result1 = union([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])])
console.log(result1)

// 3)
// შექმენი ფუნქცია, რომელიც იპოვის ორ ნაკრებებს შორის სიმეტრიულ სხვაობას (ელემენტები, რომლებიც ერთ-ერთშია, მაგრამ არა ორივეში).
// მაგალითი:
// სიმეტრიულისხვაობა(new Set([1, 2, 3]), new Set([3, 4, 5]));
// // შედეგი: Set {1, 2, 4, 5}

function symetricalDiff(sets) {
    let seter = new Set()
    let list = []

    for (let i = 0; i < sets.length; i++) {
        for (let j of sets[i]) {
            list.push(j)
        }
    }

    function count(sia, elementi) {
        counter = 0
        for (let i = 0; i < sia.length; i++) {
            if (sia[i] == elementi) {
                counter++
            }
        }

        return counter
    }

    for (let i = 0; i < list.length; i++) {
        if (count(list, list[i]) == 1) {
            seter.add(list[i])
        }
    }

    return seter
}

let result2 = symetricalDiff([new Set([1, 2, 3]), new Set([3, 4, 5])])
console.log(result2)


// 4) სიმბოლოების სიხშირე
// დაწერე ფუნქცია, რომელიც მიიღებს სტრინგს და დააბრუნებს რუკას, სადაც გასაღებები სიმბოლოებია, ხოლო მნიშვნელობები – მათი სიხშირეები.
// მაგალითი:
// სიმბოლოსიხშირე("hello"); 
// // შედეგი: Map {'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1}

function letterMap(string) {
    let map = new Map()

    function count(sia, elementi) {
        counter = 0
        for (let i = 0; i < sia.length; i++) {
            if (sia[i] == elementi) {
                counter++
            }
        }
        return counter
    }

    for (let i = 0; i < string.length; i++) {
        let key = string[i]
        let value = count(string, string[i])
            map.set(key, value)
    }

    return map
}

let result3 = letterMap("hello");
console.log(result3)