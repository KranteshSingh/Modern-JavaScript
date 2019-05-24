let allPeopleIWantToInvite = []

let pushToPartyList = (...people) =>{
	let newPeopleArray = people
	allPeopleIWantToInvite = allPeopleIWantToInvite.concat(newPeopleArray)
	console.log(allPeopleIWantToInvite)
	return allPeopleIWantToInvite
}

pushToPartyList("Krantesh","Pranshu","Rohit")

pushToPartyList("Shikha","Pranjal","Kajal")