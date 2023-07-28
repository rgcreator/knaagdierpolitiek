// Description: This file contains the javascript code for the style of the website.
function zoeken () {
var search = document.getElementById("search").value.toLowerCase()
 if ((search == 'eekhoorn') || (search == 'marijnissen') || ((search == 'eekhoorn marijnissen') || (search == 'sp') ) ){

   document.getElementById("wilhout").style.display = "none";
   document.getElementById("mar").style.display = "block";
   display = "Eekhoorn Marijnissen";
 }
 if ((search == 'wilhout') || (search == 'geert') || ((search == 'geert wilhout') || (search == 'pvv') ) ){

    document.getElementById("wilhout").style.display = "block";
    document.getElementById("mar").style.display = "none";
    display = "Geert Wilhout";
  }
}
