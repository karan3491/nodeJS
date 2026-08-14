export function partition<T>(
    arr: T[],
    predicate: (item: T) => boolean
): [T[], T[]] {
    return arr.reduce<[T[], T[]]>((result, item) => {
        const index = predicate(item) ? 0 : 1;
        result[index].push(item);

        return result;
    }, [[], []]);
}

const users = [
    { name: "John", active: true },
    { name: "Alice", active: false },
    { name: "Bob", active: true },
];

const [active, inactive] = partition(
    users,
    user => user.active
);

console.log(active);
// [{ name: "John", active: true }, { name: "Bob", active: true }]

console.log(inactive);
// [{ name: "Alice", active: false }]
