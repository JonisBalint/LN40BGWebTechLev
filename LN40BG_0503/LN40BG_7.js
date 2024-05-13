$(document).ready(function() {
    $('#szoveg').click(function() {
        $('#box').append('Mérnökinformatikus');
    });

    $('#urlap_fejlec').click(function() {
        $('#form_fejlec').text('ŰRLAP-LN40BG');
    });

    $('#fejlec').click(function() {
        $('#h1').append('jQuery feladat');
    });
    
    $('#alcim').click(function() {
        $('#h2').append('HTML - Add elements');
    });

    $('#uj_gomb').click(function() {
        $('#gombbeilleszt').append('<button>ME GEIK-MI</button>');
    });

    $('#gomb').click(function() {
        document.getElementById("gomb").prepend("MI ");
    });
});
