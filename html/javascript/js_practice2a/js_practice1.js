// TASK 1: GRADING SYSTEM

function getGrade(score) {
    score = Number(score)
    if (score === 100) {
        return `Outstanding! Score: ${score} => Grade: A+`
    }
    else if (score >= 90) {
        return `Score: ${score} → Grade: A`
    }
    else if (score >= 80) {
        return `Score: ${score} → Grade: B`
    }
    else if (score >= 70) {
        return `Score: ${score} → Grade: C`
    }
    else if (score >= 60) {
        return `Score: ${score} → Grade: D`
    }
    else if (score < 60) {
        return `Score: ${score} → Grade: F`
    }
    else {
        return `Please enter number between 0 - 100`
    }

}

// display
function task1Display() {
    const input = prompt("Enter your score here: ", "0-100")
    const result = getGrade(input);
    document.getElementById('output').textContent = result
    console.log(result)
}



// TASK 2: DISCOUNT CALCULATOR
function calculatePrice(price, customerType, isFirstPurchase = 'false') {
    price = Number(price)
    
    // if isFirstPurchase is true
    if (price && customerType === 'student' && isFirstPurchase ==='true') {
        return price - ((15/100)*price)
    }
    else if (price && customerType === 'senior' && isFirstPurchase ==='true') {
        return price - ((20/100)*price)
    }
    else if (price && customerType === 'employee' && isFirstPurchase ==='true') {
        return price - ((25/100)*price)
    }

    // if isFirstPurchase is false
    else if (price && customerType === 'student') {
        return price - ((1/10)*price)
    }
    else if (price && customerType === 'senior') {
        return price - ((15/100)*price)
    }
    else if (price && customerType === 'employee') {
        return price - ((2/10)*price)
    }
    // to catch invalid input errors
    else {
        return `Enter a valid input`
    }


}
//  display
function task2Display() {
    // collect inputs
    const input1 = prompt('Enter a price: ')
    const input2 = prompt("Are you a 'student', 'senior' or 'employee'?: ")
    const input3 = prompt('Is this your first purchase? (true/false): ')

    // result
    const result = calculatePrice(input1, input2, input3)

    // round the result
    const roundedResult = Math.round(result * 100) / 100
    document.getElementById('output').textContent = roundedResult
    console.log(roundedResult)
}




// TASK 3: WEATHER ADVISOR
function weatherAdvice(temperature, isRaining) {
    temperature = Number(temperature)


    // if it is raining
    if (isRaining === 'false') {
       
        // 1
        if (temperature < 32) {
            return `Very cold, wear a heavy coat.`

        }

        // 2
        else if (temperature >= 32 && temperature <= 60) {
            return `Chilly, bring a jacket.`
        }

        // 3
        else if (temperature >= 60 && temperature <= 80) {
            return `Nice weather!`
        }

        // 4
        else if (temperature > 80) {
            return `It's hot, stay hydrated!`
        }
    }
    else if (isRaining === 'true') {
        if (temperature < 32) {
            return `Freezing rain! Stay inside`
        }
    }
    
}

// display
function task3Display() {
    // collect inputs
    const temp = prompt('Enter the temperature in Celsius: ')
    const raining = prompt(`Is it raining right now?(true/false): `)

    // result
    const result = weatherAdvice(temp, raining)

    document.getElementById('output').textContent = result
    console.log(result)
}



// TASK 4: ATM SIMULATION
function atm(balance, action, amount) {
    amount = Number(amount)
    // withdraw
    if (action === 'withdraw') {
        if (balance > 0 && amount <=500) {
            balance -= amount
            return balance
        }
        return  `Insufficient funds or you are trying to withdrawal above 500`
    }

    // deposit
    else if (action === 'deposit') {
        balance += amount
        return balance
    }

}

// display
function task4Display() {
    // collect inputs
    const act = prompt(`'withdraw' or 'deposit'? `)
    const amnt = prompt(`Enter an amount.... `)

    // result
    const result = atm(10000, act, amnt)

 
    document.getElementById('output').textContent = result
    console.log(result)
}

// TASK 5: PERSONAL ASSISTANT FUNCTION

function personalAssistant(time, weather, dayType) {
    // Validate inputs
    time = Number(time)
    if (typeof time !== 'number' || time < 0 || time > 24) {
        return `Invalid time. Please enter a valid hour (0-24).`;
    }
    const validWeathers = ['sunny', 'rainy', 'cloudy'];
    if (!validWeathers.includes(weather)) {
        return `Invalid weather. Please choose from: ${validWeathers.join(', ')}.`;
    }
    const validDayTypes = ['workday', 'weekend', 'holiday'];
    if (!validDayTypes.includes(dayType)) {
        return `Invalid day type. Please choose from: ${validDayTypes.join(', ')}.`;
    }

    // Provide advice based on the time of day
    let timeOfDay;
    if (time < 12) {
        timeOfDay = 'morning';
    } 
    else if (time < 18) {
        timeOfDay = 'afternoon';
    } 
    else {
        timeOfDay = 'evening';
    }

    // Give advice based on weather and day type
    if (weather === 'sunny') {
        return `Good ${timeOfDay}! It's a beautiful day. Enjoy the sunshine!`;
    } 
    else if (weather === 'rainy') {
        return `Good ${timeOfDay}! Don't forget your umbrella.`;
    } 
    else if (weather === 'cloudy') {
        return `Good ${timeOfDay}! It might rain later, so be prepared.`;
    }
}

// display
function task5Display() {
    // collect inputs
    const time = prompt(`Enter the time (0-24): `)
    const weather = prompt(`Enter the weather (sunny, rainy, cloudy): `)
    const dayType = prompt(`Enter the day type (workday, weekend, holiday): `)

    // result
    const result = personalAssistant(time, weather, dayType)

    document.getElementById('output').textContent = result
    console.log(result)
}