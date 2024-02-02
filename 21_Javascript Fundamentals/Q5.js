function calculateDeliveryTime(packageType) {
    let deliveryTime;

    switch (packageType) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "next day";
            break;
        default:
            deliveryTime = "not specified";
            break;
    }

    return deliveryTime;
}

// Test the program
console.log("Standard package:", calculateDeliveryTime("standard"));
console.log("Express package:", calculateDeliveryTime("express"));
console.log("Overnight package:", calculateDeliveryTime("overnight"));
console.log("Unknown package:", calculateDeliveryTime("unknown"));

// Standard package: 3-5 days
// Express package: 1-2 days
// Overnight package: next day
// Unknown package: not specified