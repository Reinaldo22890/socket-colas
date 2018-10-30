//comando para establecer la conexión
var socket = io();
var labelT1 = $('#lblTicket1');
var labelT2 = $('#lblTicket2');
var labelT3 = $('#lblTicket3');
var labelT4 = $('#lblTicket4');

var labelE1 = $('#lblEscritorio1');
var labelE2 = $('#lblEscritorio2');
var labelE3 = $('#lblEscritorio3');
var labelE4 = $('#lblEscritorio4');

var lblTickets = [labelT1, labelT2, labelT3, labelT4];
var lblEscritorios = [labelE1, labelE2, labelE3, labelE4];

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexion con el servidor');
});

socket.on('estadoActual', function(res) {
    actualizaHTML(res.ultimos4);
});

socket.on('ultimos4', function(res) {
    var audio = new Audio('./audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(res.ultimos4);
});


function actualizaHTML(ultimos4) {

    for (var i = 0; i < ultimos4.length; i++) {
        lblTickets[i].text('Ticket ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
    }

}