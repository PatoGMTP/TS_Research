let tuple: [string, number] = ["Hello there", 123];

tuple[0].length;
tuple[1].toString();

tuple.push("Yes", 1);

console.log(tuple);

console.log(tuple[2]);

tuple.push("Test1");
tuple.push("Test2");

tuple.push(123);
tuple.push(124);

console.log(tuple);