/*
    Hi.
    The purpose is to practice a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    In this problem set, we focus specifically on lists, loops (for), and functions.
    I.e. use litst and loops, dont use "fancy" alternatives.

    DO NOT change the code provided unless the task specifically says you should.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print out all the names in the list, one name per line.
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}
/* -----------------------------------------------------------------------------
    Task: A
    You are given a list (Array) named "tall."
    Write the code that will ensure the variable "sum" contains the sum of all the numbers in the list (i.e., tal1 + tal2 + tal3 + tal4 + ... and so on).
*/
console.log("Task: A");

const tall = [1, 2, 3, 4, 5];
let sumArrayTall = 0;

for (let i = 0; i < tall.length; i++) {
sumArrayTall += tall[i];
}

console.log("The sum of array -tall- is: " + sumArrayTall);

/* -----------------------------------------------------------------------------
    Task: B
    Below is a function "summer," which is incomplete; it should return the sum of the numbers it receives in a list.
    Your task is to complete the function so that it does that.
*/
console.log("Task: B");

let currentList = tall;
let sumCurrentList = 0;

function summer(currentList) {
    for (let i = 0; i < currentList.length; i++) {
        sumCurrentList += currentList[i];
    }

    return sumCurrentList;

}

const sum = summer(tall);

if (sum === 15) {
    console.log("🎉 Task B is most likely correct");
} else {
    console.log("😱 Task B has some issues, but you can fix it 👍");
}


/* -----------------------------------------------------------------------------
    Task: C
    You are given a list (Array) named "andreTall."
    Write the code that will ensure the variable "differans" contains the difference of all the numbers in the list (i.e., tal1 - tal2 - tal3 - tal4 - ... and so on).
*/
console.log("Task: C");


const andreTall = [6, 7, 8, 9];

let differans = andreTall[0];

for (let i = 1; i < andreTall.length; i++) {
    differans -= andreTall[i];
}

console.log(differans);



/* -----------------------------------------------------------------------------
    Task: D
    Below is a function "differansier," which is incomplete; it should return the difference of the numbers it receives in a list.
    Your task is to complete the function so that it does that.
*/
console.log("Task: D");

let currentDifferensierList = andreTall;
let diffCurrentList = currentDifferensierList[0];


function differansier(currentDifferensierList) {

    for (let i = 1; i < currentDifferensierList.length; i++)
        diffCurrentList -= currentDifferensierList[i];
    return diffCurrentList;
}

const diff = differansier(currentDifferensierList);

if (diff === -18) {
    console.log("🎉 Task D is most likely correct");
} else {
    console.log("😱 Task D has some issues, but you can fix it 👍");
}


/* -----------------------------------------------------------------------------
    Task: E
    Create a function named "multipliser." This function should take (as a parameter) a list of numbers.
    The function should return the product of the numbers (i.e., tal1 * tal2 * tal3 * ... and so on).
*/
console.log("Task: E ")

let multi = [1, 2, 3, 4];
let currentMultiList = multi;
let productMultipliser = 1; 

function multipliser(currentMultiList) {
    let productMultipliser = currentMultiList[0];
    for (let i = 1; i < currentMultiList.length; i++){
    productMultipliser *= currentMultiList[i]; 
    }
    return productMultipliser;
}
const multipro = multipliser(currentMultiList);
console.log("Example results: " + multipro);