function myPromiseSettled(promises) {
    return new Promise((resolve) => {
        if (promises.length === 0) {
            return resolve([]);
        }

        const results = [];
        let count = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = {
                        status: "fulfilled",
                        value
                    };
                })
                .catch((reason) => {
                    results[index] = {
                        status: "rejected",
                        reason
                    };
                })
                .finally(() => {
                    count++;

                    if (count === promises.length) {
                        resolve(results);
                    }
                });
        });
    });
}


const promises = [
    Promise.resolve("A"),
    Promise.reject("Error"),
    Promise.resolve("C")
];

myPromiseSettled(promises).then(console.log);
// output:  [{ status: 'fulfilled', value: 'A' },{ status: 'rejected', reason: 'Error' },{ status: 'fulfilled', value: 'C' }]
// Notice that the result order remains the same as the input order, even if the promises finish in a different order.

