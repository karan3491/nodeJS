export function sortBy<T>(
    arr: T[],
    selector:(item: T)=> number
): T[]{
  return [...arr].sort((a,b)=> selector(a)- selector(b));
}