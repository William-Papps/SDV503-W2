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
console.log(typeof homeAddress)
console.log("User's age is " + userAge);      // Prints the userAge's value in console]



// Arithmetic
5 + 3;  // 8
10 - 4; // 6
4 * 3;  // 12
9 / 2;  // 4.5
9 % 2;  // 1 (remainder of 9 divided by 2)
2 ** 3; // 8 (2 raised to the power of 3)

// Comparison - always prefer === over ==
5 === 5;    // true
5 !== 3;    // true  (strict: checks type + value)

5 == "5";   // true  (loose: converts types before comparing)
5 === "5";  // false (loose vs strict: different types, so not equal)
10 > 3;     // true
4 <= 4;     // true


// Logical 
true && false;  // false
true || false;  // true
!true;          // false


// Assignment shorthands
let x = 10;     
x += 5;         // x is now 15 (equivalent to x = x + 5)
x -= 2;         // x is now 13 (equivalent to x = x - 2)
x *= 2;         // x is now 26 (equivalent to x = x * 2)
