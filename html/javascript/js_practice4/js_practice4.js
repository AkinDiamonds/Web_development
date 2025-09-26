// ===============PRACTICE 1: Movie Collection Tracker=====

let movie1 = {
    title: "The Chosen",
    director: "Caiaphas",
    releaseYear: 2019,
    rating: 10,
    getSummary() {
        return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}`
    }
}


let movie2 = {
    title: "Extraction",
    director: "Yen",
    releaseYear: 2015,
    rating: 9.9,
    getSummary() {
        return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}`
    }
}


let movie3 = {
    title: "Wednesday",
    director: "John",
    releaseYear: 2018,
    rating: 7,
    getSummary() {
        return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}`
    }
}
console.log(movie1.getSummary())
console.log("")
console.log("")
movie1.isWatched = true

console.log(movie1)
console.log("")
console.log("")


let movies = [
    movie1,
    movie2,
    movie3,
]


function displayHighRated(movies) {
    let highRatedMovies = []
    movies.map((movie) => {
        if (movie.rating >= 8){
            highRatedMovies.push(`${movies.indexOf(movie)+1}. ${movie.title} (${movie.releaseYear})`)
        };
    })
    // for (let movie of movies) {
    //     if (movie.rating >= 8){
    //         highRatedMovies.push(`${movies.indexOf(movie)+1}. ${movie.title} (${movie.releaseYear})`)
    //     };
    // };
    return highRatedMovies.join("\n")
}

console.log(displayHighRated(movies))


// ==========PRACTICE 2: Online Shopping Cart====

let cartItem1 = {
    name: "Apple",
    price: 10,
    quantity: 2,
    getTotal() {
        return this.price * this.quantity
    }
}

let cartItem2 = {
    name: "Banana",
    price: 5,
    quantity: 5,
    getTotal() {
        return this.price * this.quantity
    }
}

let cartItem3 = {
    name: "Cherry",
    price: 15,
    quantity: 3,
    getTotal() {
        return this.price * this.quantity
    }
}

let cart = [cartItem1, cartItem2, cartItem3]

function getCartTotal(cart) {
    let total = 0
    for (let item of cart) {
        total += item.getTotal()
    }
    return total
}
console.log(getCartTotal(cart))


// =======================PRACTICE 3: Library Membership System=======

let member1 = {
    name: "Alice",
    membershipType: "Basic",
    borrowedBooks: ["The Old Man and the Sea", "To Kill a Mockingbird"],
    borrowBook(book) {
        this.borrowedBooks.push(book)
    },
    getBorrowedCount() {
        return this.borrowedBooks.length
    },
    getMembershipInfo() {
        if (this.membershipType.toLowerCase() === "basic") {
            return "Basic members can borrow up to 5 books at a time."
        } else {
            return "Premium members can borrow unlimited books."
        }
    }
}

member1.membershipType="Premium"
console.log(member1.getMembershipInfo())
member1.borrowBook("Macbeth")
console.log(member1.getBorrowedCount())
console.log(member1.borrowedBooks)


// =============PRACTICE