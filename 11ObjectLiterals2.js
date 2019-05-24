let actualPrice = 50000
let discountPercentage = 10
let priceOfProduct = {
	actualPrice,
	discountPercentage,
	finalPrice(){return actualPrice-((actualPrice*discountPercentage)/100)}
	}
console.log(priceOfProduct)
console.log(priceOfProduct.finalPrice())

// finalPrice is a function defined inside an Object. This is termed as METHOD
// Never declare arrow type function inside Object.
// Try to use METHODS inside Objects to get desired Result.
