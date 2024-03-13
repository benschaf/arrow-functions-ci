/**
 * To run this file in Gitpod, use the
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers1(a, b) {
  // Code block
  return a + b;
}
let sum = addTwoNumbers1(3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => {
  // Code block
  return a + b;
}
let sum2 = addTwoNumbers2(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a, b) => a + b;
let sum3 = addTwoNumbers3(3, 5);
console.log(sum);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello!');

const sayHello = () => console.log('Hello!');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
    );
console.log(returnMultipleLines());
