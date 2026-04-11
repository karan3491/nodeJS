// Count Frequency of Elements
function freq(arr) {
  const map = new Map();
  for (let x of arr) map.set(x, (map.get(x) || 0) + 1);
  return map;
}

//// Find First Non-Repeating Character
function firstUnique(str) {
  const map = new Map();
  for (let c of str) map.set(c, (map.get(c) || 0) + 1);
  for (let c of str) if (map.get(c) === 1) return c;
}
const mapF=firstUnique([
  "a", "a", "b", "c",
  "d", "e", "f", "e","a",
]);
const mapC= [...mapF].map(([key,val])=> key+val).join("")

console.log(mapF)