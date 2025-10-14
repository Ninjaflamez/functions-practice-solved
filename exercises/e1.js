// FUNCTIONS: Basics
// BEFORE YOU START: please read the /exercises-info/e1.md file.
// NAMED FUNCTION SYNTAX: is described in /exercises-info/e4.md file.

/**
 * ====================================================
 * Create a function to work as follows:
  * The function name is 'logMessage' strictly.
  * The function MUST use NAMED function syntax.
  * The function logs a message in the console.
  * The function does NOT require any arguments.
 * Message to print: 'Hello, World!'
 * logMessage() => 'Hello, World!'
*/

// Your code goes here...

function logMessage() {
  return logMessage;
}
var logMe = 'Hello ' + 'World';

console.log(logMe);



/**
 * =============================================================
 * Create a function that works as follows:
  * The function name is 'logMyMessage' strictly.
  * The function MUST use NAMED function syntax.
  * The function logs a specific message in the console.
  * The message is a string value passed as an argument
 * Message example: 'I log my first message!'
 * logMyMessage('My message') => 'My message'
*/

// Your code goes here...

function logMyMessage(p1, p2) {
    var myMessage = p1 + p2;
  return p1 + p2;
}
var p1 = 'Hood Sliding like ';
var p2 = 'Bo Duke';

var myMessage = p1 + p2;

console.log(logMyMessage);
console.log(typeof myMessage);
console.log(myMessage);


/**
 * ===============================================================
 * Create a  function that works as follows:
  * The function name is 'logMessageWithMyName' strictly.
  * The function MUST use NAMED function syntax.
  * The function logs a message of 'My name is <name>!'.
  * The name is a string value passed as an argument
 * logMessageWithMyName('Andrey') => 'My name is Andrey!'
*/

// Your code goes here...

function logMessageWithMyName(pt1, pt2) {
    var myName = pt1 + pt2;
  return pt1 + pt2;
}
var pt1 = 'My name is ';
var pt2 = 'Ninjaflamez';

var myName = pt1 + pt2;

console.log(logMessageWithMyName);
console.log(typeof myName);
console.log(myName);

/**
 * ==============================================================
 * Create a function that works as follows:
  * the function name is 'logMyInfo' strictly.
  * The function MUST use NAMED function syntax.
  * The function of logs a message of 'My name is <name>. I am <age> years old!'.
  * The name is a string value passed as an argument.
  * The age is a number value passed as an argument.
 * logMyInfo('Andrey', 18) => 'My name is Andrey. I am 18 years old!'
*/

// Your code goes here...

function logMyInfo(name, age) {
  var myInfo = name + age;
  return name + age;
}
var name = 'My name is Ninjaflamez. ';
var age = 'And I am old enough to remember 8-track tapes!';

var myInfo = name + age;

console.log(logMyInfo);
console.log(typeof myInfo);
console.log(myInfo);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// Do not delete or change the lines beneath
const f = {
  logMessage: logMessage || undefined,
  logMyMessage: logMyMessage || undefined,
  logMessageWithMyName: logMessageWithMyName || undefined,
  logMyInfo: logMyInfo || undefined
}

export { f };
