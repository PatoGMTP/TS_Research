import promptSync from 'prompt-sync';

const prompt = promptSync();
const message: string = "Press enter to continue ";
let result;

console.log();

let output: string[] = [];

// const interval = setInterval(() => 
//     {
//         while (output[0] != "")console.log(`--${output.shift()}--`);
//         output.shift();
//         console.log();
//         if (output.length === 0) clearInterval(interval);
//     }, 10000)

function p(): void
{
    console.clear();
    output.push("");
    while (output[0] != "")console.log(`--${output.shift()}--`);
    output.shift();
    console.log();
    result = prompt(message);
}

output.push("This application will walk you through code snippets that highlight certain topics");
p();


output.push(`
Topic 1: Unions via the Union operator '|'

This is a proper way to use unions:

let unions: (string | number | boolean);
    unions = 10161990;                      Number is accepted!
    unions = "ABC";                         String is accepted!
    unions = false;                         Boolean is accepted!
`);
p();


output.push(`
This is possible because of the union operator, the '|'.
The variable "unions" is able to take any of the types that
have been "unioned" using this operator.

(string | number | boolean)
`);
p();


output.push(`
Not ok to use union:

let notUnion: (number| string );
    notUnion = 'Team Name ';
    notUnion = true ;               !!! Compiler Error since this type isn't defined as acceptable !!!
    notUnion = 12/2/2021 
`);
p();


output.push(`
Topic 2: Tuples

The following is a tuple of two different types, a string and number:

let tuple: [string, number] = ["Hello there", 123];
`);
p();


output.push(`
By declaring the array like this, TSC knows the contents of each index in the array.
This allows one to use parameters and methods naturally:

let tuple: [string, number] = ["Hello there", 123];

tuple[0].length;
tuple[1].toString();

tuple[1].length;     !!! Error! TSC knows this is a number, which doesn't have a .length !!!
`);
p();


output.push(`
By declaring the array like this, TSC knows the contents of each index in the array.
This allows one to use parameters and methods naturally:

let tuple: [string, number] = ["Hello there", 123];

tuple[0].length;
tuple[1].toString();

tuple[1].length;     !!! Error! TSC knows this is a number, which doesn't have a .length !!!
`);
p();












let str: string = `
let tuple: [string, number] = ["Hello there", 123];

tuple[0].length;
tuple[1].toString();

// tuple[1].length;     // Error! TSC knows this is a number, which doesn't have a .length

tuple.push("Yes", 1);

console.log(tuple);

console.log(tuple[2]);

tuple.push("Test1");
tuple.push("Test2");

tuple.push(123);
tuple.push(124);

console.log(tuple);
`