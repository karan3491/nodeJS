
























function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return resolve([]);

    let results = [];
    let count = 0;

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(res => {

          results[i] = res;
          resolve(results);
          
        }).catch(reject)
         Promise.reject(p).then((err)=>{
             results[i] = err;
          reject(results);
         }).catch(reject)
       
    });
  });
}

myPromiseAll([Promise.resolve(1), Promise.resolve(3), Promise.reject('erro')]).then((res)=> console.log(res)).catch((err)=> console.log(err))







// Promise

const funPromise=(arr)=>{
    return new Promise((resolve, reject)=>{
        if(arr.length ===0) return resolve([]);
        let result=[];
        let count=0;
        arr.forEach((p,i)=>{
            Promise.resolve(p).then((r)=>{
             result[i]= r;
             count++;
             if(count === arr.length) resolve(result)
             
            }
            ).catch((e)=> reject)
        })
    })
}

funPromise([Promise.resolve(1), Promise.resolve(3)]).then((res)=> {console.log(res)}).catch((e)=>{ console.log(e)})

