export function Partition<T>(
    arr: T[],
    predicate:(item: T)=>boolean
):[T[],T[]]{
  
    return arr.reduce((acc, item)=>{
      acc[predicate(item)? 0 : 1].push(item);
      return acc;
    },[[],[]] as [T[], T[]])
}