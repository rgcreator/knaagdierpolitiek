// Description: This file contains the javascript code for the style of the website.
function zoeken () {

var search = document.getElementById("search").value.toLowerCase();
 if ((search == 'eekhoorn') || (search == 'marijnissen') || ((search == 'eekhoorn marijnissen') || (search == 'sp') ) ){

   document.getElementById("wilhout").style.display = "none";
   document.getElementById("mar").style.display = "block";
   $("#search").val("eekhoorn marijnissen");
   display = "Eekhoorn Marijnissen";
 }
else if ((search == 'wilhout') || (search == 'geert') || (search == 'geert wilhout') || (search == 'pvv')) {

    document.getElementById("wilhout").style.display = "block";
    document.getElementById("mar").style.display = "none";
    $("#search").val("geert wilhout");
    document.locolStorage.setItem("input", search);

  }
else if (params[1] == '') {
    $('.partij').show();
  }
}
window.addEventListener("load", function() {
  var url = window.location.href;
  var params = url.split('?');
    if (params[1] == 'search=eekhoorn+marijnissen') {
    $("#search").val("eekhoorn marijnissen");
    document.getElementById("wilhout").style.display = "none";
    document.getElementById("mar").style.display = "block";
  }
  else if (params[1] == 'search=geert+wilhout') {
    $("#search").val("eekhoorn marijnissen");
    document.getElementById("wilhout").style.display = "block";
    document.getElementById("mar").style.display = "none";
  }}, false); 

