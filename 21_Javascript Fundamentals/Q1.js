function outerFunction(parameter) {
    // Variable declared within outerFunction
    const localVar = "Local variable";

    // Inner function accessing both parameter and localVar
    function innerFunction() {
        console.log(`Parameter of outerFunction: ${parameter}`);
        console.log(`Local variable of outerFunction: ${localVar}`);
    }

    // Return the inner function
    return innerFunction;
}

const inner = outerFunction("Parameter value");
// Even after outerFunction has finished executing, inner function maintains access to its variables
inner(); 


// OUTPUT:
// Parameter of outerFunction: Parameter value
// Local variable of outerFunction: Local variable

