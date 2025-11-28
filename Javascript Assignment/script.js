/*// ASSIGNMENT 1
// Execise 1 (Personal Information)
const fristName = "Celine";
const lastName = "Ronaldo";
let age = 30;
let isStudent = age===30;
let subjects = ["English", "Chinese", "Igbo"];
let favoriteBook = {
    title: " Things Fall Apart",
    author: "Chinua Achebe",
    year: "1958",
   rating:"10",
};
console.log(fristName);
console.log(lastName);
console.log(age);
console.log(subjects);
console.log(isStudent);
console.log(favoriteBook.title);
console.log(favoriteBook.author);
console.log(favoriteBook.year);
console.log(favoriteBook.rating);

// Execise 2 (Simple Calculator)
let a = 7;
let b = 20;
let sum = a + b;
let c = 16;
let d = 7;
let difference = c - d;
let e = 7;
let f = 7;
let product = e * f;
let g = 20;
let h = 7;
let quotient = g /  h;
let i = 7;
let j = 14;
let remainder = i % j;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);

// Execise 3 (Type Conversion)
let str1 = "150";
let str2 = "100";
let num = 77;
let str = 150===77;

console.log(str1 + str2);
console.log(num);
console.log(str);

// Execise 4 ( Shopping Cart)
let productName = "Babies's Cloth";
let price = 9000;
let quantity = 7;
let taxRate = 0.15;
// Calculate:
let subTotal = (9000 * 7);
let tax = (63000 * 0.15);
let total = (63000 + 9450);

console.log(productName);
console.log(price);
console.log(quantity);
console.log(tax);
console.log(subTotal);
console.log(total);

// Execrise 5 ( Comparison Practice)
let ageObi = 21;
let ageAda = 18;

console.log(ageObi > ageAda);
console.log(ageAda === ageObi);
console.log(ageObi === ageAda);
console.log(ageAda <= ageObi);


// ASSIGNMENT 2
// Conditional statements
// Challenge 1 ( Age classifier)
function classifyAge (age) {
if (0 < 13)
console.log ("Child");
}

 if (13 - 19) {
console.log ("Teenager");
}

 if (20 - 59) {
console.log ("Adult");
}

 if (70 >= 60) {
console.log ("Senior");
}


// Challange 2 ( Number Sum)
function sumRange (start, end){
  let num (1, 2, 3, 4, 5, + 1)
  let total = 0
 for (let num in Range(start, end + 1)){
  total += num
 }
 return total
}
console.log(sumRange([1, 2, 3, 4, 5]));*/


/*// Challange 3 ( Array Statistics)
function getStats (number){
let min = nummber [7];
let max = number [27];
let sum = number [34];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
    sum += numbers[i];
  }

  let average = sum / numbers.length;
  return { min: min, max: max, average: average };

}*/


/*//  Challenge 4 ( String Reverser )
function reverseString (str){
    let reverseString = ("good")
    console.log(reverseString);
}*/


// ASSIGNMENT 3

// Challenge 2 ( Student Grade Processor)
// Given an array of student with name, scores (array of 3 test scores)
let students = [
  {name: "John", scores: [85,90,78]},
  {name: "Ada", scores: [92,88,95]},
  {name: "Chidi", scores: [78,82,75]}
];

// a) Calculate average score for each student (add average property)
let scores = students.forEach((sum, student) => {
  return sum + student.scores;
}, 0) / students.length;
console.log(students.scores);

// b) Find students with average >= 85
let average = students.filter(students => students.average>= 85);
console.log(students.average);

// c) Get array of just student names
let studentNames = students.map(students => students.name);
console.log(students.name);

// d) Find highest average score
let highestAverage = students.filter(students => students.highestAverage);
console.log(students.highestAverage);

// e) Check if all students passed (average >= 60)
let passed = students.every(students => students.scores >= 60);
console.log(students.passed);

// Challenge 3 (Array Transformation)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use array methods to:
// a) Get sum of all even numbers
let even = numbers.filter(num => num % 2 === 0);
console.log(even);

// b) Create array with squares of odd numbers only
let odd = numbers.map(num => num * num);
console.log(odd);

// c) Find first number greater than 7
let greaterThan = numbers.find(num => num > 7);
console.log(greaterThan);

// d) Check if all numbers are positive
let positive = numbers.every(num => num > 0);
console.log(positive);

// e) Create array with "even" or "odd" labels for each number
let evenOdd = numbers.forEach(num => num)









