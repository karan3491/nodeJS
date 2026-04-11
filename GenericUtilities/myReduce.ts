export function myReduce<T,U>(
arr: T[],
cb:(acc: U, item: T, index: number)=> U,
intial: U
): U {
   let acc= intial;
   for(let i=0; i<arr.length; i++){
     acc= cb(acc,arr[i],i);
   } 
   return acc;
}

console.time("native");
// method name
console.timeEnd("native");