// One dimentional array 
// zipcodes is an array of strings
var zipcodes = ['77450', '77494', '77493', '77001'];
// Pushing a number to zipcodes will generate an error
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log("One Dimentional array: \n");
console.log(zipcodes);
zipcodes.push('77027');
console.log("One Dimentional array: \n");
console.log(zipcodes);
// Generic Type for One-Dimensional Array
var zipcodess = ['77450', '77494', '77493', '77001'];
console.log("One Dimentional array: " + zipcodess + '\n');
zipcodes.push('77027');
console.log("One Dimentional array: " + zipcodess + '\n');
//  Empty Array Initialization
// One-dimensional empty array
var axis = [];
// Multi-dimensional empty array
var coordinates = [];
axis.push('x');
console.log(axis); // prints ["x"]
coordinates.push([3, 5]);
coordinates.push([7]);
console.log(coordinates); // prints [[3, 5], [7]]
//Tuple Type
// This is an array
var header = ['Name', 'Age', 'Smoking', 'Salary'];
// This is a tuple
var profile = ['Kobe', 39, true, 150000];
// TypeScript Enum Type
// enum MaritalStatus {
//     Single,
//     Married,
//     Separated,
//     Divorced
//   };
//   let employee: [string, MaritalStatus, number] = [
//     'Bob Jones',
//     MaritalStatus.Single,
//     39
//   ];
// TypeScript Enum Type Variable Assignment
var MaritalStatus;
(function (MaritalStatus) {
    MaritalStatus["Single"] = "SINGLE";
    MaritalStatus["Married"] = "MARRIED";
    MaritalStatus["Separated"] = "SEPARATED";
    MaritalStatus["Divorced"] = "DIVORCED";
    MaritalStatus["Widowed"] = "WIDOWED";
})(MaritalStatus || (MaritalStatus = {}));
;
// Assign a string to a string enum type
var eligibility;
//   eligibility = 'SEPARATED';
// Error: Type '"SEPARATED"' is not assignable to type 'MaritalStatus'.
console.log(eligibility = MaritalStatus.Widowed); // No error
