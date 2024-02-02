function calculateTax() {
    // Tax rates based on income ranges (example rates)
    const taxRates = [
        { minIncome: 0, maxIncome: 10000, rate: 0.1 },
        { minIncome: 10001, maxIncome: 50000, rate: 0.2 },
        { minIncome: 50001, maxIncome: Infinity, rate: 0.3 }
    ];

    // Inner function to calculate tax based on income
    function calculate(income) {
        // Find the applicable tax rate based on income
        const applicableRate = taxRates.find(rate => income >= rate.minIncome && income <= rate.maxIncome).rate;
        
        // Calculate tax amount
        const taxAmount = income * applicableRate;
        return taxAmount;
    }

    return calculate;
}

// Test the function with various incomes
const calculate = calculateTax();

console.log("Tax for $5000 income:", calculate(5000));
console.log("Tax for $25000 income:", calculate(25000));
console.log("Tax for $75000 income:", calculate(75000));

// OUTPUT:
// Tax for $5000 income: 500
// Tax for $25000 income: 5000
// Tax for $75000 income: 22500