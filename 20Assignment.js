/*Write a function calculateAge() that takes your birthday in the format dd,mm,yyyy
 and returns your age. 
Sample function input
calculateAge(28,02,1992)
Output - 27
*/

let calculateAge = function(day, month, year) {
    // start your code here.
    today = new Date();
    birthDate = new Date(year,month,day);
    let age = today.getFullYear() - birthDate.getFullYear();
    console.log(today.getMonth()-birthDate.getMonth())
    let m = today.getMonth() - birthDate.getMonth();
    console.log(today.getMonth())
    console.log(month)
    console.log(typeof(birthDate))
    console.log(typeof(today))
    console.log(today.getDate() < birthDate.getDate())
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  };
  

let result = calculateAge(25,09,1999);

console.log(result)


//module.exports = { calculateAge: calculateAge };
  
  