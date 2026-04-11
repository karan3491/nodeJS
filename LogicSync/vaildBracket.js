

const s = new Set([1,1,2,2]);
console.log([...s]);


const m = new Map();
m.set({}, "A");
m.set({}, "B");
console.log(m);


function matchbracket(str){
    let stack=[];
    let brackets={
        ")":"(",
        "}":"{",
        "]":"["
    }
    for(let s of str){
        if(s === '(' || s=== '{' || s==='['){
            stack.push(s);
        }else{
     if(stack.length ===0 || stack[stack.length -1] !== brackets[s]) {return false;}
            stack.pop();
        }
    }
    return stack.length===0;
    
}

console.log(matchbracket("({)"))