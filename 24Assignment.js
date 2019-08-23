/*

Complete the functions below that finds the largest prime factor of a number. 
The function that takes the number as input and return the largest prime factor as output. 

*/

let isPrime = function (n) {
    // function to check whether the number is prime or not.
 
 };
 
 let getLargestPrimeFactor = function (n) {
     // function to find the largest prime factor
     var divisor = 2;
     while(n > 1){
        if(n % divisor === 0){ 
            n /= divisor;
        } else {
            divisor++;
        }
    }

    return divisor
 };
 
 let res = getLargestPrimeFactor(600851475143)
 console.log(res)
// module.exports = { getLargestPrimeFactor: getLargestPrimeFactor };