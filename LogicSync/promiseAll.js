// For Promise.all(), we should resolve only when all promises are completed successfully.

function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            return resolve([]);
        }

        const results = [];
        let count = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((result) => {
                    results[index] = result;
                    count++;

                    if (count === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}

// Important: Order is preserved
// Even if promises finish in a different order:

const p1 = new Promise(resolve =>
    setTimeout(() => resolve("A"), 3000)
);

const p2 = new Promise(resolve =>
    setTimeout(() => resolve("B"), 1000)
);

const p3 = new Promise(resolve =>
    setTimeout(() => resolve("C"), 2000)
);

myPromiseAll([p1, p2, p3])
    .then(console.log);

// Execution order:
# B → C → A
// output is:
# ["A", "B", "C"]

// Why => because you're doing:
# results[index] = result;  // The index is what preserves the original order.


// One more important improvement
// Your parameter is called promises, but Promise.all() can also accept normal values:

Promise.all([
    Promise.resolve(10),
    20,
    "hello",
    Promise.resolve(40)
]);

promise.then((val)=> console.log(val));
// output: [ 10, 20, 'hello', 40 ]
