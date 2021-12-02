"use strict";
exports.__esModule = true;
var prompt_sync_1 = require("prompt-sync");
var prompt = prompt_sync_1();
var message = "Press enter to continue ";
var result;
console.log();
var output = [];
// const interval = setInterval(() => 
//     {
//         while (output[0] != "")console.log(`--${output.shift()}--`);
//         output.shift();
//         console.log();
//         if (output.length === 0) clearInterval(interval);
//     }, 10000)
function p() {
    console.clear();
    output.push("");
    while (output[0] != "")
        console.log("--".concat(output.shift(), "--"));
    output.shift();
    console.log();
    result = prompt(message);
}
output.push("This application will walk you through code snippets that highlight certain topics");
p();
output.push("\nTopic 1: Unions via the Union operator '|'\n\nThis is a proper way to use unions:\n\nlet unions: (string | number | boolean);\n    unions = 10161990;                      Number is accepted!\n    unions = \"ABC\";                         String is accepted!\n    unions = false;                         Boolean is accepted!\n");
p();
output.push("\nThis is possible because of the union operator, the '|'.\nThe variable \"unions\" is able to take any of the types that\nhave been \"unioned\" using this operator.\n\n(string | number | boolean)\n");
p();
output.push("\nNot ok to use union:\n\nlet notUnion: (number| string );\n    notUnion = 'Team Name ';\n    notUnion = true ;               !!! Compiler Error since this type isn't defined as acceptable !!!\n    notUnion = 12/2/2021 \n");
p();
output.push("\nTopic 2: Tuples\n\nThe following is a tuple of two different types, a string and number:\n\nlet tuple: [string, number] = [\"Hello there\", 123];\n");
p();
output.push("\nBy declaring the array like this, TSC knows the contents of each index in the array.\nThis allows one to use parameters and methods naturally:\n\nlet tuple: [string, number] = [\"Hello there\", 123];\n\ntuple[0].length;\ntuple[1].toString();\n\ntuple[1].length;     !!! Error! TSC knows this is a number, which doesn't have a .length !!!\n");
p();
output.push("\nBy declaring the array like this, TSC knows the contents of each index in the array.\nThis allows one to use parameters and methods naturally:\n\nlet tuple: [string, number] = [\"Hello there\", 123];\n\ntuple[0].length;\ntuple[1].toString();\n\ntuple[1].length;     !!! Error! TSC knows this is a number, which doesn't have a .length !!!\n");
p();
var str = "\nlet tuple: [string, number] = [\"Hello there\", 123];\n\ntuple[0].length;\ntuple[1].toString();\n\n// tuple[1].length;     // Error! TSC knows this is a number, which doesn't have a .length\n\ntuple.push(\"Yes\", 1);\n\nconsole.log(tuple);\n\nconsole.log(tuple[2]);\n\ntuple.push(\"Test1\");\ntuple.push(\"Test2\");\n\ntuple.push(123);\ntuple.push(124);\n\nconsole.log(tuple);\n";
