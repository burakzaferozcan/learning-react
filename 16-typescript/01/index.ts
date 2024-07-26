let age: number = 5;
console.log(age);
let name: string = "burak";
console.log(name);
let result: boolean = false;
console.log(result);
let x: undefined = undefined;
console.log(x);
let y: null = null;
console.log(y);

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);
let person: { name: string; age: number } = { name: "John Doe", age: 30 };
console.log(person);
let age2: any = 5;
age2 = "a";
console.log(age2);

function topla(a: number, b: number) {
  console.log(a + b);
}
topla(5, 3);
