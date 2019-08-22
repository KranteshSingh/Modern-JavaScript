/*
Complete the function below that takes one number as input checks if the number entered is prime number or not? 
It should return true or false. 

sample input - isPrime(3)
output - true

*/



let isPrime = function (n){
    if (n===1)
    {
      return false;
    }
    else if(n === 2)
    {
      return true;
    }else
    {
      for(var x = 2; x < n; x++)
      {
        if(n % x === 0)
        {
          return false;
        }
      }
      return true;  
    }

}
let res = isPrime(4);
console.log(res)
//module.exports = { isPrime: isPrime }