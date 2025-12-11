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
let products = e * f;
let g = 20;
let h = 7;
let quotient = g /  h;
let i = 7;
let j = 14;
let remainder = i % j;

console.log(sum);
console.log(difference);
console.log(products);
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
console.log(ageAda <= ageObi);*/


/*// ASSIGNMENT 2

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
console.log(sumRange([1, 2, 3, 4, 5]));


// Challange 3 ( Array Statistics)
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

}


//  Challenge 4 ( String Reverser )
function reverseString (str){
    let reverseString = ("good")
    console.log(reverseString);
}*/


// ASSIGNMENT 3

// Challenge 2 ( Student Grade Processor)
// Given an array of student with name, scores (array of 3 test scores)
/*let students = [
  {name: "John", scores: [85,90,78]},
  {name: "Ada", scores: [92,88,95]},
  {name: "Chidi", scores: [78,82,75]}
];

 //a) Calculate average score for each student (add average property)
let scores = students.every((sum, student) => {
  return sum + student.scores;
}, 0) / students.length;
console.log(scores);

// b) Find students with average >= 85
let average = students.filter(students => students.average>= 85);
console.log(average);

// c) Get array of just student names
let studentNames = students.map(students => students.name);
console.log(studentName);

// d) Find highest average score
let highestAverage = students.filter(students => students.highestAverage);
console.log(students.highestAverage);

// e) Check if all students passed (average >= 60)
let passed = students.every(students => students.scores >= 60);
console.log(passed);

// Challenge 3 ( Array Transformation )
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
let labels = numbers.map(num =>( num % 2 === 0 ? "even" : "odd"));
console.log(labels);

// Challenge 4 ( Shopping Cart )
// Build a shopping cart system with these operations:
let cart = [
  {id: 1, product: " Laptop", price: 1000, quantity: 1},
  {id: 2, product: "Mouse", price: 25, quantity: 2},
  {id: 3, product: "Keyboard", price: 75, quantity: 1}
];

// Write functions to:
// a) Add new item to cart (use push)
let newItem = {id: 4, product: "Monitor", price: 850, quantity: 3};
  cart.push(newItem);
console.log(cart);

// b) Remove item by id (use filter)
/*function removeItemById(cart , id){
  return cart.filter(item => item.id !== 2);
}
console.log(removeItemById);*/
/*let removeItemById = cart.filter(cart => cart.id === 2);
console.log(removeItemById);

// c) Update quantity of specific item (use map)
/*function specificItem(cart, id, newQuantity){
  return = cart.map(item => item.id === 1 ? {...item, qauantity: newQuantity}: item
);
}
console.log(cart);*/
/*let product = cart.map(keyboard => keyboard.id === 3);
console.log(product);

// d) Calculate total cart value
/*function cartValue(){
  return cart.reduce((total, Laptop) => total + (Laptop.price * Laptop.quantity),0);
}
console.log(cart);*/
/*let cartValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
console.log(cartValue);

// e) Apply 10% discount to items over $50
/*function discountToItems(){
  cart = cart.map(Keyboard => {
    if (Keyboard.price > $50) {
      return {... Keyboard, price: Keyboard.price * 0.9};
    }
    return Keyboard;
  });
}
console.log(cart)*/

/*let discount = cart.map( cart => cart.price %10 > 50 );
console.log(discount);*/

// Assignment 4

// Challenge 1 ( Object Methods )
let bankAccount = {
  accountNumber: "2431046858",
  ownerName: "Celine Ronaldo",
  balance: 5000,
  deposit: function(amount) {
    this.balance += amount},

   withdraw: function(amount) {
    if (amount <= this.balance) {
      this.balance -= amount}
  },
   getStatement: function() {
    return `Account Number: ${this.accountNumber}, Owner name: ${this.ownerName}, Balance: $${this.balance.toFixed(2)}`;
  }
};

//  Test the methods:
console.log(bankAccount.getStatement());

//  Deposit money
bankAccount.deposit(1500);
console.log(bankAccount.getStatement());

//  Withdraw money
bankAccount.withdraw(2000);
console.log(bankAccount.getStatement());


// Challenge 2 ( Destructuring practice )
let employee = {
  id: 101,
  name: "Ada Obi",
  department: "Engineering",
  salary: 85000,
  address: {
    city: "Lagos",
    state: "Lagos State",
    country: "Nigeria"
  },
  skills: ["JavaScript", "React", "Node.js"]
};

// a) Extract name and department into variables
let {name, department} = employee;
console.log(name);
console.log(department);

// b) Extract city from nested address
let {address: {city}} = employee;
console.log(city);

// c)  Rename salary to annualSalary 
let {salary: annualSalary} = employee;
console.log(annualSalary);

// d) Get first skill into variable 
let {skills: [firstSkill]} = employee;
console.log(firstSkill);

// e)  Create a function that takes this object and logs: "Ada Obi works in Engineering in lagos"
function logEmployeeInfo({name, department, address: {city}}) {
  console.log(`${name} works in ${department} in ${city}`);
}

// Challenge 3 ( Spread and Rest Operations)
// a) Merge two arrays of numbers, add a new number in the middle
let array1 = [1, 2, 3];
let array2 = [7, 8, 9];
let mergedArray = [...array1, 4, 5, 6, ...array2];
console.log(mergedArray);


// b) Clone an object and update two properties immutably
let originalObject = {a: 1, b: 2, c: 3};
let clonedObject = {...originalObject, b: 20, c: 30};
console.log(clonedObject);


//c) Write a function calculateTotal(...prices) that accepts any number of prices and returns the sum
function calculateTotal(...prices) {
  return prices.reduce((total, price) => total + price, 0);}
console.log(calculateTotal(10, 20, 30, 40));


//d) Use rest in destructuring to separate first item from remaining items in an array
let numbers = [10, 20, 30, 40, 50];
let [firstItem, ...remainingItems] = numbers;
console.log(firstItem);
console.log(remainingItems);


//e) Merge three config objects with later ones overriding earlier ones
let config1 = {host: "localhost", port: 8080};
let config2 = {port: 3000, useSSL: false};
let config3 = {useSSL: true, timeout: 5000};
let mergedConfig = {...config1, ...config2, ...config3};
console.log(mergedConfig);

// Challenge 4 ( JASON Data Handling )
// Given this JSON String:
let jsonData = `{
  "store": "TechMart",
  "products": [
    {"id": 1, "name": "Laptop", "price": 1200, "inStock": true},
    {"id": 2, "name": "Phone", "price": 800, "inStock": false},
    {"id": 3, "name": "Tablet", "price": 500, "inStock": true}
  ]
}`;

// a) Parse the JSON string into a JavaScript object
let data = JSON.parse(jsonData);
console.log(data);

// b)  Get only products that are in stock
let inStockProducts = data.products.filter(product => product.instock);
console.log(inStockProducts);

// c) Calculate total value of all products
let totalValue = data.products.reduce((total, product) => total + product.price, 0);
console.log(totalValue);

// d) Add a new product using spread
let newProduct = {id: 4, name: "powerbank", price: 5500, instock: true};
data.products = [...data.products, newProduct];
console.log(data.products);

// e) Convert the modified data back to JSON string (formatted)
let modifiedJsonData = JSON.stringify(data, null, 2);
console.log(modifiedJsonData);











