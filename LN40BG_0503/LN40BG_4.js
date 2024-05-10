$(document).ready(function(){

    $(".pelrejt").click(function(){
        $(p).hide();
      });

      $(".pmegjelenit").click(function(){
        $(p).show();
      });

      $(".pkibe").click(function(){
        $(p).toggle();
    });

    $(".01").click(function(){
        $(f).css("opacity", "0.1");
      });

      $(".05").click(function(){
        $(f).css("opacity", "0.5");
      });

      $(".08").click(function(){
        $(f).css("opacity", "0.8");
      });

    $(".felrejt").click(function(){
        $(f).hide();
      });

      $(".fmegjelenit").click(function(){
        $(f).show();
      });

      $(".fkibe").click(function(){
        $(f).toggle();
    });

})