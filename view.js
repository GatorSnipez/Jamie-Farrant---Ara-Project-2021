//Allows the array to become the select options found in the dropdown menu.
function ready() {
       

    var sel = document.getElementById("place_list");
    for(var i = 0; i < places.length; i++) {
     var opt = document.createElement('option');
     opt.innerHTML = places[i];
     opt.value = places[i];
     sel.appendChild(opt);
   }
 }

 document.addEventListener('DOMContentLoaded', function() {
 
    //On page load, sets up listeners
        "use strict";
        setUpListeners();
        ready();
    });

//Function that sets listeners up to execute functions when requirements are met. Used to keep Js out of HTML document.
    function setUpListeners(){
document.getElementById("add_destination_button").addEventListener('click', function() {addDestination_onClick(); destDistCalc();});
document.getElementById("remove_destination_button").addEventListener('click', function() {removeDestination_onClick(); destDistCalc();});
document.getElementById("fuel_calculate_button").addEventListener('click', function(){calculateFuel_onClick();});
document.getElementById("save_trip_button").addEventListener('click', function(){store();});
document.getElementById("get_trip_button").addEventListener('click', function(){getTrip();});
document.getElementById("destination_calculation_button").addEventListener('click', function(){returnToStart(); destDistCalc();});
document.getElementById("close_window_button").addEventListener('click', function (){closeWindow();});
document.getElementById("refresh_button").addEventListener('click', function(){refreshWindow();});
}