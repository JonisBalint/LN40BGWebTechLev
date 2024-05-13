$(document).ready(function() {
    $('#szoveg').click(function() {
        $('#box').append('<p>Mérnökinformatikus</p>');
    });

    $('#urlap_fejlec').click(function() {
        $('#form_fejlec').text('ŰRLAP-LN40BG');
    });

    $('#fejlec').click(function() {
        $('body').prepend('<h1>jQuery feladat</h1>');
    });
    
    $('#alcim').click(function() {
        $('body').prepend('<h2>HTML - Add elements</h2>');
    });



    $('#uj_gomb').click(function() {
        $('#gombbeilleszt').append('<button>ME GEIK-MI</button>');
    });

    $('#gomb').click(function() {
        document.getElementById("gomb").prepend("MI ");
    });
});