// The comma operator in JavaScript allows you to evaluate multiple expressions within a single
// statement. It is represented by a comma (,) and is used to separate and evaluate each 
// expression from left to right. The result of the entire expression is the value of the rightmost expression.

// The usage of the comma operator can be seen in various scenarios, such as in for loop headers, function arguments, and variable declarations.

// Here's the syntax:

// expression1, expression2, expression3, ... , expressionN

// Example:
for (let i = 0, j = 10; i < 5; i++, j -= 2) {
    console.log(`i: ${i}, j: ${j}`);
}
