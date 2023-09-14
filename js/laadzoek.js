window.addEventListener("load", function() {
    var url = window.location.href;
    var params = url.split('?');
      if (params[1] == 'search=eekhoorn+marijnissen') {
      $("#search").val("eekhoorn marijnissen");
      document.getElementById("wilhout").style.display = "none";
      document.getElementById("mar").style.display = "block";
    }
    if (params[1] == 'search=geert+wilhout') {
      $("#search").val("geert wilhout");
      document.getElementById("wilhout").style.display = "block";
      document.getElementById("mar").style.display = "none";
    }
    if (params[1] == 'search=frans timmerkonijn') {
      $("#search").val("frans timmerkonijn");
      document.getElementById("wilhout").style.display = "none";
      document.getElementById("timmerkonijn").style.display = "block";
      document.getElementById("mar").style.display = "none";
    }}, false);