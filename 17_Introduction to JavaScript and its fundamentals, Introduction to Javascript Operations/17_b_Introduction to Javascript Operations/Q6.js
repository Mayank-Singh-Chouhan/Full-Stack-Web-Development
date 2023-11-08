function calculateBMI(weightKg, heightM) {
    // Calculate BMI
    const bmi = weightKg / (heightM * heightM);

    return bmi;
}

// Input values
const weightInKg = 70;
const heightInM = 1.75;

// Calculate BMI
const bmiResult = calculateBMI(weightInKg, heightInM);

// Display the result
console.log(bmiResult)
