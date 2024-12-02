/* Declare variables called country, continent and 
population and assign their values according to your own country (population in millions).
Log their values to the console */

const myCountry = "United States of America";
let myCountryPopulation = 334;
console.log(myCountry);
console.log(myCountryPopulation);

const myContinent = "North America";
let myContinentPopulation = 386;
console.log(myContinent);
console.log(myContinentPopulation);

const population = "World Population";
let worldPopulation = 8.9;
console.log(population);
console.log(worldPopulation);

/* Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, 
but don't assign it any value yet.
*/

const isIsland = false;
language = "English";

console.log(typeof isIsland);
console.log(typeof myCountryPopulation);
console.log(typeof myCountry);
console.log(typeof language);

//Const, Let, Var
/*
Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
Try to change one of the changed variables now, and observe what happens.
*/

//completed above

//Basic Operators
/* 
If your country split in half, and each half would contain half the population, then how many people would live in each half?
Increase the population of your country by 1 and log the result to the console.
Finland has a population of 6 million. Does your country have more people than Finland?
The average population of a country is 33 million people. Does you country have less people than the average country?
Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
*/

//1
console.log(myCountryPopulation / 2); // splitting country pipulation 334/2 = 167

//2
myCountryPopulation++; // increment by 1
console.log(myCountryPopulation);

//3
const finlandPopulation = 6;
console.log(myCountryPopulation >= finlandPopulation);
//comparing my countries population against finlands

//4
const averagePopulation = 33;
console.log(myCountryPopulation <= averagePopulation);

//5
const description1 =
  myCountry +
  " " +
  "is in" +
  " " +
  myContinent +
  " " +
  ", and its " +
  myCountryPopulation +
  " " +
  "million people who speak " +
  language;

console.log(description1);

//concatenate strings with variables from my country

//STRING and Template Literals

//Recreate the description variable from the last assignment, this time using the template literal syntax

const newDescription = `${myCountry} is in ${myContinent}, and its ${myCountryPopulation} millon of people who speak ${language}`;

console.log(newDescription);

//IF ELSE STATEMENTS

/* If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.*/

const belowAveragePopulation = 22;
if (myCountryPopulation > 33) {
  console.log( `${myCountry} 's population is above average`);

}else {
    console.log(`${myCountry}'s  pipulation is ${33 - myCountryPopulation} million below average`)

};


// Type Conversion and Coerciion
/* Predict the result of these 5 operations without executing them:

console.log('9' - '5'); // -> ?
console.log('19' - '13' + '17'); // -> ?
console.log('19' - '13' + 17); // -> ?
console.log('123' < 57); // -> ?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?

Execute the operations to check if you were right.*/

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 23
console.log('19' - '13' + 17); // -> 617
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143


//EQUALITY Operators == vs ===
/*
Declare a variable numNeighbours based on a prompt input like this:

prompt('How many neighbour countries does your contry have?');
If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

Test the code with different values of numNeighbours, including 1 and 0.

Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

Reflect on why we should use the === operator and type conversion in this situation.
 */

// const numNeighbours = Number(prompt('How many neighour countries does your country have?')); // using === helps prevent bugs

// if(numNeighbours === 1){
//   console.log("More than 1 border")
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders')
// }

//Logical Operators

const hasAnIsland = false;

if (language === 'English' && population < 390 && !hasAnIsland) {
  console.log(`You should live in the ${myCountry}`);
} else {
  console.log(`${myCountry} does not me your criteria`);
}


//Switch Statements

switch(language){
  case 'chinese':
  case 'mandarin':
    console.log('Most number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :)')
    
}

//Conditional(Ternary) Operator

myCountryPopulation >= 33 ? console.log(`${myCountry}'s population is above average`) :
console.log(`${myCountry}'s population is below average`)