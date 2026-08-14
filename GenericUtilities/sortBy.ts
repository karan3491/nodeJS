export function sortBy<T>(
    arr: T[],
    selector:(item: T)=> number
): T[]{
  return [...arr].sort((a,b)=> selector(a)- selector(b));
}

// with descending and ascending order

export function sortBy<T>(
    arr: T[],
    selector: (item: T) => number,
    descending = false
): T[] {
    return [...arr].sort((a, b) => {
        const result = selector(a) - selector(b);
        return descending ? -result : result;
    });
}

sortBy(users, user => user.age);
// ascending

sortBy(users, user => user.age, true);
// descending
