// function showBasicVariables() {
//     // Creating Variables with different declarations
//     let studentName = "Alice";
//     const schoolName = "Tech Academy";
//     let age = 25;

//     // Display the variables
//     let output = `
//     <strong>Basic Variables:</strong><br>
//     Student Name: ${studentName}<br>
//     School Name: ${schoolName}<br>
//     Age: ${age}<br><br>
//     <em>studentName and age use 'let' (can be changed)<br>
//     schoolName uses 'const' (cannot be changed)</em>
//     `;

//     document.getElementById('variables-output').innerHTML = output;
//     console.log('Student:', studentName, 'Age:', age, 'School:', schoolName);
// }

// function showVariableTypes() {
//     // Different data types
//     let userName = "John Doe";      // String
//     let userAge = 30;               // Number
//     let isActive = true;            // Boolean
//     let salary = 50000.50;          // Number (with decimals)
//     let middleName = null;          // Null (intentionally empty)
//     let nickName;                   // Undefined (not assigned)

//     let output = `
//     <strong>Variable Types:</strong><br>
//     userName: "${userName}" (type: ${typeof userName})<br>
//     userAge: ${userAge} (type: ${typeof userAge})<br>
//     isActive: ${isActive} (type: ${typeof isActive})<br>
//     salary: ${salary} (type: ${typeof salary})<br>
//     middleName: ${middleName} (type: ${typeof middleName})<br>
//     nickName: ${nickName} (type: ${typeof nickName})
//     `;

//     document.getElementById("variables-output").innerHTML = output;
// }

// function demonstrateConstVsLet() {
//     let changeable = "I can be changed";
//     const permanent = "I cannot be changed";

//     // Change the let variable
//     changeable = "I have been changed!";

//     // Try to change const (this would cause an error)
//     // permanent = "This would cause an error!"; 

//     let output = `
//     <strong>const vs let:</strong><br>
//     changeable (let): "${changeable}"<br>
//     permanent (const): "${permanent}"<br><br>
//     <em>The 'let' variable was successfully changed.<br>
//     Trying to change a 'const' variable would cause an error!</em>
//     `;

//     document.getElementById('variables-output').innerHTML = output;
// }

// function variableNamingExamples() {
//         // Good variable names (descriptive and follow conventions)
//         let firstName = "Maria";
//         let lastName = "Garcia";
//         let phoneNumber = "555-0123";
//         let isLoggedIn = true;
//         let totalPrice = 99.99;

//         // Examples of what NOT to do (but still valid)
//         let a = "Bad name - not descriptive";
//         let x123 = "Confusing name";

//         let output = `
//         <strong>Variable Naming Examples:</strong><br><br>
//         <strong>Good Names (descriptive):</strong><br>
//         firstName: ${firstName}<br>
//         lastName: ${lastName}<br>
//         phoneNumber: ${phoneNumber}<br>
//         isLoggedIn: ${isLoggedIn}<br>
//         totalPrice: ${totalPrice}<br><br>
//         <strong>Poor Names......</strong>
//         `;

//     document.getElementById("variables-output").innerHTML = output;
// }

// function exploreStrings() {
//     // Different ways to create strings
//     let singleQuotes = "Hello World";
//     let doubleQuotes = "Javascript is fun";
//     let templateLiteral = `Today is ${new Date().toDateString()}`;

//     // String properties and methods
//     let message = "Learning Javascript";
//     let length = message.length;
//     let uppercase = message.toUpperCase();
//     let lowercase = message.toLowerCase();

//     let output = `
//      <strong>Working with Strings:</strong><br><br>
//      Single quotes: '${singleQuotes}'<br>
//      Double quotes: "${doubleQuotes}"<br>
//      Template literal: \`${templateLiteral}\`<br><br>
//      <strong>String Methods:</strong><br>
//      Original: "${message}"<br>
//      Length: ${length} characters<br>
//      Uppercase: "${uppercase}"<br>
//      Lowercase: "${lowercase}"<br><br>
//      <em>Template literals (\`) allow embedding variables with \${}< em>
//      `;

//     document.getElementById('datatypes-output').innerHTML = output;
// }

// function exploreNumbers() {
//     // Different number types
//     let integer = 42;
//     let decimal = 3.14159;
//     let negative = -17;
//     let scientific = 2.5e6; // 2,500,000

//     // Math operations
//     let sum = 10 + 5;
//     let difference = 20 - 8;
//     let product = 6 * 7;
//     let quotient = 15 / 3;
//     let remainder = 17 % 5;

//     // Special number values
//     let infinity = 1 / 0;
//     let notANumber = "hello" * 5;

//     let output = `
//         <strong>Working with Numbers:</strong><br><br>
//         Integer: ${integer}<br>
//         Decimal: ${decimal}<br>
//         Negative: ${negative}<br>
//         Scientific notation: ${scientific}<br><br>
//         <strong>Math Operations:</strong><br>
//         10 + 5 = ${sum}<br>
//         20 - 8 = ${difference}<br>
//         6 × 7 = ${product}<br>
//         15 ÷ 3 = ${quotient}<br>
//         17 % 5 = ${remainder} (remainder)<br><br>
//         <strong>Special Values:</strong><br>
//         1 / 0 = ${infinity}<br>
//         "hello" * 5 = ${notANumber}<br>
//     `;
//     document.getElementById('datatypes-output').innerHTML = output;
// }

// function exploreBooleans() {
//     // Boolean values
//     let isTrue = true;
//     let isFalse = false;

//     // Boolean from comparisons
//     let isGreater = 10 > 5;     // true
//     let isEqual = 5 === 5;      // true
//     let isNotEqual = 3 !== 7;   // true
//     let isLessOrEqual = 4 <= 4; // true

//     // Truthy and falsy values
//     let truthyString = Boolean("hello");    //true
//     let falsyString = Boolean("");          // false
//     let truthyNumber = Boolean(42);         //true
//     let falsyNumber = Boolean(0);           //false

//     let output = `
//         <strong>Working with Booleans:</strong><br><br>
//         <strong>Direct Boolean Values:</strong><br>
//         isTrue: ${isTrue}<br>
//         isFalse: ${isFalse}<br><br>
//         <strong>Boolean from Comparisons:</strong><br>
//         10 > 5: ${isGreater}<br>
//         5 === 5: ${isEqual}<br>
//         3 !== 7: ${isNotEqual}<br>
//         4 <= 4: ${isLessOrEqual}<br><br>
//         <strong>Truthy vs Falsy:</strong><br>
//         Boolean("hello"): ${truthyString}<br>
//         Boolean(""): ${falsyString}<br>
//         Boolean(42): ${truthyNumber}<br>
//         Boolean(0): ${falsyNumber}<br><br>
//         <em>Empty strings, 0, null, undefined are "falsy"</em>
//     `;

//     document.getElementById('datatypes-output').innerHTML = output;
// }

// function exploreSpecialValues() {
//     // Undefined variable
//     let undefinedVar;

//     // Null value
//     let nullVar = null;

//     // Check types
//     let definedVar = "I have a value";

//     let output = `
//         <strong>Special Values:</strong><br><br>
//         <strong>Undefined:</strong><br>
//         Value: ${undefinedVar}<br>
//         Type: ${typeof undefinedVar}<br><br>
//         <strong>Null:</strong><br>
//         Value: ${nullVar}<br>
//         Type: ${typeof nullVar} (this is a JavaScript quirk!)<br><br>
//         <strong>Defined Variable:</strong><br>
//         Value: "${definedVar}"<br>
//         Type: ${typeof definedVar}<br><br>
//         <strong>Key Differences:</strong><br>
//         • undefined: Variable exists but has no value<br>
//         • null: Intentionally set to "no value"<br>
//         • Both are "falsy" in boolean context
//     `;

//     document.getElementById('datatypes-output').innerHTML = output;
// }

function showStringConcatenation() {
    let firstName = "John";
    let lastName = "Doe";
    let age = 25;

    // Old way: string concatenation with +
    let greeting1 = "Hello, my name is " + firstName + " " + lastName + ".";
    let info1 = "I am " + age + " years old.";

    // Can get messy with complex strings
    let complex1 = "User: " + firstName + " " + lastName + " (Age: " + age + ")";

    let output = `
        <strong>String Concatenation with + operator:</strong><br><br>
        firstName = "${firstName}", lastName = "${lastName}", age = ${age}<br><br>
        <strong>Simple concatenation:</strong><br>
        greeting1: "${greeting1}"<br>
        info1: "${info1}"<br><br>
        <strong>Complex concatenation:</strong><br>
        complex1: "${complex1}"<br><br>
        <em>Notice how the + method can become hard to read with many variables</em>
    `
    document.getElementById("string-output").innerHTML = output;
}

function showTemplateLiterals() {
    let firstName = "Jane";
    let lastName = "Smith";
    let age = 30;
    let city = "New York";
    
    // Modern way: template literals with backticks
    let greeting2 = `Hello, my name is ${firstName} ${lastName}.`;
    let info2 = `I am ${age} years old and live in ${city}.`;
    
    // Can include expressions
    let mathExample = `Next year I will be ${age + 1} years old.`;
    let upperCase = `My name in caps: ${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
    
    // Multi-line strings (impossible with quotes)
    let multiLine = `
        Name: ${firstName} ${lastName}
        Age: ${age}
        City: ${city}
        Status: ${age >= 18 ? 'Adult' : 'Minor'}
    `;
    
    let output = `
        <strong>Template Literals with \` (backticks):</strong><br><br>
        firstName = "${firstName}", lastName = "${lastName}", age = ${age}<br><br>
        <strong>Simple template literals:</strong><br>
        greeting2: "${greeting2}"<br>
        info2: "${info2}"<br><br>
        <strong>With expressions:</strong><br>
        mathExample: "${mathExample}"<br>
        upperCase: "${upperCase}"<br><br>
        <strong>Multi-line string:</strong><br>
        <pre>${multiLine}</pre>
        <em>Template literals are much cleaner and more readable!</em>
    `;
    
    document.getElementById('string-output').innerHTML = output;
}

function showStringMethods() {
    let message = " JavaScript is Amazing! ";

    let output = `
        <strong>Common String Methods:</strong><br><br>
        Original: "${message}"<br><br>
        <strong>Case methods:</strong><br>
        toLowerCase(): "${message.toLowerCase()}"<br>
        toUpperCase(): "${message.toUpperCase()}"<br><br>
        <strong>Whitespace methods:</strong><br>
        trim(): "${message.trim()}" (removes leading/trailing spaces)<br><br>
        <strong>Information methods:</strong><br>
        length: ${message.length} characters<br>
        charAt(2): "${message.charAt(2)}" (character at index 2)<br>
        indexOf("Script"): ${message.indexOf("Script")} (position of "Script")<br><br>
        <strong>Substring methods:</strong><br>
        substring(2, 12): "${message.substring(2, 12)}"<br>
        slice(-8, -3): "${message.slice(-8, -3)}" (negative indices)<br><br>
        <strong>Replace method:</strong><br>
        replace("Amazing", "Awesome"): "${message.replace("Amazing", "Awesome")}"<br><br>
        <strong>Split method:</strong><br>
        split(" "): [${message.trim().split(" ").map(word => `"${word}"`).join(", ")}]
    `;

    document.getElementById('string-output').innerHTML = output;
}