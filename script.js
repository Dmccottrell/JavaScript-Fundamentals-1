/* 
let js = "amazing";
console.log(40 + 8 + 23 - 18);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
let threeYears = 3;

console.log(firstName);

//Variable name conventions

let jonas_matilda = 'JM'

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);


//Data Types - Number,String,Boolean,Null,Undefined

let javascriptIsFun = true;
console.log(javascriptIsFun);

 console.log(typeof true);
 console.log(typeof javascriptIsFun);
 console.log(typeof 23);
 console.log(typeof 'Jonas');

 javascriptIsFun = 'YES!';
 console.log(typeof javascriptIsFun);

 let year;
 console.log(year);
 console.log(typeof year);

 year = 1991;
 console.log(typeof year);

 console.log(typeof null);

 

 // LET, Const and Var

 let age = 30; // mutating a variable using let or in other terms reassigning
 age = 31; // to 31

 //Const variable can not be changed

 const birthYear = 1999;
 //birthYear = 1998; // would recieve a typeerror can reassign

 //Const should be main use, so you don't accidentally change variable
 

 var job = 'programmer'
 job = 'teacher'

 //Y
 lastName = 'Mccottrell';
 console.log(lastName);

 //Let is blocked scope, Var is function Scope


 //BASIC OPERATORS
//Math Operators
const now = 2024
const ageDarryl = now - 1999;
const ageJulia = now - 2000;

console.log(ageDarryl,  ageJulia);

console.log(ageDarryl * 2, ageDarryl / 10, 2**3)
// 2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = 'Darryl';
const lastName = 'McCottrell'
console.log(firstName + ' ' + lastName)

//Use space and concatenate within console log
//Assignment Operators
let x = 10 + 5;
x += 10; // x = x+10 = 25, reassigning the x value
x *= 4; // x=x * 4 = 100
x++; // increments up 1
x--; //decrement down 1
console.log(x);

//Comparison Operators

console.log(ageDarryl > ageJulia); // >, <, >=, <=
console.log(ageJulia >= 18);

const isFullage = ageJulia >= 18;

console.log(now - 1999 > now - 2000)



//String Literals and Templates

const firstName = 'Darryl';
const job = 'Programmer';
const birthYear = '1999';
const year = 2024;


const darryl = "I'm " + firstName + ', a ' + (year - 
    birthYear) + ' year old ' + job + '!';

console.log(darryl)


//Template literal can assemble multiple pieces into one string

const darrylNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(darrylNew)

//Backticks can be use for all strings not just ones with variables

console.log(`Just a regular string...`)
// Multiple line string
console.log('String with \n\
    multiple \n\
    lines');

// template strings new line string version

console.log(`String
    multiple
    lines`);

    

    //IF ELSE Statements

const age = 15;


if(age >= 18){
    console.log('Julia can start driving license🚗');

}
else
{
    const yearsLeft = 18 - age;
    console.log(`Julia is too young. Wait another ${yearsLeft} years :) `);
}

const birthYear = 1999;
let century;

if(birthYear <= 2000){
     century = 20;
}
else{
    century = 21;
}
console.log(century);

*/

//TYPE Conversiion and Type Coercion

//Type conversion want to convert from one type to another

//type conversion
const inputYear = '1999';
console.log(Number(inputYear), inputYear); //converts string to numbers
console.log(Number(inputYear) + 18); //if we wanted to add something to the string that has a number

console.log(Number('Darryl'));
console.log(typeof NAN);

console.log(String(23), 23); //Colored is a number, string is non colored

//type coercion, javascript does it behind the scenes
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - '3'); // converts into  integer number due to operator sign
console.log("23" + "10" + 3); // These are concatenated can be confusing
console.log('23' * '2'); // Converted into numbers

let n = '1' + 1; // 11
n = n-1; //10
console.log(n);

//problem above is concatenated so number is 11, 11 -1 makes n =10