import { myMap } from "./myMap"
export function pluck<T, K extends keyof T>(
arr: T[],
key: K
): T[K][]{
  return myMap(arr, item => item[key])
}

const users = [
    { name: "Karan", age: 30 },
    { name: "John", age: 25 },
    { name: "Alice", age: 28 }
];

const names = pluck(users, "name");

console.log(names);
// ["Karan", "John", "Alice"]

const ages = pluck(users, "age");

console.log(ages);
// [30, 25, 28]
