// Practice 6

function isStrongPassword(password) {
    const dig_char= /\d/;
    const special_char= /~!@#$%^&*()_+=-{},|[]"':;<>.?\\/
    if (password.length > 0 && password.length <= 8 && dig_char.test(password) && special_char.test(password)) {
        return true
    }
    false
}

function formatPercentage(value) {
    return `${Number(value).toFixed(1)}%`
}

function calculateCompoundInterest(principal, rate, years) {
    let A = null
    A = Number(principal)*((1+(Number(rate)/100))**Number(years))
    return A
}

function canGraduate(credits, gpa) {
    if (Number.isFinite(credits) && Number.isFinite(gpa) && credits>= 120 && gpa >=2) {
        return true
    }
    false
}

function reverseWords(sentence) {
    const array = sentence.split(" ");
    const capitalizedWords = array.map(word=> {
        return word.charAt(0).toUpperCase + word.slice(1);
    });
    const reversedArrays = capitalizedWords.reverse();
    const reversedWords = reversedArrays.join(" ");
    return reversedWords
}


// Practice 7: Smart Shopping Calculator

function productCalculator(price, quantity, discount=0) {
    price = Number(price)
    quantity = Number(quantity)
    discount = Number(discount)

    if (isNaN(price) || isNaN(quantity) || isNaN(discount)) {
        return "Invalid input"
    }

    const total = price * quantity
    const discountedTotal = total - (total * (discount / 100))
    return `Total: $${total.toFixed(2)}, Discounted: $${discountedTotal.toFixed(2)}`
}
function taxCalculator(amount, location) {
    amount = Number(amount)
    if (isNaN(amount)) {
        return "Invalid input"
    }

    let taxRate = 0
    if (location === "Abeokuta") {
        taxRate = 0.08
    } else if (location === "Shagamu") {
        taxRate = 0.07
    } else {
        taxRate = 0.05
    }

    const tax = amount * taxRate
    return `Amount: $${amount.toFixed(2)}, Tax: $${tax.toFixed(2)}, Total: $${(amount + tax).toFixed(2)}`
}
function shippingCalculator(weight, distance) {
    weight = Number(weight)
    distance = Number(distance)

    if (isNaN(weight) || isNaN(distance)) {
        return "Invalid input"
    }

    const baseRate = 5
    const weightRate = weight * 0.1
    const distanceRate = distance * 0.05
    const totalShipping = baseRate + weightRate + distanceRate

    return `Weight: ${weight}kg, Distance: ${distance}km, Shipping Cost: $${totalShipping.toFixed(2)}`
}

function membershipDiscount(total, isMember=false) {
    total = Number(total)
    if (isNaN(total)) {
        return "Invalid input"
    }

    const discount = isMember ? 0.1 : 0
    const discountedTotal = total - (total * discount)
    return `Total: $${total.toFixed(2)}, Discounted: $${discountedTotal.toFixed(2)}`
}

function finalReceipt(productTotal, taxLocation, shippingWeight, shippingDistance, isMember) {
    const productInfo = productCalculator(productTotal.price, productTotal.quantity, productTotal.discount)
    if (productInfo === "Invalid input") {
        return "Invalid product input";
    }
    const taxInfo = taxCalculator(productTotal.price * productTotal.quantity, taxLocation)
    const shippingInfo = shippingCalculator(shippingWeight, shippingDistance)
    const membershipInfo = membershipDiscount(productTotal.price * productTotal.quantity, isMember)

    return `${productInfo}\n${taxInfo}\n${shippingInfo}\n${membershipInfo}`
}