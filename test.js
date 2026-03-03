const msg ="Hello World! JavaScript!";

const newMsg = msg.split(" ");
const partOne = console.log(newMsg[0]); // Output: Hello
const partTwo = console.log(newMsg[1]); // Output: World
const partThree = console.log(newMsg[2]); // Output: JavaScript    



console.log(partTwo, partThree, partOne); // Output: World JavaScript Hello

// let strings = {
//     msgOriginal: msg,
//     msgLength: msg.length,
//     msgUpper: msg.toUpperCase(),
//     msgLower: msg.toLowerCase(),
//     msgIncludes_Java: msg.includes("Java"),
//     msgIndex_Of_Java: msg.indexOf("Java"),
//     msgSliced: msg.slice(7, 17),
//     msgReplaced: msg.replace("Hello", "Good Bye"),
//     msgSplit: msg.split(", "),
//     msgTrimmed: "    Hi    ".trim()
// };

// console.log("The method used and output.")
// for (let key in strings) {
//     console.log(key + ": " + strings[key]);
// };
// console.log("");
// console.log("The output without method used.")
// for (let key in strings) {
//     console.log(strings[key]);
// };
