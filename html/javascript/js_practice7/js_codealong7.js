// 
class Book {
    constructor (title, author, year) {
        this.title = title
        this.author = author
        this.year = year
        this.isBorrowed = false

    }

    getSummary() {
        return `Book: ${this.title} by ${this.author}(${this.year})`
    }

    borrowBook() {
        this.isBorrowed = true
        return (`${this.title} is borrowed: ${this.isBorrowed}`)
    }
}

let number1 = new Book("Please don't kill a mockingbird", "Inioluwa", 2025)
let number2 = new Book("Attendance in 10 minutes", "Ngozi", 2025)

let display = document.getElementById("display")
display.innerHTML = `${number1.getSummary()} <br> ${number2.getSummary()} <br> ${number1.borrowBook()}`