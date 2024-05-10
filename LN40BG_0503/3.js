$(document).ready(function(){

    $("#1").click(function(){
      $(this).hide();
    });



 $("#2").dblclick(function(){
    $(this).hide();
   });

$("#fejlec").mouseout(function(event){
  alert("elhúzott egér információt");
});


$("#3").mousemove(function(event){
  alert("felé húzta az egeret");
});

$("#nev, #email, #jelszo").focus(function(){
  $(this).css("background-color", "blue");
});

$("#nev, #email, #jelszo").hover(function(){
  $(this).css("border-color", "green");},
  function(){
      $(this).css("border-color", "red");
  }
);

});  