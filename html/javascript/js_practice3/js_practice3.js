// ## 🎯 Practice Exercise 1

// **Task:** Array Basics - Shopping List  

// **Requirements:**  
// 1. Create an array `shoppingList` with at least 5 items  
// 2. Add a new item to the end of the list  
// 3. Remove the first item from the list  
// 4. Display the total number of items  
// 5. Loop through the list and print each item with its position  

// **Challenge:**  
// Create a function `formatList(list)` that returns the shopping list in a numbered format (1. Item, 2. Item, ...).

let shoppingList = ["Rice", "Pen", "Apple", "Banana", "Maize"];

shoppingList.push("Book")
shoppingList.shift()
console.log(`Length:`, shoppingList.length)

for (let item of shoppingList) {
    console.log(`${shoppingList.indexOf(item)}: ${item}`)
};

console.log("");

function formatList(list) {
    for (let item of shoppingList) {
        console.log(`${shoppingList.indexOf(item) + 1}. ${item}`);
    };
};

console.log(formatList(shoppingList));



// ## 🎯 Practice Exercise 2

// **Task:** Student Grades Analyzer  

// **Requirements:**  
// 1. Store grades in an array  
// 2. Write a function `getAverage(grades)` to calculate average grade  
// 3. Write a function `getHighest(grades)` to find the highest grade  
// 4. Write a function `getLowest(grades)` to find the lowest grade  
// 5. Use loops where necessary to process the array  

// **Challenge:**  
// Create a function `getPassRate(grades)` that:  
// - Counts how many students scored **50 or above** (passing)  
// - Divides that number by the total number of students  
// - Returns the **percentage of students who passed** 


let grades = [85, 41, 52, 40, 47, 12, 75, 60, 220, 80, 90, 95, 70, 100];


function getAverage(grades) {
    let total = 0;
    for(let grade of grades) {
        total += grade
    };
    let average = total / grades.length;
    console.log(`Average:`, average.toFixed(2));
};

function getHighest(grades) {
    let highestNumber = grades[0];
    for(let grade of grades) {
        if(grade > highestNumber) {
            highestNumber = grade
        };
    };
    console.log(`Highest number:`, highestNumber)
};

function getLowest(grades) {
    let lowestNumber = grades[0];
    for(let grade of grades) {
        if(grade < lowestNumber) {
            lowestNumber = grade
        };
    };
    return `Lowest number: ${lowestNumber}`
};

function getPassRate(grades) {
    let passedStudents = [];
    let totalStudents = grades.length;
    for(let grade of grades) {
        if (grade >= 50) {
            passedStudents.push(grade)
        };
    };
    let totalPassedStudents = passedStudents.length;
    let percentageOfPassedStudents = (totalPassedStudents/totalStudents)*100;

    return `Percentage of Passed Students: ${percentageOfPassedStudents.toFixed(2)}%`
};


// ==================PRACTICE 3===========
let movies = ["Simeon", "Seyi", "Deji", "Olamide", "Ayo"]
let ratings = [10, 9.6, 9.7, 9.8, 9.5]

function addMovie(movie, rating) {
    movies.push(movie);
    ratings.push(rating);

    return `ADDED: Movie: ${movie}, Rating: ${rating}`
};

function getAverageRating() {
    let totalRating = 0;
    for (let rating of ratings) {
        totalRating += rating;
    };
    let averageRating = totalRating/ratings.length;
    return `Average Rating: ${averageRating}`
}

function getTopMovie() {
    let topMovie = ratings[0];
    for(let rating of ratings){
        if(rating > topMovie) {
            topMovie = rating
        };
    };
    return `Highest Rated Movie: ${movies[ratings.indexOf(topMovie)]}; Rating: ${topMovie}`
}
movies.sort();
ratings.sort((a, b) => a - b)

console.log(getAverage(grades));
console.log(getHighest(grades));
console.log(getLowest(grades));
console.log(getPassRate(grades));
console.log(addMovie("Emma", 9.9));
console.log(getAverageRating());
console.log(getTopMovie());
console.log(movies, ratings)
