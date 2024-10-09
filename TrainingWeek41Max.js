/*
    Hi.
    This is a set of practice exercises.
    The purpose is to train on a few things at a time.
    You do this by entering your answer after a task is given (see the example).

    DO NOT change any code given, unless the task specifically says to do so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}





/* -----------------------------------------------------------------------------
    Task: A

    1. Declare a variable to store the following values 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55
    2. Declare a variable to keep the sum of the numbers from step 1.
    3. Use a for or while loop to sum the numbers from step 1 to the variable from step 2
    4. Make a generic function for step 3.
    
*/
console.log("Task: A");

const numbers = [0, 1, 3, 6, 10, 15, 21, 28, 36, 25, 55];
let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

function sumArray(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sumArray(numbers))

/* -----------------------------------------------------------------------------
    Task: B

    1. Use a for loop to find the position of 'raspberry' in the list of fruits.
    2. Create a generic function that can find the position of anny fruit in the list. 
*/
console.log("Task: B");

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'pineapple', 'pear', 'peach', 'plum', 'watermelon', 'blueberry', 'raspberry', 'blackberry', 'strawberry', 'cherry', 'lemon', 'lime', 'pomegranate', 'apricot'];
let raspberryPosition = -1;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'raspberry') {
        raspberryPosition = i;
        break;
    }
}

console.log(raspberryPosition);

function fruitPositionFinder(fruitList, wantedFruit) {
    for (let i = 0; i < fruitList.length; i++) {
        if (fruitList[i] === wantedFruit) {
            return i;
        }
    }
    return -1;
}

console.log(fruitPositionFinder(fruits, 'grape'))

/* -----------------------------------------------------------------------------
    Task: C

    1. Declare a new variable to store fruits that start with the letter 'b'.
    2. Use a for or while loop to copy over all fruits starting with 'b' to your new variable (the one you declared in point 1).
    3. Print the number of fruits that start with 'b' (hint: it will be the length of the list from point 2).
*/
console.log("Task: C");

let bFruits = [];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].toLowerCase().startsWith('b')) {
        bFruits.push(fruits[i]);
    }
}

console.log(bFruits.length)

console.log(bFruits)

/* -----------------------------------------------------------------------------
    Task: D
    * Write the code to find the number of fruits in the list that have a name longer than 8 characters.
    * Print the count.
*/
console.log("Task: D");

let fruitsWithLongNameCount = 0;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length > 8) {
        fruitsWithLongNameCount++;
    }
}

console.log(fruitsWithLongNameCount);

let fruitsWithLongName = fruits.filter(fruit => fruit.length > 8);

console.log(fruitsWithLongName);

/* -----------------------------------------------------------------------------
    Task: E
    
    Use loops (for or while) to prove that list A and list B contain exactly the same items.
*/
console.log("Task: E");

const A = [1, 4, 5, "Bananas", true, 3.14, 9.81];
const B = [1, 3.14, 5, 9.81, true, 4, "Bananas"];

function listComparison(list1, list2) {
    if (list1.length !== list2.length) {
        return false;
    }
    let tempList = [...B];

    for (let i = 0; i < list1.length; i++) {
        let found = false;

        for (let j = 0; j < tempList.length; j++) {
            if (list1[i] === tempList[j]) {
                tempList.splice(j, 1);
                found = true;
                break;
            }
        }
        if (!found) {
            return false;
        }
    }
    return true;
}

let result = listComparison(A, B);

console.log(result);