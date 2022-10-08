/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */
area(4, 5);

function area(l1, l2) {
  let areaOfRectangle = l1 * l2;
  console.log(areaOfRectangle);
}

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */
console.log(crazySum(4, 6));

function crazySum(x, y) {
  if (x === y) {
    return x * 3;
  } else {
    return x + y;
  }
}

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

console.log(crazyDiff(23));

function crazyDiff(x) {
  if (x > 19) {
    return 3 * (x - 19);
  } else {
    return 19 - x;
  }
}

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

console.log(boundary(400));

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */
// = "Strive in front of the given string";
function strivify(str) {
  str = str.split(" ");
  let finalStr = "";
  let finalStr2 = [];
  for (let i = 0; i < str.length; i++) {
    if (str[0] === "Strive") {
      finalStr = str.join(" ");
      return finalStr;
    } else {
      str.unshift("Strive");
      finalStr2 = str.join(" ");
      return finalStr2;
    }
  }
}

console.log(strivify("in front of the given string"));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

check3and7(7);

function check3and7(n) {
  if ((n > 0 && n % 3 === 0) || (n > 0 && n % 7 === 0)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */
console.log(reverseString("Strive"));

function reverseString(string) {
  let reverseStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseStr += string[i];
  }
  return reverseStr;
}

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

console.log(upperFirst("word of a given string passed as a parameter"));

function upperFirst(sentence) {
  let arrOfWords = sentence.split(" ");
  let capitalizedWord;
  let newArrOfWords = [];
  for (let i = 0; i < arrOfWords.length; i++) {
    capitalizedWord = arrOfWords[i][0].toUpperCase() + arrOfWords[i].substr(1);
    newArrOfWords.push(capitalizedWord);
  }
  return newArrOfWords.join(" ");
}

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

cutString("first and last character of a given string passed as a parameter");
function cutString(str) {
  let newStr = str.slice(1, str.length - 1);
  console.log(newStr);
}

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

console.log(giveMeRandom(8));

function giveMeRandom(n) {
  let arrOfRandomNums = [];
  for (let i = 0; i < n; i++) {
    arrOfRandomNums.push(Math.floor(Math.random() * 9 + 1));
  }
  return arrOfRandomNums;
}

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
