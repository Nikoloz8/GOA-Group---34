// თერმომეტრი
// შექმენი ობიექტი, რომელიც ინახავს ტემპერატურას ცელსიუსში, მაგრამ როდესაც იღებ მას (getter), აბრუნებს ფარენჰეიტში გადაყვანილ მნიშვნელობას. setter უნდა იღებდეს მხოლოდ ცელსიუსში მნიშვნელობას.

let temperature = {
    celsiusVal: 0,

    get fahrenheit() {
        return (this.celsiusVal * 9 / 5) + 32
    },

    set celsius(value1) {
        this.celsiusVal = value
    }
}

temperature.celsiusVal = 999
console.log(temperature.fahrenheit)

// სტუდენტის შეფასება
// შექმენი ობიექტი, სადაც setter იღებს სტუდენტის ქულას (0-დან 100-მდე) და getter აბრუნებს შეფასებას (A, B, C, D, F).

let score = {
    scoreVal: 0,

    get Eval() {
        if (90 <= this.scoreVal && this.scoreVal <= 100) {
            return "A"
        } else if (80 <= this.scoreVal && this.scoreVal < 90) {
            return "B"
        } else if (70 <= this.scoreVal && this.scoreVal < 80) {
            return "C"
        } else if (60 <= this.scoreVal && this.scoreVal < 70) {
            return "D"
        } else {
            return "F"
        }
    },

    set scoreSet(value2) {
        this.scoreVal = value2
    }
};

score.scoreSet = 87
console.log(score.Eval)


// საიდუმლო პაროლი
// შექმენი ობიექტი, რომელიც ინახავს პაროლს. setter უნდა მიიღოს პაროლი და შეინახოს დაშიფრული სახით, ხოლო getter უნდა აბრუნებდეს "*****"-ს უსაფრთხოების მიზნით.
// (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ წარმატებები! ✨💫

let passwordObj = {
    passwordObj: "",

    get passwordCover() {
        str = ""
        for (let i = 0; i < this.passwordObj.length; i++) {
            str += "*"
        }
        return str
    },

    set password(pass) {
        this.passwordObj = pass
    }
}

passwordObj.password = "1321312234"

console.log(passwordObj.passwordCover)