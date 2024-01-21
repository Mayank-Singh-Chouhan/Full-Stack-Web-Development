function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
const num1 = 10;
const num2 = 25;

console.log(`Random number between ${num1} and ${num2}: ${getRandomNumber(num1, num2)}`);
  