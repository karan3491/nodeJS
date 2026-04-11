const arr=[Promise.resolve(1),Promise.reject('err'),Promise.resolve(3),Promise.reject(4), 42];

function allPromise(promise){
    return new Promise((resolve,reject)=> {
        const result=[];
        let count=0;
        promise.forEach((p,i)=>{
            Promise.resolve(p).then((val)=>{
                  result[i]= { status: "fulfilled", val };
            }).catch((err)=>{
                result[i]= { status: "rejected", err }
            }).finally(()=>{
                count++;
                if(count === promise.length)
                resolve(result);
            })
           
        })
    })
    
    
}

allPromise(arr).then((res)=>{console.log("res",res)})