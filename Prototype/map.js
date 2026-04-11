Array.prototype.myMap = function (cb) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};

const arr = Array.from({ length: 1_000_000 }, (_, i) => i);

// Native map
console.time("native");
arr.map(x => x * 2);
console.timeEnd("native");

// Custom myMap
console.time("custom");
arr.myMap(x => x * 2);
console.timeEnd("custom");