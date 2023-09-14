// Description: This file contains the javascript code for the style of the website.
function zoeken () {
  var url = window.location.href;
  var params = url.split('?');
var search = document.getElementById("search").value.toLowerCase();
 if ((search == 'eekhoorn') || (search == 'marijnissen') || ((search == 'eekhoorn marijnissen') || (search == 'sp') ) ){

   document.getElementById("wilhout").style.display = "none";
   document.getElementById("mar").style.display = "block";
   $("#search").val("eekhoorn marijnissen");
   display = "Eekhoorn Marijnissen";
 }
if ((search == 'wilhout') || (search == 'geert') || (search == 'geert wilhout') || (search == 'pvv')) {

    document.getElementById("wilhout").style.display = "block";
    document.getElementById("mar").style.display = "none";
    $("#search").val("geert wilhout");
    display = "Geert Wilhout";

  }
  if ((search == 'timmerkonijn') || (search == 'konijn') || (search == 'Frans Timmerkonijn') || (search == 'PvdA')) {

    document.getElementById("wilhout").style.display = "none";
    document.getElementById("mar").style.display = "none";
    document.getElementById("timmerkonijn").style.display = "block";

    $("#search").val("frans timmerkonijn");
    display = "Frans Timmerkonijn";

  }
if (params[1] == '') {
    $('.partij').show();
  }
}