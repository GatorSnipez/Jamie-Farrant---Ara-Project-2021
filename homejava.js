/* Name: Jamie Farrant
   File Type: Javascript
   Last Update: 3/09/21 @ 22:01
*/

document.addEventListener('DOMContentLoaded', function() {
 
    //On page load, sets up listeners
        "use strict"
        setUpListeners();
    })

//Function that sets listeners up to execute functions when requirements are met. Used to keep Js out of HTML document.
function setUpListeners(){
document.getElementById("add_destination_button").addEventListener('click', function() {addDestination_onClick();});
document.getElementById("remove_destination_button").addEventListener('click', function() {removeDestination_onClick();});
document.getElementById("add_start_button").addEventListener('click', function() {addStart_onClick();});
document.getElementById("remove_start_button").addEventListener('click', function(){removeStart_onClick();});
document.getElementById("fuel_calculate_button").addEventListener('click', function(){calculateFuel_onClick();});
}


//Function that adds a user chosen destination from the select menu to the list.
function addDestination_onClick() {
    var destinationList = document.getElementById("destination_list");
    var destination = document.getElementById("destinations");
    var li = document.createElement("li");
    li.setAttribute('id', destination.value);
    li.appendChild(document.createTextNode(destination.value));
    destinationList.appendChild(li);
}

// Function that removes user-defined destination of choice.
function removeDestination_onClick() {

    // Declares variable to retrieve set element
    var destinationList = document.getElementById("destination_list");
    var destination = document.getElementById("destinations");
    var selectedDestination = document.getElementById(destination.value);
    destinationList.removeChild(selectedDestination);
}

//Function that adds user chosen start point from select menu to corresponding list.
function addStart_onClick() {

    var startList = document.getElementById("start_location_list");
    var startLocation = document.getElementById("start_position");
    var li = document.createElement("li");
    li.setAttribute('id', startLocation.value);
    li.appendChild(document.createTextNode(startLocation.value));
    startList.appendChild(li);
}

// Function which removes the start location set by the user.
function removeStart_onClick() {

    // Declaring a variable to get select element
    var destinationList = document.getElementById("start_location_list");
    var destination = document.getElementById("start_position");
    var selectedDestination = document.getElementById(destination.value);
    destinationList.removeChild(selectedDestination);
}

//Function to calculate fuel cost of trip, currently requires all user input.
function calculateFuel_onClick(){
    let D = document.getElementById("distance_input").value;
    let FE = document.getElementById("fuel_efficiency_input").value;
    let FC = document.getElementById("fuel_cost_input").value;
    
    document.getElementById("fuel_cost_output").innerHTML = (D/100) * (FE) * (FC);
}