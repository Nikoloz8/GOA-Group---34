// 1) შექმენით წიგნების კლასი ორი ჩვეულებრივი მეთოდით, ერთი გეთერ მეტოით და სამი ფროფერთით. შექმენით სამი წიგნის ჟანრის კლასი (მაგ. სათავგადასავლო, სატირა, ფანტაზია), სამივე მემკვიდრე წიგნის კლასის. თითოეულს უნდა ჰქონდეს ერთი მშობელი კლასის მთლიანად შეცვლილი მეთოდი, მეორე ერთ ერთ მეთოდზე დაშეენებული მეთოდი ( მშობელი კლასის მეთოდი + ახალი ფუნქციონალი ), და ერთი სუილად ახალი, უნიკლარი მეთოდი. ასევე თითოეულს უნდა ჰქონდეს ორი ახალი ფროფერთი.
// წარმატებები ♡＾▽＾♡

class Book {
    constructor(pages, year, name) {
        this.pages = pages
        this.year = year
        this.name = name
    }

    open() {
        return "Book is opened!"
    }

    close() {
        return "Book is closed!"
    }

    get throw() {
        return "Book is thrown!"
    }
}

class Adventure extends Book {
    constructor(pages, year, name, hasTreasure, dangerLevel) {
        super(pages, year, name)
        this.hasTreasure = hasTreasure; 
        this.dangerLevel = dangerLevel  
    }

    open() {
        return `Opening adventure book "${this.name}"! Get ready for action!`
    }

    searchForTreasure() {
        if (this.hasTreasure) {
            return "Treasure found!"
        } else {
            return "No treasure in sight!"
        }
    }
}

class Satire extends Book {
    constructor(pages, year, name, humorLevel, sarcasmDegree) {
        super(pages, year, name)
        this.humorLevel = humorLevel
        this.sarcasmDegree = sarcasmDegree
    }

    close() {
        return `"${this.name}" is closed, but the sarcasm continues!`;
    }

    analyzeIrony() {
        return `The irony in "${this.name}" is at level ${this.sarcasmDegree}/10!`
    }
}

class Fantasy extends Book {
    constructor(pages, year, name, hasMagic, worldName) {
        super(pages, year, name)
        this.hasMagic = hasMagic
        this.worldName = worldName 
    }

    open() {
        return `Opening "${this.name}" to enter the magical world of ${this.worldName}!`
    }

    exploreWorld() {
        return `Exploring the mystical lands of ${this.worldName} in "${this.name}".`
    }
}

const adventureBook = new Adventure(350, 2021, "Treasure Island", true, "High")
console.log(adventureBook)
console.log(adventureBook.open())
console.log(adventureBook.searchForTreasure())

const satireBook = new Satire(250, 2018, "Animal Farm", 8, 10)
console.log(satireBook)
console.log(satireBook.close())
console.log(satireBook.analyzeIrony());

const fantasyBook = new Fantasy(500, 2020, "The Hobbit", true, "Middle-earth")
console.log(fantasyBook)
console.log(fantasyBook.open())
console.log(fantasyBook.exploreWorld())
