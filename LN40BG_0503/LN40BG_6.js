$(document).ready(function(){
    var animation;

    function animateBox() {
        animation = $("#box")
        .animate({
            left: '600px',
            width: '400px',
            fontSize: '30pt'
        }, 1000)
        .animate({
            top: '300px',
            width: '300px',
            height: '110%',
            fontSize: '32pt'
        }, 1000)
        .animate({
            left: '0px',
            opacity: '0.4'
        }, 1000)
        .animate({
            opacity: '1',
            fontSize: '12pt'
        }, 1000)
        .animate({
            top: '0px',
            opacity: '1',
            fontSize: '12pt'
        }, 1000, function(){
            alert("VÉGE");
        });
    }
    $("#osszecsukkinyit").click(function(){
        $("#box").slideToggle();
    });

    $("#startAnimation").click(function(){
        animateBox();
    });

    $("#elrejt").click(function(){
        $("p").hide();
        alert("Bekezdések elrejtése");
    });

});