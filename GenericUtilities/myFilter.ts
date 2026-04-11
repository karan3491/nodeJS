export function myFilter<T>(
    arr: T[],
    cb:(item: T, index: number, array: T[])=> boolean
):T[]{
    const result: T[]=[];
    for(let i=0; i<arr.length; i++){
        if(cb(arr[i], i, arr)){
         result.push(arr[i])
        }
    }
  return result;
}