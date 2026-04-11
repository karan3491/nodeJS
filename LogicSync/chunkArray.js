


const chunkArray=(arr,size)=>{
    let result=[];
for(let i=0; i<arr.length; i +=size){
    result.push(arr.slice(i, i + size));
}  
return result

}

// reducer
const chunkArrayReducer=(arr,size)=>{
return arr.reduce((acc,_,i)=>{
    console.log(i % size, i)
    if(i % size === 0 ){
        acc.push(arr.slice(i, i + size))
    }
    return acc
},[])
}

console.log(chunkArray([1,2,3,4,5,6,7], 3));

