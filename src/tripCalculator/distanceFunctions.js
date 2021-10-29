function findFurthestApart() {
	// A function to find which towns are the furthest apart
	// declarations

	let startTown
	let endTown 
	let maxDistance = 0
	// Loop through the array to find the maximum
	for (let i=0;i<places.length;i++) {
		for (let j=0;j<places.length;j++) {
			if (distances[i][j] > maxDistance) {
				startTown = i
				endTown = j
				maxDistance = distances[i][j]
				console.log(maxDistance)
			}
		}
	}
	// Create the array to finish
	let returnArray=[-1,-1,-1]
	returnArray[0] = startTown
	returnArray[1] = endTown
	returnArray[2] = maxDistance
	return returnArray
}

function findRemotest() {
	// A function to find the remotest town
	// defined as the one with the largest total distances
	
	// It doesn't work! - used to demo in Jasmine
	let totalDistance = 0
	let furthestDistance = 0
	let remotestTown = -1
	for (let i=0;i<places.length;i++) {
		for (let j=0;j<places.length;j++) {
			// Find teh total distance
			totalDistance = totalDistance + distances[i][j]
		}
		if (totalDistance > furthestDistance) {
			// if it's the remotest, set the values
			remotestTown = i
			furthestDistance = totalDistance
			console.log(furthestDistance)
		}
	}
	// Create the array to finish
	let returnArray=[-1,-1]
	returnArray[0] = remotestTown
	returnArray[1] = furthestDistance
	return returnArray
}

function calcTripLength(){
    let townList = places
    let townDistance = distances

    destinationArray.push(destinationArray[0])
    console.log(destinationArray)

    if(destList < 2){
        alert('ERROR: Please input at least two locations for your trip')
    }
        i = 0
        traveled = 0
        while((destList.length-1) > i) {
            destination1 = townList.indexOf(destList[i])
            destination2 = townList.indexOf(destList[(i+1)])
            distance = townDistance[Number(destination1)]
            traveled += distance[Number(destination2)]
            i+=1
            console.log(traveled, destination1, destination2, distance)
}}