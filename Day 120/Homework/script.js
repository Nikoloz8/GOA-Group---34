// ქვნენაკრების შემოწმება
// დაწერე ფუნქცია, რომელიც შეამოწმებს, არის თუ არა ერთი ნაკრები მეორის ქვნენაკრები.
// მაგალითი:
// არისქვნენაკრები(new Set([1, 2]), new Set([1, 2, 3])); 
// // შედეგი: true 

function qvenakrebi(set1, set2) {

    if (set1.size > set2.size) {
        return qvenakrebi(set2, set1)
    }

    for (let elem of set1) {
        if (!set2.has(elem)) {
            return false
        }
    }

    return true
}




console.log(qvenakrebi(new Set([1, 2, 3, 4]), new Set([1, 2, 3])))
console.log(qvenakrebi(new Set([1, 2, 4, 8, 1]), new Set([1, 2, 3])))
console.log(qvenakrebi(new Set([1, 2, 3]), new Set([1, 2, 3])))
console.log(qvenakrebi(new Set(), new Set([1, 2, 3])))
console.log(qvenakrebi(new Set([1, 2, 3]), new Set([1, 2])))
console.log(qvenakrebi(new Set([5]), new Set([1, 2, 3, 4, 5])))
console.log(qvenakrebi(new Set([6]), new Set([1, 2, 3, 4, 5])))
console.log(qvenakrebi(new Set([1, 2, 3]), new Set([3, 2, 1, 4])))



// რუკის ინვერტირება
// დაწერე ფუნქცია, რომელიც გასაღებებს და მნიშვნელობებს შეცვლის ადგილმონაცვლეობით რუკაში. თუ მნიშვნელობები მეორდება, დაიტოვე ბოლო გასაღები.
// მაგალითი:
// ინვერტირებულრუკა(new Map([['a', 1], ['b', 2], ['c', 1]])); 
// შედეგი: Map {1 => 'c', 2 => 'b'}

let test = new Map([['a', 1], ['b', 2], ['c', 1]])

console.log(test)

function change(map) {
    newMap = new Map()

    array = []

    for (let i of map) {
        array.push(i)
    }
    for (let i = 0; i < array.length; i++) {
        newMap.set(array[i][1], array[i][0])
    }

    return newMap
}

console.log(change(test))


// მაქსიმალური მნიშვნელობის გასაღებების პოვნა
// დაწერე ფუნქცია, რომელიც იპოვის ყველა გასაღებს რუკაში, რომელთაც აქვთ მაქსიმალური მნიშვნელობა.
// მაგალითი:
// მაქსიმალურისგასაღებები(new Map([['a', 5], ['b', 3], ['c', 5]])); 
// // შედეგი: ['a', 'c']

function maximums(map) {
    newMap = new Map()

    array = []

    for (let i of map) {
        array.push(i)
    }

    result = []

    maximum = array[0][1]
    for (let i = 0; i < array.length; i++) {

        if (array[i][1] > maximum) {
            maximum = array[i][1]
        }

    }

    for (let i = 0; i < array.length; i++) {
        if (array[i][1] === maximum) {
            result.push(array[i][0])
        }
    }


    return result
}

console.log(maximums(new Map([['a', 5], ['b', 3], ['c', 5]])));  // ['a', 'c']
console.log(maximums(new Map([['x', 10], ['y', 5], ['z', 7]])));  // ['x']
console.log(maximums(new Map([['apple', 3], ['banana', 3], ['cherry', 3]])));  // ['apple', 'banana', 'cherry']
console.log(maximums(new Map([['a', -1], ['b', -5], ['c', -1]])));  // ['a', 'c']
console.log(maximums(new Map([['first', 100], ['second', 200], ['third', 50]])));  // ['second']
console.log(maximums(new Map([['a', 100], ['b', 100], ['c', 100], ['d', 99]])));  // ['a', 'b', 'c']
console.log(maximums(new Map([['a', 0], ['b', 0], ['c', 0]])));  // ['a', 'b', 'c']

