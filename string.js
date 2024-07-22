let newString = "Ayanda is 24 year old";

console.log({ length: newString.length});
console.log(({ char: newString.charAt(3)}));
const stringAsArray = newString.split(' ')

console.log({ stringAsArray });
console.log({ index3: stringAsArray[stringAsArray.length - 1] });

// string concatenation
let concatString = newString + '. ' + newString
console.log({ concatString });
console.log({ findYears: newString.includes('years') });