// Description: This file contains the javascript code for the style of the website.
function zoeken () {
var search = document.getElementById("search").value;
switch (search) {
case "eekhoorn":
   document.getElementById("wilhout").style.display = "none";
   document.getElementById("mar").style.display = "block";

   display = "eekhoorn";
   break;
case "wilhout":
    document.getElementById("mar").style.display = "none";
    document.getElementById("wilhout").style.display = "block";
    display = "wilhout";
    break;
}
}
