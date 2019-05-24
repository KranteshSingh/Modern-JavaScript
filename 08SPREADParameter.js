function sum(x,y,z){
	return x+y+z
}

const numbers = [1,2,3]

// console.log(sum(numbers[0],numbers[1],numbers[2]))

// To pass arguments of an array to the function we have to all each element separately.
// To avoid this we'll use SPREAD parameter

console.log(sum(...numbers))