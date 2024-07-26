//!  union types bir değişkenin birden fazla tipi olabilir
let age: string | number = 5;

//! literal types
let statusResult: "pending" | "approved" | "rejected";
statusResult = "approved";
console.log(statusResult);

//! arrays
let names: (string | number)[] = ["burak", "zafer", "özcan", 5];
console.log(names);

let numbers: Array<number | string> = [1, 2, 3, "asd"];
console.log(numbers);
