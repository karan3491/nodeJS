// Check if All Characters Are Unique

function isUnique(str) {
  return new Set(str).size === str.length;
}

function intersection(a, b) {
  const set = new Set(a);
  return b.filter(x => set.has(x));
}
console.log(intersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]))