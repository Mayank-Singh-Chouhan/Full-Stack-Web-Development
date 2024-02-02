function extractParts(pattern, str) {
    const regex = new RegExp(pattern);

    const match = regex.exec(str);

    if (!match) {
        return null;
    }

    const parts = {};
    match.forEach((value, index) => {
        if (index !== 0) {
            parts[`group${index}`] = value;
        }
    });

    return parts;
}

const dateString = "Today's date is 2024-02-02";
const datePattern = /(\d{4})-(\d{2})-(\d{2})/;
const dateParts = extractParts(datePattern, dateString);

console.log(dateParts);

// OUTPUT:
// { group1: '2024', group2: '02', group3: '02' }
