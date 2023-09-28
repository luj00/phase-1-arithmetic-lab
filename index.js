
// Challenge 1: Create a variable 'multiply' that multiplies num1 and num2 to get 62
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

// Challenge 2: Create a variable 'random' that generates a random integer greater than 0
const random = Math.ceil(Math.random() * 100); // Generates a random integer between 1 and 100

// Challenge 3: Create a variable 'mod' that calculates the remainder of num3 divided by num4, where the remainder is 4
const num3 = 64;
const num4 = 60;
const mod = num3 % num4;

// Challenge 4: Create a variable 'max' that finds the highest number in a set
const numArray = [2, 5, 9, 16, 20, 6, 1];
const max = Math.max(...numArray); // Finds the highest number in the array

// You can log the results to verify them
console.log("multiply:", multiply); // Output: 62
console.log("random:", random); // Output: A random integer greater than 0
console.log("mod:", mod); // Output: 4
console.log("max:", max); // Output: 20
