// "This handles nested plain objects and arrays. For a production-grade general-purpose implementation, I would additionally handle Date, RegExp, Map, Set, typed arrays, symbols, and circular references."
export const deepEqual = (a: unknown, b: unknown): boolean => {
    if (Object.is(a, b)) {
        return true;
    }

    if (
        a === null ||
        b === null ||
        typeof a !== "object" ||
        typeof b !== "object"
    ) {
        return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (const key of keysA) {
        if (
            !Object.hasOwn(b, key) ||
            !deepEqual(a[key as keyof typeof a], b[key as keyof typeof b])
        ) {
            return false;
        }
    }

    return true;
};

console.log(
    deepEqual(
        {
            name: "Karan",
            address: {
                city: "Pune"
            }
        },
        {
            name: "Karan",
            address: {
                city: "Pune"
            }
        }
    )
);
// true

console.log(
    deepEqual(
        { name: "Karan", age: 30 },
        { name: "Karan", age: 31 }
    )
);
// false



// implementation covering Date, RegExp, Map, Set, typed arrays, symbols, and circular references:


export const deepEqual = (
    a: unknown,
    b: unknown,
    seen = new WeakMap<object, object>()
): boolean => {
    // Same primitive value or same reference
    if (Object.is(a, b)) {
        return true;
    }

    // One is null / primitive
    if (
        a === null ||
        b === null ||
        typeof a !== "object" ||
        typeof b !== "object"
    ) {
        return false;
    }

    // Circular reference handling
    if (seen.has(a)) {
        return seen.get(a) === b;
    }

    seen.set(a, b);

    // Different constructors
    if (a.constructor !== b.constructor) {
        return false;
    }

    // Date
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }

    // RegExp
    if (a instanceof RegExp && b instanceof RegExp) {
        return (
            a.source === b.source &&
            a.flags === b.flags
        );
    }

    // Map
    if (a instanceof Map && b instanceof Map) {
        if (a.size !== b.size) {
            return false;
        }

        for (const [keyA, valueA] of a) {
            if (!b.has(keyA)) {
                return false;
            }

            if (!deepEqual(valueA, b.get(keyA), seen)) {
                return false;
            }
        }

        return true;
    }

    // Set
    if (a instanceof Set && b instanceof Set) {
        if (a.size !== b.size) {
            return false;
        }

        for (const valueA of a) {
            let found = false;

            for (const valueB of b) {
                if (deepEqual(valueA, valueB, seen)) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                return false;
            }
        }

        return true;
    }

    // Typed arrays
    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
        if (a.constructor !== b.constructor) {
            return false;
        }

        if (a.byteLength !== b.byteLength) {
            return false;
        }

        const viewA = new Uint8Array(
            a.buffer,
            a.byteOffset,
            a.byteLength
        );

        const viewB = new Uint8Array(
            b.buffer,
            b.byteOffset,
            b.byteLength
        );

        for (let i = 0; i < viewA.length; i++) {
            if (viewA[i] !== viewB[i]) {
                return false;
            }
        }

        return true;
    }

    // Arrays
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false;
        }

        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i], seen)) {
                return false;
            }
        }

        return true;
    }

    // Objects + symbol keys
    const keysA = [
        ...Object.keys(a),
        ...Object.getOwnPropertySymbols(a)
    ];

    const keysB = [
        ...Object.keys(b),
        ...Object.getOwnPropertySymbols(b)
    ];

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (const key of keysA) {
        if (!Object.prototype.hasOwnProperty.call(b, key)) {
            return false;
        }

        const valueA = a[key as keyof typeof a];
        const valueB = b[key as keyof typeof b];

        if (!deepEqual(valueA, valueB, seen)) {
            return false;
        }
    }

    return true;
};

// #Nested objects

deepEqual(
    {
        name: "Karan",
        address: {
            city: "Pune"
        }
    },
    {
        name: "Karan",
        address: {
            city: "Pune"
        }
    }
);
// true

// #Date

deepEqual(
    new Date("2026-01-01"),
    new Date("2026-01-01")
);
// true

// #RegExp

deepEqual(/hello/gi, /hello/gi);
// true

deepEqual(/hello/g, /hello/i);
// false

// #Map

deepEqual(
    new Map([["name", "Karan"]]),
    new Map([["name", "Karan"]])
);
// true

// #Set
deepEqual(
    new Set([1, 2, 3]),
    new Set([3, 2, 1])
);
// true

// # Typed arrays

deepEqual(
    new Uint8Array([1, 2, 3]),
    new Uint8Array([1, 2, 3])
);
// true

// #Symbols
const key = Symbol("id");

const obj1 = {
    name: "Karan",
    [key]: 123
};

const obj2 = {
    name: "Karan",
    [key]: 123
};

deepEqual(obj1, obj2);
// true

// #Circular references
const obj1: { name: string; self?: unknown } = {
    name: "Karan"
};

obj1.self = obj1;

const obj2: { name: string; self?: unknown } = {
    name: "Karan"
};

obj2.self = obj2;

console.log(deepEqual(obj1, obj2));
// true


/* Primitive
   ↓
Object
   ↓
Array
   ↓
Recursive comparison 
*/
// "For a production implementation, I would additionally handle special objects such as Date, RegExp, Map, Set, typed arrays, symbol keys, and circular references using WeakMap."

