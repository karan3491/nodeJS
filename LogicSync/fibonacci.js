// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

function fibonacci(n) {
    
    if(n <=1) return n;
    return fibonacci(n-1) + fibonacci(n-2) 
}

function febonacciSerice(num){
  let series=[];
  for(let i=0; i< num; i++){
      series.push(fibonacci(i))
  }
  return series;
}

// Example usage:
console.log(febonacciSerice(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
