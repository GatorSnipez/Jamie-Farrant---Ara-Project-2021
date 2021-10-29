describe("Data Loaded Correctly", function() {
	// Emulate the data loading
	beforeEach(function() {
		// reload the data before each test
		loadDataManually()
	})
	
	// A test - copy the template
	it("should load all the towns correctly", function() {
		expect(places.length).toEqual(26)	// All the towns loaded
		// test at boundaries and in the middle
		expect(places[0]).toEqual("Alexandra")
		expect(places[4]).toEqual("Cromwell")
		expect(places[25]).toEqual("Westport")
	})
	
	it("should load all the distances correctly", function() {
		expect(distances.length).toEqual(26)
		expect(distances[0][0]).toEqual(0)
		expect(distances[4][3]).toEqual(939)
		expect(distances[25][0]).toEqual(761)
		expect(distances[25][25]).toEqual(0)
	})
	
})