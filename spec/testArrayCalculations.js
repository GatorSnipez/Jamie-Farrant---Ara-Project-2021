// the test below passes as the function is correct
describe("Find furthest apart correct", function() {
	// Emulate the data loading
	beforeEach(function() {
		// reload the data before each test
		loadDataManually()
	})
	
	it("should find the furthest apart given the actual data", function() {
		// run a function with the "proper" data
		furthestApart = findFurthestApart()
		expect(furthestApart[0]).toEqual(3)
		expect(furthestApart[1]).toEqual(14)
		expect(furthestApart[2]).toEqual(1232)
	})
	
	it("should find the furthest apart for modified data", function() {
		// run a function with modified data for boundary conditions
		distances[0][1] = 9999
		furthestApart = findFurthestApart()
		expect(furthestApart[0]).toEqual(0)
		expect(furthestApart[1]).toEqual(1)
		expect(furthestApart[2]).toEqual(9999)
		
		distances[25][24] = 99999
		furthestApart = findFurthestApart()
		expect(furthestApart[0]).toEqual(25)
		expect(furthestApart[1]).toEqual(24)
		expect(furthestApart[2]).toEqual(99999)
	})	
})

// Test which finds the most remote location given different scenarios.
describe("Find remotest correct", function() {
	// Emulate the data loading
	beforeEach(function() {
		// Load some dummy data
		places = ["A","B","C","D"]
		distances=[
		[0,1,3,5],
		[1,0,8,4],
		[3,8,0,1],
		[5,4,1,0]
		];
	})
	
	it("should find the remotest when it is in the middle", function() {
		distances[0][0]
		remotest = findRemotest()
		expect(remotest[0]).toEqual(3)
		expect(remotest[1]).toEqual(44)
	})
	
	it("should find the remotest when it is the first", function() {
		distances[0][3] = 999
		remotest = findRemotest()
		expect(remotest[0]).toEqual(3)
		expect(remotest[1]).toEqual(1038)
	})
	
	it("should find the remotest when it is the last", function() {
		distances[3][0] = 999
		remotest = findRemotest()
		expect(remotest[0]).toEqual(3)
		expect(remotest[1]).toEqual(1038, 1003)
	})
})
//Test that finds the distance of a trip given different scenarios
describe("Find the correct distance of the trip, assuming there is no auto-return", function() {
	// Emulate the data loading
	beforeEach(function() {
		// Load some dummy data
		places = ["A","B","C","D"]
		distances=[
		[0,0],
		[1,0,8,4],
		[3,8,0,1],
		[5,4,1,0]
		];
	})
	
	it("should say the distance travelled is 0 as the user has travelled to the same location and nowhere else", function() {
		distances[0]
		remotest = findRemotest()
		expect(remotest[1]).toEqual(0)
	})

    it("should say the distance travelled is 0 as there are no destinations", function(){
		distances['']
		remotest = findRemotest()
		expect(remotest[1]).toEqual(0)
	})
})

//Test to determine what occurs on the entry of false data
describe("Data Loaded Correctly", function() {
	// Emulate the data loading
	beforeEach(function() {
		// reload the data before each test
		loadDataManually()
	})
	
	it("should read as undefined as there is a value not available in the array", function() {
		expect(distances.length).toEqual(26)
		expect(distances[0][27]).toEqual(undefined)
	})
	
})