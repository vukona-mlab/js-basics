let studentsArray = [ 'Ayanda', 'Reabetswe', 'Gontse', 'Nkululeko', 'Chadrack' ]

let newArray = studentsArray; // creates a copy that points to the original array
let deepCopy = Array.from(studentsArray)
let newDeepCopy = [...studentsArray] // spreading,sdf

console.log({ newArray });

newArray[2] = "Divine"

console.log({ newArray });
console.log({ studentsArray });

deepCopy[0] = "Yaya"

console.log({ deepCopy });
console.log({ studentsArray });

// add new items
deepCopy.push('Mabohlale')

console.log({ deepCopy });

// removing items
deepCopy.pop()
console.log({ deepCopy });

deepCopy.splice(2, 1)
console.log({ deepCopyRemove: deepCopy });
const nameExists = deepCopy.find((el) => {
    console.log({el});
    return el === "Yaya"
})
console.log({ nameExists });

// numbered arrays

const numArray = [ 34, 23, 67, 35, 23, 56, 34, 89, 76, 23]
console.log(numArray.length);


let mappedArray = numArray.map((num) => {
    if(num < 50) {
        let ret =  { mark: num, passed: false }
        return ret
    } else {

        let ret = { mark: num, passed: true }
        return ret
    }
})
console.log({ mappedArray });

let filteredArray = numArray.filter((num) => num > 50 )
console.log({ filteredArray });

// for loop
// iterate through a list, mostly arrays, (but can be used anywhere)

for(let i = 0; i < 10; i++) {
    console.log({ exponent: i * i });
    // console.log({ i });
}

// looping through arrays (or objects)
let forLoopFilteredArray = []
for (let index = 0; index < numArray.length; index++) {
    const number = numArray[index];
    if(number > 50) {
        // console.log(number);
        forLoopFilteredArray.push(number)
    }
}

let forEachFilter = []
numArray.forEach((number) => {
    if(number > 50) {
        forEachFilter.push(number)
    }
})

console.log({ forLoopFilteredArray });

// && - combines two conditions, both conditions need to be true for
// the expression to pass (evaluate to true)
console.log(23 < 45);
console.log(34 === 50);
console.log((23 < 45) && (34 === 50));

// || - combines two conditions, only one of the conditions needs to be tru
// for the expression to pass (evaluate to true)

console.log((23 < 45) || (34 === 50));

// === - checks if the first value equals the second value, type sensitive

console.log(50 === 50);

// == - checks if the first value equals the second value, not type sensitive
console.log(45 == '45');

// !== - checks if the first value is not equal to the second value
console.log(50 !== 50);
console.log(50 !== 60);



// includes - searches for a specified element and returns true or false
const found = forEachFilter.includes(67)
console.log({ found });


const index = forEachFilter.indexOf(67)
console.log({ index });