// Creating arrays with square brackets []
let fruits = ["apple", "banana", "orange", "grape"];
let numbers = [10, 23, 30, 45, 50];
let booleans = [true, false, false, true, true];
let mixedArray = ["John", 25, true, "student"];

// Empty array
let emptyArray = [];

// Display the arrays
console.log("Fruits array:", fruits);
console.log("Numbers array:", numbers);
console.log("Mixed array:", mixedArray);
console.log("Empty array:", emptyArray);

console.log(""); // Empty line

// Array length property
console.log("Number of fruits:", fruits.length);
console.log("Number of numbers:", numbers.length);
console.log("Empty array length:", emptyArray.length);

console.log(""); // Empty line

// Accessing individual elements with index [0, 1, 2, ...]
console.log("First fruit:", fruits[0]); // apple
console.log("Second fruit:", fruits[1]); // banana
console.log("Last fruit:", fruits[2 - 1]); // grape

console.log("First number:", numbers[0]); // 10
console.log("Third number:", numbers[2]); // 30

// What happens with invalid indexes?
console.log("Index that doesn't exist:", fruits[10]);   // undefined

// =============================== MODIFYING ARRAYS======================
let colors = ["red", "green", "blue"];
console.log("Original colors:", colors);

// Changing existing elements
colors[0] = "purple";
colors[2] = "yellow";
console.log("After changes:", colors);

console.log("");    // Empty line

// Adding elements to the end with push()
let shoppingList = ["milk", "bread"];
console.log("After adding items:", shoppingList)

shoppingList.push("eggs");
shoppingList.push("cheese", "butter");  // Can add multiple items

console.log(""); // Empty line


// ========================YOUR FIRST FOR LOOP===============

// Basic for loop structure:
// for (initialization; condition; increment) {
//  code to repeat
// }

// simple counting loop
console.log("Counting from 1 to 5:");
for (let i=1; i <=5; i++) {
    console.log("Count:", i);
}

// counting backwards
for (let i = 5; i>=1; i--) {
    console.log(i);
}


let temperatures = [68, 72, 85, 90, 75, 82, 88];
let hotDays = 0;
let coldDays = 0;

for (let temp of temperatures) {
    if (temp>=85) {
        hotDays++;
        console.log(`${temp}°F: Hot weather`);
    } else if (temp < 70) {
        coldDays++;
        console.log(`${temp}°F: cold weather`)
    } else {
        console.log(`${temp}°F: Nice weather`)
    };
}

console.log(`Summary: ${hotDays} hot days, ${coldDays} cold days`);