// write the js function that takes an array of numbers and return a new array with only the even numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using filter method
function evenNumber(arr){
  return arr.filter(num=> num % 2 );
}

// even number through loop
function evenNumber(arr){
 let ar=[];
 for(let num of arr){
     if(num % 2 === 0){
         ar.push(num)
     }
 }
 return ar;
}

// even number through loop
function oddNumber(arr){
 let ar=[];
 for(let num of arr){
     if(num % 2 !== 0){
         ar.push(num)
     }
 }
 return ar;
}