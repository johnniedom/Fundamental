'use strict'

 const currentAge = birthYear => 2022 - birthYear;
 const age1 = currentAge(2009)
//  console.log(age1)



// const ageCurrent = (firstName, yearOfBirth) => {
//     const age2 = calAge(yearOfBirth)
//     return `${firstName} you are ${age2} years old`
//  }
//  console.log(ageCurrent(`Johnnie`, 2003))

//  const cakeCutter = cutter => cutter *2;
const cakeCutter =(cutter)=>{
    return cutter * 5
}

 const makeCake = function (cakeMaker){
   const cakeMake =cakeCutter(cakeMaker)
   return `Hello you have ${cakeMake} cakes`
 }
//  console.log(makeCake(2));
 const calAge = birthYear => 2023 - birthYear

 const yearUntilRetirement = function (firstName, yearOfBirth){
    const  age = calAge(yearOfBirth)
    const  retirement = 50 -age;
    return `${firstName} you have ${retirement} years till your Retirement`
 }

//  console.log(yearUntilRetirement(`johnnie`, 2003))



 var bmiCal = function (weight, height){
    const bmi = weight / (height ** 2 )
    return bmi
 }
//  console.log(bmiCal(65, 1.65))

//  Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!// Your tasks:// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores// 2. Use the function to calculate the average for both teams// 3. Create a function 'checkWinner' that takes the average score of each team// as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2// 5. Ignore draws this time// Test data:// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27// Hints:// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.//  Apply this to the team's average scores 😉// GOOD LUCK 😀

const calcAverage = (score, score1, score2) => (score +score1 + score2) / 3;
   //  console.log(calcAverage(34, 34, 32)) 
let  koalasScore = calcAverage(29, 100, 71);
let dolphinsScore = calcAverage(20, 20 , 180)

const checkWinner = function (avgDolphins, avgKoalas){
if (avgDolphins >= 2 * avgKoalas){
  const results = (`Dolphins wins with ${avgDolphins} vs ${avgKoalas}`)
   return results
}else if (avgKoalas >= 2* avgDolphins){
  const results = (`Koalas wins with ${avgKoalas} vs ${avgDolphins}`)
    return results
}else {
  const results = (`There are no winners in this competition `)
  return results
}
}
const winner = checkWinner(dolphinsScore, koalasScore)
// console.log(winner)

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉
// GOOD LUCK 😀

//  function (bill){
//    const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
//    return tip
// }
// console.log(bills(100))

const calcTip = function (bill){
   const tip =bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
   return tip
};
const tip1 = (calcTip(125))


const calcTip1 = function (bill){
   const tip =bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
   return tip
};
const tip2 =(calcTip1(555))


const calcTip2 = function (bill){
   const tip =bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
   return tip
};
const tip3= (calcTip2(44));


const tips = new Array(tip1, tip2, tip3);
const total = new Array( 125 + tip1 , 555 + tip2, 44 + tip3);
// console.log(total);



// DOT NOTATION CHALLENGE 

// const jonasFriend = {
//    bestFriend : "Michael",
//    friend1: `Peter`,
//    friend2: `Steven`,
// }

// const greet = day=> `hello, good ${day}`;
// console.log(greet(`Morning`));

// const bill1 = (products, tax) => {
//    let total = 0;
//    for (let  i =0 <products.length; i++){
//       total += products[i] + products[i] * tax;
//    }
//    return total
// }
// const summary = {
//    firstName: `Johnnie`,
//    lastName: `Chukwudi`,
//    birthYear :`2003`,
//    job : `Student`,
//    friend : [`Romanus`, `Jane`, `Peter`],
//    hasDiverLicense : false,

const summary = {
   firstName: `Johnnie`,
   lastName: `Chukwudi`,
   birthYear : 2003,
   job : `Student`,
   friend : [`Romanus`, `Jane`, `Peter`],
   hasDiverLicense : false,
   
   // calcAge: function (){
   //  const age= 2022 - this.birthYear;
   // return console.log(age);
   // }

   calAge : function (){
      this.age = 2022 - this.birthYear;
   },

     getSummary: function () {
     return `${this.firstName} is a ${this.age} student,  He ${ this.hasDiverLicense ? `has a driver's license` : `Has no driver's license` }`
       }

   // getSummary: function () {
   // return `${this.firstName} is a ${this.age} student,  He ${ this.hasDiverLicense ? `has driver's license` : `Has no driver's license` }`
   // }
}

console.log( summary.getSummary())

// this.age= 2022 - this.birthYear;
// console.log(this.age)

// console.log()