// Given a string, write a javascript function to count the occurrences of each character in the string.



function countCharacters(str){
    let obj={};
    for(let st of str){
        if(obj[st]){
            obj[st] +=1;
        }else{
           obj[st] =1; 
        }
    }
    return obj;
}

const result= countCharacters("hello world");

const occurance=Object.entries(result).map(([key, val])=> key + val).join("");



console.log(countCharacters("hello world"));
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

console.log(occurance)
// h1e1l3o2 1w1r1d1