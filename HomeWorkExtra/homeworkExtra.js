// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

/* WRITE YOUR ANSWER HERE */
//TODO---------1
// let giveMeRandom = Math.floor(Math.random() * 20);

// const giveMeRandom = [1, 2, 5, 6, 9, 23, 9];

// const sumOfNums = 0;
// function checkArray(giveMeRandom) {
//   for (let i = 0; i < giveMeRandom.length; i++) {
//     if (giveMeRandom[i] > 5) {
//       console.log(giveMeRandom[i]);
//       sumOfNums += giveMeRandom[i];
//     } else {
//       console.log(`The number is bigger than 5: ${false}`);
//     }
//   }
//   return sumOfNums;
// }
// console.log(checkArray(giveMeRandom));

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

/* WRITE YOUR ANSWER HERE */
let shoppingCart = [
  { name: "shoes", id: 1252, quantity: 4, price: 100 },
  { name: "socks", id: "43RDFUV", quantity: 5, price: 10 },
  { name: "shorts", id: "WEHFKGI", quantity: 1, price: 20 },
  { name: "t-shirts", id: "DYY21T", quantity: 2, price: 30 },
  { name: "underwears", id: "VWIDW", quantity: 2, price: 5 },
  { name: "belt", id: "FHUWIED", quantity: 1, price: 15 },
  { name: "coat", id: "cecuyve", quantity: 1, price: 200 },
];

function shoppingCartTotal(shoppingCart) {
  let totalAmount = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    let priceOfItem = shoppingCart[i].price * shoppingCart[i].quantity;
    totalAmount += priceOfItem;
  }
  console.log(totalAmount);
}
shoppingCartTotal(shoppingCart);

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

/* WRITE YOUR ANSWER HERE */
let newObj = {
  name: "bouts",
  id: "UYSUGQUWE",
  quantity: 2,
  price: 75,
};
function addToShoppingCart(obj) {
  shoppingCart.push(obj);
  return shoppingCart.length;
}
console.log(addToShoppingCart(newObj));

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

/* WRITE YOUR ANSWER HERE */

function maxShoppingCart(shoppingCart) {
  let mostExpensive = shoppingCart[0].price;
  for (let i = 1; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > mostExpensive) {
      mostExpensive = shoppingCart[i].price;
    }
  }
  return mostExpensive;
}

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR ANSWER HERE */
function latestShoppingCart(shoppingCart) {
  return shoppingCart[shoppingCart.length - 1];
}
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.

 TODO-------2
*/

/* WRITE YOUR ANSWER HERE */
// function loopUntil(x) {

//   while(x)
// }

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */
let list = [
  1,
  2,
  3,
  "4",
  "5",
  "louis",
  "lelo",
  2.8,
  "4.5",
  true,
  null,
  undefined,
  false,
];

function average(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      !isNaN(Number(arr[i])) &&
      arr[i] !== true &&
      arr[i] !== false &&
      arr[i] !== null
    ) {
      sum += Number(arr[i]);
      count++;
    }
  }
  return sum / count;
}
console.log(average(list));
console.log();

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */
let string =
  "Write a function called longest to find the longest string from a given array of strings louisgadza nadlelo.";
let arrayOfStrings = string.split(" ");

function longest(arr) {
  let longestString = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString) {
      longestString = arr[i].length;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === longestString) {
      return arr[i];
    }
  }
}
console.log(longest(arrayOfStrings));

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */
let email =
  "The function should return true if the emailContent string does not contain the words SPAM .";
function antiSpamFilter(emailContent) {
  if (!emailContent.includes("SPAM") && !emailContent.includes("SCAM")) {
    return true;
  } else {
    return false;
  }
}
console.log(antiSpamFilter(email));

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */
let currentDate = 25;
function getTheDate(date) {
  return currentDate - date;
}
console.log(getTheDate(20));

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
 TODO--------3
*/

/* WRITE YOUR ANSWER HERE */
function matrixGenerator(x, y) {}

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
