//  --------- One dimentional array  ---------
// zipcodes is an array of strings
let zipcodes: string[] = ['77450', '77494', '77493', '77001'];
 
// Pushing a number to zipcodes will generate an error
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
    console.log("One Dimentional array: \n");
    console.log(zipcodes)
    zipcodes.push('77027');
    console.log("One Dimentional array: \n");
    console.log(zipcodes)

//  --------- Generic Type for One-Dimensional Array ---------
let zipcodess: Array<string> = ['77450', '77494', '77493', '77001'];
    console.log("One Dimentional array: "+ zipcodess +'\n');
    zipcodes.push('77027');
    console.log("One Dimentional array: "+ zipcodess +'\n');

//------------------Empty Array Initialization ------------------

// --------- One-dimensional empty array ---------
    let axis: string[] = [];
    
//  ---------Multi-dimensional empty array ---------
    let coordinates: number[][] = [];
    
    axis.push('x');
    console.log(axis);        // prints ["x"]
    
    coordinates.push([3, 5]);
    coordinates.push([7]);
    console.log(coordinates); // prints [[3, 5], [7]]

// ---------Tuple Type ---------

// This is an array
let header: string[] = ['Name', 'Age', 'Smoking', 'Salary'];
// This is a tuple
let profile: [string, number, boolean, number] = ['Kobe', 39, true, 150000];



//  ---------TypeScript Enum Type ---------
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

// ---------TypeScript Enum Type Variable Assignment ---------
  enum MaritalStatus {
    Single = 'SINGLE',
    Married = 'MARRIED',
    Separated = 'SEPARATED',
    Divorced = 'DIVORCED',
    Widowed = 'WIDOWED'
  };
   
//  --------- Assign a string to a string enum type  ---------
  let eligibility: MaritalStatus;
//   eligibility = 'SEPARATED';
  // Error: Type '"SEPARATED"' is not assignable to type 'MaritalStatus'.
   
  console.log(eligibility = MaritalStatus.Widowed)  // No error


// ---------TypeScript Object Type ---------

// Define an object type for car
let car: {make: string, model: string, year: number};
 
car = {make: 'Toyota', model: 'Camry', year: 2020}; // No error
car = {make: 'Nissan', mode: 'Sentra', year: 2019};
/*
Error: Type '{make: string; mode: string; year: number;}' is not assignable to
type '{make: string; model: string; year: number;}'.
Object literal may only specify known properties, but 'mode' does not exist in
type '{make: string; model: string; year: number;}'.
Did you mean to write 'model'?
*/
car = {make: 'Chevrolet', model: 'Monte Carlo', year: '1995'};
// Error: Type 'string' is not assignable to type 'number'.