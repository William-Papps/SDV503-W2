// // var name = "Alice";     // Function-scoped, hoisted - avoid in modern JS
// // let age = 25;           // Block-scoped, can be reassigned
// // const PI = 3.14159;     // Block-scoped, cannot be reassigned

// let score = 0;
// score = 10;             // OK - reassignment allowed for let

// const MAX = 100;
// // MAX = 200;           // Error - cannot reassign a constant variable

// let homeAddress = "66 Hunter Avenue"; //Declared a new variable named homeAddress and assigned it the value "66 Hunter Avenue".
// let userAge = 47; //Declared a new variable named userAge and assigned it the value 47.
// console.log("User's home address is " + homeAddress);  // Prints the homeAddress's value in console
// console.log(typeof homeAddress)
// console.log("User's age is " + userAge);      // Prints the userAge's value in console]



// // Arithmetic
// 5 + 3;  // 8
// 10 - 4; // 6
// 4 * 3;  // 12
// 9 / 2;  // 4.5
// 9 % 2;  // 1 (remainder of 9 divided by 2)
// 2 ** 3; // 8 (2 raised to the power of 3)

// // Comparison - always prefer === over ==
// 5 === 5;    // true
// 5 !== 3;    // true  (strict: checks type + value)

// 5 == "5";   // true  (loose: converts types before comparing)
// 5 === "5";  // false (loose vs strict: different types, so not equal)
// 10 > 3;     // true
// 4 <= 4;     // true


// // Logical 
// true && false;  // false
// true || false;  // true
// !true;          // false


// // Assignment shorthands
// let x = 10;     
// x += 5;         // x is now 15 (equivalent to x = x + 5)
// x -= 2;         // x is now 13 (equivalent to x = x - 2)
// x *= 2;         // x is now 26 (equivalent to x = x * 2)

// const msg ="Hello, JavaScript!";

// msg.length;               // 18 Number of characters in the string
// msg.toUpperCase();        // "HELLO, JAVASCRIPT!" Converts the string to uppercase
// msg.toLowerCase();        // "hello, javascript!" Converts the string to lowercase
// msg.includes("Java");     // true Checks if the string contains the substring "Java"
// msg.indexOf("Java");      // 7 Returns the index of the first occurrence of "Java"
// msg.slice(7, 17);         // "JavaScript" Extracts a portion of the string from index 7 to 17 (exclusive)
// msg.replace("Hello", "Good Bye"); // "Good Bye, JavaScript!" Replaces "Hello" with "Good Bye"
// msg.split(", ");          // ["Hello", "JavaScript!"] Splits the string into an array using ", " as the separator
// "    Hi    ".trim();      // "Hi" Removes whitespace from both ends of the string

// //console.log("Hello World");

// const message = "Hello, JavaScript!";

// console.log("The length of message is = " + message.length);

// console.log(message.replace("ava", "ddd"));

// const name = "Ali";
// const age  = 25;

// // Old way - concatenation (error-prone)
// const msg1 = "Hello, " + name + "! You are " + age + " years old.";
// console.log(msg1); // Output: Hello, Ali! You are 25 years old.

// //New way - template literal (clean and readable)
// const msg2 = `Hello, ${name}! You are ${age} years old.`;
// console.log(msg2); // Output: Hello, Ali! You are 25 years old.

// //Multi line strings
// const html = `
//     <div>
//         <h1>Welcome, ${name}!</h1>
//         <p>Your age is ${age}.</p>  
//     </div>
//     `;

// // Any expression works inside ${}
// const total = `Price: $${(12.99 * 3).toFixed(2)}`; // Output: Price: $38.97
// console.log(total);

const message = "Hello, JavaScript!";

console.log(`The length of message is = ${message.length}`);
