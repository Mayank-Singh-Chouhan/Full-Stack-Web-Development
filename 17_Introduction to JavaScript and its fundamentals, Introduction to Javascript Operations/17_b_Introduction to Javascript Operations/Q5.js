// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    // Calculate simple interest
    const interest = (principal * rate * time) / 100;

    return interest;
}

// Input values
const principalAmount = 1000;
const annualInterestRate = 5;
const years = 3;

// Calculate simple interest
const interestAmount = calculateSimpleInterest(principalAmount, annualInterestRate, years);

// Display the result
console.log(`Simple Interest: $${interestAmount.toFixed(2)}`);

