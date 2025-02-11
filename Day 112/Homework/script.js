// იგივე რაც DAY 111, თუმცა ამჯერად ამ ლოგიკით ვებსაიტი ააგეთ, დამატებით თუ კლასები დაგჭირდებათ შეგიძლიათ გამოიყენოით.  (  დიზაინი არ დაგავიწყდეთ   ┐(￣ ヘ￣)┌    )
// წარმატებები ♡＾▽＾♡

let cards = document.getElementById("cards")

class Book {
    constructor(pages, year, name, imgUrl) {
        this.pages = pages
        this.year = year
        this.name = name
        this.imgUrl = imgUrl
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
    constructor(pages, year, name, hasTreasure, dangerLevel, imgUrl) {
        super(pages, year, name, imgUrl)
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

    get renderCard() {
        cards.innerHTML += `
        <div class="card">
            <img src="${this.imgUrl}"
                alt="">

            <div class="info">
                <span><span>Name: </span>${this.name}</span>
                <br>
                <span><span>Year: </span>${this.year}</span>
                <br>
                <span><span>Pages: </span>${this.pages}</span>
                <br>
                <span><span>Has Treasure: </span>${this.hasTreasure}</span>
                <br>
                <span><span>Danger Level: </span>${this.dangerLevel}</span>
            </div>
        </div>
        `
    }
}

class Satire extends Book {
    constructor(pages, year, name, humorLevel, sarcasmDegree, imgUrl) {
        super(pages, year, name, imgUrl)
        this.humorLevel = humorLevel
        this.sarcasmDegree = sarcasmDegree
    }

    close() {
        return `"${this.name}" is closed, but the sarcasm continues!`;
    }

    analyzeIrony() {
        return `The irony in "${this.name}" is at level ${this.sarcasmDegree}/10!`
    }

    get renderCard() {
        cards.innerHTML += `
        <div class="card">
            <img src="${this.imgUrl}"
                alt="">

            <div class="info">
                <span><span>Name: </span>${this.name}</span>
                <br>
                <span><span>Year: </span>${this.year}</span>
                <br>
                <span><span>Pages: </span>${this.pages}</span>
                <br>
                <span><span>Humor Level: </span>${this.humorLevel}</span>
                <br>
                <span><span>Sarcasm Degree: </span>${this.sarcasmDegree}</span>
            </div>
        </div>
        `
    }
}

class Fantasy extends Book {
    constructor(pages, year, name, hasMagic, worldName, imgUrl) {
        super(pages, year, name, imgUrl)
        this.hasMagic = hasMagic
        this.worldName = worldName
    }

    open() {
        return `Opening "${this.name}" to enter the magical world of ${this.worldName}!`
    }

    exploreWorld() {
        return `Exploring the mystical lands of ${this.worldName} in "${this.name}".`
    }

    get renderCard() {
        cards.innerHTML += `
        <div class="card">
            <img src="${this.imgUrl}"
                alt="">

            <div class="info">
                <span><span>Name: </span>${this.name}</span>
                <br>
                <span><span>Year: </span>${this.year}</span>
                <br>
                <span><span>Pages: </span>${this.pages}</span>
                <br>
                <span><span>Has Magic: </span>${this.hasMagic}</span>
                <br>
                <span><span>World Name: </span>${this.worldName}</span>
            </div>
        </div>
        `
    }
}




let adventure1 = new Adventure(320, 2022, "The Lost Island", true, "High", "https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg");
let adventure2 = new Adventure(450, 2020, "Jungle Quest", false, "Medium", "https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg");
let adventure3 = new Adventure(280, 2023, "Desert Survival", true, "Low", "https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg");

let satire1 = new Satire(250, 2019, "The Absurd World", 7, 9, "https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg");
let satire2 = new Satire(190, 2021, "Politics and Paradoxes", 5, 8, "https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg");
let satire3 = new Satire(300, 2022, "Modern Madness", 8, 10, "https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg");

let fantasy1 = new Fantasy(400, 2021, "The Eternal Kingdom", true, "Eldoria", "https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg");
let fantasy2 = new Fantasy(500, 2018, "Wizards of the North", false, "Avalon", "https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg");
let fantasy3 = new Fantasy(380, 2023, "Dragons of the Sky", true, "Aeroth", "https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg");

let list = [adventure1, adventure2, adventure3, satire1, satire2, satire3, fantasy1, fantasy2, fantasy3]


for (let i = 0; i < list.length; i++) {
    list[i].renderCard
}