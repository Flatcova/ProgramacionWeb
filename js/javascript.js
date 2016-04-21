$(document).ready(function(){
  $("#sub-con").hide('fast');
    
    $("#sub-men").click(function(){
      $("#sub-con").slideToggle("slow");
    });
});

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img,10,10);