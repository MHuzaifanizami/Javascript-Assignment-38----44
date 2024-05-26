// Chapter 38 -- 44 

// Q no 01
//  Write a custom function power ( a, b ), to calculate the value of
// a raise

// Q no 02 
// Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// function isLeapYear(year) {
//     if (year % 4 !== 0) {
//         return false;
//     }
//     if (year % 100 !== 0) {
//         return true;
//     }
//     if (year % 400 !== 0) {
//         return false;
//     }
//     return true;
// }

// // Example usage:
// let year = 2010; 
// if (isLeapYear(year)) {
//     console.log(year + ' is a leap year.');
// } else {
//     console.log(year + ' is not a leap year.');
// }


// Q no 03  
// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


// Q No 04 
// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.




// function averageCalculate(subject1, subject2, subject3) {
//     return average = (subject1 + subject2 + subject3) / 3;

// }

// function percentCalculate(subject1, subject2, subject3) {
//     var totalMark = subject1 + subject2 + subject3;
//     var percent = (totalMark / 300) * 100;
//     return percent;
// }

// function main() {
//     var totalAverage = averageCalculate(subject1, subject2, subject3);
//     var totalPercent = percentCalculate(subject1, subject2, subject3);

// console.log("Average : " + totalAverage);
// console.log("Percentage  : " + totalPercent);

// }

// var subject1 = 80;
// var subject2 = 50;
// var subject3 = 90;
// main(subject1, subject2, subject3);                      


// Q no 05 

// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now

// var str = 'my name is huzaifa';
// var result = str.indexOf('huzaifa');
// console.log(result);

// function myIndexOf(str, val) {

//     for (var i = 0; i < str.length; i++) {

//         if (str[i] == val) {
//             return i;
//         }
//     }
//     return "Not Avaliable";
// }

// result = myIndexOf("namih", "h");
// console.log(result)


// // Q no 06 
// Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// Method 01  **********************

// function vowels(vowel) {
//     var rep = '';
//     var result = '';
//     for (var i = 0; i < vowel.length; i++) {
//         if (vowel[i] == "a" || vowel[i] == "e" || vowel[i] == "i" || vowel[i] == "o" || vowel[i] == "u") {
//             rep = vowel[i].replace("vowel[i]", "")
//             // console.log(rep)
//         } else {
//             result += vowel[i];
//             // console.log(result)
//         }

//     }
//     return result
// }
// console.log(vowels('my name is huzaifa'));

// Method 02 *****************

// function removeVowels(sentence){
// return sentence.replace(/[aeiouAEIOU]/g, '')
// }
// var sentence = "this is a place of you"
// var noVowels = removeVowels(sentence);
// console.log(noVowels)


// Q no 07 

// Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence.
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui

// function countConsecutiveVowels(sentence) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";

//     for (let i = 0; i < sentence.length - 1; i++) {
//         let firstChar = sentence[i];
//         let secondChar = sentence[i + 1];

//         if (vowels.includes(firstChar) && vowels.includes(secondChar)) {
//             switch (firstChar + secondChar) {
//                 case 'aa': case 'ae': case 'ai': case 'ao': case 'au':
//                 case 'ea': case 'ee': case 'ei': case 'eo': case 'eu':
//                 case 'ia': case 'ie': case 'ii': case 'io': case 'iu':
//                 case 'oa': case 'oe': case 'oi': case 'oo': case 'ou':
//                 case 'ua': case 'ue': case 'ui': case 'uo': case 'uu':
//                 case 'AA': case 'AE': case 'AI': case 'AO': case 'AU':
//                 case 'EA': case 'EE': case 'EI': case 'EO': case 'EU':
//                 case 'IA': case 'IE': case 'II': case 'IO': case 'IU':
//                 case 'OA': case 'OE': case 'OI': case 'OO': case 'OU':
//                 case 'UA': case 'UE': case 'UI': case 'UO': case 'UU':
//                 case 'Aa': case 'Ae': case 'Ai': case 'Ao': case 'Au':
//                 case 'Ea': case 'Ee': case 'Ei': case 'Eo': case 'Eu':
//                 case 'Ia': case 'Ie': case 'Ii': case 'Io': case 'Iu':
//                 case 'Oa': case 'Oe': case 'Oi': case 'Oo': case 'Ou':
//                 case 'Ua': case 'Ue': case 'Ui': case 'Uo': case 'Uu':
//                 case 'aA': case 'eA': case 'iA': case 'oA': case 'uA':
//                 case 'aE': case 'eE': case 'iE': case 'oE': case 'uE':
//                 case 'aI': case 'eI': case 'iI': case 'oI': case 'uI':
//                 case 'aO': case 'eO': case 'iO': case 'oO': case 'uO':
//                 case 'aU': case 'eU': case 'iU': case 'oU': case 'uU':
//                     count++;
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }

//     return count;
// }


// let sentence = "Pleases read this application and give me gratuity";
// let result = countConsecutiveVowels(sentence);
// console.log(result); 

// Q no 08 *************

// The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// function checkMeter(kilometer) {
//     var convertMeter = kilometer * 1000
//     return convertMeter + " Meters"
// }

// function checkFeet(kilometer) {
//     var convertFeet = kilometer * 3280.84;
//     return convertFeet + " Feet" 
// }

// function checkInch(kilometer) {
//     var convertInch = kilometer * 39370.1;
//     return convertInch + " Inch" 
// }

// function checkCentiMiter(kilometer) {
//     var convertCentimeter = kilometer * 100000;
//     return convertCentimeter + " Centimeter" 
// }


// var kilometer = prompt("enter a distance");
// var meter = checkMeter(kilometer);
// var feet = checkFeet(kilometer);
// var inch = checkInch(kilometer);
// var centimeter = checkCentiMiter(kilometer);

// document.write(kilometer +" Kilometer"+ "<br>");
// document.write(meter + "<br>")
// document.write(feet + "<br>")
// document.write(inch + "<br>")
// document.write(centimeter + "<br>")


// Q no 09 

// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour

// function checkOverTime(userInp) {
//     var SalaryPerHour = 12;
//     if (userInp > 40) {
//         var OverTimeHours = userInp - 40;
//         OverTimeSalary = OverTimeHours * 12;
//     }
//     return OverTimeSalary + " Rs"

// }


// var userInp = prompt("Enter your hours");
// var overTime = checkOverTime(userInp);
// console.log(overTime)


// Q no 10 

// A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// function checkAmount(userInp) {
//     var totalAmount = userInp * 100;
//     var hundredNotes = Math.floor(totalAmount / 100);
//     var remainAmount = userInp % 100;
//     var fiftyNotes = Math.floor(remainAmount / 50);
//     var remainAmount = userInp % 50;
//     var tenNotes = Math.floor(remainAmount / 10);
    
//     document.write(`Hundred Notes : ${hundredNotes} <br> Fifty Notes : ${fiftyNotes} <br> Ten Notes : ${tenNotes}`)
// // return hundredNotes,fiftyNotes,tenNotes
// }

// var userInp = prompt("Enter Your Amount in hundred");
// var result = checkAmount(userInp);



//  ***************************************************************************************