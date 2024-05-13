/*$(document).ready(function() {
    $("#RDjson").click(function(){

        $.getJSON('JB_orarendfull.json', function(data) {
            $('#stg').html('<h2>MISKOLCI EGYETEM</h2>');

            $('#stg').append('<p><b>Cím: </b>' + data.cim.code + ' ' + data.cim.city + ' ' + data.cim.street + '</p>');

            $('#stg').append('<p><b>Telefonszámok: </b><ul>');

                for(i=0;i<data["phone number"].length;i++){
                    $('#stg').append('<li>'+data["phone number"][i].type+' '+data["phone number"][i].number +'</li>');
                }
            
            $('#stg').append('<p><h3>MI Órarend 2024 tavasz</h3><ul>');
            
            $('#stg').append('<p><b>Kurzusnév: </b>' + data.kurzusnev + '</p>');
            $('#stg').append('<p><b>Oktató: </b>' + data.oktato + '</p>');
            $('#stg').append('<p><b>Szak: </b>' + data.szak + '</p>');
            $('#stg').append("<b>Időpont:</b><br>&nbsp;Nap:&nbsp" + data.idopont.nap + "<br>&nbsp;&nbsp;Tól:&nbsp;" + data.idopont.tol + "<br>&nbsp;&nbsp;Ig:&nbsp;" + data.idopont.ig + "<br>");

            $('#stg').append('<p><b>Helyszín: </b>' + data.helyszin + '</p>');

        });
    });

})
*/

$(document).ready(function() {
    $("#RDjson").click(function(){

        $.getJSON('JB_orarendfull.json', function(data) {
            $('#stg').html('<h2>MISKOLCI EGYETEM</h2>');

            $('#stg').append('<p><b>Cím: </b>' + data.cim.code + ' ' + data.cim.city + ' ' + data.cim.street + '</p>');

            $('#stg').append('<p><b>Telefonszámok: </b><ul>');

            $.each(data["phone number"], function(index, phoneNumber) {
                $('#stg').append('<li>' + phoneNumber.type + ' ' + phoneNumber.number + '</li>');
            });

            $('#stg').append('<p><h3>MI Órarend 2024 tavasz</h3><ul>');

            $.each(data["JB orarend"]["kurzus"], function(index, kurzus) {
                $('#stg').append('<li><b>Kurzusnév: </b>' + kurzus.kurzusnev + '</li>');
                $('#stg').append('<li><b>Oktató: </b>' + kurzus.oktato + '</li>');
                $('#stg').append('<li><b>Szak: </b>' + kurzus.szak + '</li>');
                $('#stg').append('<li><b>Időpont:</b><br>&nbsp;Nap:&nbsp;' + kurzus.idopont.nap + '<br>&nbsp;&nbsp;Tól:&nbsp;' + kurzus.idopont.tol + '<br>&nbsp;&nbsp;Ig:&nbsp;' + kurzus.idopont.ig + '<br></li>');
                $('#stg').append('<li><b>Helyszín: </b>' + kurzus.helyszin + '</li>');
            });

        });
    });

});