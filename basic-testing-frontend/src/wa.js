const person = {
    fname: "Mayuri",
    lname: "Patil",
    age: 1, // Assuming age is provided
    validLicen: "Yes"
}

// Create a final object with spread operator
const { validLicen, ...final } = person;

// Conditionally include validLicen based on age
if (person.age > 20) {
    final.validLicen = validLicen;
}

console.log(final);