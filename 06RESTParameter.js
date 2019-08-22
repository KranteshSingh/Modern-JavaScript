// Defined an array to store address of a user
let allUserAddress = []

let storeUserAddress = (userId,...addressToStore) =>{
	//allUserAddress.push({userId:userId, userAddress:addressToStore})
	//Defined an Object to store user Id and Address
	
	console.log(userId)
	console.log(addressToStore)

	let customAddress = {userId:userId, userAddress:addressToStore}
	//adding data into allUserAddress
	allUserAddress.push(customAddress)
	
	console.log(allUserAddress)
	
	return allUserAddress
}

let firstAddress = {
	"House No": "3/343",
	"Locality":"Viram Khand 3 Gomti Nagar",
	"City":"Lucknow",
	"State": "UP",
	"PINCODE":"226025"
}

let secondAddress = {
	"House No": "2nd Floor",
	"Locality":"Sai Vihar Colony Near Dental Hospital",
	"City":"Lucknow",
	"State": "UP",
	"PINCODE":"226017"
}

storeUserAddress("Krantesh",firstAddress,secondAddress)

// Whenever we are expecting multiple inputs to a function then we use REST Parameter