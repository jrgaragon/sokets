var socket = io();

socket.on('connect', function() {
    console.log('servidor connecto');
});

socket.on('disconnect', function() {
    console.log('perdimos conexion');
});

socket.on('enviarMensaje', function(message) {
    console.log(message);
});

socket.emit('enviarMensaje', {
    usuario: 'Yorch',
    mensaje: 'hey madafaka'
}, function(response) {
    console.log('servidor response: ', response);
});