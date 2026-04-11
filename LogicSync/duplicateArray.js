




const duplicateArray=(arr, type)=>{
    //inbuild method
    if(type==='ib'){
        const arrSet= new Set([...arr])
       return [...arrSet]
    }
    
    //using loop
     let obj=[];
     if(type==='loop'){
    for(let a of arr){
      if(!obj.includes(a)){
          obj.push(a)
      } 
    }
     return obj;
     }
   
   // using reduce 
   if(type==='reduce'){
  return arr.reduce((acc,val)=>{
       if(!acc.includes(val)){
           acc.push(val)
       }
       return acc;
   },[])
   }
   

   // forEach method
   arr.forEach((item)=>{
       if(!obj.includes(item)) obj.push(item)
   })
   return obj;
}

console.log(duplicateArray([1,1,2,3,4,5,6,7,6,7,8]))

function findDuplicates(arr) {
  let duplicates = [];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        // Check if already recorded
        let alreadyAdded = false;
        for (let k = 0; k < duplicates.length; k++) {
          if (duplicates[k] === arr[i]) {
            alreadyAdded = true;
            break;
          }
        }
        if (!alreadyAdded) {
          duplicates.push(arr[i]);
        }
      }
    }
  }
  
  return duplicates;
}

const arr = [1, 2, 3, 2, 4, 5, 1];
console.log(findDuplicates(arr));
// Output: [2, 1]
