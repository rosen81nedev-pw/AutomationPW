// Convert 30 hours into full days and remaining hours
const totalHours: number = 30;

const fullDays: number = Math.floor(totalHours / 24);
const remainingHours: number = totalHours % 24;

// Convert hours into minutes
const totalMinutes: number = totalHours * 60;

//Print all calculated variables
console.log(`Full days: ${fullDays}`);
console.log(`Remaining hours: ${remainingHours}`);
console.log(`Total minutes: ${totalMinutes}`);

//Update a variable as a counter
let openRequests = 5;

//Add 3 more requests
openRequests += 3;

//Resolve 2 request
openRequests -= 2

console.log('The remaining requests are ${openRequests}');