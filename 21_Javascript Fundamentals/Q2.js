function isMatch(pattern, str) {
    // Create a regular expression object with the provided pattern
    const regex = new RegExp(pattern);

    // Test if the regex matches the string
    return regex.test(str);
}

console.log(isMatch("hello", "hello world"));
console.log(isMatch("world", "hello world"));
console.log(isMatch("hello", "world"));

console.log(isMatch(/hello/, "hello world"));
console.log(isMatch(/world/, "hello world"));
console.log(isMatch(/hello/, "world"));

// OUTPUT:
// true
// true
// false
// true
// true
// false