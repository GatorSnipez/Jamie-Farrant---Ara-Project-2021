places = ["null", "Leeston", "Southbridge", "Rolleston", "Lincoln", "Christchurch"]
destinations = ["null", "Leeston", "Southbridge", "Rolleston", "Lincoln", "Christchurch"]
startLocationSelected = 0;
destinationLocationSelected = 0;
var customWindow = window.open('', '_blank', '');
    customWindow.close();;

function addLocation_click(){

    if (startLocationSelected == 0){
    let startLocation = document.getElementById("startlocation").value;

    document.getElementById("startlocationresult").innerHTML += places[startLocation];
    }
    startLocationSelected = 1
}

function addDestination_click(){

    if (destinationLocationSelected == 0){
    let destinationLocation = document.getElementById("destination").value;

    document.getElementById("destinationList").innerHTML += " " +[destinationLocation] + ", ";

    }
    destinationLocationSelected = 0
}

function resetStart_click(){

    let text = document.getElementById("startlocationresult").innerHTML += places[startLocation];
    text.replace(places[startLocation], " ");
}

