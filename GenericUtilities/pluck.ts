import { myMap } from "./myMap"
export function pluck<T, K extends keyof T>(
arr: T[],
key: K
): T[K][]{
  return myMap(arr, item => item[key])
}