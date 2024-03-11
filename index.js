// Write your code in this file!
const currentUser = 'Grace Hopper';
const myString = 'template literal';

const myNumber = 10;

const myBoolean = false;

`Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!

Beware that new lines inside of a ${myString} will be preserved as new lines in the resulting ${typeof myString}!`;
//=> "Saying that interpolation with template literals is better than concatenation 100% of the time is simply false. But it is pretty cool!
let greeting = "Hello, world!";
let firstChar = greeting.charAt(0); // firstChar will be "H"
let lastChar = greeting.charAt(greeting.length - 1); // lastChar will be "!"

console.log(firstChar); // Output: H
console.log(lastChar); // Output: !
let message = "JavaScript is awesome!";
let subString = message.substring(10, 17); // "awesome"

console.log(subString); // Output: awesome
let text = "Hello, how are you doing today?";
let index = text.indexOf("are"); // index will be 7

console.log(index); // Output: 7

let secondIndex = text.indexOf("are", 10); // Search from index 10
console.log(secondIndex); // Output: 16 (index of the second "are")
let sentence = "JavaScript is cool but sometimes confusing.";
let replacedSentence = sentence.replace("confusing", "challenging");

console.log(replacedSentence); // Output: "JavaScript is cool but sometimes challenging."

let name = "john doe";
let upperName = name.toUpperCase();

console.log(upperName); // Output: JOHN DOE
// let message = "   Trim this string!  ";
// let trimmedMessage = message.trim();

// console.log(trimmedMessage); // Output: "Trim this string!"
let firstName = "Alice";
let lastName = "Smith";
let fullName = firstName.concat(" ", lastName);

console.log(fullName); // Output: Alice Smith
