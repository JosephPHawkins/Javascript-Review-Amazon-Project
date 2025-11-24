import formatPrice from "../scripts/utils/money.js"

console.log('suite test: money format')

if (formatPrice(350) === "3.50"){
    console.log('Passed')
} else {
    console.log('Failed')
}

if (formatPrice(0) === "0.00"){
    console.log('Passed')
} else {
    console.log('Failed')
}

if (formatPrice(25000.4) === "250.00"){
    console.log('Passed')
} else {
    console.log('Failed')
}

