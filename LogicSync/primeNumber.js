// write the javascript function to chek if given number is prime

// 0 and 1 are not prime
// 2 is prime
// exclude even number > 2

function primeNumber(num){
  if(num <= 1) return false;  // 
  if (num === 2) return true;  //
  if (num % 2) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) { 
      if (num % i === 0) return false; 
    }
    return true
}

// console.log(primeNumber(0))
// Example usage: console.log(isPrime(2)); // true 
// console.log(isPrime(17)); // true 
// console.log(isPrime(18)); // false