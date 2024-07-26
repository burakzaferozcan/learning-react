//!  generic types
function yazdir<T>(array: T[]): void {
  array.forEach((item: T) => {
    console.log(item);
  });
}

let array1: number[] = [1, 2, 3, 4, 5];
yazdir(array1);
let array2: string[] = ["burak", "zafer", "özcan"];
yazdir(array2);
let array3: boolean[] = [true, false];
yazdir(array3);

interface GenericType<T> {
  name: String;
  age: number;
  salary: T[];
}

let person1: GenericType<number> = {
  name: "John Doe",
  age: 30,
  salary: [5000, 6000, 7000],
};
let person2: GenericType<string> = {
  name: "Mahmut Tuncer",
  age: 65,
  salary: ["5000", "6000", " 7000"],
};
console.log("----------------------------------------------------------------");

let array4: GenericType<string | number>[] = [person1, person2];

yazdir(array4);

//! extending types
interface OrtakAlanlar {
  id: string;
  olusturmaTarihi: string;
  olusturanKisi: string;
}
interface Musteri extends OrtakAlanlar {
  musteriNo: string;
}
interface Kurum extends OrtakAlanlar {
  kurumNo: string;
}
const kurum: Kurum = {
  id: "123",
  olusturmaTarihi: "2022-01-01",
  olusturanKisi: "John Doe",
  kurumNo: "ABC123",
};
const musteri: Musteri = {
  id: "456",
  olusturmaTarihi: "2022-02-01",
  olusturanKisi: "Mahmut Tuncer",
  musteriNo: "XYZ789",
};
console.log(`kurum : 
    ${kurum.id}
    ${kurum.olusturmaTarihi}
    ${kurum.olusturanKisi}
    ${kurum.kurumNo}`);
console.log(`musteri : 
    ${musteri.id}
    ${musteri.olusturmaTarihi}
    ${musteri.olusturanKisi}
    ${musteri.musteriNo}`);

//! Partial, Required, ReadOnly, pick, omit

interface User {
  name: string;
  age: number;
}
//? Partial opsiyonel yapar
const user1: Partial<User> = {
  name: "John Doe",
};

//? Required zorunlu yapar
const user2: Required<User> = {
  name: "John Doe",
  age: 30,
};

//? ReadOnly sadece okunur yeni bir değer setlenemez
let user3: Readonly<User> = {
  name: "John Doe",
  age: 30,
};
// user3.name = "Mahmutt";

//? Pick yalnızca belirtilen özellikleri alır
const user4: Pick<User, "name"> = {
  name: "John Doe",
  //   age: 30,
};
console.log(user4);

//? Omit belirtilen özellikleri dışarda bırakır
const user5: Omit<User, "age"> = {
  name: "John Doe",
  //   age:85
};

console.log(user5);
