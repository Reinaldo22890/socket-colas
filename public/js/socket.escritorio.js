//comando para establecer la conexión.
var socket = io();

//obtener datos de la url
var searchParams = new URLSearchParams(window.location.search);

//escuchar servidor conectado
socket.on('connect', function() {
    console.log('conectado al servidor');
});

//escuchar desconexiones del servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//verificar que venga el 'escritorio en los parametros
if (!searchParams.has('escritorio')) {
    window.location = 'index.html'; //Sin no está en los parametros me voy al index
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio'); // Obtener el valor del parametro escritorio
var label = $('small');

console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(res) {
        console.log(res);
        if (res === 'No hay tickets') {
            alert(res);
            label.text(res);
            return;
        }
        label.text('Ticket ' + res.numero);
    });

});