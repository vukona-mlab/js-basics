function addSum() {
    console.log(45 + 90);
}
addSum()



function addNumbers(a, b) { // parameters, when you recieve
    console.log(a + b);
}

addNumbers(4, 56) // argument, when you send
console.log('upfront: ', addNumbersss(1, 0));
// function with return type
function addNumbersss(a, b) { // parameters, when you recieve
    return a + b
}

const sumOfNumbers = addNumbersss(2, 4)
console.log({ sumOfNumbers });

// console.log('upfront2: ', productOfNumbers(3, 9));
const productOfNumbers = (a, b) => {
    return a * b
}

const product = productOfNumbers(2, 4)
console.log({ product });