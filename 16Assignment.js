/*
Complete the function returnLength() that takes One rest parameter as input 
and returns the length of the array of parameters received. 

sample input : returnLength('a','b,'c')
output - 3

*/


let returnlength = (...input)=>{
    // start your code here.
    let array1 = input
    console.log(array1)
    return array1.length
     
  };// end return length

  let c = returnlength('a','b','c')