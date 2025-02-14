// DAY 119
// 1) სტუდენტების სახელებისა და ქულების შენახვა Map-ში
// აღწერა: შექმენით ფუნქცია, რომელიც მიიღებს სტუდენტების სიას (სახელები და ქულები) და Map-ს დააბრუნებს, სადაც სტუდენტების სახელები იქნება გასაღები, ხოლო მათი ქულები მნიშვნელობები.

function createStudentMap(studentList) {
    let studentMap = new Map()

    for (let i = 0; i < studentList.length; i++) {
        let name = studentList[i][0]
        let score = studentList[i][1]
        studentMap.set(name, score)
    }

    return studentMap
}

console.log(createStudentMap([
    ["Alice", 85],
    ["Bob", 92],
    ["Charlie", 78]
]))

// დავალების ამოცანა:

// 3) დაწერეთ ფუნქცია, რომელიც მიიღებს სტუდენტების ქულების Map-ს, შექმნის მისი ასლს, თითოეული სტუდენტის ქულას გაზრდის 5 ქულით და ასლ Map-ს დააბრუნებს.

function increaseScores(map) {
    let arr = []
    for (let i = 0; i < map.size; i++) {
        let key = [...map.keys()][i]
        let value = map.get(key)
        arr.push([key, value])
    }

    let studentMapIncreased = new Map()

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i][0]
        let score = arr[i][1] + 5
        studentMapIncreased.set(name, score)
    }

    return studentMapIncreased
}

const students = new Map([
    ["Alice", 90],
    ["Bob", 85],
    ["Charlie", 95],
    ["David", 78],
    ["Eve", 88]
])

console.log(increaseScores(students))

// (✨◡✨)   წარმატებები! *:･ﾟ🌟

