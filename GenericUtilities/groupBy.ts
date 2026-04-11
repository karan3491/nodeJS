export function GroupBy<T, K extends keyof T>(
    arr: T[],
    keyGetter: (item: T)=>K
): Record<K, T[]>{
    return arr.reduce((acc, item)=>{
      const key= keyGetter(item);
      (acc[key] ||=[]).push(item) 
     return acc;
    },{} as Record<K, T[]>)
}