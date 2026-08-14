// removing duplicate primitive values like(numbers, strings, booleans, symbols, bigints)

export function unique<T>(
    arr: T[]
): T[]{
  return Array.from(new Set(arr));
}
console.log(unique([1, 2, 2, 3, 3, 4]));
// [1, 2, 3, 4]

console.log(unique(["a", "b", "a", "c", "b"]));
// ["a", "b", "c"]

// because Set compares objects by reference, not by their property values.
{} === {} // false



// you need a Set/Map based on the property: 

    const uniqueObjects = <T extends object>(arr: T[]): T[] => {
    const seen = new Set<string>();
    const result: T[] = [];

    for (const item of arr) {
        const key = JSON.stringify(item);

        if (!seen.has(key)) {
            seen.add(key);
            result.push(item);
        }
    }

    return result;
};

const users = [
    { name: "sai", age: 25 },
    { name: "nang", age: 30 },
    { name: "sai", age: 25 },
    { name: "nang", age: 30 }
];

console.log(uniqueObjects(users));

const arr = [
    [1, 2],
    [3, 4],
    [1, 2],
    [5, 6]
];

console.log(uniqueObjects(arr));

// "Should duplicates be determined by object reference, or by object properties such as id?"

const uniqueById = <T extends { id: string | number }>(
    arr: T[]
): T[] => {
    const seen = new Set<string | number>();

    return arr.filter(item => {
        if (seen.has(item.id)) {
            return false;
        }

        seen.add(item.id);
        return true;
    });
};


