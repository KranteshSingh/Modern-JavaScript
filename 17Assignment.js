/*
Complete function that convertTemplate() which takes rest parameters as input 
and returns a concatenated string as input irrespective of the 
data type passed as argument to the function.

sample input - convertTemplate('aa',3)
output : aa3
*/

let convertTemplate = (...input) => {

  console.log(input); //Recieved an Array ["aa", 3]

  let str = input.toString(); //Changing Array into String via toString() method.

  console.log(str); // Checking out on console.

  return Array.from(input).join(""); //Returning the joined string

};

let c = convertTemplate("aa", 3);
console.log(c);

//module.exports = {convertTemplate:convertTemplate};
