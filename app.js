var name = "Alice";     // Function-scoped, hoisted - avoid in modern JS
let age = 25;           // Block-scoped, can be reassigned
const PI = 3.14159;     // Block-scoped, cannot be reassigned

let score = 0;
score = 10;             // OK - reassignment allowed for let

const MAX = 100;
// MAX = 200;           // Error - cannot reassign a constant variable

let homeAddress = "66 Hunter Avenue"; //Declared a new variable named homeAddress and assigned it the value "66 Hunter Avenue".
let userAge = 47; //Declared a new variable named userAge and assigned it the value 47.
console.log("User's home address is " + homeAddress);  // Prints the homeAddress's value in console
console.log("User's age is " + userAge);      // Prints the userAge's value in console]