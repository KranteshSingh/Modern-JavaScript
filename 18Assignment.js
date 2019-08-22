
/*
Complete the code in Index.js in a way that 
the function should return a single object
 which has key as the parameter someKey and value as someValue

*/

let convertToKeyValuePair = (someKey,someValue)=>{

    // this function should return a single object which has 
    //key as the value of someKey and value as someValue
    //
    let keyIAmStoring = someKey
    let valueIAmStoring = someValue
    let finalObject = {[keyIAmStoring]:valueIAmStoring}
    return finalObject

};

let c = convertToKeyValuePair('someKey','someValue');
console.log(c);

//module.exports = {convertToKeyValuePair:convertToKeyValuePair};

