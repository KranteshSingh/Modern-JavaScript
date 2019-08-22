/*

Complete function that convertTemplate() which takes rest parameters as input 
and returns a concatenated string as input irrespective of the 
data type passed as argument to the function.

sample input - convertTemplate('aa',3)
output : aa3



*/


let convertTemplate = (...input)=>{
    // start your code here.
let str = input.toString();
console.log(input)
 return Array.from(input).join("");
 };

 let c = convertTemplate('aa',3)
 console.log(c);
 
 //module.exports = {convertTemplate:convertTemplate};
 
 