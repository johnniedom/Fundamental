/*let js = "amazing";
console.log(40 + 6 + 8 +23 - 10);

console.log("johnnie");
console.log(23);

let firstName = "Modebe";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let johnnie_modebe ="jm";
let $function = 27;

let person = "johnnie"
let PI = 3.1415

let myFirstJob = "coder";
let currentJob = "Programming";

let job1 = "programmer";
let job2 = "webDevelopment";

console.log(myFirstJob);

// Coding Challenge #1 part 1

// let BMI = mass / (height ** 2);

//mark first Mass and Height
const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / (markHeight ** 2);

// mark second Mass and Height 
const markMass2 = 95;
const markHeight2 = 1.88;
const markBMI2 = markMass2 / (markHeight2 ** 2);

//John first Mass and Height
const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = johnMass / (johnHeight ** 2);

// John second Mass and Height
const johnMass2 = 85;
const johnHeight2 = 1.76;
const johnBMI2 = johnMass2 / (johnHeight2 ** 2);

const  markHigherBMI = (markBMI  > johnBMI)
const  markHigherBMI2 = (markBMI2 > johnBMI2);

// console.log(markBMI +"kg", johnBMI +"m" , markHigherBMI);
// console.log(markBMI2 +"kg", johnBMI2 +"m" , markHigherBMI2);

//Coding Challenge #2 part 1
let bmiResult;

if( markBMI2 > johnBMI2){
    bmiResult = `Mark BMI ${markBMI2} is higher than John's BMI ${johnBMI2} `
}else{
    bmiResult = `John's BMI ${johnBMI2} is higher than Mark's BMI ${markBMI2} `
}
console.log(bmiResult)


//Coding Challenge #3 part 1
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106



// if (koalas > dolphins){
//     console.log(`Koalas are the Winners! of the competition:)`)
// }else{
//     console.log(`Dolphins are the Winners! of the competition:)`)
// }



// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// SECOND ROUND 2 
// const leastAveragePoints = 100;


// const koalaScore1__1 = 109;
// const koalasScore2__1 = 95;
// const koalasScore3__1= 123;
// const koalasAverageScore__1 = ( koalaScore1__1 + koalasScore2__1 + koalasScore3__1 ) / 3;
// console.log(koalasAverageScore__1)
// const koalas__1 = koalasAverageScore__1 >= leastAveragePoints;
//  console.log(koalas__1)

// // TEAM 2
// const dolphinsScore1__1 = 97;
// const dolphinsScore2__1 = 112;
// const dolphinsScore3__1 = 101;
// const dolphinsAverageScore__1 = (dolphinsScore1__1 + dolphinsScore2__1 + dolphinsScore3__1 ) / 3;
// const dolphins__1 = dolphinsAverageScore__1 >= leastAveragePoints;
// console.log(dolphins__1)

// if (koalas__1 && dolphins__1){
//     console.log(`Koalas are the Winners! of the competition:)`)
// }else{
//     console.log(`Dolphins are the Winners! of the competition:)`)
// }

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// SECOND ROUND 3

// const dolphinsScore1__2 = 97;
// const dolphinsScore2__2 = 112;
// const dolphinsScore3__2 = 101;
// const dolphinsAverageScore__2 = (dolphinsScore1__2 + dolphinsScore2__2 + dolphinsScore3__2 )/3 ;
// const dolphins__2 = dolphinsAverageScore__2 >= leastAveragePoints;
// // console.log(dolphins__2)


// const koalaScore1__2 = 109;
// const koalasScore2__2 = 95;
// const koalasScore3__2= 106;
// const koalasAverageScore__2 = ( koalaScore1__2 + koalasScore2__2 + koalasScore3__2 ) /3;
// const koalas__2 = koalasAverageScore__2 >= leastAveragePoints;
// //  console.log(koalas__2)

// console.log(dolphinsAverageScore__2, koalasAverageScore__2)

// if (dolphinsAverageScore__2 === koalasAverageScore__2) {console.log(`There are no Winners! The score is ${dolphinsAverageScore__2, koalasAverageScore__2} Draw score`)}
// else {
//     console.log( `The Winner is `)
// }
// This a really bad code the proper one is written below as
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// TEAM 1 
const averageKoalasScore = (109+ 95+ 106) / 3;
const koalasScore = averageKoalasScore;

// TEAM 2
const averageDolphinsScore = (97+ 112 + 101) / 3;
const dolphinsScore = averageDolphinsScore;

console.log(koalasScore, dolphinsScore)

if (koalasScore > dolphinsScore && koalasScore >= 100) {
    console.log(` The Winners are koalas`)
}else if(dolphinsScore >koalasScore && dolphinsScore >= 100){
    console.log(`The Winners! are Dolphins`)
}else if(koalasScore === dolphinsScore && dolphinsScore >= 100 && koalasScore >= 100){
    console.log(`This is a Draw Game both  won equal prize thanks for participating `)
}else {
    console.log(` There is no Winner!`)
}// THIS IS THE CORRECT CODE... 

// CODE CHALLENGE #4 CONVERTING SWITCH STATEMENT TO IF/ELSE STATEMENT.

const day = 'saturday';

if (day === 'monday'){
    console.log( `Plan course structure`)
    console.log(`Go to coding meet up`)
}else if (day === 'tuesday'){
    console.log(`Prepare theory videos`)
}else if (day === `wednesday` || day === `thursday`){
    console.log(`Write code examples`)
}else if (day === `friday`){
    console.log(`Record videos`)
}else if (day === `saturday` || day === `sunday`){
    console.log(`Enjoy the weekend`)
}else{
    console.log(` invalid day of the week`)
}
 */
//Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// 400Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉


// const bill = 56;
// let tip;
// if (bill <=300 && bill>=50){
//    tip =0.15
//    console.log(`The bill was ${bill}, the tip was ${bill * tip}, and the total value ${bill + (bill * tip) }`)
// }else{
//     tip =0.2
//     console.log(`The bill is ${bill}, the tip was ${bill * tip}, and the total value ${bill +(bill * tip)}`)
// }
// this is the conditional operator version 
const bill = 20;
const tip = bill <=300 && bill >=50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip }`)

