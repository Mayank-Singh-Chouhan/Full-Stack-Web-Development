// The ternary operator (also known as the conditional operator) is a concise way to 
// express conditional statements in JavaScript. It allows you to create conditional
// expressions that evaluate to one of two values based on a condition.

// The syntax of the ternary operator is as follows:

// condition ? valueIfTrue : valueIfFalse

// condition: A boolean expression that is evaluated.
// valueIfTrue: The value to be returned if the condition is true.
// valueIfFalse: The value to be returned if the condition is false.

const number = 7;

const isEvenOrOdd = number % 2 === 0 ? "Even" : "Odd";

console.log(`The number ${number} is ${isEvenOrOdd}.`);