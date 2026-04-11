const reverseString=(str)=>{
    if(str<=0) return str;
   return reverseString(str.substring(1)) + str[0]
}

console.log(reverseString("abcd karan"))