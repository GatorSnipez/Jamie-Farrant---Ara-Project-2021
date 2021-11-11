/* Name: Jamie Farrant
   File Type: Javascript
   Last Update: 11/11/21 @ 22:01
   Is this amazingly efficient? No. Does it work? Almost.
   Github Link: https://github.com/GatorSnipez/Jamie-Farrant---Ara-Project-2021
*/

//Function that closes the window/exits the program
function closeWindow(){
    window.open('', '_self', ''); window.close();
}

//Function that refreshes/resets the page on click
function refreshWindow(){
    window.location.href=window.location.href;
}

//Function that adds a user chosen destination from the select menu to the list.
function addDestination_onClick() {
    var destinationList = document.getElementById("destination_list");
    var destination = document.getElementById("place_list");
    var li = document.createElement("li");
    li.setAttribute('id', destination.value);
    li.appendChild(document.createTextNode(destination.value));
    destinationList.appendChild(li);

    destinationArray.splice(destinationArray.length, 0, destination.value);
    console.log(destinationArray);
}

// Function that removes the user defined item from the destination list
function removeDestination_onClick() {

    // Declares variable to retrieve set element
    var destinationList = document.getElementById("destination_list");
    var destination = document.getElementById("place_list");
    var selectedDestination = document.getElementById(destination.value);
    destinationList.removeChild(selectedDestination);

     //Removes the item from the destination array to produce correct result
    

    const index = destinationArray.indexOf(destination.value);
    if (index > -1) {
    destinationArray.splice(index, 1);
    console.log(destinationArray);
    }

}

//Function to calculate fuel cost of trip, currently requires all user input.
function calculateFuel_onClick(){
    let D = traveled;
    let FE = document.getElementById("fuel_efficiency_input").value;
    let FC = document.getElementById("fuel_cost_input").value;
    
    document.getElementById("fuel_cost_output").innerHTML = (D/100) * (FE) * (FC);
}

// Put the destination array into local storage
function store() {
    var destinationList = document.getElementById("destination_list");
    localStorage.setItem('Array', JSON.stringify(destinationArray));
}
    
// Retrieve the destination array from local storage
function getTrip(){
    var retrievedObject = localStorage.getItem('Array');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    document.getElementById('destination_list').innerHTML = 'Your destinations are:  ' + retrievedObject; 
}

/* Calculates the distance between destinations found in the destination array, while also ensuring that the trip is roundabout automatically, 
regardless of whether the user specified it in their destination list
Error checking is also present within this function as well */
function destDistCalc() {

    const destList = destinationArray;
    const townList = places;
    const townDistance = distances;

        i = 0;
        traveled = 0;
        while((destList.length-1) > i) {
            destination1 = townList.indexOf(destList[i]);
            destination2 = townList.indexOf(destList[(i+1)]);
            distance = townDistance[Number(destination1)];
            traveled += distance[Number(destination2)];
            i+=1;
            console.log(traveled, destination1, destination2, distance);
            document.getElementById('output').innerHTML = 'The length of your trip is: ' + traveled + ' km';
            document.getElementById("distance_input").innerHTML = traveled;
        }
}

//Adds the first location of the itinerary to the end of the array to calculate a 'full round trip'
function returnToStart(){
    destinationArray.push(destinationArray[0]);
    console.log(destinationArray);
}