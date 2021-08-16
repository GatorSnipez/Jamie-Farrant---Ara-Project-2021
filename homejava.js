var places = ["null", "Leeston", "Southbridge", "Rolleston", "Lincoln", "Christchurch", " "]
var destinations = ["null", "Leeston", "Southbridge", "Rolleston", "Lincoln", "Christchurch"]
var customWindow = window.open('', '_blank', '');
    customWindow.close();;

function addLocation_click(){
    let startLocation = document.getElementById("startlocation").value;

    document.getElementById("startlocationresult").innerHTML = "Starting place:"+places[startLocation];
}
function addDestination_click(){

    let destinationLocation = document.getElementById("destination").value;

    document.getElementById("destinationList").innerHTML += " " +[destinationLocation] + ", ";
}