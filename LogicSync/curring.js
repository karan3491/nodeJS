

function variadicCurry(fn) {
  let collected = [];

  function curried(...args) {
    if (args.length === 0) {
      // If called with no args, execute with all collected
      return fn(...collected);
    }
    collected = collected.concat(args);
    return curried;
  }

  // Allow coercion to primitive automatically
  curried.valueOf = () => fn(...collected);
  curried.toString = () => String(fn(...collected));

  return curried;
}

// Example: sum with unlimited args
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
function multiple(...args) {
  return args.reduce((a, b) => a * b, 1);
}
function sub(...args) {
  return args.reduce((a, b) => a - b, 0);
}
const currySum = variadicCurry(sum);
const curryMultiple = variadicCurry(multiple);
const currySub = variadicCurry(sub);

console.log(+currySum(10)(10, 5)(5)(20)); // 50
console.log(+curryMultiple(1)(2)(3)(4)(5));    // 15
console.log(+currySub(100, 200)(300)(400)); // 1000
