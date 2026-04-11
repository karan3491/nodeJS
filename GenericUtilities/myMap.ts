export function myMap<T, U>(
    arr: T[],
    cb: (item: T, index: number, array: T[]) => U)
    : U[] {
    const result: U[] = [];
    for(i=0; i<arr.length; i++){
        result.push(cb(arr[i],i, arr))
    }

    return result;
}