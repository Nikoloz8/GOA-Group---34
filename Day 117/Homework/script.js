// 1) შექმენით მათემატიკის დამხმარე კლასი, ფროფერთიებით ( მაგ: Pi ) და მეთოდებით ( მაგ: ხარისხში აყვანა )

class MathHelper {

    constructor() {
      this.Pi = 3.14159
      this.E = 2.71828
    }
  
    power(base, exponent) {
      return Math.pow(base, exponent)
    }  

    squareRoot(number) {
      return Math.sqrt(number)
    }
  
    perimeter(radius) {
      return 2 * this.Pi * radius
    }
  }
  
  const mathHelper = new MathHelper()

// 2) შექმენით რენდომ დამხმარე კლასი, ფროფერთიებით ( მაგ: CHAR_SET ) და მეთოდები ( მაგ: რენდომ ასო )

class RandomHelper {

  constructor() {
    this.CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  }

  randomChar() {
    const randomIndex = Math.floor(Math.random() * this.CHAR_SET.length)
    return this.CHAR_SET[randomIndex]
  }

  randomString(length) {
    let result = ''
    for (let i = 0; i < length; i++) {
      result += this.randomChar()
    }
    return result
  }
}

const randomHelper = new RandomHelper()
console.log("Random character:", randomHelper.randomChar())
console.log("Random string of 8 characters:", randomHelper.randomString(131))

// 3) შექმენით დროის დამხმარე კლასი, ფროფერთიებით ( მაგ: CREATION_TIME ) და მეთოდები ( მაგ: მილიწამების გადაყვანა წასაკითხ დროსი ფორმატში )
// (╯✧∇✧)╯ წარმატებები! *:･ﾟ🌟


class TimeHelper {

  constructor() {
    this.CREATION_TIME = Date.now();  
  }

  convertToReadableFormat(milliseconds) {
    const date = new Date(milliseconds);
    return date.toLocaleString();  
  }
}

const timeHelper = new TimeHelper();

console.log("CREATION_TIME (milliseconds):", timeHelper.CREATION_TIME);
console.log("Readable format of creation time:", timeHelper.convertToReadableFormat(timeHelper.CREATION_TIME));
