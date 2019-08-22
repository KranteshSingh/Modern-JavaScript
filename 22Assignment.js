/*
Complete the function below to find the factorial of a number 
If you don’t know what a factorial is, please follow this link - https://en.wikipedia.org/wiki/Factorial
sample input : findFactorial(4)
output - 24
*/



let findFactorial = (x) => {
    // start your code here.
    if(x == 0) {
        return 1;
    }
    if(x < 0 ) {
        return undefined;
    }
    for(let i = x; --i; ) {
        x *= i;
    }
    return x;

}

let res = findFactorial(5)
console.log(res);
//module.exports = { findFactorial: findFactorial };
  
  