function flatten(arr){
    let newArr=[];
    for(let a of arr){
    if(Array.isArray(a)){
       newArr= newArr.concat(flatten(a))
      }else{
          newArr.push(a)
      }
    }
    return newArr;
}


let flatarr=flatten([1, [2, [3, [4]], 5]]) 
console.log(flatarr)


// flat array pop and push

const flattern=(arr)=>{
     let result=[];
     let stack=[...arr];
     while(stack.length){
         const next= stack.pop();
         if(Array.isArray(next)){
             stack.push(...next)
         }else{
             result.push(next);
         }
     }
     return result
}

const flatArray=flattern(nested);
console.log(flatArray)


const flatArrayTwo=(arr)=>{
    let newArray=[];
    let stack=[...arr];
      while(stack.length){
         const popArray= stack.pop();
          if(Array.isArray(popArray)){
              newArray.push(...popArray)
          }else{
               newArray.push(popArray)
          }
      }
    return newArray;
}