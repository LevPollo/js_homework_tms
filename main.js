// task 1 

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

// task 2

let secInMin = 60;
let minInHour = 60;
let hourInDay = 24;
let daysInYear = 360;

let myAge = 28;

let myAgeInSeconds = myAge *  daysInYear * hourInDay * minInHour * secInMin;


// task 3 

let count = 42;
let userName = "42";

let countToStr = "" + count;
let userNameToNum = + 42;

// let countToStr = String(count);
// let userNameToNum = Number(userName);

// task 4

let a = 1;
let b = 2;
let c = "white bears";

console.log("" + a + b + " " + c);


// task 5

let acces = "acces";
let marine = "marine";
let frost = "frost";
let reproach  = "reproach";
let cleaver = "cleaver";

let lengthWords  = (acces + marine + frost + reproach + cleaver).length;

console.log(lengthWords);

// task 6

let str = "str";
let num = NaN ; 
let arr = [];


console.log(`Variable: str have type: ${typeof str}`);
console.log(`Variable: num have type: ${typeof num}`);
console.log(`Variable: arr have type: ${typeof arr}`);


// task 7

let userNamePrompt = prompt("Type name here:");
let userAgePrompt = prompt("Type age here:");

console.log(`User name is ${userNamePrompt} and ${userAgePrompt} age old.`);

// ADVANCED level

// Task 1 👨‍🏫 

let o = 4;
let p = 3;

o = o + p; 
p = o - p; 
o = o - p;

// Task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1]+codeWord2[1]+codeWord3[1]+codeWord4[1]+codeWord5[1];

console.log(cipher);





