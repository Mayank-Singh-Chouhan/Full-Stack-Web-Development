const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
const medianAge = ages.length % 2 === 0
    ? (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
    : ages[Math.floor(ages.length / 2)];

// Find the average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// Find the range of the ages
const ageRange = maxAge - minAge;

// Compare the value of (min - average) and (max - average) using abs() method
const minAverageDifference = Math.abs(minAge - averageAge);
const maxAverageDifference = Math.abs(maxAge - averageAge);

console.log('Sorted Ages:', ages);
console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Age Range:', ageRange);
console.log('Min - Average Difference:', minAverageDifference);
console.log('Max - Average Difference:', maxAverageDifference);