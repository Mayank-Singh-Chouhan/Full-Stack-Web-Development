function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args.concat(nextArgs));
            };
        }
    };
}

// Test with a function that adds two numbers
function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);

console.log(curriedAdd(2)(3)); 
console.log(curriedAdd(2, 3)); 
console.log(curriedAdd(2)(3, 4)); 
console.log(curriedAdd(2)(3)(4));

// OUTPUT:
// 5
// 5
// 5
// 5