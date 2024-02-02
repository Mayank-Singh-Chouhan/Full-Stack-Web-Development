function findMatches(str) {
    const matches = {
        digits: str.match(/\d/g) || [],
        uppercaseLetters: str.match(/[A-Z]/g) || [],
        lowercaseLetters: str.match(/[a-z]/g) || [],
        specialCharacters: str.match(/[^a-zA-Z0-9]/g) || []
    };

    return matches;
}

// Test the function with a sample string
const sampleString = "Hello World! 123";
const result = findMatches(sampleString);

console.log("Digits:", result.digits);
console.log("Uppercase Letters:", result.uppercaseLetters); 
console.log("Lowercase Letters:", result.lowercaseLetters); 
console.log("Special Characters:", result.specialCharacters); 

// OUTPUT:
// ["1", "2", "3"]
// ["H", "W"]
// ["e", "l", "l", "o", "o", "r", "l", "d"]
// [" ", "!", " "]