//comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

//escuchar clientes conectados
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('estadoActual', function(res) {
    label.text(res.actual);
});

//escuchar desconexiones de clientes
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });

});