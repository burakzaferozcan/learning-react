//! TYPE
type User = {
  name: string;
  age?: number; //? optional type
};
const object1: User = {
  name: "John Doe",
  age: 22,
};
console.log(object1);

const array1: User[] = [{ name: "John", age: 22 }];
console.log(array1);
const array2: Array<User> = [{ name: "burak", age: 23 }];

//! INTERFACE
interface User2 {
  name: string;
  age?: number; //? optional type
}
const object2: User2 = { name: "zafer", age: 86 };
console.log(object2);

//! FUNCTION
function topla(a: number, b: number) {
  console.log(a + b);
}
topla(5, 12);

function topla2(a: number, b: number): number {
  return a + b;
}
let sonuc = topla2(5, 12);
console.log(sonuc);

function print(array: Array<string>): void {
  array.forEach((item) => {
    console.log(item);
  });
}
let array3: Array<string> = ["burak", "zafer", "özcan"];
print(array3);

function print2(array: Array<string>): void {
  array.forEach((item: string) => {
    console.log(item);
  });
}
print2(array3);

interface Car {
  name: string;
  model: string;
  year: number;
}

const car1: Car = {
  name: "Toyota",
  model: "Camry",
  year: 2020,
};

const car2: Car = {
  name: "Ford",
  model: "Mustang",
  year: 2018,
};

const car3: Car = {
  name: "Honda",
  model: "Civic",
  year: 2021,
};

const carArray: Array<Car> = [car1, car2, car3];

function writeConsole(cars: Array<Car>): void {
  cars.forEach((car: Car) => console.log(car.name));
}

writeConsole(carArray);
