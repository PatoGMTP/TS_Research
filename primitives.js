var str = "I'm a string!";
str.length; // Strings have parameters
str.toLocaleUpperCase(); // String have methods
parseInt(str); // Certain functions
console.log(typeof str); // str is type string as expected
console.log(typeof "123");
// strings, and in fact all primitives, are immutable, so no str.function() will ever change str's contents
var num;
num = 10; // Integer
num = 3.1415; // Float
num = 3; // Binary
num = 9; // Octal
num = 0x11; // Hex
num = 123e-1; // Scientific format
num = NaN; // NaN is a special global number
num = Infinity; // Infinity is a special global number
num = -Infinity; // Any number can be made negative
// Whenever special numbers are used in arithmetic expressions, they take priority over other numbers.
// If there is an arithmetic expression with more than one special number, NaN wins out.
num = NaN + 1;
console.log(num);
num = Infinity + 1;
console.log(num);
num = -Infinity + 1;
console.log(num);
num = NaN + Infinity;
console.log(num);
num = Infinity - Infinity;
console.log(num);
num.toLocaleString(); // Numbers has methods
Math.floor(num); // Certain functions take in numbers
console.log(typeof num); // num is type num as expected
num = 2;
// Number operators: +, -, *, /, %, ++, --
// Bitwise operators: &, |, ^, ~, <<, >>, >>>
console.log("Arithmetic operators");
num += num;
console.log(num);
num = 2;
num /= num;
console.log(num);
num = 2;
num %= num;
console.log(num);
num = 2;
num -= num;
console.log(num);
num = 2;
num++;
num--;
console.log("Bitwise operators");
num &= num;
console.log(num);
num = 2;
num |= num;
console.log(num);
num = 2;
num ^= num;
console.log(num);
num = 2;
num = ~num;
console.log(num);
num = 2;
console.log("String to Number");
num = +"text";
console.log(num);
num = -"text";
console.log(num);
num = +"123";
console.log(num);
num = -"123";
console.log(num);
var bool = true;
console.log(bool.valueOf()); // Booleans only have one method
console.log(JSON.stringify(bool));
if (bool)
    bool = !bool; // Booleans are meant primarily to be used for logic/boolean statements
// Logical operators: && || !
console.log("str:", str, "num:", num);
bool = !!str;
console.log(bool);
bool = !!num;
console.log(bool);
var sym = Symbol();
console.log(sym);
sym = Symbol("test");
console.log(sym);
console.log(sym.toString());
console.log(sym.valueOf());
// sym is immutable, but also unique like an object
console.log("Big Int");
var big_int = 123n;
console.log(big_int); // Take note of the "n"
big_int = BigInt("123");
console.log(big_int);
// big_int = BigInt("test");        // This code will fail!
big_int.toLocaleString(); // BigInts have some basic methods
// Math.round(big_int);            // BigInts are NOT numbers
big_int += big_int;
console.log(big_int);
big_int = 123n;
big_int ^= big_int;
console.log(big_int);
big_int = 123n;
big_int++;
console.log(big_int);
big_int = 123n;
str = null;
console.log(typeof str); // str is no longer a string, now a "null" object
console.log(JSON.stringify(str));
str = undefined;
console.log(typeof str); // str is specifically type "undefined" now
str = "hello!";
console.log(typeof str); // str is a string again
num = null; // Assigning "null" assigns converts num to a "null" object
console.log(typeof num); //
console.log(JSON.stringify(num));
num = -num; // Any number can be made negative
console.log(num); // Shows -0
num = undefined;
console.log(typeof num); //
function custom1(input) {
    return null;
}
function custom2(input) {
    return;
}
