// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

const throttly=(fn, delay)=>{
    let isThrottled= false;
    return (...args)=>{
        if(isThrottled) return;
        fn(...args);
        isThrottled= true;
        setTimeout(()=>{isThrottled= false}, delay)
    }
}

function add(a,b){
    console.log(a+b);
}

const throttlyAdd=throttly(add, 1000);
throttlyAdd(2,3)
setTimeout(()=> throttlyAdd(2,4), 5000)
setTimeout(()=> throttlyAdd(2,8), 15000)