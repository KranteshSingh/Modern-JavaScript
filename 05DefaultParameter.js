// To ensure data consistency, we use default parameter
// while defining the parameter we just have used a default value assigned to y parameter.
// in case any of the argument is missing.
// in this way our function will be more reliable.

let multiply = (x,y=0) => { 
	return x*y
}
console.log(multiply(4,2))