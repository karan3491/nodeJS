Array.prototype.myReduce = function (cb, initial) {
  let acc = initial ?? this[0];
  let startIndex = initial ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }

  return acc;
};

